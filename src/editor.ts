import { LitElement, html, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { ICardConfig } from './types';

export class TSMoonCardEditor extends LitElement {
    @property({ attribute: false }) public hass!: HomeAssistant;
    @state() private _config!: ICardConfig;

    /**
     * Appelé quand la config change
     */
    setConfig(config: ICardConfig): void {
        this._config = config;
    }

    /**
     * Appelé quand l'utilisateur change un champ
     */
    private _valueChanged(ev: CustomEvent): void {
        if (!this._config || !this.hass) {
            return;
        }

        const target = ev.target as any;
        const configValue = target.configValue;
        const value = target.value;

        if (this._config[configValue] === value) {
            return;
        }

        const newConfig = {
            ...this._config,
            [configValue]: value,
        };

        // Envoyer la nouvelle config à Home Assistant
        const event = new CustomEvent('config-changed', {
            detail: { config: newConfig },
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }



    render(): TemplateResult {
    if (!this.hass || !this._config) {
        return html``;
    }

    return html`
        <div class="card-config">
            <!-- Titre de la carte -->
            <ha-textfield
                label="Titre (optionnel)"
                .value=${this._config.title || ''}
                .configValue=${'title'}
                @input=${this._valueChanged}
            ></ha-textfield>

            <!-- Sélecteur d'entité -->
            <ha-entity-picker
                label="Entité de la lune"
                .hass=${this.hass}
                .value=${this._config.entity || ''}
                .configValue=${'entity'}
                @value-changed=${this._valueChanged}
                allow-custom-entity
            ></ha-entity-picker>

            <!-- Type d'icône -->
            <ha-select
                label="Type d'icône"
                .value=${this._config.icon_type || 'forms'}
                .configValue=${'icon_type'}
                @selected=${this._valueChanged}
            >
                <mwc-list-item value="forms">Forms</mwc-list-item>
                <mwc-list-item value="round">Round</mwc-list-item>
                <mwc-list-item value="photo">Photo</mwc-list-item>
                <mwc-list-item value="clear">Clear</mwc-list-item>
            </ha-select>

            <!-- Format de l'heure -->
            <ha-select
                label="Format de l'heure"
                .value=${this._config.time_format || '24h'}
                .configValue=${'time_format'}
                @selected=${this._valueChanged}
            >
                <mwc-list-item value="24h">24h</mwc-list-item>
                <mwc-list-item value="12h">12h</mwc-list-item>
            </ha-select>

            <!-- Hémisphère -->
            <ha-select
                label="Hémisphère"
                .value=${this._config.hemisphere || 'N'}
                .configValue=${'hemisphere'}
                @selected=${this._valueChanged}
            >
                <mwc-list-item value="N">Nord</mwc-list-item>
                <mwc-list-item value="S">Sud</mwc-list-item>
            </ha-select>

            <!-- Langue -->
            <ha-textfield
                label="Langue (fr, en, de, etc.)"
                .value=${this._config.language || 'fr'}
                .configValue=${'language'}
                @input=${this._valueChanged}
            ></ha-textfield>
        </div>
    `;
    }

}

// Déclarer le custom element
customElements.define('tsmoon-card-editor', TSMoonCardEditor);