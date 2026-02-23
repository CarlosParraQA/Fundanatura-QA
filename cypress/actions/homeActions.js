import { normalice } from '../support/commands'
const { homeElements } = require('../elements/elements')

class homeActions {
    validacionTextos() {
        cy.fixture('home').then((data) => {
            homeElements.titulosH4().eq(0).should('have.text', data.titulos.titulo1)
            homeElements.titulosH4().eq(1).should('have.text', data.titulos.titulo2)
            homeElements.titulosH4().eq(2).should('have.text', data.titulos.titulo3)
            homeElements.titulosH4().eq(3).should('have.text', data.titulos.titulo4)
            homeElements.spansEducacionMedica().should('have.text', data.textos.texto1)
        })
    }
    redireccionesBotonMasInformacion() {
            homeElements.botones().eq(0).invoke('removeAttr', 'target').click()
            cy.url().should('include', 'https://fundanatura.com/')
    }
    sliderCarruselMateriales() {
        homeElements.botonesCarrusel().click()
        cy.url().should('include', 'https://fundanatura.com/nuestro-blog/')
    }
    sliderCarruselSaberMas() {
        homeElements.flecheSiguienteCarrusel().eq(0).click().click()
        homeElements.botonesCarrusel().eq(0).invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://edu.academiademedicinafuncional.info/tienda/')
    }
    validacionTextosAsociacion() {
        cy.fixture('home').then((data) => {
            homeElements.textosFundanatura().eq(0).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.textos.texto2));});
            homeElements.textosFundanatura().eq(1).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.textos.texto3));});
        })
    }

}

module.exports = new homeActions();