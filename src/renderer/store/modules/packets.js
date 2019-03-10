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
  ],
}

const getters = {
  getLatestPacketById: state => id => state.packets.find(packet => packet.id === id),
}

export default {
  state,
  getters,
}
