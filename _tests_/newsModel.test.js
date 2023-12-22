const NewsModel = require("src/newsModel");

describe("newsModel", () => {
  it("returns an array of all news articles", () => {
    const Model = new NewsModel();

    expect(model.getNews()).toEqual([]);
  });
})