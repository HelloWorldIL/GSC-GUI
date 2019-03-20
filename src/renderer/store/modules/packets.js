import { Packet } from '../../modals/packet.ts'

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
    new Packet(205, 50.1, 'placeHolder'),
    new Packet(206, 8.0, 'placeHolder'),
    new Packet(205, 4.0, 'placeHolder'),
  ],
}

const getters = {
  getLatestPacketById: state => id => state.packets.find(packet => packet.id === id),
}

export default {
  state,
  getters,
}
