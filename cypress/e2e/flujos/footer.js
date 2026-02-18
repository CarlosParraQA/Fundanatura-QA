import footerActions from "../../actions/footerActions";
import url from "../../url/url";

export function footerSuites() {
    context('Footer - Automatizaciones', () => {
        it('Validación de textos footer', () => {
            url.urlBase()
            footerActions.validacionTextos()
        })
        it('Botón Ver Documentos', () => {
            url.urlBase()
            footerActions.clickBotonVerDocumentos()
        });
        it('URL Términos y Condiciones', () => {
            url.urlBase()
            footerActions.clickUrlTC()
        });
        it('URL Política de Privacidad', () => {
            url.urlBase()
            footerActions.clickUrlPolitica()
        });
        it('URL Nutrapp', () => {
            url.urlBase()
            footerActions.clickUrlNutrapp()
        });
    });
    
}