describe('Testar criação de contato (mockado)', () => {
  it('Simula adicionar um contato com sucesso, sem atingir o back real', () => {

    cy.intercept('POST', '**/contacts', {
      statusCode: 201,
      body: {
        id: 98,
        name: "joão",
        email: "joão@teste.com",
        phone: "1213141516"
      }
    }).as('fakePost')

    cy.intercept('GET', '**/contacts', {
      statusCode: 200,
      body: {
        id: 99,
        name: "mary",
        email: "mary@teste.com",
        phone: "111111111"
      }
    }).as('fakePost')



    cy.visit('http://[::1]:5000/')
    cy.get('#name').type("mary")
    cy.get('#email').type("mary@teste.com")
    cy.get('#phone').type("111111111")
    cy.get('button').click()

    cy.wait('@fakePost')
  })
})