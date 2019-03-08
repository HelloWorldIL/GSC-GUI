<template lang="pug">
  v-data-table(:headers="this.$store.state.houseKeeping.headers" :items="items" hide-actions)
    template(v-slot:items="props")
      td(:class="{ inRange: props.item.inRange }") {{ props.item.id }}
      td(:class="{ inRange: props.item.inRange }") {{ props.item.name }}
      td(:class="{ inRange: props.item.inRange }") {{ props.item.value }}
      td(:class="{ inRange: props.item.inRange }") {{ props.item.unit }}
      td(:class="{ inRange: props.item.inRange }") {{ props.item.range }}
</template>

<script>
export default {
  data() {
    return {
      items2s: [
        {
          id: '205',
          name: 'Batt_volt',
          value: 8.0,
          unit: 'V',
          range: '7-10',
          inRange: true,
        },
        {
          id: '205',
          name: 'Batt_volt',
          value: 5,
          unit: 'V',
          range: '7-10',
          inRange: false,
        },
      ],
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
          inRange: !(packetTemp.value > type.rangeMax || packetTemp.value < type.rangeMin),
        })
      });
      return items
    },
  },
}
</script>

<style lang="sass" scoped>
.inRange
  background-color: #4CAF50
  color: white
</style>
