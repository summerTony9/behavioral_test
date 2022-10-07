<script>
import axios, * as others from 'axios';
import Game_time from './game_time.vue';
export default {
    data() {
        return {
            total_value: 0,
            current_reward: 0,
            total_reward: 0
        };
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/get_reward")
            .then(response => {
            this.current_reward = response.data.current_reward;
            this.total_value = response.data.total_value;
            this.total_reward = response.data.total_reward;
        });
    },
    methods: {
        click_yes() {
            this.$router.push("/");
        }
    },
    components: { Game_time }
}
</script>
  
<template>
  <Game_time></Game_time>
  <div class="card shadow p-2 mb-2 bg-body rounded">
    <div class="card-body">
      <p class="card-text">您当前的个人资产组合总市值为 {{total_value}} 点,
        本轮收益 {{current_reward}}，当前累计收益{{total_reward}}</p>
      <button type="button" class="btn btn-primary float-start" @click="click_yes">ok</button>
    </div>
  </div>
</template>