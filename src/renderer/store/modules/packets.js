const state = {
  types: [
    {
      name: 'temp_0',
      id: 205,
      unit: 'C',
      rangeMin: -20,
      rangeMax: 50,
    },
    {
      name: 'batt_volt',
      id: 206,
      unit: 'V',
      rangeMin: 7,
      rangeMax: 9,
    },
  ],
  packets: [
    { id: 205, value: 50.1, groundTime: 'placeHolder' },
    { id: 206, value: 8.0, groundTime: 'placeHolder' },
    { id: 205, value: 40, groundTime: 'XDD' },
  ],
}

const getters = {
  getLatestPacketById: state => id => state.packets.find(packet => packet.id === id),
  getPacketType: state => packet => state.types.find(type => packet.id === type.id),
  isPacketInRange: (state, getters) => (packet) => {
    const type = getters.getPacketType(packet)
    if (packet.value > type.rangeMax || packet.value < type.rangeMin) return false
    return true
  },
  getPacketTypesName: state => Array.from(state.types, type => type.name),
}

export default {
  state,
  getters,
}
