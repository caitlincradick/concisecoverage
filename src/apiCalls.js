export function getArticles(today, threeDaysAgo) {
  return fetch(`https://newsapi.org/v2/everything?q=tesla OR apple OR climate&from=${threeDaysAgo}&to=${today}&sortBy=publishedAt&language=en&apiKey=6af7ab5557284ac88194bcaa9f8ec36b`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Bad Network Response');
      }
      return res.json();
    })
}