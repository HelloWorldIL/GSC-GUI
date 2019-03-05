<template lang="pug">
v-chart(:options="options")
</template>

<script>
import ECharts from 'vue-echarts';
import 'echarts'
export default {
  components: {
    'v-chart': ECharts,
  },
  data() {
    return {
      options: {
        xAxis: {
          type: 'value',
          data: [0, 1, 2, 3, 4, 5, 6],
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
        }],
      },
    }
  },
}
</script>
