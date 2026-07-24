import { LitElement, html } from 'lit';
import type { TemplateResult } from 'lit';

import { property, state } from 'lit/decorators.js';

import type { HomeAssistant } from 'custom-card-helpers';
import type { ICardConfig } from './types';

export class TSMoonCardEditor extends LitElement {
    
    @property({ attribute: false }) 
    public accessor hass!: HomeAssistant;
    
    @state() 
    private accessor _config!: ICardConfig;

    /**
     * Appelé quand la config change
     */
    setConfig(config: ICardConfig): void {
        this._config = config;
    }

    /**
     * Appelé quand l'utilisateur change un champ
     */

    /*
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
*/


private _valueChanged(ev: CustomEvent): void {
    if (!this._config || !this.hass) {
        return;
    }

    const target = ev.currentTarget as HTMLElement & {
        configValue?: keyof ICardConfig;
        value?: string;
    };

    const configValue = target.configValue;

    if (!configValue) {
        return;
    }

    const value = ev.detail?.value ?? target.value;

    console.log({
        value,
        detailValue: ev.detail?.value,
        configValue,
    });

    if (value === undefined || this._config[configValue] === value) {
        return;
    }

    const newConfig: ICardConfig = {
        ...this._config,
        [configValue]: value,
    };

    this._config = newConfig;

    this.dispatchEvent(
        new CustomEvent('config-changed', {
            detail: { config: newConfig },
            bubbles: true,
            composed: true,
        }),
    );
}



render(): TemplateResult {
    if (!this.hass || !this._config) {
        return html``;
    }

    return html`
        <div class="card-config">
            <!-- Titre -->
            <ha-textfield
                label="Titre (optionnel)"
                .value=${this._config.title || ''}
                .configValue=${'title'}
                @input=${this._valueChanged}
            ></ha-textfield>

            <!-- Entité -->
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
                .options=${[
                    { value: 'forms', label: 'Forms' },
                    { value: 'round', label: 'Round' },
                    { value: 'photo', label: 'Photo' },
                    { value: 'clear', label: 'Clear' },
                ]}
                @selected=${this._valueChanged}
                @wa-hide=${(ev: Event) => ev.stopPropagation()}
                @wa-after-hide=${(ev: Event) => ev.stopPropagation()}
            >
            </ha-select>

            <!-- Format heure -->
            <ha-select
                label="Format de l'heure"
                .value=${this._config.time_format || '24h'}
                .configValue=${'time_format'}
                .options=${[
                    { value: '24h', label: '24h' },
                    { value: '12h', label: '12h' },
                ]}
                @selected=${this._valueChanged}
                @wa-hide=${(ev: Event) => ev.stopPropagation()}
                @wa-after-hide=${(ev: Event) => ev.stopPropagation()}
            >
            </ha-select>

            <!-- Hémisphère -->
            <ha-select
                label="Hémisphère"
                .value=${this._config.hemisphere || 'N'}
                .configValue=${'hemisphere'}
                .options=${[
                 { value: 'N', label: 'Nord' },
                    { value: 'S', label: 'Sud' },
                ]}
                @selected=${this._valueChanged}
                @wa-hide=${(ev: Event) => ev.stopPropagation()}
                @wa-after-hide=${(ev: Event) => ev.stopPropagation()}
            >
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