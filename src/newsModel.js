class NewsModel {
  constructor() {
    this.news = []
  }

  getNews() {
    return this.news;
  }

  setNews(apiNewsData) {
    this.news = apiNewsData;
  }
}

module.exports = NewsModel;