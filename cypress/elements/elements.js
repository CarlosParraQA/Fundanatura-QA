class headerElements {
    botonesHeader = () => cy.get('div[class="elementor-container elementor-column-gap-default"] h5 a')

}

class homeElements {
    titulosH4 = () => cy.get('h4[class="elementor-heading-title elementor-size-default"]')
    spansEducacionMedica = () => cy.get('span[style="font-weight: 400;"]')
    botones = () => cy.get('span[class="elementor-button-text"]')
    flechaPreviaCarrusel = () => cy.get('div[class="elementor-swiper-button elementor-swiper-button-prev"]')
    flecheSiguienteCarrusel = () => cy.get('div[class="elementor-swiper-button elementor-swiper-button-next"]')
    botonesCarrusel = () => cy.get('div[aria-roledescription="slide"] a[class="swiper-slide-inner"]:visible')
}

class footerElements {
    tituloDocumentosPermanencia = () => cy.get('p[class="elementor-heading-title elementor-size-default"]')
    textoCumplimiento = () => cy.get('p[style="text-align: center;"]').eq(2)
    botonVerDocumentos = () => cy.get('a[class="elementor-button elementor-button-link elementor-size-sm elementor-animation-shrink"]').eq(3)
    textoContactos = () => cy.get('p[style="text-align: center;"]').eq(3)
    urlTC_Politica = () => cy.get('a[rel="noopener"]')
    nutrapp = () => cy.get('a[href="https://nutrapp.com.co/"]')
  }

module.exports = {
    homeElements: new homeElements(),
    headerElements: new headerElements(),
    footerElements: new footerElements()

};