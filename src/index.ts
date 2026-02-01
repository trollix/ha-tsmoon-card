import { TSMoonCard } from "./tsmoon-card";
import './editor';
import { version, name } from '../package.json';

// Constantes
const CARD_TYPE = 'tsmoon-card';
const CARD_NAME = 'Simple Moon Phase Card';
const CARD_DESCRIPTION = 'A card to view Moon Phases';

// Typage propre pour window
declare global {
    interface Window {
        customCards?: Array<{
            type: string;
            name: string;
            entity?: string;
            description: string;
            preview?: boolean;
        }>;
    }
}

// Affichage de la version dans la console
export const printVersionToConsole = (): void => {
    console.info(
        `%c  ${name.toUpperCase()}  %c  Version ${version}  `,
        'color: white; font-weight: bold; background: crimson',
        'color: #000; font-weight: bold; background: #ddd',
    );
};

// Enregistrement dans le picker de cartes HA
window.customCards = window.customCards || [];
window.customCards.push({
    type: CARD_TYPE,
    name: CARD_NAME,
    entity: 'sensor.moon',
    description: CARD_DESCRIPTION,
    preview: true,
});

// Affichage version au chargement
printVersionToConsole();

// Enregistrement du custom element
customElements.define(CARD_TYPE, TSMoonCard);