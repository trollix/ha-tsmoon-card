import { TSMoonCard } from "./tsmoon-card";
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
  name: 'TSimple Moon Phase CArd',
  description: 'A card to view Moon Phases',
  preview: false,
});

// Registering card
customElements.define("tsmoon-card", TSMoonCard);

