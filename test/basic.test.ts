import { MyCustomCard } from "../src/custom-element/my-custom-card";
import { ICardConfig } from "../src/types";

describe("Basic tests", () => {

    const cardTagName = "my-custom-card";

    afterEach(() => 
        Array
            .from(document.body.getElementsByTagName(cardTagName))
            .forEach(elem => elem.remove())
    );

    test("Header text rendered correctly", async () => {
        const myCard = await createCard({
            title: "This is my card",
            entity: "sun.sun"
        });

        expect(myCard.shadowRoot).toBeTruthy();

        const headerText = getTextContent(myCard, ".card-header .truncate");
        expect(headerText).toBe("This is my card");
    });
    
    test("Updating entity state", async () => {
        const myCard = await createCard({
            title: "This is my card",
            entity: "sun.sun"
        });

        expect(getTextContent(myCard, ".state")).toBe("");

        myCard.hass = <any>{
            states: {
                "sun.sun": {
                    state: "dawn"
                }
            }
        }

        await myCard.updateComplete;

        expect(getTextContent(myCard, ".state")).toBe("dawn");
    });

    const createCard = async (config: ICardConfig) => {
        const myCard = <MyCustomCard>document.createElement(cardTagName);
        myCard.setConfig(config);
        document.body.appendChild(myCard);

        await myCard.updateComplete;

        return myCard;
    }

    const getTextContent = (card: HTMLElement, selector: string) => card.shadowRoot!.querySelector(selector)?.textContent?.trim();
})