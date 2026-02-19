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
    textosFundanatura = () => cy.get('div[data-id="fdf4e63"] div p')

}

class footerElements {
    tituloDocumentosPermanencia = () => cy.get('p[class="elementor-heading-title elementor-size-default"]')
    textoCumplimiento = () => cy.get('p[style="text-align: center;"]').eq(2)
    botonVerDocumentos = () => cy.get('a[class="elementor-button elementor-button-link elementor-size-sm elementor-animation-shrink"]').eq(3)
    textoContactos = () => cy.get('p[style="text-align: center;"]').eq(3)
    urlTC_Politica = () => cy.get('a[rel="noopener"]')
    nutrapp = () => cy.get('a[href="https://nutrapp.com.co/"]')

  }

class documentosRTEElements {
    titulo = () => cy.get('h3[class="elementor-heading-title elementor-size-default"]')
    divMas = () => cy.get('div[class="elementor-accordion-item"]') // utilizar eq para seleccionar el acordeon deseado
    documentos = () => cy.get('div[class="elementor-accordion-item"] ul li a') // utilizar eq para seleccionar el acordeon deseado
}
class blogElements {
    tituloLanding = () => cy.get('h3[class="elementor-heading-title elementor-size-default"]')
    botonesBlog = () => cy.get('a[class="elementor-button elementor-button-link elementor-size-sm elementor-animation-shrink"]')
    titulosBlogs = () => cy.get('h5[class="elementor-heading-title elementor-size-default"]') // Utilizar eq(2) a eq(14)
    textosBlogs = () => cy.get('div[data-id] p[style="text-align: center;"]') // Utilizar eq(0) a eq(12)
}

module.exports = {
    homeElements: new homeElements(),
    headerElements: new headerElements(),
    footerElements: new footerElements(),
    documentosRTEElements: new documentosRTEElements(),
    blogElements: new blogElements()

};