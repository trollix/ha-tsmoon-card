# HA-TSMOON

Startup setup for new lovelace (Home Assistant) card development

## What is here?

* Card code written in TypeScript
* Bundling all the files to single output
* Map file generated, poiting to repo url (with version etc), this way debugging is possible without having source code locally
* CSS code minimized, converted to TS and included in output bundle
* Two bundle types: debug and crunched one
* Teststing with Electron headless browser

## How to use it?

1. Get the template code

    * Click on the "Use this template" button at the top of this page. Your private repo will be created for you.

    * Clone your repo to your box
    OR
    * Clone this repo to your box
      `git clone https://github.com/trollix/ha-tmoon-card.git your-card-name`

    * Create empty repo on your git server and copy it's url

    * Change the remote url

      `git remote set-url origin [your target repo url]`

2. Change the card class name and the custom element name in index.ts, update package.json

3. Push the code and you are ready to go

    `git push origin master`

4. Build

    Run `npm install` once before first build.

   * `npm run build` produces debug version of the code (just bundled but no crunched)
   * `npm run release` produces crunched bundle

    The output files are located in `dist` directory.

    Note: The style.ts file is auto-generated

## Configuration

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
