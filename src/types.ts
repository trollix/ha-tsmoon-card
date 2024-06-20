import { LovelaceCardConfig } from 'custom-card-helpers';
export interface ICardConfig extends LovelaceCardConfig {
    title?: string;
    entity?: string;
    icon_type?: string;
    language?: string;
}