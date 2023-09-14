describe('display a page with a list of articles and on click display that single article details', () => {
beforeEach(()=>{ 
  cy.intercept('GET',  'https://newsapi.org/v2/everything?q=tesla OR apple OR climate&from=2023-01-01&to=2023-12-31&sortBy=publishedAt&language=en&apiKey=6af7ab5557284ac88194bcaa9f8ec36b', {
    statusCode:200, 
    fixture:"articles.json"
  })
  cy.visit('http://localhost:3000/')
})
  it('should display a page of articles with a header', () => {
    cy.get('.header')
  })
})
