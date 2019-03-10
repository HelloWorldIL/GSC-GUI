<template lang="pug">
div()
  transition(mode="out-in" name="fade" enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster")
    router-view()
  v-bottom-nav(:active.sync="bottomNav")
    v-btn(flat color="indigo" value="overview" to="/housekeeping/overview")
      span HouseKeeping Overview
      v-icon pageview
    v-btn(flat color="indigo" value="main" to="/housekeeping/main")
      span HouseKeeping
      v-icon() home
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      bottomNav: 'overview',
    }
  },
};
</script>
