# @nosweat/vue

@nosweat/vue is a library of components used within the nosweat organization.

# Installation

You can register individual components globally in your main.js file (for certain components like NSOdometer you'll also need to import the relevant CSS file):

```
import { NSOdometer } from '@nosweat/vue'
import '@nosweat/vue/dist/nosweat.css'
Vue.component(NSOdometer)
```

Or directly in your .vue files:

```javascript
import { NSOdometer } from '@nosweat/vue'
export default {
	components: {
		NSOdometer
	}
}
```

```css
<style lang="scss">
@import '@nosweat/vue/dist/nosweat.css';
</style>
```

# Components

`@nosweat/vue` is a library containing many helpful Vue components.

## NSOdometer

Simple vue component wrapper for the `odometer` package. Used for seamlessly transitioning numbers.

### Usage

`<NSOdometer :initial="0" :value="245"/>`

### Options

#### :initial

The initial number seen when the component is first scrolled into view. Defaults to `0`.

#### :value

The value NSOdometer should change to when it is scrolled into view.
