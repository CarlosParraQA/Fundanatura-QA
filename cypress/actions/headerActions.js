const { headerElements } = require('../elements/elements')

class headerActions {
    clickBotonDocumentacion() {
        headerElements.linkDocumentosRTE().click()
        cy.url('https://fundanatura.com/documentos-rte/')
    }
    clickBotonBlog() {
        headerElements.linkNuestroBlog().click()
        cy.url('https://fundanatura.com/nuestro-blog/')
    }
    clickBotonValores() {
        headerElements.linkValores().click()
        cy.url('https://fundanatura.com/#VALORES')
    }

}

module.exports = new headerActions();