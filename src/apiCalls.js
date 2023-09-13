export function getArticles(today, threeDaysAgo) {
  return fetch(`https://newsapi.org/v2/everything?q=cats OR vanderpump OR climate&from=${threeDaysAgo}&to=${today}&sortBy=publishedAt&language=en&apiKey=6af7ab5557284ac88194bcaa9f8ec36b`)
  .then(res => res.json())
}