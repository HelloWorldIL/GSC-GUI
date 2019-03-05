<template lang="pug">
  v-list-tile(:to='route')
    v-list-tile-action
      v-icon() {{icon}}
    v-list-tile-content
      v-list-tile-title {{title}}
</template>

<script>
export default {
  props: ['title', 'icon', 'route'],
}
</script>

<style lang="sass">
.theme--light.v-divider
  border-color: rgba(255,255,255,.5) !important
  width: calc(100% - 30px)
  margin-left: 15px
</style>
