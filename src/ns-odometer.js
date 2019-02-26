import NsOdometer from './components/ns-odometer.vue'

export default {
	install(Vue, options) {
		Vue.component(NsOdometer.name, NsOdometer)
	}
}
