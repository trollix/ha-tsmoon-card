import { LovelaceCardConfig } from 'custom-card-helpers';
import type { IconType } from './icon-types';

export interface ICardConfig extends LovelaceCardConfig {
    title?: string;
    entity?: string;
    icon_type?: IconType;
    language?: string;
    time_format?: string; // added by https://github.com/tmcarr
    hemisphere?: string;
}
