<template>
	<main class="trabajo">
		<Top/>
		<section class="hero">
			<div class="container">
				<div class="hero__content">
					<h1 class="h__hero">Error 404</h1>
					<h2 class="sub__hero" style="max-width: 600px">Ups, la página que estás buscando no existe. Pero no te asustes, podés <nuxt-link to="/" class="btn-underlined">volver al inicio</nuxt-link> y empezar de nuevo.</h2>
				</div>
			</div>
		</section>
		<section class="banda banda-last">
			<div class="container">
				<h3 class="h__section text-center">Proyectos destacados</h3>
				<div class="index__trabajos">
				  <article class="caseStudy">
				    <nuxt-link to="/trabajos/vendexa">
				      <img src="~assets/images/trabajos/vendexa/mock-small.jpg" alt="">
				      <div class="caseStudy__text">
				        <p class="caseStudy__text--h">Vendexa</p>
				        <span class="caseStudy__text--sub">Diseño, Ecommerce</span>
				      </div>
				    </nuxt-link>
				  </article>
				  <article class="caseStudy">
				    <nuxt-link to="">
				      <img src="~assets/images/trabajos/enchufarte/mock-small.jpg" alt="">
				      <div class="caseStudy__text">
				        <p class="caseStudy__text--h">Enchufarte</p>
				        <span class="caseStudy__text--sub">Próximamente</span>
				      </div>
				    </nuxt-link>
				  </article>
				</div>
				<div class="text-center">
				  <nuxt-link to="/trabajos" class="btn">Ver más proyectos</nuxt-link>
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
      title: 'Error 404 | WhoKnows - Agencia Digital',
      description: 'Ups, la página que estás buscando no existe. Pero no te asustes, podés volver al inicio y empezar de nuevo. Somos una agencia digital.'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description},
        { property: 'og:url', content: 'https://thewhoknows.com/404' },
      ]
    }
  }
};
</script>