import { documentosRTEElements } from "../elements/elements";

class documentosRTEActions {
    validacionTitulo() {
        cy.fixture('documentosRTE').then((data) => {
            documentosRTEElements.titulo().should('have.text', data.titulo)
        })
    }
    validacionRegistroWEB() {
    documentosRTEElements.documentos()
        .should('have.length.greaterThan', 0)
        .each(($doc) => {

            cy.wrap($doc)
                .invoke('attr', 'href')
                .should('exist')
                .then((pdfUrl) => {

                    cy.request({
                        url: pdfUrl,
                        method: 'GET'
                    }).then((response) => {

                        expect(response.status).to.eq(200)
                        expect(response.headers['content-type'])
                            .to.include('application/pdf')
                    })
                })
        })
}
}

module.exports = new documentosRTEActions();