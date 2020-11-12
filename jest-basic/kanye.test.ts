jest.mock("./kanye");

import { getKanyeTweet } from "./kanye";

test("kanye test", async () => {
    await getKanyeTweet().then(res => {
        expect(res).toHaveProperty("quote");
    })
})
