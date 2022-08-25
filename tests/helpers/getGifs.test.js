import { getGifs } from "../../src/helpers/getGifs";

describe("GetGifs tests", () => {

  test("must return an array of gifs", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
  
});
