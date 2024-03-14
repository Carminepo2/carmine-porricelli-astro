describe('index page', () => {
  it('should correctly opens the index page', () => {
    cy.visit('/')
    cy.get('h1').should('contain', 'Carmine Porricelli')
  })

  it('should open the page in the correct language', () => {
    cy.visit('/')
    cy.get('html').should('have.attr', 'lang', 'it')

    cy.visit('/en')
    cy.get('html').should('have.attr', 'lang', 'en')
  })

  it('should correctly switch the language', () => {
    cy.visit('/')
    cy.getBySel('lang-picker').select('EN')
    cy.url().should('contain', '/en')

    cy.getBySel('lang-picker').select('IT')
    cy.url().should('not.contain', '/en')
  })

  it('should correctly switch theme', () => {
    cy.visit('/')
    // First, set the browser theme to light
    cy.wrap(
      Cypress.automation('remote:debugger:protocol', {
        command: 'Emulation.setEmulatedMedia',
        params: {
          media: 'page',
          features: [
            {
              name: 'prefers-color-scheme',
              value: 'light'
            }
          ]
        }
      })
    )
    cy.getBySel('theme-mode-toggle').click()
    cy.get('html').should('have.attr', 'class', 'dark')
    cy.getBySel('theme-mode-toggle').click()
    cy.get('html').should('have.attr', 'class', 'light')
  })

  it('should correctly repeat the animation', () => {
    cy.visit('/')
    cy.getBySel('animated-line-portrait-svg-path').should('have.attr', 'class', 'draw-line-portrait-animation')
    cy.wait(6500)
    cy.getBySel('animated-line-portrait-restart-animation-button').should('be.visible')
    cy.getBySel('animated-line-portrait-restart-animation-button').click()
    cy.getBySel('animated-line-portrait-svg-path').should('have.attr', 'class', 'erase-line-portrait-animation')
    cy.wait(1000)
    cy.getBySel('animated-line-portrait-svg-path').should('have.attr', 'class', 'draw-line-portrait-animation')
  })
})
