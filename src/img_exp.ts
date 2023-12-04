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

interface SvgType {
    forms: { [key: string]: string };
    round: { [key: string]: string };
}

export const svg: SvgType = {
    forms: {
        first_quarter: svgMoonFormsFirstQuarter,
        full_moon: svgMoonFormsFirstQuarter,
    },
    round: {
        first_quarter: svgMoonRoundFirstQuarter,
    }
}