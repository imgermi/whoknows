<template>
	<main class="trabajo">
		<Top/>
		<section class="hero">
			<div class="container">
				<div class="hero__content">
					<h1 class="h__hero">Vendexa</h1>
					<h2 class="sub__hero">Mezclando raíces históricas con diseño de interiores</h2>
				</div>
			</div>
		</section>
		<section class="trabajo__banner">
			<img src="~assets/images/trabajos/vendexa/mock-banner.jpg" alt="Vendexa Interiores">
		</section>
		<section class="banda banda-first banda-last trabajo__text">
			<div class="container">
				<div class="row">
					<div class="col-6">
						<h3 class="trabajo__text--h">Sensaciones de <br> una vida rural</h3>
						<ul class="trabajo__text--tasks">
							<p>Lo que hicimos:</p>
							<li>Web Design</li>
							<li>Wordpress Development</li>
						</ul>
					</div>
					<div class="col-6">
						<p class="trabajo__text--p">Vendexa Interiores es una start-up emergente, nacida en Buenos Aires en pleno 2018. Fundada por una diseñadora de interiores con gran experiencia en remodelación de espacios, el objetivo de la misma era comenzar a comercializar productos físicos a través de una tienda online.</p>
						<p class="trabajo__text--p">Contando con una gran cantidad de trasfondo familiar, la empresa buscaba volcar toda la historia de la fundadora sobre un branding que recorra toda la tienda y sus respectivas partes.</p>
						<a href="https://vendexainteriores.com" target="_blank" class="btn">Visitar sitio</a>
					</div>
				</div>
			</div>
		</section>
		<section class="trabajo__banner">
			<img src="~assets/images/trabajos/vendexa/tripage-banner.jpg" alt="Vendexa Interiores">
		</section>
		<section class="banda banda-first banda-last trabajo__text">
			<div class="container">
				<div class="row">
					<div class="col-6">
						<h3 class="trabajo__text--h">El problema</h3>
					</div>
					<div class="col-6">
						<p class="trabajo__text--p">Vendexa se acercó a WhoKnows con un objetivo claro: “queremos vender nuestros productos, pero que nuestra impronta familiar pueda generar un valor agregado en el sitio. Queremos que las personas se enamoren de la historia de Vendexa”.</p>
						<p class="trabajo__text--p">Trabajando a partir de la marca, que ya se encontraba desarrollada, nos enfocamos pura y exclusivamente en generar contenido que se pueda alinear con los ideales que tenía la empresa, y, una vez alcanzado el resultado final, lograr generar un desarrollo de branding que funcione eficazmente.</p>
					</div>
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
  }
};
</script>