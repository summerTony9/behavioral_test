<script>
export default {
  props: ['stock_name', 'stock_ratio'],
  // data() {
  //   return {
  //     stock_ratio: 0
  //   }
  // }
}

</script>

<template>
  <li class="list-group-item">
    <label for="customRange1" class="form-label">{{ stock_name }}</label>
    <span class="badge text-bg-primary float-end">{{ stock_ratio }}%</span>
    <input type="range" class="form-range" min="0" max="100" step="1" v-model="stock_ratio">
  </li>
</template>