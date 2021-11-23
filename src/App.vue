
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Counter />
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    Counter
  }
}
</script>

<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 0 
}
</style>


