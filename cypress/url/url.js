class url {
    urlBase = () => cy.visit('https://fundanatura.com')
    urlDocumentosRTE = () => cy.visit('https://fundanatura.com/documentos-rte/')
    urlBlog = () => cy.visit('https://fundanatura.com/nuestro-blog/')
    urlValores = () => cy.visit('https://fundanatura.com/#VALORES')
}

module.exports = new url();