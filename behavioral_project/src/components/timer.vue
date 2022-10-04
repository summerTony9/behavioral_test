<script>
  export default{
    data(){
      return{
        time: 0
      }
    },

    mounted(){
      setInterval(()=>{
        this.time = this.time+1
      }, 1000)
    }
  }
</script>

<template>
  <el-progress class="p-2 mb-2 bg-body rounded shadow"
  :text-inside="true" :stroke-width="26" :percentage="time*5" status="exception"></el-progress>
</template>

