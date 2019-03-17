<template lang="pug">
  v-data-table(:headers="this.$store.state.houseKeeping.overview.headers" :items="items" hide-actions)
    template(v-slot:items="props")
      tr(:class="{ inRange: props.item.inRange, notInRange: !props.item.inRange}")
        td() {{ props.item.id }}
        td() {{ props.item.name }}
        td() {{ props.item.value }}
        td() {{ props.item.unit }}
        td() {{ props.item.range }}
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    items() {
      const items = []
      this.$store.state.packets.types.forEach((type) => {
        const packetTemp = this.$store.getters.getLatestPacketById(type.id)
        items.push({
          id: type.id,
          value: packetTemp.value,
          name: type.name,
          unit: type.unit,
          range: `${type.rangeMin}-${type.rangeMax}`,
          inRange: this.$store.getters.isPacketInRange(packetTemp),
        })
      });
      return items
    },
  },
}
</script>

<style lang="sass">
.inRange
  background-color: #4CAF50 !important
  color: white
.inRange:hover
  background-color: #66BB6A !important
.notInRange
  color: white
  background-color: #F44336 !important
.notInRange:hover
  background-color: #EF5350 !important
</style>
