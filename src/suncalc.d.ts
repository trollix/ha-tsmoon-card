declare module "suncalc3" {
    export function getMoonTimes(dateValue: number | Date, lat: number, lng: number, inUTC?: boolean): IMoonTimes; 
    export type IMoonTimes = {
        /**
         * - a Date object if the moon is rising on the given Date, otherwise NaN
         */
        rise: Date | number;
        /**
         * - a Date object if the moon is setting on the given Date, otherwise NaN
         */
        set: Date | number;
        /**
         * - is true if the moon never rises/sets and is always _above_ the horizon during the day
         */
        alwaysUp: boolean;
        /**
         * - is true if the moon is always _below_ the horizon
         */
        alwaysDown: boolean;
        /**
         * - Date of the highest position, only avalílable if set and rise is not NaN
         */
        highest?: Date;
    };
}