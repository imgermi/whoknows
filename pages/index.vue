<template>
  <main class="index">
  	<Top/>
  	<section class="hero">
  		<div class="container">
  			<div class="hero__content">
  				<h1 class="h__hero">Identificamos lo que te <br> separa de tus clientes.</h1>
  				<h2 class="sub__hero">Somos una agencia digital. Hacemos propuestas <br> digitales para escalar tu negocio.</h2>
  			</div>
  			<article class="hero__img">
          <img src="~assets/images/hero/index-responsive.jpg" alt="">
        </article>
  		</div>
  	</section>
  	<section class="banda banda-first">
  		<div class="container">
  			<h3 class="h__section text-center">¿Te identificás con estas preguntas?</h3>
        <ul class="faq">
          <li>¿No llegás a tu público en internet?</li>
          <li>¿Creés que tu sitio web no sirve para nada?</li>
          <li>¿No vendés con tu tienda online?</li>
          <li>¿Necesitás darle vida a una marca?</li>
          <li>¿No usás un funnel de ventas online?</li>
          <li>¿El lanzamiento de tu app te genera estrés e incertidumbre?</li>
        </ul>
        <p class="faq-answer text-center">Nuestros clientes si, y podemos contarte cómo hicimos <br> para ayudarlos a través de diseño y marketing digital.</p>
        <h3 class="h__section text-center">Un caso, una solución</h3>
        <div class="index__trabajos">
          <article class="caseStudy">
            <nuxt-link to="/trabajos/cambioar">
              <img src="~assets/images/trabajos/cambioar/cambioar-comprar-dolares-preview-small.jpg" alt="">
              <div class="caseStudy__text">
                <p class="caseStudy__text--h">CambioAR</p>
                <span class="caseStudy__text--sub">UX/UI, UI Development</span>
              </div>
            </nuxt-link>
          </article>
          <article class="caseStudy">
            <nuxt-link to="/trabajos/teaandtequila">
              <img src="~assets/images/trabajos/teaandtequila/teaandtequilatrading_preview-small.jpg" alt="">
              <div class="caseStudy__text">
                <p class="caseStudy__text--h">Tea&Tequila Trading</p>
                <span class="caseStudy__text--sub">Facebooks Ads</span>
              </div>
            </nuxt-link>
          </article>
        </div>
        <div class="text-center">
          <nuxt-link to="/trabajos" class="btn">Ver más proyectos</nuxt-link>
        </div>
  		</div>
  	</section>
    <section class="banda banda-last index__nosotros">
      <div class="container">
        <h3 class="h__section text-center">¿Qué es WhoKnows?</h3>
        <div class="index__nosotros--content">
          <p class="p__highlight">No creemos en las recetas mágicas, porque si bien creés que sabés lo que necesitás, es muy probable que necesites algo diferente. No ofrecemos paquetes de servicios con precio fijo, simplemente buscamos la mejor forma de acercarte a tus clientes.</p>
          <nuxt-link to="/nosotros" class="btn">Conocenos</nuxt-link>
        </div>
      </div>
    </section>
    <Contact/>
    <Foot/>
  </main>
</template>

<script>
import Top from '~/components/Top.vue'
import Contact from '~/components/Contact.vue'
import Foot from '~/components/Foot.vue'

export default {
  components: {
    Top,
    Contact,
    Foot
  },
  data () {
    return {
      title: 'WhoKnows Agency - Agencia de Diseño y Marketing',
      description: 'Identificamos lo que te separa de tus clientes. Somos una agencia digital de diseño y marketing con enfoque en productos digitales, ads & social media.'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description},
        { property: 'og:image', content: '/metas/generic.jpg' },
        { property: 'og:url', content: 'https://thewhoknows.com' },
      ],
      link: [
        { rel: 'canonical', href: 'https://thewhoknows.com' },
      ],
    }
  }
};
</script>
