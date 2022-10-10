<script>
import axios, * as others from 'axios';
export default {
  props: ['userName', 'nround', 'qn'],
  data() {
    return {
      start_min: 0,
      start_sec: 0,
      timer0: 0
    }
  },

  mounted() {
    axios
      .get('http://127.0.0.1:8000/get_time', {
        params: {
          userName:this.userName
        }
      })
      .then(response => {
        this.start_min = response.data.mint
        this.start_sec = response.data.sec
      });

    this.timer0 = setInterval(() => {
      if (this.start_sec === 60) {
        this.start_sec = 0
        this.start_min = this.start_min + 1
      } else {
        this.start_sec = this.start_sec + 1
      }
    }, 1000)
  },
  watch: {
    start_min(newmin, oldmin) {
      if (newmin == 12) {
        this.$router.push('about')
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer0);
  }
}
</script>
  
<template>
  <div class="shadow p-2 mb-2 bg-body rounded">
    用户{{userName}}, 已计算{{qn}}题,实验已进行{{start_min}}分{{start_sec}}秒
  </div>
</template>
  
  