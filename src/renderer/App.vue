<template lang="pug">
  div#app
    v-app
      Navigation
      v-content
        v-container(fluid)
          transition(mode="out-in" name="fade" enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster")
            router-view
</template>

<script>
  import Navigation from './components/Navigation'

  export default {
    name: 'gsc-gui',
    components: { Navigation },
    data() {
      return {
        drawer: false,
        clipped: true,
      }
    },
  };
</script>

<style>
  /* CSS */
</style>
