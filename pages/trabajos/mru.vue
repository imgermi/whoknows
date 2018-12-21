<template>
	<main class="trabajo mru">
		<Top/>
		<section class="hero">
			<div class="container">
				<div class="hero__content">
					<h1 class="h__hero">MR.U</h1>
					<h2 class="sub__hero">Una forma de darle personalidad a tu ropa interior</h2>
				</div>
			</div>
		</section>
		<section class="trabajo__banner">
			<img src="~assets/images/trabajos/mru/mock-banner.jpg" alt="MR.U">
		</section>
		<section class="banda banda-first banda-last trabajo__text">
			<div class="container">
				<div class="row">
					<div class="col-6 left">
						<h3 class="trabajo__text--h">Consolidando potenciales compradores de MR.U a través de diferentes etapas</h3>
						<ul class="trabajo__text--tasks">
							<p>Lo que hicimos:</p>
							<li>Funnel Facebook Ads + Google Ads</li>
						</ul>
					</div>
					<div class="col-6 right">
						<p class="trabajo__text--p">MR.U nace como una propuesta que busca romper con lo estándar de la ropa interior masculina. Con diseños cool, innovadores, de máxima calidad y el mejor algodón proveniente de Perú y Portugal, MR.U busca darte todos los motivos para que dejes de llevar los pantalones.</p>
						<p class="trabajo__text--p">¿Y si esto no nos pareciera suficiente y además quisiéramos que los compres a un precio más que razonable?</p>
					</div>
				</div>
			</div>
		</section>
		<section class="trabajo__banner">
			<img src="~assets/images/trabajos/mru/checkout.jpg" alt="MR.U">
		</section>
		<section class="banda banda-first banda-last trabajo__text">
			<div class="container">
				<div class="row">
					<div class="col-6 left">
						<h3 class="trabajo__text--h">El problema</h3>
					</div>
					<div class="col-6 right">
						<p class="trabajo__text--p">Los últimos 10 días de cada mes, las ventas caían y no se encontraba un rumbo claro para poder contrarrestar esa situación, por lo que había que descubrir la forma de generar urgencia y producir mayor cantidad de tickets para aumentar la tasa de conversión.</p>
					</div>
				</div>
			</div>
		</section>
		<section class="trabajo__banner">
			<img src="~assets/images/trabajos/mru/fb-ads.jpg" alt="MR.U">
		</section>
		<section class="banda banda-first banda-last trabajo__text">
			<div class="container">
				<div class="row">
					<div class="col-6 left">
						<h3 class="trabajo__text--h">El proceso y sus resultados</h3>
					</div>
					<div class="col-6 right">
						<p class="trabajo__text--p">Desarrollamos un funnel de Facebook Ads y Google Ads para producir tráfico al sitio y sub-segmentar esos públicos según colecciones de productos y comportamientos digitales. Ya no realizabamos únicamente el A/B testing tradicional, sino que segmentabamos a usuarios que muestren formas de comportamiento para comprar online.</p>
						<p class="trabajo__text--p">La principal pregunta fue: “¿Cómo aumentamos la tasa de conversión en un momento del mes donde prácticamente no existe una frecuencia de compra?”</p>
						<p class="trabajo__text--p">
							<span>Creamos 3 etapas para los usuarios:</span>
							<ul>
								<li>Generar costos por clics bajos para presentar las diferentes colecciones y realizar retargeting hacia los contenidos que la marca iba publicando en sus feeds de Facebook y Instagram.</li>
								<li>Generar costos bajos por carritos agregados, de forma que los usuarios que ya hayan mostrado interés puedan ser los que luego vean más características y beneficios de los productos.</li>
								<li>Generar costos bajos de compra, para que únicamente los que hayan mostrado interés previamente reciban un descuento especial para concretar su transacción.</li>
							</ul>
						</p>
						<p class="trabajo__text--p">Google Ads cumplió la función de generar tráfico al sitio para aumentar las visitas, Facebook Ads se utilizó para concretar esos esfuerzos de tráfico, generar agregados al carrito y finalizar el proceso de compra para los que lo habían abandonado.</p>
						<p class="trabajo__text--p"><strong>A lo largo de 10 días, buscamos aumentar la frecuencia de venta a través de un funnel basado en descuentos. A los usuarios que habían iniciado el pago en un tiempo menor a 7 días se les mostraba un descuento mayor que los que lo habían hecho hace 3 días.</strong></p>
					</div>
				</div>
			</div>
		</section>
		<section class="trabajo__banner">
			<img src="~assets/images/trabajos/mru/resultado.jpg" alt="MR.U">
		</section>
		<section class="banda banda-first trabajo__testimonio">
			<div class="container">
				<article>
					<p>“Working with Ueno has been invaluable to the progression of our brand’s visual identity. The design guidance they provide has exceeded our expectations and gives us an impressive standard that we are proud to uphold.”</p>
					<figure>
						<img src="~assets/images/trabajos/mru/testimonio.jpg" alt="Imagen de perfil - Ángela Vilches">
						<figcaption>
							<span>Ángela Vilches</span>
							<small>Fundadora</small>
						</figcaption>
					</figure>
				</article>
			</div>
		</section>
		<section class="banda banda-last">
			<div class="container">
				<h3 class="h__section text-center">Proyectos relacionados</h3>
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
				    <nuxt-link to="/trabajos/enchufarte">
				      <img src="~assets/images/trabajos/enchufarte/mock-small.jpg" alt="">
				      <div class="caseStudy__text">
				        <p class="caseStudy__text--h">Enchufarte</p>
				        <span class="caseStudy__text--sub">Ecommerce, Ads</span>
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
  head: {
    title: 'MR.U | WhoKnows - Agencia Digital',
    meta: [
      { hid: 'description', name: 'description', content: '' }
    ]
  }
};
</script>