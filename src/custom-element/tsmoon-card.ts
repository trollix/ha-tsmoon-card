import { HomeAssistant } from "../ha-types";
import { html, css, LitElement, CSSResultGroup, TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import { ICardConfig } from "../types";
import styles from "./card.css";

/**
 * Main card class definition
 */
export class TSMoonCard extends LitElement {

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
                        <div>

                        <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet">
                            <circle fill="#FFD983" cx="18" cy="18" r="18"></circle>
                            <path fill="#66757F" d="M36 18c0 9.941-8.059 18-18 18c-.294 0-.58-.029-.87-.043C11.239 33.393 7 26.332 7 18C7 9.669 11.239 2.607 17.13.044C17.42.03 17.706 0 18 0c9.941 0 18 8.059 18 18z"></path>
                            <circle fill="#5B6876" cx="25.5" cy="8.5" r="3.5"></circle>
                            <circle fill="#5B6876" cx="16" cy="16" r="3"></circle>
                            <circle fill="#5B6876" cx="14.5" cy="27.5" r="3.5"></circle>
                            <circle fill="#5B6876" cx="15" cy="6" r="2"></circle>
                            <circle fill="#5B6876" cx="33" cy="18" r="1"></circle>
                            <circle fill="#FFCC4D" cx="6" cy="9" r="1"></circle>
                            <circle fill="#5B6876" cx="21" cy="31" r="1"></circle>
                            <circle fill="#FFCC4D" cx="4" cy="19" r="2"></circle>
                            <circle fill="#5B6876" cx="26" cy="23" r="2"></circle>
                        </svg>
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