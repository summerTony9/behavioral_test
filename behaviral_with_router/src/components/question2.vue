<script>
export default {
  methods: {
    click_yes(){
      this.$router.push('reward')
    },
    
    click_no(){
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <div class="card shadow p-2 mb-2 bg-body rounded">
    <div class="card-body">
      <p class="card-text">是否查看本轮您的个人资产组合收益?</p>
      <button type="button" class="btn btn-primary float-start" @click="click_yes">是</button>
      <button type="button" class="btn btn-danger float-end" @click="click_no">否</button>
    </div>
  </div>
</template>

