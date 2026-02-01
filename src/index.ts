import { TSMoonCard } from "./tsmoon-card";
import './editor';  // Pour ajouter l'éditeur visuel
import { version, name } from '../package.json'

export const printVersionToConsole = () => console.info(
    `%c  ${name.toUpperCase()}  %c  Version ${version}  `,
    'color: white; font-weight: bold; background: crimson',
    'color: #000; font-weight: bold; background: #ddd',
);

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'tsmoon-card',
  name: 'Simple Moon Phase Card',
  entity: "sensor.moon",
  description: 'A card to view Moon Phases',
  preview: true,
});

// Print Version to Console
printVersionToConsole();

// Registering card
customElements.define("tsmoon-card", TSMoonCard);

