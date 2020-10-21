/// <reference types="cypress" />
describe('page', () => {
  beforeEach(() => {
    cy.route2({
      url: 'https://warpdesign.fr/tests/cypress/index.html',
      method: 'POST'
    })
    .as('foo')
  })

  it('works', () => {
    cy.visit('https://www.wikipedia.org/')
    cy.window().then(win => {
      win.fetch('https://warpdesign.fr/tests/cypress/index.html', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          message: 'hey!'
        })
      })
    })

    cy.wait('@foo').then((res) => {
      debugger;
    })
  })
})
