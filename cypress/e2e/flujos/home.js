import homeActions from "../../actions/homeActions";
import url from "../../url/url";

export function homeSuites() {
    context('Home - Automatizaciones', () => {
        it('Validación de textos en el home', () => {
            url.urlBase()
            homeActions.validacionTextos()
        });
        it('Redirecciones botón Más Información', () => {
            url.urlBase()
            homeActions.redireccionesBotonMasInformacion()
        });    
        it('Silder Carrusel - Saber más', () => {
            url.urlBase()
            homeActions.sliderCarruselSaberMas()
        });
        it('Slider Carrusel - Materiales', () => {
            url.urlBase()
            homeActions.sliderCarruselMateriales()
        });
        
    });


}