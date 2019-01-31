<template>
  <main>
  	<Top/>
  	<section class="hero">
  		<div class="container">
  			<div class="hero__content">
  				<h1 class="h__hero">Dudas. Propuestas. <br> Ejecuciones. Resultados.</h1>
  				<h2 class="sub__hero">Lo que pasa después de 2350 mails, varias <br> reuniones y mucho feedback.</h2>
  			</div>
  			<article class="hero__img"></article>
  		</div>
  	</section>
  	<section class="banda banda-first banda-last">
  		<div class="container">
        <article class="caseStudy-xl">
          <div class="caseStudy-xl__content">
            <h5 class="h__section">MRU</h5>
            <p class="caseStudy-xl__content--p">Una estrategia de Shopify para una tienda online de Mexico, basada en optimizar ventas y explotar la inversión de Facebook Ads con funnels de conversión.</p>
            <nuxt-link to="" class="btn disabled">Próximamente</nuxt-link>
          </div>
          <nuxt-link to="" class="caseStudy-xl__img">
            <img src="~assets/images/trabajos/mru/mock.jpg" alt="">
          </nuxt-link>
        </article>
        <article class="caseStudy-xl">
          <div class="caseStudy-xl__content">
            <h5 class="h__section">Vendexa</h5>
            <p class="caseStudy-xl__content--p">Una tienda online para un emprendimiento familiar de Argentina, enfocado en el diseño de interiores.</p>
            <nuxt-link to="/trabajos/vendexa" class="btn">Ver caso</nuxt-link>
          </div>
          <nuxt-link to="/trabajos/vendexa" class="caseStudy-xl__img">
            <img src="~assets/images/trabajos/vendexa/mock.jpg" alt="">
          </nuxt-link>
        </article>
        <article class="caseStudy-xl">
          <div class="caseStudy-xl__content">
            <h5 class="h__section">Enchufarte</h5>
            <p class="caseStudy-xl__content--p">Enchufando al arte mexicano a través de Ads y estrategias de Ecommerce.</p>
            <nuxt-link to="/trabajos/enchufarte" class="btn">Ver caso</nuxt-link>
          </div>
          <nuxt-link to="/trabajos/enchufarte" class="caseStudy-xl__img">
            <img src="~assets/images/trabajos/enchufarte/mock.jpg" alt="">
          </nuxt-link>
        </article>
        <article class="caseStudy-xl">
          <div class="caseStudy-xl__content">
            <h5 class="h__section">Legister</h5>
            <p class="caseStudy-xl__content--p">Una web/mobile app y una campaña de lanzamiento para una fundación Argentina enfocada en el ámbito jurídico.</p>
            <nuxt-link to="" class="btn disabled">Próximamente</nuxt-link>
          </div>
          <nuxt-link to="" class="caseStudy-xl__img">
            <img src="~assets/images/trabajos/legister/mock.jpg" alt="">
          </nuxt-link>
        </article>
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
      title: 'Trabajos | WhoKnows - Agencia Digital',
      description: 'Dudas. Propuestas. Ejecuciones. Resultados. Lo que pasa después de 243.666 mails, varias reuniones y mucho feedback. Somos una agencia digital.'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description},
        { property: 'og:url', content: 'https://thewhoknows.com/trabajos' },
      ],
      link: [
        { rel: 'canonical', href: 'https://thewhoknows.com/trabajos' },
      ],
    }
  }
};
</script>
