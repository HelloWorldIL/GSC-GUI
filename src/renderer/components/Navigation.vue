<template lang="pug">
nav
  v-navigation-drawer(v-model="drawer" app)
    v-img(class="fill-height" position="60%" :src="require('@/assets/oa7.jpg')" )
      v-list(dark class="fill-height column darken")
        v-list-tile
          v-list-tile-content
            v-list-tile-title Ground Station Managment
        v-divider(light)
        drawerItem(v-for="navItem in $store.state.navigation.routes" :title="navItem.title" :icon="navItem.icon" :route="navItem.link")
  v-toolbar(color="transparent" app)
    v-toolbar-side-icon(@click="drawer = !drawer")
    v-toolbar-title() {{this.$route.name}}
    v-spacer
    v-btn(flat round) Command Catalog
</template>

<script lang="ts">
import drawerItem from './Navigation/drawerItem.vue'
export default {
  components: {
    drawerItem,
  },
  name: 'Navigation',
  data() {
    return {
      drawer: true,
    }
  },
  computed: {
    test() {
      return this.$store.state.navigation.routes[0].title
    },
  },
}
</script>

<style lang="sass" scoped>
.darken
  background: rgba(27,27,27,.64)
</style>
