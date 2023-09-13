export function getArticles() {
  return fetch('https://newsapi.org/v2/everything?q=cats OR vanderpump OR climate&from=2023-09-11&to=2023-09-13&language=en&apiKey=6af7ab5557284ac88194bcaa9f8ec36b')
  .then(res => res.json())
}