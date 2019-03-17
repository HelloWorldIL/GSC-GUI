<template lang="pug">
div
  v-select(:items="this.$store.getters.getPacketTypesName" v-model="type" label="Select packet type to display" outline)
  v-data-table(:headers="this.$store.state.houseKeeping.main.headers" :items="items" hide-actions)
    template(v-slot:items="props")
      tr(:class="{ inRange: props.item.inRange, notInRange: !props.item.inRange}")
        td {{ props.item.groundtime }}
        td {{ props.item.value }}
        td {{ props.item.unit }}
        td {{ props.item.range }}
</template>

<script>
export default {
  data() {
    return {
      type: this.$store.getters.getPacketTypesName[0],
    }
  },
  computed: {
    items() {
      const items = []
      this.$store.state.packets.packets.forEach((packet) => {
        const packetType = this.$store.getters.getPacketType(packet)
        if (packetType.name === this.type) {
          items.push({
            groundtime: packet.groundTime,
            value: packet.value,
            unit: packetType.unit,
            range: `${packetType.rangeMin}-${packetType.rangeMax}`,
            inRange: this.$store.getters.isPacketInRange(packet),
          })
        }
      })
      return items
    },
  },
}
</script>