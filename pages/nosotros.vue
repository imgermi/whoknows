<template>
  <main>
  	<Top/>
  	<section class="hero">
  		<div class="container">
  			<div class="hero__content">
  				<h1 class="h__hero">¿Qué es WhoKnows?</h1>
  				<h2 class="sub__hero">Todas las personas necesitan ocupar un espacio en el mundo digital. Nos encanta encontrarlos junto a nuestros clientes.</h2>
  			</div>
  			<article class="hero__img"></article>
  		</div>
  	</section>
  	<section class="banda">
  		<div class="container">
  			
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
  }
};
</script>
