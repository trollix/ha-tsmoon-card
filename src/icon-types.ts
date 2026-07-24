export const ICON_TYPES = [
    'forms',
    'round',
    'photo',
    'clear',
] as const;

export type IconType = typeof ICON_TYPES[number];

export const DEFAULT_ICON_TYPE: IconType = 'forms';
