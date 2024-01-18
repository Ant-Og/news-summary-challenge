const apiKey = require("./apiKey");

class NewsClient {
  constructor() {
    this.apiKey = apiKey;
  }

  async loadNews(query, callback, errorHandler) {
    const url = `https://content.guardianapis.com/search?q=${query}&query-fields=headline&show-fields=thumbnail,headline,byline,standfirst&order-by=newest&api-key=${apiKey}`
    
    try {
      const response = await fetch(url)
      const data = await response.json();
      return data.response.results;

    } catch(error) { 
      
    }

  }

  // const url = ` https://content.guardianapis.com/search?q=${query}&query-fields=headline&show-fields=thumbnail,headline,byline,standfirst&order-by=newest&api-key=${apiKey}`
  // return fetch(url, { mode: 'no-cors'})
  //   .then((response) => response.json())
  //   .then((data) => callback(data))
}

module.exports = NewsClient;