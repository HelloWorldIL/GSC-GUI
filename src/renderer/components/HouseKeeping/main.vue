<template lang="pug">
div
  v-select(:items="types" v-model="type" label="Select packet type to display" outline)
  v-data-table(:headers="this.$store.state.houseKeeping.main.headers" :items="this.items" hide-actions)
    template(v-slot:items="props")
      tr(:class="{ inRange: props.item.inRange, notInRange: !props.item.inRange}")
        td {{ props.item.groundtime }}
        td {{ props.item.value }}
        td {{ props.item.unit }}
        td {{ props.item.range }}
</template>

<script>
import { Packet } from '@/modals/packet.ts'

export default {
  data() {
    return {
      types: [],
      type: "",
    }
  },
  computed: {
    items() {
      const items = []
      this.$store.state.packets.packets.forEach((packet) => {
        const packetType = packet.getPacketType()
        if (packetType.name === this.type) {
          items.push({
            groundtime: packet.groundTime,
            value: packet.value,
            unit: packetType.unit,
            range: `${packetType.rangeMin}-${packetType.rangeMax}`,
            inRange: packet.isPacketInRange(),
          })
        }
      })
      return items
    },
  },
  created() {
    /* eslint-disable no-console */
    this.types = Packet.TypesNames
    /* eslint-enable no-console */
  },
}
</script>