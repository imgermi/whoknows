<template>
  <main class="nosotros">
  	<Top/>
  	<section class="hero">
  		<div class="container">
  			<div class="hero__content">
  				<h1 class="h__hero">¿Qué es WhoKnows?</h1>
  				<h2 class="sub__hero">Todas las personas necesitan ocupar un <br> espacio en el mundo digital. Nos encanta <br> encontrarlo junto a nuestros clientes.</h2>
  			</div>
  			<article class="hero__img"></article>
  		</div>
  	</section>
  	<section class="banda banda-first nosotros__intro">
  		<div class="container">
  		  <article>
          <img src="~assets/images/nosotros/team.jpg" alt="WhoKnows - Sprint">  
        </article>
        <article>
          <p class="p__highlight">Simplemente buscamos ser un medio para; no queremos ser una solución. La solución la construimos junto con el cliente, desde el minuto cero hasta los resultados.</p>
        </article>
  		</div>
  	</section>
    <section class="banda nosotros__servicios">
      <div class="container">
        <h3 class="h__section text-center">Servicios</h3>
        <div>
          <article>
            <img src="~assets/images/nosotros/product.svg" alt="Product Design">
            <h6>Product Design</h6>
            <ul>
              <li>- Branding</li>
              <li>- Websites</li>
              <li>- Apps</li>
            </ul>
          </article>
          <article>
            <img src="~assets/images/nosotros/desarrollo.svg" alt="Desarrollo">
            <h6>Desarrollo</h6>
            <ul>
              <li>- Wordpress</li>
              <li>- Shopify</li>
              <li>- PWA</li>
            </ul>
          </article>
          <article>
            <img src="~assets/images/nosotros/sm.svg" alt="Social Media">
            <h6>Social Media</h6>
            <ul>
              <li>- Community Management</li>
              <li>- Marca personal</li>
              <li>- Marketing de contenidos</li>
            </ul>
          </article>
          <article>
            <img src="~assets/images/nosotros/ads.svg" alt="Ads">
            <h6>Ads</h6>
            <ul>
              <li>- Google Ads</li>
              <li>- Facebook Ads</li>
              <li>- Twitter Ads</li>
            </ul>
          </article>
          <article>
            <img src="~assets/images/nosotros/wk.svg" alt="Quién sabe">
            <h6>Quién sabe</h6>
            <ul>
              <li>- Algo que nunca hicimos</li>
              <li>- Herramientas que nunca usamos</li>
              <li>- Proyectos que nunca imaginamos</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
    <section class="banda banda-last nosotros__team">
      <div class="container">
        <h3 class="h__section text-center">¿Quiénes somos?</h3>
        <div>
          <article>
            <img class="pp" src="~assets/images/nosotros/alex.png" alt="Alejandro Aboy">
            <h5>Alejandro Aboy</h5>
            <span>Co-Founder</span>
            <p>Separado del Marketing Digital al nacer. Se le cae una lágrima con una notificación de una venta en Shopify. Todavía no puede explicar muy bien lo que hace, pero funciona. Su sueño es asesorar a Mirko Marley cuando tenga que construir su marca personal de grande ¿Quién sabe? Quizás algún día lo logre.</p>
            <ul>
              <li>
                <a href="https://www.instagram.com/adigitalboy/" target="_blank"><img src="~assets/images/nosotros/ig.svg" alt="Instagram"></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/alejandro-aboy-a93263134/" target="_blank"><img src="~assets/images/nosotros/in.svg" alt="Linkedin"></a>
              </li>
              <li>
                <a href="https://adigitalboy.com" target="_blank"><img src="~assets/images/nosotros/web.svg" alt="Website"></a>
              </li>
            </ul>
          </article>
          <article>
            <img class="pp" src="~assets/images/nosotros/germi.png" alt="Juan Germano">
            <h5>Juan Germano</h5>
            <span>Co-Founder</span>
            <p>Diseñador de Productos. Es fanático de las interfaces e interacciones. El día que hizo su primer sitio web lloró de la emoción. Sueña con rediseñar el sitio de la AFIP y cambiarle la vida al país entero ¿Quién sabe? Quizás algún día lo logre.</p>
            <ul>
              <li>
                <a href="https://www.instagram.com/imgermi/" target="_blank"><img src="~assets/images/nosotros/ig.svg" alt="Instagram"></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/imgermi/" target="_blank"><img src="~assets/images/nosotros/in.svg" alt="Linkedin"></a>
              </li>
              <li>
                <a href="https://imgermi.com" target="_blank"><img src="~assets/images/nosotros/web.svg" alt="Website"></a>
              </li>
            </ul>
          </article>
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
      title: 'Nosotros | WhoKnows Agency - Agencia de Diseño y Marketing',
      description: 'Todas las personas necesitan ocupar un espacio en el mundo digital. Nos encanta encontrarlo junto a nuestros clientes. Agencia digital de diseño y marketing con enfoque en productos digitales, ads & social media.'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description},
        { property: 'og:url', content: 'https://thewhoknows.com/nosotros' },
      ],
      link: [
        { rel: 'canonical', href: 'https://thewhoknows.com/nosotros' },
      ],
    }
  }
};
</script>
