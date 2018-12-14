<template>
  <main>
  	<Top/>
  	<section class="hero">
  		<div class="container">
  			<div class="hero__content">
  				<h1>Identificamos lo que te separa de tus clientes.</h1>
  				<h2>Somos una agencia digital. Hacemos propuestas digitales para escalar tu negocio.</h2>
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
