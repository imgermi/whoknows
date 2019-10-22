<template>
	<main class="blog-post">
		<Top/>
		<section class="hero">
			<div class="container">
				<div class="hero__content">
					<h1 class="h__hero">Framework Creativo: Cómo entender a un cliente que no sabe lo que quiere (todos)</h1>
					<h2 class="sub__hero">18/10/19 - Universidad Católica Argentina - Por <a href="https://instagram.com/imgermi" target="_blank">Germi</a> y <a href="https://instagram.com/aleaboy_" target="_blank">Alex</a></h2>
				</div>
			</div>
		</section>
		<section class="banda blog-body">
			<div class="container">
				<h3>Presentación</h3>
				<p>Para ver la presentación que proyectamos durante la charla (la completamos con varios de los post it que surgieron durante el workshop, y los resultados del mismo) <a href="https://www.dropbox.com/s/vbsokc33qc114pn/presentacion.pdf?dl=0" target="_blank">hacé click aquí</a></p>
				<h3>Libros/recursos recomendados</h3>
				<ul>
					<li><a href="https://www.youtube.com/watch?v=ZUG9qYTJMsI" target="_blank">Anuncio publicitario de Dollar Shave Club</a></li>
					<li><a href="https://www.garyvaynerchuk.com/the-garyvee-content-strategy-how-to-grow-and-distribute-your-brands-social-media-content/" target="_blank">The GaryVee Content Strategy: How to Grow and Distribute Your Brand’s Social Media Content</a></li>
					<li><a href="https://www.amazon.com/Building-StoryBrand-Clarify-Message-Customers-ebook/dp/B06XFJ2JGR/ref=sr_1_1?keywords=storybrand+brandscript&qid=1564573505&s=books&sr=1-1" target="_blank">Building a StoryBrand: Clarify Your Message So Customers Will Listen - Donald Miller</a></li>
					<li><a href="https://dotcomsecrets.com/order-form-18601957" target="_blank">DotCom Secrets - Russell Branson</a></li>
					<li><a href="https://medium.com/@funnelroyals/russell-brunson-value-ladder-441697de52a6" target="_blank">Russell Branson Value Ladder Process: The Ultimate Guide [2019]</a></li>
				</ul>
				<h3>Cuentas de Instagram mencionadas</h3>
				<ul>
					<li><a href="https://www.instagram.com/soyamodecasa/" target="_blank">@soyamodecasa</a></li>
					<li><a href="https://www.instagram.com/dr.larosa/" target="_blank">@dr.larosa</a></li>
					<li><a href="https://www.instagram.com/ajsmartdesign/" target="_blank">@ajsmartdesign</a></li>
				</ul>
				<h3>Ayuda WhoKnows, estoy perdida/o:</h3>
				<p>Nos encanta que necesites ayuda, porque sabemos que eso va a derivar en que nos hagas preguntas, y eso lo disfrutamos mucho. De la misma forma que compartimos muchas cosas durante la charla, también lo podemos hacer por otros medios.</p>
				<p>Si sos una persona curiosa que quiere ahondar en estos temas y necesitás ayuda con algo, hablanos! Sabés donde encontrarnos (ejem Instagram ejem), y somos todo oídos.</p>
			</div>
		</section>
		<Foot/>
	</main>
</template>

<script>
import Top from '~/components/Top.vue'
import Foot from '~/components/Foot.vue'

export default {
  components: {
    Top,
    Foot
  },
  data () {
    return {
      title: 'Framework Creativo | WhoKnows Agency',
      description: 'Cómo entender a un cliente que no sabe lo que quiere: recursos de la charla que dimos en la Universidad Católica Argentina, en Octubre 2019. Por Alejandro Aboy y Juan Germano.'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description},
        { property: 'og:url', content: 'https://thewhoknows.com/blog/framework-creativo-cliente-no-sabe-lo-que-quiere' },
        { property: 'og:image', content: 'https://www.gramto.com/app/assets/uploads/158683/zobesoxo-5ce55fb4c8ebf.jpg' },
        { name: 'twitter:image', content: 'https://www.gramto.com/app/assets/uploads/158683/zobesoxo-5ce55fb4c8ebf.jpg' },
      ],
      link: [
        { rel: 'canonical', href: 'https://thewhoknows.com/blog/framework-creativo-cliente-no-sabe-lo-que-quiere' },
      ],
    }
  }
};
</script>