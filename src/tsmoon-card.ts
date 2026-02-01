//import { HomeAssistant } from "./ha-types";
import { html, LitElement, CSSResultGroup, TemplateResult } from "lit";
import { property} from "lit/decorators.js";
import { ICardConfig } from "./types";
import styles from './styles'
import { svg } from './img_exp'
import { localize } from './localize/localize';
//import { Moon, Hemisphere } from 'lunarphase-js';
import dayjs from 'dayjs';

import { default as SunCalc } from 'suncalc3';

import {
    HomeAssistant,
} from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types. https://github.com/custom-cards/custom-card-helpers


const TSMOON_PHASES = {
    newMoon: 'new_moon',
    waxingCrescentMoon: 'waxing_crescent',
    firstQuarterMoon: 'first_quarter',
    waxingGibbousMoon: 'waxing_gibbous',
    fullMoon: 'full_moon',
    waningGibbousMoon: 'waning_gibbous',
    thirdQuarterMoon: 'last_quarter',
    waningCrescentMoon: 'waning_crescent'
};

const DEFAULT_LATITUDE = 48.8566;   // Paris, France
const DEFAULT_LONGITUDE = 2.3522;

/**
 * Main card class definition
 */
export class TSMoonCard extends LitElement {

    private _hass?: HomeAssistant;

    @property({ attribute: false }) private cardTitle: string = "";
    @property({ attribute: false }) private state: string = "";
    @property({ attribute: false }) private icon_type: string = "forms";
    @property({ attribute: false }) private language: string = "en";
    @property({ attribute: false }) private entity: string = "";
    @property({ attribute: false }) private time_format: string = "24h";
    @property({ attribute: false }) private hemisphere: string = "N";
    @property({ attribute: false }) private home_latitude: number = 0;
    @property({ attribute: false }) private home_longitude: number = 0;

    // NOUVELLES PROPRIÉTÉS - Ajoutez ces lignes
    @property({ attribute: false }) private moonPhase: string = '';         // Contiendra : 'new_moon', 'full_moon', etc.
    @property({ attribute: false }) private moonIcon: string = '';          // Contiendra : Le code SVG de l'icône (data:image/svg+xml...)
    @property({ attribute: false }) private moonIllumination: string = '';  // Contiendra : '87%', '45%', etc.
    @property({ attribute: false }) private moonRise: string = '';          // Contiendra : '18:45', '6:30 PM', etc.
    @property({ attribute: false }) private moonSet: string = '';           // Contiendra : '06:12', '8:15 AM', etc.


    private renderIcon(svg_icon_code: string, p_hemisphere: string): TemplateResult {
        
        var lv_style = '';
        
        if (p_hemisphere == 'S') {
            lv_style = 'transform: rotate(180deg);';
        }

        return html`
            <div class="icon">
                <img class="moon-img-svg" loading="lazy" src=${svg_icon_code} style=${lv_style} />
            </div>
        `
    }

    private localize(key: string): string {
        return localize(key, this.getLocale())
    }

    /**
     * credits to: tmcarr - https://github.com/tmcarr
     * @param p_timeFormat:string Time Format
     * @returns 
     */
    /*private getTimeFormat(p_timeFormat: string): string {
        // Format strings defined here: https://day.js.org/docs/en/display/format
        if (p_timeFormat == '12h') {
            return 'h:mm A'
        } else {
            return 'HH:mm'
        }
    }
        */

    private getTimeFormat(p_timeFormat: string): string {
        return p_timeFormat === '12h' ? 'h:mm A' : 'HH:mm';
    };



