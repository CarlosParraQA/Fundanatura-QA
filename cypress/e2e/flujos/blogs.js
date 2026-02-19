import blogsActions from "../../actions/blogsActions";
import url from "../../url/url";

export function blogsSuites() {
    context('Blogs - Automatizaciones', () => {
        it('Validación de título', () => {
            url.urlBlogs()
            blogsActions.validarTituloLanding()
        })
        it('Validación del primer blog', () => {
            url.urlBlogs()
            blogsActions.primerBlog()
        });
        it('Validación del segundo blog', () => {
            url.urlBlogs()
            blogsActions.segundoBlog()
        });
        it('Validación del tercer blog', () => {
            url.urlBlogs()
            blogsActions.tercerBlog()
        });
        it('Validación del cuarto blog', () => {
            url.urlBlogs()
            blogsActions.cuartoBlog()
        });
        it('Validación del quinto blog', () => {
            url.urlBlogs()
            blogsActions.quintoBlog()
        });
        it('Validación del sexto blog', () => {
            url.urlBlogs()
            blogsActions.sextoBlog()
        });
        it('Validación del septimo blog', () => {
            url.urlBlogs()
            blogsActions.septimoBlog()
        });
        it('Validación del octavo blog', () => {
            url.urlBlogs()
            blogsActions.octavoBlog()
        });
        it('Validación del noveno blog', () => {
            url.urlBlogs()
            blogsActions.novenoBlog()
        });
        it('Validación del decimo blog', () => {
            url.urlBlogs()
            blogsActions.decimoBlog()
        });
        it('Validación del onceavo blog', () => {
            url.urlBlogs()
            blogsActions.onceavoBlog()
        });
        it('Validación del doceavo blog', () => {
            url.urlBlogs()
            blogsActions.doceavoBlog()
        });
    });
}


