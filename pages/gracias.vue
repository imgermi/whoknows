<template>
  <main class="nosotros">
  	<Top/>
  	<section class="hero">
  		<div class="container">
  			<div class="hero__content">
  				<h1 class="h__hero">Gracias por escribirnos</h1>
  				<h2 class="sub__hero">A la brevedad, nos pondremos en contacto con vos</h2>
  			</div>
  			<article class="hero__img">
        </article>
  		</div>
  	</section>
    <section class="banda"></section>
    <Trabajos/>
    <Foot/>
  </main>
</template>

<script>
import Top from '~/components/Top.vue'
import Trabajos from '~/components/Trabajos.vue'
import Foot from '~/components/Foot.vue'

export default {
  components: {
    Top,
    Trabajos,
    Foot
  },
  data () {
    return {
      title: 'Contacto | WhoKnows Agency - Agencia de Diseño y Marketing',
      description: 'Completá el formulario y nos pondremos en contacto. Si preferís, nos podés escribir a info@thewhoknows.com / Somos una agencia digital de diseño y marketing con enfoque en productos digitales, ads & social media.'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description},
        { property: 'og:url', content: 'https://thewhoknows.com/contacto' },
      ],
      link: [
        { rel: 'canonical', href: 'https://thewhoknows.com/contacto' },
      ],
    }
  }
};
</script>
