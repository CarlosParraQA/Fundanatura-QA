import headerActions from "../../actions/headerActions";
import url from "../../url/url";

export function headerSuites() {
    context('Header - Automatizaciones', () => {
        it('Botón Documentación de interés', () => {
            url.urlBase()
            headerActions.clickBotonDocumentacion()
        });
        it('Botón Nuestro Blog', () => {
            url.urlBase()
            headerActions.clickBotonBlog()
        });
        it('Botón Nuestros Valores', () => {
            url.urlBase()
            headerActions.clickBotonValores()
        });
    });
}