<script>
import { VueEcharts } from 'vue3-echarts';
export default {
  data() {
    return {
      option: {
        title: {
          text: '市场A'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            // stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            // stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            // stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
    }
  },
  components: {
    VueEcharts,
  },
}
</script>

<template>
  <vue-echarts :option="option" style="height: 500px" ref="chart" />
</template>





