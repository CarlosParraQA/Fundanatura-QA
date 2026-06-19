class headerElements {
    // Mantener este getter (compatibilidad), pero hacerlo menos frágil
    botonesHeader = () =>
        cy.get('div.elementor-container.elementor-column-gap-default h5 a')

    // Getters semánticos (preferidos): dependen del destino, no del orden
    linkDocumentosRTE = () => cy.get('a[href*="/documentos-rte"]').first()
    linkNuestroBlog = () => cy.get('a[href*="/nuestro-blog"]').first()
    linkValores = () => cy.get('a[href*="#VALORES"]').first()

}

class homeElements {
    titulosH4 = () => cy.get('h4.elementor-heading-title.elementor-size-default')
    spansEducacionMedica = () => cy.get('span[style="font-weight: 400;"]')
    botones = () => cy.get('span.elementor-button-text')
    flechaPreviaCarrusel = () => cy.get('div[class="elementor-swiper-button elementor-swiper-button-prev"]')
    flecheSiguienteCarrusel = () => cy.get('div[class="elementor-swiper-button elementor-swiper-button-next"]')
    botonesCarrusel = () => cy.get('div[aria-roledescription="slide"] a.swiper-slide-inner:visible')
    textosFundanatura = () => cy.get('div[data-id="fdf4e63"] div p')

}

class footerElements {
    tituloDocumentosPermanencia = () => cy.get('p.elementor-heading-title.elementor-size-default')
    textoCumplimiento = () => cy.get('p[style="text-align: center;"]').eq(2)
    // Preferir este selector por href; mantiene compatibilidad con el anterior nombre
    botonVerDocumentos = () => cy.get('a[href*="/documentos-rte"]').first()
    textoContactos = () => cy.get('p[style="text-align: center;"]').eq(3)
    urlTC_Politica = () => cy.get('a[rel="noopener"][href]')
    nutrapp = () => cy.get('a[href="https://nutrapp.com.co/"]')

  }

class documentosRTEElements {
    titulo = () => cy.get('h3.elementor-heading-title.elementor-size-default')
    divMas = () => cy.get('div.elementor-accordion-item') // utilizar eq para seleccionar el acordeon deseado
    documentos = () => cy.get('div.elementor-accordion-item ul li a') // utilizar eq para seleccionar el acordeon deseado
}
class blogElements {
    tituloLanding = () => cy.get('h3.elementor-heading-title.elementor-size-default')
    botonesBlog = () => cy.get('a.elementor-button.elementor-button-link.elementor-size-sm.elementor-animation-shrink')
    titulosBlogs = () => cy.get('h5.elementor-heading-title.elementor-size-default') // Utilizar eq(2) a eq(14)
    textosBlogs = () => cy.get('div[data-id] p[style="text-align: center;"]') // Utilizar eq(0) a eq(12)
}

module.exports = {
    homeElements: new homeElements(),
    headerElements: new headerElements(),
    footerElements: new footerElements(),
    documentosRTEElements: new documentosRTEElements(),
    blogElements: new blogElements()

};