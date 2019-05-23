<template>
  <main class="nosotros">
  	<Top/>
  	<section class="hero">
  		<div class="container">
  			<div class="hero__content">
  				<h1 class="h__hero">Blog</h1>
  				<h2 class="sub__hero">Nos apasiona documentar nuestro recorrido <br> y proceso de trabajo. Si estás acá por la receta <br> mágica para tener una agencia creativa exitosa, <br> lamento decepcionarte: no la escribimos aún.</h2>
  			</div>
  			<article class="hero__img"></article>
  		</div>
  	</section>
    <section class="banda">
      <div class="container">
        <div class="blog__list">
          <nuxt-link to="/blog/agencia-remota-2019-diseno-marketing" class="blog__link">
            <h4>Una agencia de diseño y marketing 100% remota en 2019</h4>
            <span>22/5/19</span>
            <img class="blog__link-avatar" src="~/assets/images/blog/avatars/germi.png" alt="Juan Germano - Director de Diseño y co-founder - WhoKnows Agency">
          </nuxt-link>
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
      title: 'Blog | WhoKnows Agency - Agencia Digital',
      description: 'Nos apasiona documentar nuestro recorrido y proceso de trabajo. Si estás acá por la receta mágica para tener una agencia creativa exitosa, lamento decepcionarte: no la escribimos aún.'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description},
        { property: 'og:url', content: 'https://thewhoknows.com/blog' },
      ],
      link: [
        { rel: 'canonical', href: 'https://thewhoknows.com/blog' },
      ],
    }
  }
};
</script>
