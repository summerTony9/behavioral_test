<script>
import Timer from "./timer.vue";
import axios, * as others from 'axios';
import Game_time from "./game_time.vue";
export default {
  components: { Timer, Game_time },
  data() {
    return {
      timer0: '',
      stock_name: "A",
      stock_ratio: 10,
      stock_name_2: "B",
      stock_ratio_2: 10,
      stock_name_3: "C",
      stock_ratio_3: 10,
      time: 0,

    }
  },
  computed: {
    fuck() {
      return this.stock_ratio + this.stock_ratio_2 + this.stock_ratio_3
    },

    is_valid() {
      if (this.stock_ratio + this.stock_ratio_2 + this.stock_ratio_3 > 100) {
        return "btn btn-outline-primary disabled"
      } else {
        return "btn btn-outline-primary"
      }
    },
  },

  mounted() {
    if (parseInt(this.$route.query.nround) === 11) {
      this.$router.push({
        name: "calculate",
        query: {
          id: this.$route.query.id,
          nround: this.$route.query.nround
        }
      })
    }


    axios
      .get('http://127.0.0.1:8000/get_user_info', {
        params: {
          userName: this.$route.query.id,
          nround: this.$route.query.nround
        }
      })
      .then(response => {
        this.stock_name = response.data.stock_name
        this.stock_name_2 = response.data.stock_name_2
        this.stock_name_3 = response.data.stock_name_3

        this.stock_ratio = response.data.stock_ratio
        this.stock_ratio_2 = response.data.stock_ratio_2
        this.stock_ratio_3 = response.data.stock_ratio_3
      });

    axios
      .post('http://127.0.0.1:8000/post_time', {
        userName: this.$route.query.id,
      });


    this.timer0 = setInterval(() => {
      this.time = this.time + 1
    }, 1000)
  },

  watch: {
    time(newTime, oldTime) {
      if (newTime === 15) {
        axios
          .post('http://127.0.0.1:8000/get_stock_info', {
            ratio: 20,
            ratio_2: 20,
            ratio_3: 20,
            remain: 40,
            userName: this.$route.query.id,
            nround: this.$route.query.nround
          });
        this.$router.push({
          name: "market",
          query: {
            id: this.$route.query.id,
            nround: this.$route.query.nround
          }
        })
      }
    }
  },

  methods: {
    post_ratio() {
      axios
        .post('http://127.0.0.1:8000/get_stock_info', {
          userName: this.$route.query.id,
          nround: this.$route.query.nround,
          ratio: this.stock_ratio,
          ratio_2: this.stock_ratio_2,
          ratio_3: this.stock_ratio_3,
          remain: 100 - this.stock_ratio - this.stock_ratio_2 - this.stock_ratio_3
        });
      this.$router.push({
        name: "market",
        query: {
          id: this.$route.query.id,
          nround: this.$route.query.nround
        }
      })
    }
  },
  beforeDestroy() {
    clearInterval(this.timer0);
  }
}

</script>

<template>
  <Game_time :userName="this.$route.query.id" :nround="this.$route.query.nround"></Game_time>
  <div class="shadow p-2 mb-2 bg-body rounded">
    ??????????????????{{15-time}}???
  </div>
  <div class="shadow p-0 mb-2 bg-body rounded">
    <ul class="list-group">
      <li class="list-group-item">
        <label class="form-label">{{ stock_name }}</label>
        <span class="badge text-bg-primary float-end">{{ stock_ratio }}%</span>
        <input type="range" class="form-range" min="0" max="100" step="1" v-model.number="stock_ratio">
      </li>

      <li class="list-group-item">
        <label class="form-label">{{ stock_name_2 }}</label>
        <span class="badge text-bg-primary float-end">{{ stock_ratio_2 }}%</span>
        <input type="range" class="form-range" min="0" max="100" step="1" v-model.number="stock_ratio_2">
      </li>

      <li class="list-group-item">
        <label class="form-label">{{ stock_name_3 }}</label>
        <span class="badge text-bg-primary float-end">{{ stock_ratio_3 }}%</span>
        <input type="range" class="form-range" min="0" max="100" step="1" v-model.number="stock_ratio_3">
      </li>
    </ul>
  </div>

  <div class="shadow p-2 mb-2 bg-body rounded">
    ??????????????????????????? {{100 - fuck}} %
  </div>
  <div class="d-grid gap-2 mb-2">
    <button type="button" :class="is_valid" @click="post_ratio">??????</button>
  </div>
  <transition name="fade">
    <div class="alert alert-danger shadow p-2 mb-2 bg-body rounded" role="alert" v-if="fuck > 100">
      ????????????????????????100%
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
</style>
