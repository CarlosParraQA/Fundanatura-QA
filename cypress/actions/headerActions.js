const { headerElements } = require('../elements/elements')

class headerActions {
    clickBotonDocumentacion() {
        headerElements.botonesHeader().eq(0).click()
        cy.url('https://fundanatura.com/documentos-rte/')
    }
    clickBotonBlog() {
        headerElements.botonesHeader().eq(1).click()
        cy.url('https://fundanatura.com/nuestro-blog/')
    }
    clickBotonValores() {
        headerElements.botonesHeader().eq(2).click()
        cy.url('https://fundanatura.com/#VALORES')
    }

}

module.exports = new headerActions();