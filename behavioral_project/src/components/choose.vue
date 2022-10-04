<script>
import Choose_item from "./choose_item.vue";
import Timer from "./timer.vue";
export default {
  components: { Choose_item, Timer },
  data() {
    return {
      stock_name: "fuck",
      stock_ratio: 10,
      stock_name_2: "fuck_2",
      stock_ratio_2: 10,
      stock_name_3: "fuck_3",
      stock_ratio_3: 10,
      time: 0
    }
  },
  computed: {
    fuck() {
      return this.stock_ratio + this.stock_ratio_2 + this.stock_ratio_3
    },

    is_valid() {
      if (this.stock_ratio + this.stock_ratio_2 + this.stock_ratio_3 > 100) {
        return "btn btn-primary disabled"
      } else {
        return "btn btn-primary"
      }
    },

  },

  mounted() {
    setInterval(() => {
      this.time = this.time + 1
      if(this.time == 20){
        window.location.href = 'http://www.google.com'
      }
    }, 1000)
  },

  methods: {
    post_ratio(event) {
      if (event) {
        axios
          .post(' http://172.20.10.2:5000/post_ratio_api', {
            stock_ratio: this.stock_ratio,
            stock_ratio_2: this.stock_ratio_2,
            stock_ratio_3: this.stock_ratio_3
          }).then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          });
      }
    }
  },
}

</script>

<template>
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
    当前未投资资产比例 {{fuck}} %
  </div>
  <transition name="fade">
    <div class="alert alert-danger bg-body rounded" role="alert" v-if="fuck > 100">
      投资比例不能超过100%
    </div>
  </transition>
  <timer ref="ctimer"></timer>
  <div class="d-grid gap-2">
    <button type="button" :class="is_valid" @click="post_ratio">提交</button>
  </div>
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
