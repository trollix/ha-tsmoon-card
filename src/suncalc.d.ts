declare module "suncalc3" {
    
    export function getMoonTimes(dateValue: number | Date, lat: number, lng: number, inUTC?: boolean): IMoonTimes; 

    export function getMoonData(dateValue: number | Date, lat: number, lng: number): IMoonData;

    export type IDateObj = {
        /**
         * - The Date as a ISO String YYYY-MM-TTTHH:MM:SS.mmmmZ
         */
        date: string;
        /**
         * - The Date as the milliseconds since 1.1.1970 0:00 UTC
         */
        value: number;
    };

    export type IPhaseObj = {
        /**
         * - The phase start
         */
        from: number;
        /**
         * - The phase end
         */
        to: number;
        /**
         * - id of the phase
         */
        id: ('newMoon' | 'waxingCrescentMoon' | 'firstQuarterMoon' | 'waxingGibbousMoon' | 'fullMoon' | 'waningGibbousMoon' | 'thirdQuarterMoon' | 'waningCrescentMoon');
        /**
         * - unicode symbol of the phase
         */
        emoji: string;
        /**
         * - name of the phase
         */
        name: string;
        /**
         * - weight of the phase
         */
        weight: number;
        /**
         * - a css value of the phase
         */
        css: string;
        /**
         * - an alernate name (not used by this library)
         */
        nameAlt?: string;
        /**
         * - additional tag (not used by this library)
         */
        tag?: string;
    };

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
    export type IMoonDataInst = {
        /**
         * - The zenith angle of the moon
         */
        zenithAngle: number;
        /**
         * - object containing information about the next phases of the moon
         */
        illumination: IMoonIllumination;
    };

    export type IMoonIllumination = {
        /**
         * - illuminated fraction of the moon; varies from `0.0` (new moon) to `1.0` (full moon)
         */
        fraction: number;
        /**
         * - moon phase as object
         */
        phase: IPhaseObj;
        /**
         * - The phase of the moon in the current cycle; varies from `0.0` to `1.0`
         */
        phaseValue: number;
        /**
         * - The midpoint angle in radians of the illuminated limb of the moon reckoned eastward from the north point of the disk;
         */
        angle: number;
        /**
         * - object containing information about the next phases of the moon
         */
        next: IMoonIlluminationNext;
    };

    export type IMoonIlluminationNext = {
        /**
         * - The Date as a ISO String YYYY-MM-TTTHH:MM:SS.mmmmZ of the next phase
         */
        date: string;
        /**
         * - The Date as the milliseconds since 1.1.1970 0:00 UTC of the next phase
         */
        value: number;
        /**
         * - The name of the next phase [newMoon, fullMoon, firstQuarter, thirdQuarter]
         */
        type: string;
        /**
         * - Date of the next new moon
         */
        newMoon: IDateObj;
        /**
         * - Date of the next full moon
         */
        fullMoon: IDateObj;
        /**
         * - Date of the next first quater of the moon
         */
        firstQuarter: IDateObj;
        /**
         * - Date of the next third/last quater of the moon
         */
        thirdQuarter: IDateObj;
    };

    export type IMoonPosition = {
        /**
         * - The moon azimuth in radians
         */
        azimuth: number;
        /**
         * - The moon altitude above the horizon in radians
         */
        altitude: number;
        /**
         * - The moon azimuth in degree
         */
        azimuthDegrees: number;
        /**
         * - The moon altitude above the horizon in degree
         */
        altitudeDegrees: number;
        /**
         * - The distance of the moon to the earth in kilometers
         */
        distance: number;
        /**
         * - The parallactic angle of the moon
         */
        parallacticAngle: number;
        /**
         * - The parallactic angle of the moon in degree
         */
        parallacticAngleDegrees: number;
    };

    export type IMoonData = IMoonPosition & IMoonDataInst;

    export enum TSMOON_PHASES {
        newMoon = 'new_moon',
        waxingCrescentMoon = 'waxing_crescent',
        firstQuarterMoon = 'first_quarter',
        waxingGibbousMoon = 'waxing_gibbous',
        fullMoon = 'full_moon',
        waningGibbousMoon = 'waning_gibbous',
        thirdQuarterMoon = 'last_quarter',
        waningCrescentMoon = 'waning_crescent'
    }
    




}