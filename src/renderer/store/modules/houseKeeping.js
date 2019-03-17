const state = {
  overview: {
    headers: [
      { text: '#', value: 'id', sortable: false },
      { text: 'Name', sortable: false, value: 'name' },
      { text: 'Value', value: 'value' },
      { text: 'Unit', value: 'unit' },
      { text: 'Range', value: 'range' },
    ],
  },
  main: {
    headers: [
      { text: 'Ground Time', value: 'groundtime' },
      { text: 'Value', value: 'value' },
      { text: 'Unit', value: 'unit' },
      { text: 'Range', value: 'range' },
    ],
  },
}

export default {
  state,
}
