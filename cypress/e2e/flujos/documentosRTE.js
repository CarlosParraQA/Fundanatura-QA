import documentosRTEActions from "../../actions/documentosRTEActions";
import url from "../../url/url";

export function documentosRTESuites() {
    context('Documentos RTE - Automatizaciones', () => {
        it('Validación de título', () => {
            url.urlDocumentosRTE()
            documentosRTEActions.validacionTitulo()
        })
        it('Validación de registro WEB 2025', () => {
            url.urlDocumentosRTE()
            documentosRTEActions.validacionRegistroWEB()
        });
    });
}