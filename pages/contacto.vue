<template>
  <main class="contacto">
  	<Top/>
  	<section class="hero">
  		<div class="container">
  			<div class="hero__content">
  				<h1 class="h__hero">Hola, te <br> estábamos esperando</h1>
  				<h2 class="sub__hero">Completá el formulario y nos pondremos en contacto. Si preferís, nos podés escribir a info@thewhoknows.com</h2>
  			</div>
  			<article class="hero__img">
          <form action="">
            <div class="group">
              <input type="text" name="nombre" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>¿Cómo te llamás?</label>
            </div>
            <div class="group">
              <input type="email" name="email" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>¿Cómo es tu email?</label>
            </div>
            <div class="group">
              <input type="text" name="empresa" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>El nombre de tu empresa</label>
            </div>
            <div class="group">
              <input type="number" name="presupuesto" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>¿Cuál es tu presupuesto aproximado?</label>
            </div>
            <div class="group">
              <textarea name="mensaje" rows="5" required></textarea>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Contanos sobre tu proyecto</label>
            </div>
            <button type="submit" class="btn">Enviar</button>
          </form>   
        </article>
  		</div>
  	</section>
  	<section class="banda"><div class="container"></div></section>
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
