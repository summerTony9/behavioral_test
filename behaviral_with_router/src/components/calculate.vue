<script>
import axios, * as others from 'axios';
import Game_time_cal from './game_time_cal.vue';
export default {
  data(){
    return {
      qn: 0,
      num_1: Math.floor(Math.random()*100),
      num_2: Math.floor(Math.random()*100),
      correct_n: 0
    }
  },
  methods: {
    cal(){
      if(this.ans === this.num_1 + this.num_2){
        this.correct_n = this.correct_n + 1
      }
      this.num_1 = Math.floor(Math.random()*100)
      this.num_2 = Math.floor(Math.random()*100)
      this.qn = this.qn + 1
      this.ans = ''
    }
  },
  components: { Game_time_cal }
}
</script>
  
<template>
  <Game_time_cal 
  :userName="this.$route.query.id" 
  :nround="this.$route.query.nround" 
  :qn="qn"></Game_time_cal>
  <div class="input-group mb-3">
    <span class="input-group-text">{{num_1}}+{{num_2}}=</span>
    <input type="text" class="form-control" v-model.number="ans">
    <button class="btn btn-outline-primary" type="button" @click="cal">提交</button>
  </div>
</template>
  
  