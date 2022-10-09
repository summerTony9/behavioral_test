<script>
import axios, * as others from 'axios';
import Game_time from './game_time.vue';
export default {
    data() {
        return {
            current_index: 0,
            value_diff: "",
        };
    },
    methods: {
        click_yes() {
            this.$router.push({
                name: "question",
                query: {
                    id: this.$route.query.id,
                    nround: this.$route.query.nround
                }
            });
        }
    },
    mounted() {
        axios.get("http://127.0.0.1:8000/market_info", {
            params: {
                id: this.$route.query.id,
                nround: this.$route.query.nround
            }
        })
            .then(response => {
                this.current_index = response.data.current_index;
                this.value_diff = response.data.value_diff;
            });
    },
    components: { Game_time }
}
</script>
  
<template>
    <Game_time :userName="this.$route.query.id" :nround="this.$route.query.nround"></Game_time>
    <div class="card shadow p-2 mb-2 bg-body rounded">
        <div class="card-body">
            <p class="card-text">当前的市场指数为{{current_index}}点，本轮{{value_diff}}</p>
            <button type="button" class="btn btn-outline-primary float-start" @click="click_yes">ok</button>
        </div>
    </div>
</template>
  
  