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





