import { HomeAssistant } from "../ha-types";
import { html, css, LitElement, CSSResultGroup, TemplateResult } from "lit";
import { property } from "lit/decorators";
import { ICardConfig } from "../types";
import styles from "./card.css";

/**
 * Main card class definition
 */
export class MyCustomCard extends LitElement {

    @property({ attribute: false })
    private cardTitle: string = "Card header";

    @property({ attribute: false })
    private state: string = "";

    private entity: string = "";

    /**
     * CSS for the card
     */
    static get styles(): CSSResultGroup {
        return css(<TemplateStringsArray><any>[styles]);
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
        return html`
        <ha-card>
            <div class="card-header">
                <div class="truncate">
                    ${this.cardTitle}
                </div>
            </div>
            <div class="card-content">
                <div>
                    <div class="entity-row">
                        <div class="icon">
                            <ha-icon
                                style="color: yellow"
                                icon="mdi:lightbulb"
                            ></ha-icon>
                        </div>
                        <div class="name truncate">
                            Entity name
                            <div class="secondary">Secondary info</div>
                        </div>
                        <div class="state">
                            ${this.state}
                        </div>
                    <div>
                </div>
            </div>
        </ha-card>
        `;
    }
}