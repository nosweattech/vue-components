import Vue from 'vue'
import NSOdometer from './Odometer.vue'

const Components = {
	NSOdometer
}

Object.keys(Components).forEach(name => {
	Vue.component(name, Components[name])
})

export default Components
