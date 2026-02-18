
const { homeElements } = require('../elements/elements')

class homeActions {
    validacionTextos() {
        cy.fixture('home').then((data) => {
            homeElements.titulosH4().eq(0).should('have.text', data.titulos.titulo1)
            homeElements.titulosH4().eq(1).should('have.text', data.titulos.titulo2)
            homeElements.titulosH4().eq(2).should('have.text', data.titulos.titulo3)
            homeElements.titulosH4().eq(3).should('have.text', data.titulos.titulo4)
            homeElements.spansEducacionMedica().should('have.text', data.textoEducacionMedica)
        })
    }
    redireccionesBotonMasInformacion() {
            homeElements.botones().eq(0).click()
            cy.url().should('include', 'https://nhub.events/eventos/fundanatura/')
            cy.go('back')
            homeElements.botones().eq(1).click()
            cy.url().should('include', 'https://nhub.events/eventos/fundanatura/')
    }
    sliderCarruselMateriales() {
        homeElements.botonesCarrusel().click()
        cy.url().should('include', 'https://fundanatura.com/nuestro-blog/')
    }
    sliderCarruselSaberMas() {
        homeElements.flecheSiguienteCarrusel().eq(0).click()
        homeElements.botonesCarrusel().eq(1).click()
        cy.url().should('include', 'https://edu.academiademedicinafuncional.info/tienda/')

    }

}

module.exports = new homeActions();