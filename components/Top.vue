<template>
	<header>
		<div class="container">
			<nuxt-link to="/"><img src="~assets/images/whoknows-n.svg" alt="WhoKnows"></nuxt-link>
			<nav>
				<button :class="'hamburger hamburger--spin hamburger--collapse' + (menuActivo ? ' is-active' : '')" type="button" v-on:click="toggleMenu">
				  <span class="hamburger-box">
				    <span class="hamburger-inner"></span>
				  </span>
				</button>
				<ul :class="menuActivo ? 'is-active' : ''">
					<li>
						<nuxt-link to="/">Inicio</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/nosotros">Nosotros</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/trabajos">Trabajos</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/blog">Blog</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/contacto">Contacto</nuxt-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
	export default {
		data () {
			return {
				menuActivo: false
			}
		},
		methods: {
			toggleMenu: function () {
			  this.menuActivo = !this.menuActivo
			},
		}
	};
</script>