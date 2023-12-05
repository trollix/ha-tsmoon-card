//import { HomeAssistant } from "./ha-types";
import { html, css, LitElement, CSSResultGroup, TemplateResult } from "lit";
import { property, state } from "lit/decorators.js";
import { ICardConfig } from "./types";
import styles from './styles'
import { svg } from './img_exp'
import { localize } from './localize/localize';
import * as suncalc from 'suncalc';


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
  
// test
//const fullMoonForm = svg.forms.full_moon;
//console.log(fullMoonForm);


/**
 * Main card class definition
 */
export class TSMoonCard extends LitElement {

    @property({ attribute: false })
    private cardTitle: string = "Moon Phase";

    @property({ attribute: false })
    private state: string = "";

    @property({ attribute: false })
    private icon_type: string = "forms";

    @property({ attribute: false })
    private language: string = "en";

    private entity: string = "";

    @state() private config!: ICardConfig

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
          throw new Error('Propriété non définie');
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
    }

    /**
     * Called every time when entity config is updated
     * @param config Card configuration (yaml converted to JSON)
     */
    setConfig(config: ICardConfig): void {
        this.entity = config.entity;
        this.cardTitle = config.title ?? this.cardTitle;
        this.icon_type = config.icon_type ?? 'forms';
        this.language = config.language ?? 'fr';
    }

    /**
     * Renders the card when the update is requested (when any of the properties are changed)
     */
    render(): TemplateResult {

        const moonIcon = this.toIcon(this.state, this.icon_type);
        const l_state = this.localize(`moon.${this.state}`);
        this.getMoonRise();

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
                        Entity name
                        <div class="secondary">
                            Secondary info - ${this.icon_type}
                        </div>
                    </div>
                    <div class="state">
                    ${l_state}
                    </div>
                <div>
            </div>
        </ha-card>
        `;
    }

    private getMoonRise() {

        // Obtenez les temps du lever et du coucher du soleil
        const times = suncalc.getTimes(new Date(), 51.5, -0.1);

        // Accédez aux propriétés spécifiques pour obtenir les heures
        const sunrise = times.sunrise;
        const sunset = times.sunset;

        console.log('Heure du lever du soleil :', sunrise);
        console.log('Heure du coucher du soleil :', sunset);
    }
}