    private getLocale(): string {
        return this.language ?? this._hass?.locale?.language ?? 'en'
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
    static get styles(): CSSResultGroup {
        return styles
    }
    /**
     * Called on every hass update
     */
    set hass(hass: HomeAssistant) {
        this._hass = hass;
    
        if (this.entity && hass.states[this.entity]) {
            this.state = hass.states[this.entity].state;
        } else {
            this.state = '';
        }

        // Il faut utiliser l'opérateur de coalescence nulle ?? pour fournir une valeur par défaut 
        //Si zone.home existe → utilise sa latitude/longitude, Si zone.home n'existe pas → utilise 0 par défaut
        this.home_latitude = hass.states['zone.home']?.attributes.latitude ?? DEFAULT_LATITUDE;
        this.home_longitude = hass.states['zone.home']?.attributes.longitude ?? DEFAULT_LONGITUDE;

    }

    /**
     * Called every time when entity config is updated
     * @param config Card configuration (yaml converted to JSON)
     */
    setConfig(config: ICardConfig): void {

        this.entity = config.entity ?? this.entity;
        this.cardTitle = config.title ?? this.cardTitle;
        this.icon_type = config.icon_type ?? 'forms';
        this.language = config.language ?? 'fr';
        this.time_format = config.time_format ?? '24h';
        this.hemisphere = config.hemisphere ?? 'N';
    }



    /**
     * Called before render() when properties change
     */
    protected willUpdate(changedProperties: Map<PropertyKey, unknown>): void {
        super.willUpdate(changedProperties);
    
        // On recalcule seulement si certaines propriétés ont changé. cela évitera de calculer à chaque fois dans le render
        // changedProperties.has('state') → Vérifie si la propriété state a changé
        // Pourquoi vérifier ? Pour éviter de recalculer inutilement si seul le titre a changé par exemple.
        if (
            changedProperties.has('state') ||
            changedProperties.has('home_latitude') ||
            changedProperties.has('home_longitude') ||
            changedProperties.has('icon_type') ||
            changedProperties.has('time_format')
        ) {
            this.updateMoonData();
        }
    }

    /**
     * Calculate all moon data
     */
    private updateMoonData(): void {
    
        // TODO: Ici on va mettre tous les calculs
        if (!this._hass) return;
        try {
            const currentDate = new Date();
            let phaseState = this.state;

            // Calcul de la phase si pas d'entité
            if (!phaseState || phaseState === '') {
                const moonRawData = SunCalc.getMoonData(
                    currentDate,
                    this.home_latitude,
                    this.home_longitude
                );
                phaseState = TSMOON_PHASES[moonRawData.illumination.phase.id];
            }

            // Stocker la phase
            this.moonPhase = phaseState;
        
            // Calculer l'icône
            this.moonIcon = this.toIcon(phaseState, this.icon_type);

                    // Calculer l'illumination
            const moonData = SunCalc.getMoonData(
                currentDate,
                this.home_latitude,
                this.home_longitude
            );
            this.moonIllumination = Math.ceil(moonData.illumination.fraction * 100) + "%";

            // Calculer lever/coucher
            const times = SunCalc.getMoonTimes(
                currentDate,
                this.home_latitude,
                this.home_longitude
            );
        
            const timeFormat = this.getTimeFormat(this.time_format);
            this.moonRise = dayjs(times.rise).format(timeFormat);
            this.moonSet = dayjs(times.set).format(timeFormat);





        } catch (error) {
            console.error('Erreur lors du calcul des données lunaires:', error);
            this.moonPhase = '';
            this.moonIcon = '';
            this.moonIllumination = '0%';
            this.moonRise = '--:--';
            this.moonSet = '--:--';
        }

    }



    /**
     * Renders the card when the update is requested (when any of the properties are changed)
     */
    render(): TemplateResult {

        if (!this.moonPhase) {
            return html`
                <ha-card>
                    <div class="card-content">
                        ... -> ...
                    </div>
                </ha-card>
            `;
        }

        const LCstate = this.localize(`moon.${this.moonPhase}`);
        const LCmoon_phase = this.localize('card.moon_phase');
        const LCmoon_rise = this.localize(`card.moon_rise`);
        const LCmoon_set = this.localize(`card.moon_set`);
 
        return html`
        
        <ha-card>
            <div class="card-header">
                <div class="truncate">${this.cardTitle}</div>
            </div>
            <div class="card-content">
                <div class="entity-row">
                    ${this.renderIcon(this.moonIcon, this.hemisphere)}
                    <div class="name truncate">
                      <span class="primary">${LCmoon_phase}</span><br />
                      <span class="secondary">${LCstate}</span>
                      <span class="secondary">&nbsp;(${this.moonIllumination})</span>
                    </div>
                    <div class="state">
                      <div><span class="primary">${LCmoon_rise}: </span> ${this.moonRise}</div>
                      <div><span class="primary">${LCmoon_set}: </span> ${this.moonSet}</div>
                    </div>
                </div>
            </div>
        </ha-card>
        `;
    }
}