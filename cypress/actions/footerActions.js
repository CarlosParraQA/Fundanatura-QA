import { normalice } from '../support/commands'
const { footerElements } = require('../elements/elements')

class footerActions {
      validacionTextos() {
        cy.fixture('footer').then((data) => {
            footerElements.tituloDocumentosPermanencia().should('have.text', data.titulo)
            footerElements.textoCumplimiento().invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.texto));});
            footerElements.textoContactos().invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.contacto));});
        })
    }
    clickBotonVerDocumentos() {
        footerElements.botonVerDocumentos().click()
        cy.url('https://fundanatura.com/documentos-rte/')
    }
    clickUrlTC() {
        footerElements.urlTC_Politica().eq(0).invoke('removeAttr', 'target').click()
        cy.url('https://fundanatura.com/terminos-y-condiciones/')
    }
    clickUrlPolitica() {
        // Verifica que el PDF exista en el servidor y sea accesible (status 200 + application/pdf)
        footerElements.urlTC_Politica().eq(1).should('have.attr', 'href').then((pdfUrl) => {
        cy.request({
            url: pdfUrl,
            method: 'GET',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.headers['content-type'])
            .to.include('application/pdf');
        });
    });
    }
    clickUrlNutrapp() {
        footerElements.nutrapp().invoke('removeAttr', 'target').click()
        cy.url('https://nutrapp.com.co/')
    }

}

module.exports = new footerActions();