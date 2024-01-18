class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.mainContainerEl = document.querySelector("#main-container");
    this.searchNewsButtonEl = document.querySelector("#search-news-button");
    this.searchInputEl = document.querySelector("#search-input");

    this.searchNewsButtonEl.addEventListener('click', () => {
      const query = this.searchInputEl.value;
      this.searchQuery(query);
    });
  }

  async searchQuery(query) {
    try {
      const data = await this.client.loadNews(query);
      this.model.setNews(data);
      this.displayNews();
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  displayNews() {
    const newsArticles = this.model.getNews();
    console.log(newsArticles);

    newsArticles.forEach((article) => {
      let articleEl = document.createElement('div');
      articleEl.className = 'article';
      this.mainContainerEl.append(articleEl)

      const fields = Object.values(article)[8];

      for (const key in fields) {
        if (key == 'headline') {
          let headlineEl = document.createElement('h2')
          headlineEl.className = key
          headlineEl.innerHTML = fields[key]
          articleEl.appendChild(headlineEl);
        } else if (key == 'standfirst') {
          let standfirstEl = document.createElement('p')
          standfirstEl.className = key
          standfirstEl.innerHTML = fields[key]
          articleEl.appendChild(standfirstEl);
        } else if (key == 'byline') {
          let bylineEl = document.createElement('p')
          bylineEl.className = key
          bylineEl.innerHTML = "By " + fields[key];
          articleEl.appendChild(bylineEl);
        } else if (key == 'thumbnail') {
          let articleLinkEl = document.createElement('a')
          articleLinkEl.href = article.webUrl
          articleLinkEl.target = '_blank'
          let imageEl = document.createElement('img')
          imageEl.className = key
          imageEl.src = fields[key]
          articleLinkEl.appendChild(imageEl)
          articleEl.appendChild(articleLinkEl);
        }
      }
    })
  }
}

module.exports = NewsView;