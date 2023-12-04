// Forms in moon
import svgMoonFormsFirstQuarter from './icons/moon-forms/first_quarter.svg'
import svgMoonFormsFullMoon from './icons/moon-forms/full_moon.svg'
import svgMoonFormsLastQuarter from './icons/moon-forms/last_quarter.svg'
import svgMoonFormsNewMoon from './icons/moon-forms/new_moon.svg'
import svgMoonFormsWaningCrescent from './icons/moon-forms/waning_crescent.svg'
import svgMoonFormsWaningGibbous from './icons/moon-forms/waning_gibbous.svg'
import svgMoonFormsWaxingCrescent from './icons/moon-forms/waxing_crescent.svg'
import svgMoonFormsWaxingGibbous from './icons/moon-forms/waxing_gibbous.svg'

// Rounds in moon
import svgMoonRoundFirstQuarter from './icons/moon-round/first_quarter.svg'
import svgMoonRoundFullMoon from './icons/moon-round/full_moon.svg'
import svgMoonRoundLastQuarter from './icons/moon-round/last_quarter.svg'
import svgMoonRoundNewMoon from './icons/moon-round/new_moon.svg'
import svgMoonRoundWaningCrescent from './icons/moon-round/waning_crescent.svg'
import svgMoonRoundWaningGibbous from './icons/moon-round/waning_gibbous.svg'
import svgMoonRoundWaxingCrescent from './icons/moon-round/waxing_crescent.svg'
import svgMoonRoundWaxingGibbous from './icons/moon-round/waxing_gibbous.svg'

// Photos in moon
import svgMoonPhotoFirstQuarter from './icons/moon-photo/first_quarter.svg'
import svgMoonPhotoFullMoon from './icons/moon-photo/full_moon.svg'
import svgMoonPhotoLastQuarter from './icons/moon-photo/last_quarter.svg'
import svgMoonPhotoNewMoon from './icons/moon-photo/new_moon.svg'
import svgMoonPhotoWaningCrescent from './icons/moon-photo/waning_crescent.svg'
import svgMoonPhotoWaningGibbous from './icons/moon-photo/waning_gibbous.svg'
import svgMoonPhotoWaxingCrescent from './icons/moon-photo/waxing_crescent.svg'
import svgMoonPhotoWaxingGibbous from './icons/moon-photo/waxing_gibbous.svg'

interface SvgType {
    forms: { [key: string]: string };
    round: { [key: string]: string };
    photo: { [key: string]: string };
}

export const svg: SvgType = {
    forms: {
        first_quarter: svgMoonFormsFirstQuarter,
        full_moon: svgMoonFormsFullMoon,
        last_quarter: svgMoonFormsLastQuarter,
        new_moon: svgMoonFormsNewMoon,
        waning_crescent: svgMoonFormsWaningCrescent,
        waning_gibbous: svgMoonFormsWaningGibbous,
        waxing_crescent: svgMoonFormsWaxingCrescent,
        waxing_gibbous: svgMoonFormsWaxingGibbous
    },
    round: {
        first_quarter: svgMoonRoundFirstQuarter,
        full_moon: svgMoonRoundFullMoon,
        last_quarter: svgMoonRoundLastQuarter,
        new_moon: svgMoonRoundNewMoon,
        waning_crescent: svgMoonRoundWaningCrescent,
        waning_gibbous: svgMoonRoundWaningGibbous,
        waxing_crescent: svgMoonRoundWaxingCrescent,
        waxing_gibbous: svgMoonRoundWaxingGibbous
    },
    photo: {
        first_quarter: svgMoonPhotoFirstQuarter,
        full_moon: svgMoonPhotoFullMoon,
        last_quarter: svgMoonPhotoLastQuarter,
        new_moon: svgMoonPhotoNewMoon,
        waning_crescent: svgMoonPhotoWaningCrescent,
        waning_gibbous: svgMoonPhotoWaningGibbous,
        waxing_crescent: svgMoonPhotoWaxingCrescent,
        waxing_gibbous: svgMoonPhotoWaxingGibbous
    }
}