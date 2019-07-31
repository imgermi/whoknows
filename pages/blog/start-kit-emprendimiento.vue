<template>
	<main class="blog-post">
		<Top/>
		<section class="hero">
			<div class="container">
				<div class="hero__content">
					<h1 class="h__hero">Un start kit para empezar con tu emprendimiento</h1>
					<h2 class="sub__hero">31/7/19 - Congreso Latinoamericano de Diseño - Universidad de Palermo - Por <a href="https://instagram.com/imgermi" target="_blank">Germi</a> y <a href="https://instagram.com/adigitalboy" target="_blank">Alex</a></h2>
				</div>
			</div>
		</section>
		<section class="banda blog-body">
			<div class="container">
				<h3>Presentación</h3>
				<p>Para ver la presentación que proyectamos durante la charla, <a href="https://www.dropbox.com/s/ult3rd8ird0acfd/start_kit_emprendimiento_WK.pdf?dl=0" target="_blank">hacé click aquí</a></p>
				<h3>Libros recomendados</h3>
				<ul>
					<li><a href="https://www.amazon.com/Messy-Middle-Finding-Through-Hardest/dp/0735218072" target="_blank">The Messy Middle - Scott Belsky (fundador de Behance)</a></li>
					<li><a href="https://www.amazon.com/Hard-Thing-About-Things-Building-ebook/dp/B00DQ845EA/ref=sr_1_1?crid=3LBPD0EDE2AD7&keywords=the+hard+thing+about+hard+things&qid=1564573473&s=books&sprefix=the+hard+thing+about%2Cstripbooks-intl-ship%2C286&sr=1-1" target="_blank">The Hard Thing About Hard Things: Building a business when there are no easy answers - Ben Horowitz</a></li>
					<li><a href="https://www.amazon.com/Building-StoryBrand-Clarify-Message-Customers-ebook/dp/B06XFJ2JGR/ref=sr_1_1?keywords=storybrand+brandscript&qid=1564573505&s=books&sr=1-1" target="_blank">Building a StoryBrand: Clarify Your Message So Customers Will Listen - Donald Miller</a></li>
				</ul>
				<h3>Cuentas de Instagram mencionadas</h3>
				<ul>
					<li><a href="https://www.instagram.com/soyamodecasa/" target="_blank">@soyamodecasa</a></li>
					<li><a href="https://www.instagram.com/ferminbo/" target="_blank">@ferminbo</a></li>
					<li><a href="https://www.instagram.com/dr.larosa/" target="_blank">@dr.larosa</a></li>
					<li><a href="https://www.instagram.com/vendexainteriores/" target="_blank">@vendexainteriores</a></li>
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
      title: 'Start Kit para empezar con tu emprendimiento | WhoKnows Agency',
      description: 'Un listado de recursos a partir de la charla que dimos en el Congreso Latinoamericano de Diseño, en la Universidad de Palermo. Por Alejandro Aboy y Juan Germano.'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description},
        { property: 'og:url', content: 'https://thewhoknows.com/blog/start-kit-emprendimiento' },
        { property: 'og:image', content: 'https://www.gramto.com/app/assets/uploads/158683/zobesoxo-5ce55fb4c8ebf.jpg' },
        { name: 'twitter:image', content: 'https://www.gramto.com/app/assets/uploads/158683/zobesoxo-5ce55fb4c8ebf.jpg' },
      ],
      link: [
        { rel: 'canonical', href: 'https://thewhoknows.com/blog/start-kit-emprendimiento' },
      ],
    }
  }
};
</script>