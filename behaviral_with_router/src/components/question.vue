<script>
import axios, * as others from 'axios';
import Game_time from './game_time.vue';
export default {
    methods: {
        click_yes() {
            this.$router.push("about");
        },
        click_no() {
            this.$router.push("question2");
        }
    },
  
    components: { Game_time }
}
</script>

<template>
  <Game_time></Game_time>

  <div class="card shadow p-2 mb-2 bg-body rounded">
    <div class="card-body">
      <p class="card-text">是否查看本轮市场价格走势</p>
      <button type="button" class="btn btn-primary float-start" @click="click_yes">是</button>
      <button type="button" class="btn btn-danger float-end" @click="click_no">否</button>
    </div>
  </div>
</template>

