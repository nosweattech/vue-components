<template>
	<div class="ns-odometer" v-scroll="handleScroll"></div>
</template>

<script>
import Odometer from 'odometer'
export default {
	name: 'ns-odometer',
	props: { initial: { default: 0 }, value: {} },
	data() {
		return {
			od: null
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.od = new Odometer({
				el: this.$el,
				value: this.default,
				format: '(,ddd)'
				// format: that.format,
				// theme: that.theme,
				// duration: that.duration,
				// animation: that.animation,
				// formatFunction: that.formatFunction
			})
		})
	},
	methods: {
		handleScroll(evt, el) {
			if (this.inView(el)) {
				console.log('in view')
				this.od.update(this.value)
				return true
			}
		},
		inView(el) {
			var rect = el.getBoundingClientRect()

			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <=
					(window.innerHeight ||
						document.documentElement
							.clientHeight) /*or $(window).height() */ &&
				rect.right <=
					(window.innerWidth ||
						document.documentElement
							.clientWidth) /*or $(window).width() */
			)
		}
	}
}
</script>

<style lang="scss" scoped>
@import '~odometer/themes/odometer-theme-default.css';
:root {
	.odometer {
		font-size: 30px;
	}
}
</style>