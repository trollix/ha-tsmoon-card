# HA-TSMOON

Startup setup for new lovelace (Home Assistant) card development

## What is here?

* Card code written in TypeScript
* Bundling all the files to single output
* CSS code minimized, converted to TS and included in output bundle

## Goals

* [X] Display a simple card to display moon phase

## Installation

For installation you should have [HACS](https://hacs.xyz/docs/setup/download/) installed. Then add this repository <https://github.com/trollix/ha-tsmoon-card> in HACS and install the card. You have to reload you browser after installation.

Then you can add the new card into your dashboard.

### Easiest method

✨ Install via HACS

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=trollix&repository=ha-tsmoon-card)

### Alternative method

1. Download `tsmoon-card.js` from the [Releases](https://github.com/trollix/ha-tsmoon-card/releases) page
2. Upload to `/www/ha-tsmoon-card/tsmoon-card.js` (via Samba, File Editor, SSH, etc.)
3. Visit the Resources page in your Home Assistant install and add `/ha-tsmoon-card/tsmoon-card.js` as a
   JavaScript Module.
   [![Open your Home Assistant instance and show your dashboard resources.](https://my.home-assistant.io/badges/lovelace_resources.svg)](https://my.home-assistant.io/redirect/lovelace_resources/)
4. Refresh your browser

## Configuration

| Name        | Type    | Default      | Description                                              |
| ----------- | ------- | ------------ | -------------------------------------------------------- |
| type        | string  | **Required** | `custom:custom:tsmoon-card`                              |
| entity      | string  | **Required** | The entity id of moon sensor -> sensor.moon              |
| title       | string  | **optional** | Title displayed on the card                              |
| icon_type   | string  | **optional** | Type of picture for the moon (forms/round/photos)        |
| time_format | string  | **optional** | Time format displayed in the card (12h/24h)              |
| language    | string  | **optional** | The language used in the card                            |

Example:

```yaml

type: custom:tsmoon-card
title: Lune
entity: sensor.moon
icon_type: round
time_format: 24h
language: fr

```

## Preview

### Card (en)

#### form-en

![HA-TSMOON-CARD](https://github.com/trollix/ha-tsmoon-card/blob/main/img_forms_en.png?raw=true "Ha TSMoon Card")

#### round-en

![HA-TSMOON-CARD](https://github.com/trollix/ha-tsmoon-card/blob/main/img_round_en.png?raw=true "Ha TSMoon Card")

#### photo-en

![HA-TSMOON-CARD](https://github.com/trollix/ha-tsmoon-card/blob/main/img_photos_en.png?raw=true "Ha TSMoon Card")

### Card (fr)

#### form-fr

![HA-TSMOON-CARD](https://github.com/trollix/ha-tsmoon-card/blob/main/img_forms_fr.png?raw=true "Ha TSMoon Card")

#### round-fr

![HA-TSMOON-CARD](https://github.com/trollix/ha-tsmoon-card/blob/main/img_round_fr.png?raw=true "Ha TSMoon Card")

#### photo-fr

![HA-TSMOON-CARD](https://github.com/trollix/ha-tsmoon-card/blob/main/img_photos_fr.png?raw=true "Ha TSMoon Card")

## Credits

### Code

* Time Format option : ![tmcarr](https://github.com/tmcarr "tmcarr")

### Localization
  
* pt-BR : ![netsoft-ruidias](https://github.com/netsoft-ruidias "netsoft-ruidias")
* de: ![MickLesk](https://github.com/MickLesk "MickLesk")
* es: ![ldsmovil](https://github.com/ldsmovil "ldsmovil")
* sk! ![misa1515](https://github.com/misa1515 "misa1515")
* ca: ![rogodra](https://github.com/rogodra "rogodra")
