<template>
  <main>
  	<Top/>
  	<section class="hero">
  		<div class="container">
  			<div class="hero__content">
  				<h1 class="h__hero">Dudas. Propuestas. <br> Ejecuciones. Resultados.</h1>
  				<h2 class="sub__hero">Lo que pasa después de 243.666 mails, varias <br> reuniones y mucho feedback.</h2>
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
