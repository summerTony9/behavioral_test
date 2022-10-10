<script>
import { VueEcharts } from 'vue3-echarts';
import axios, * as others from 'axios';
import Game_time from './game_time.vue';
export default {
  data() {
    return {
      option2: {},
      option: {
        title: {
          text: '市场A'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['A', 'B', 'C']
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
          data: ['Day0']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'A',
            type: 'line',
            // stack: 'Total',
            data: [100]
          },
          {
            name: 'B',
            type: 'line',
            // stack: 'Total',
            data: [100]
          },
          {
            name: 'C',
            type: 'line',
            // stack: 'Total',
            data: [100]
          }
        ]
      }
    }
  },
  mounted() {
    axios
      .get('http://127.0.0.1:8000/get_figure', {
        params: {
          id: this.$route.query.id,
          nround: this.$route.query.nround
        }
      })
      .then(response => {
        this.option = response.data.op1
        this.option2 = response.data.op2
      });
  },

  components: {
    VueEcharts,
    Game_time
  },

  methods: {
    click_yes() {
      this.$router.push({
        name: "question2",
        query: {
          id: this.$route.query.id,
          nround: this.$route.query.nround
        }
      })
    }
  },
}
</script>

<template>
  <Game_time :userName="this.$route.query.id" :nround="this.$route.query.nround"></Game_time>
  <vue-echarts :option="option" style="height: 300px" ref="chart" />
  <vue-echarts :option="option2" style="height: 300px" ref="chart" />
  <button type="button" class="btn btn-outline-primary float-start" @click="click_yes">ok</button>
</template>





