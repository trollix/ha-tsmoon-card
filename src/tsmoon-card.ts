//import { HomeAssistant } from "./ha-types";
import { html, css, LitElement, CSSResultGroup, TemplateResult } from "lit";
import { property, state } from "lit/decorators.js";
import { ICardConfig } from "./types";
import styles from './styles'
import { svg } from './img_exp'
import { localize } from './localize/localize';
import { Moon } from 'lunarphase-js';
import dayjs from 'dayjs';

import { default as SunCalc } from 'suncalc3';


import {
    HomeAssistant,
    hasConfigOrEntityChanged,
    hasAction,
    ActionHandlerEvent,
    handleAction,
    LovelaceCardEditor,
    getLovelace,
    formatTime
  } from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types. https://github.com/custom-cards/custom-card-helpers
  
import type { HassEntity } from "home-assistant-js-websocket";

/**
 * Main card class definition
 */
export class TSMoonCard extends LitElement {

    @property({ attribute: false })
    private cardTitle: string = "";

    @property({ attribute: false })
    private state: string = "";

    @property({ attribute: false })
    private icon_type: string = "forms";

    @property({ attribute: false })
    private language: string = "en";

    @property({ attribute: false })
    private entity: string = "sensor.moon";

    @property({ attribute: false }) private home_latitude: number = 0;
    @property({ attribute: false }) private home_longitude: number = 0;

    @state() private _config?: ICardConfig


    private renderIcon (svg_icon_code: string): TemplateResult {
        return html`
            <div class="icon">
                <img class="moon-img-svg" src=${svg_icon_code} />
            </div>
        `
    }

    private localize (key: string): string {
        return localize(key, this.getLocale())
    }

    private getLocale (): string {
        return this.language ?? this.hass.locale.language ?? 'en'
    }

    private toIcon(moonState: string, type: string): string {
        if ((type === 'forms') || (type === 'round') || (type === 'photo') || (type === 'clear')) {
            return svg[type][moonState]!;
        } else {
          // Gérer le cas où la propriété n'est pas définie
          // throw new Error('Propriété non définie');
          return "";
        }
      }

    // CSS for the card
    // https://lit.dev/docs/components/styles/
    static get styles (): CSSResultGroup {
        return styles
    }
    /**
     * Called on every hass update
     */
    set hass(hass: HomeAssistant) {
        
        if (!this.entity || !hass.states[this.entity]) {
            return;
        }

        this.state = hass.states[this.entity].state;
        this.home_latitude = hass.states['zone.home'].attributes.latitude;
        this.home_longitude = hass.states['zone.home'].attributes.longitude;
    }

    /**
     * Called every time when entity config is updated
     * @param config Card configuration (yaml converted to JSON)
     */
    setConfig(config: ICardConfig): void {
        
        this._config = {...config};

        this.entity = config.entity ?? this.entity;
        this.cardTitle = config.title ?? this.cardTitle;
        this.icon_type = config.icon_type ?? 'forms';
        this.language = config.language ?? 'fr';
    /*
        if (config.latitude === undefined && config.longitude !== undefined
            || config.latitude !== undefined && config.longitude == undefined) {
            throw Error('Latitude and longitude must be both set or unset')
          }
    */

    }

    /**
     * Renders the card when the update is requested (when any of the properties are changed)
     */
    render(): TemplateResult {

        const moonIcon = this.toIcon(this.state, this.icon_type);
        var l_state = this.localize(`moon.${this.state}`);
        const l_date = new Date();

        //this.getMoonRise();

        // Obtenez les temps du lever et du coucher du soleil
        const times = SunCalc.getMoonTimes(l_date, this.home_latitude, this.home_longitude);

        // Accédez aux propriétés spécifiques pour obtenir les heures
        //const l_moonrise = times.rise;
        //const l_moonset = times.set;

        // Convertissez la date en utilisant Day.js
        const l_moonriseFormated = dayjs(times.rise).format('HH:mm');
        const l_moonsetFormated = dayjs(times.set).format('HH:mm');

        //Calcul autonome de la phase de la lune
        const local_calculated_moon_phase = Moon.lunarPhase(l_date);
        l_state = this.localize(local_calculated_moon_phase);

        return html`
        
        <ha-card>
            <div class="card-header">
                <div class="truncate">
                    ${this.cardTitle}
                </div>
            </div>
            <div class="card-content">
                <div class="entity-row">
                    ${this.renderIcon(moonIcon)}
                    <div class="name truncate">
                    <span class="primary">${this.localize(`card.moon_phase`)}</span>
                        <div class="secondary">
                        ${l_state}
                        </div>
                    </div>
                    <div class="state">
                    <span class="primary">${this.localize(`card.moon_rise`)}: </span> ${l_moonriseFormated}<br />
                    <span class="primary">${this.localize(`card.moon_set`)}: </span> ${l_moonsetFormated}
                    </div>
                </div>
            </div>
        </ha-card>
        `;
    }

    private getMoonRise() {

        const date = new Date();
        const phase2 = Moon.lunarPhase(date);
        const agePercent = Moon.lunarAgePercent();

        //console.log('Phase de la lune :', phase2);
        //console.log('Pourcentage de fin de lune:', agePercent);

        // Utilisation de la classe
        //const personne1 = new Personne("John Doe", 25);
        //personne1.afficherInformations();

        // Obtenez les temps du lever et du coucher du soleil
        const times = SunCalc.getMoonTimes(new Date(), 44.803, -0.6501);

        // Accédez aux propriétés spécifiques pour obtenir les heures
        const sunrise = times.rise;
        const sunset = times.set;

        
    }



}