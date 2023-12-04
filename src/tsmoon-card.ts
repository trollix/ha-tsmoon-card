import { HomeAssistant } from "./ha-types";
import { html, css, LitElement, CSSResultGroup, TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import { ICardConfig } from "./types";
import styles from './styles'
import { svg } from './img_exp'


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

    private entity: string = "";

    private renderIcon (svg_icon_code: string): TemplateResult {
        return html`
            <div class="icon">
                <img class="moon-img-svg" src=${svg_icon_code} />
            </div>
        `
    }

    private toIcon (weatherState: string, type: 'fill' | 'line', forceDay: boolean, kind: 'static' | 'animated'): string {
        //const daytime = forceDay ? 'day' : this.getSun()?.state === 'below_horizon' ? 'night' : 'day'
        //const iconMap = kind === 'animated' ? svg : png
        //const icon = iconMap[type][weatherState]
        //return icon?.[daytime] || icon
        return svg.forms.full_moon;
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
        this.cardTitle = config.title || this.cardTitle;
    }

    /**
     * Renders the card when the update is requested (when any of the properties are changed)
     */
    render(): TemplateResult {

        const moonIcon = this.toIcon(this.state, 'fill', true, 'static');

        return html`
        <ha-card>
            <div class="card-header">
                <div class="truncate">
                    ${this.cardTitle}
                </div>
            </div>
            <div class="card-content">
                <div class="entity-row">
                    <div class="icon">
                        <ha-icon
                                style="color: yellow"
                                icon="mdi:lightbulb"
                        >
                        </ha-icon>
                    </div>
                    ${this.renderIcon(moonIcon)}
                    <div class="name truncate">
                        Entity name
                        <div class="secondary">Secondary info</div>
                    </div>
                    <div class="state">
                        ${this.state}
                    </div>
                <div>
            </div>
        </ha-card>
        `;
    }
}