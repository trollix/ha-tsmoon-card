// Définition de la classe
export class Personne {
    // Propriétés de la classe
    nom: string;
    age: number;
  
    // Constructeur de la classe
    constructor(nom: string, age: number) {
      this.nom = nom;
      this.age = age;
    }
  
    // Méthode de la classe
    afficherInformations(): void {
      console.log(`Nom: ${this.nom}, Age: ${this.age}`);
    }
  }
  

  export class SunCalc {

    private static readonly sin = Math.sin;
    private static readonly cos = Math.cos;
    private static readonly tan = Math.tan;
    private static readonly asin = Math.asin;
    private static readonly atan = Math.atan2;
    private static readonly acos = Math.acos;
    private static readonly rad: number = Math.PI / 180;
    private static readonly degr: number = 180 / Math.PI;

    // date/time constants and conversions
    private static readonly dayMs = 86400000; // 1000 * 60 * 60 * 24;
    private static readonly J1970 = 2440587.5;
    private static readonly J2000 = 2451545;

    private static readonly lunarDaysMs = 2551442778; // The duration in days of a lunar cycle is 29.53058770576
    private static readonly firstNewMoon2000 = 947178840000; // first newMoon in the year 2000 2000-01-06 18:14



    // ... Other constants and functions ...

    private static fromJulianDay(j: number): number {
        return (j - SunCalc.J1970) * SunCalc.dayMs;
    }

    private static toDays(dateValue: number): number {
        return (dateValue / SunCalc.dayMs + SunCalc.J1970) - SunCalc.J2000;
    }

    // ... Other functions ...

    private static rightAscension(l: number, b: number): number {
        return Math.atan(Math.sin(l) * Math.cos(SunCalc.e) - Math.tan(b) * Math.sin(SunCalc.e), Math.cos(l));
    }

    private static declination(l: number, b: number): number {
        return Math.asin(Math.sin(b) * Math.cos(SunCalc.e) + Math.cos(b) * Math.sin(SunCalc.e) * Math.sin(l));
    }

    // ... Other functions ...

    public static getPosition(dateValue: number | Date, lat: number, lng: number): ISunPosition {
        // Implementation of getPosition method
        // ...
        const c = sunCoords(d);
        const H = siderealTime(d, lw) - c.ra;
        const azimuth = azimuthCalc(H, phi, c.dec);
        const altitude = altitudeCalc(H, phi, c.dec);

        return {
            azimuth,
            altitude,
            zenith: (90 * Math.PI / 180) - altitude,
            azimuthDegrees: SunCalc.degr * azimuth,
            altitudeDegrees: SunCalc.degr * altitude,
            zenithDegrees: 90 - (SunCalc.degr * altitude),
            declination: c.dec
        };
    }

    private static azimuthCalc(H: number, phi: number, dec: number): number {
        return SunCalc.atan(SunCalc.sin(H), SunCalc.cos(H) * SunCalc.sin(phi) - SunCalc.tan(dec) * SunCalc.cos(phi)) + Math.PI;
    }

    private static altitudeCalc(H: number, phi: number, dec: number): number {
        return SunCalc.asin(SunCalc.sin(phi) * SunCalc.sin(dec) + SunCalc.cos(phi) * SunCalc.cos(dec) * SunCalc.cos(H));
    }

    private static siderealTime(d: number, lw: number): number {
        return SunCalc.rad * (280.16 + 360.9856235 * d) - lw;
    }

    private static astroRefraction(h: number): number {
        if (h < 0) {
            h = 0;
        }

        return 0.0002967 / SunCalc.tan(h + 0.00312536 / (h + 0.08901179));
    }

    private static solarMeanAnomaly(d: number): number {
        return SunCalc.rad * (357.5291 + 0.98560028 * d);
    }

    private static eclipticLongitude(M: number): number {
        const C = SunCalc.rad * (1.9148 * SunCalc.sin(M) + 0.02 * SunCalc.sin(2 * M) + 0.0003 * SunCalc.sin(3 * M));
        const P = SunCalc.rad * 102.9372;
        return M + C + P + Math.PI;
    }

    // ... Other functions ...




}


