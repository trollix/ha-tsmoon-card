import { LovelaceCardConfig } from 'custom-card-helpers';
export interface ICardConfig extends LovelaceCardConfig {
    title?: string;
    entity?: string;
    icon_type?: string;
    language?: string;
    time_format?: string; // added by https://github.com/tmcarr
    hemisphere?: string;
}