describe('Testar criação de contato', () => {

  it('Testar envio de formulário com campo - nome vazio', () => {
    cy.visit('http://127.0.0.1:5500')

    cy.get('#email').type("mary@teste.com")
    cy.get('#phone').type("123456789")

    cy.get('button').click()

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Preencha todos os campos');
    })

  })

  it('Testar envio de formulário com campo - email vazio', () => {
    cy.visit('http://127.0.0.1:5500')

    cy.get('#name').type('mary')
    cy.get('#phone').type("123456789")

    cy.get('button').click()

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Preencha todos os campos');
    })

  })


  it('Testar envio de formulário com campo - telefone vazio', () => {
    cy.visit('http://127.0.0.1:5500')

    cy.get('#name').type('mary')
    cy.get('#email').type("mary123")

    cy.get('button').click()

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Preencha todos os campos');
    })

  })

  it('Testar envio de formulário com campo - telefone inválido', () => {
    cy.visit('http://127.0.0.1:5500')

    cy.get('#name').type('mary')
    cy.get('#email').type("mary123")
    cy.get('#phone').type("ab12bc-98")

    cy.get('button').click()

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Preencha todos os campos');
    })

  })

  it('Simula adicionar um contato com sucesso, sem atingir o back real', () => {
    cy.visit('http://127.0.0.1:5500')
    cy.get('#name').type("mary")
    cy.get('#email').type("mary@teste.com")
    cy.get('#phone').type("111111111")
    cy.get('button').click()

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

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Erro ao adicionar contato');
    })
  })
});