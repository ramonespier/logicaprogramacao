describe('minha primeira especificação de teste', () => {
  it('Visita a página TRIANGULO', () => {
    cy.visit('http://localhost:3000/html/triangulo.html')
  })

  it('Clica no input lado'), () => {
    cy.visit('http://localhost:3000/html/triangulo.html')
    cy.get('#ladoA').click();
    cy.get('#ladoA').type('10');
    cy.get('#ladoB').click();
    cy.get('#ladoB').type('10');
    cy.get('#ladoC').click();
    cy.get('#ladoC').type('10');
  }

  /* ==== Test Created with Cypress Studio ==== */
  it('Nao entendi', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/html/triangulo.html');
    /* ==== End Cypress Studio ==== */
  });
})