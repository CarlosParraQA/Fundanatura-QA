import { blogElements } from "../elements/elements";
import { normalice } from "../support/commands";

class blogsActions {
    validarTituloLanding() {
        cy.fixture('blogs').then((data) => {
            blogElements.tituloLanding().should('have.text', data.principal)
        })
    }
    primerBlog() {
        cy.fixture('blogs').then((data) => {
            blogElements.titulosBlogs().eq(2).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.titulo1));});
            blogElements.textosBlogs().eq(0).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.texto1));});
        })
        blogElements.botonesBlog().eq(0).invoke('removeAttr', 'target').click()
        cy.url().should('include', '/solucion-rapida-para-sanar-tu-estomago/')
    }
    segundoBlog() {
        cy.fixture('blogs').then((data) => {
            blogElements.titulosBlogs().eq(3).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.titulo2));});
            blogElements.textosBlogs().eq(1).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.texto2));});
            blogElements.botonesBlog().eq(1).invoke('removeAttr', 'target').click()
            cy.url().should('include', '/como-desintoxicar-tu-cuerpo/')
        }) 
    }
    tercerBlog() {
        cy.fixture('blogs').then((data) => {   
            blogElements.titulosBlogs().eq(4).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.titulo3));});
            blogElements.textosBlogs().eq(2).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.texto3));});
            blogElements.botonesBlog().eq(2).invoke('removeAttr', 'target').click()
            cy.url().should('include', '/como-recuperar-el-control-de-tu-glicemia/')
        })
    }
    cuartoBlog() {
        cy.fixture('blogs').then((data) => {
            blogElements.titulosBlogs().eq(5).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.titulo4));});
            blogElements.textosBlogs().eq(3).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.texto4));});
            blogElements.botonesBlog().eq(3).invoke('removeAttr', 'target').click()
            cy.url().should('include', '/como-mejorar-las-defensas-y-bajar-la-inflamacion-2/')
        })
    }
    quintoBlog() {
        cy.fixture('blogs').then((data) => {
            blogElements.titulosBlogs().eq(6).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.titulo5));});
            blogElements.textosBlogs().eq(4).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.texto5));});
            blogElements.botonesBlog().eq(4).invoke('removeAttr', 'target').click()
            cy.url().should('include', '/como-recuperar-tu-salud-gastrointestinal/')
        })
    }
    sextoBlog() {
        cy.fixture('blogs').then((data) => {
            blogElements.titulosBlogs().eq(7).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.titulo6));});
            blogElements.textosBlogs().eq(5).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.texto6));});
            blogElements.botonesBlog().eq(5).invoke('removeAttr', 'target').click()
            cy.url().should('include', '/como-reducir-las-tensiones-musculares-2/')
        })
    }
    septimoBlog() {
        cy.fixture('blogs').then((data) => {
            blogElements.titulosBlogs().eq(8).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.titulo7));});
            blogElements.textosBlogs().eq(6).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.texto7));});
            blogElements.botonesBlog().eq(6).invoke('removeAttr', 'target').click()
            cy.url().should('include', 'https://fundanatura.com/como-resucitar-tu-tiroides-y-aumentar-tu-metabolismo/')
        })
    }
    octavoBlog() {
        cy.fixture('blogs').then((data) => {
            blogElements.titulosBlogs().eq(9).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.titulo8));});
            blogElements.textosBlogs().eq(7).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.texto8));});
            blogElements.botonesBlog().eq(7).invoke('removeAttr', 'target').click()
            cy.url().should('include', '/como-sanar-tu-sistema-cardiovascular-2/')
        })
    }   
    novenoBlog() {
        cy.fixture('blogs').then((data) => {
            blogElements.titulosBlogs().eq(10).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.titulo9));});
            blogElements.textosBlogs().eq(8).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.texto9));});
            blogElements.botonesBlog().eq(8).invoke('removeAttr', 'target').click()
            cy.url().should('include', '/dieta-para-la-limpieza-de-la-vesicula/')
        })
    }
    decimoBlog() {
        cy.fixture('blogs').then((data) => {
            blogElements.titulosBlogs().eq(11).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.titulo10));});
            blogElements.textosBlogs().eq(9).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.texto10));});
            blogElements.botonesBlog().eq(9).invoke('removeAttr', 'target').click()
            cy.url().should('include', '/como-usar-los-omega-3-para-mejorar-tu-salud/')
        })
    }
    onceavoBlog() {
        cy.fixture('blogs').then((data) => {
            blogElements.titulosBlogs().eq(12).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.titulo11));});
            blogElements.textosBlogs().eq(10).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.texto11));});
            blogElements.botonesBlog().eq(10).invoke('removeAttr', 'target').click()
            cy.url().should('include', '/mi-cuenta/como-bailar-con-el-estres/')
        })
    }
    doceavoBlog() {
        cy.fixture('blogs').then((data) => {
            blogElements.titulosBlogs().eq(13).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.titulo12));});
            blogElements.textosBlogs().eq(11).invoke('text').then(text => {expect(normalice(text)).to.contain(normalice(data.texto12));});
            blogElements.botonesBlog().eq(11).invoke('removeAttr', 'target').click()
            cy.url().should('include', '/glosario/')
        })
    }
}

module.exports = new blogsActions();