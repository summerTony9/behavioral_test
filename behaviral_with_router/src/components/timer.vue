<script>
  export default{
    props: ['time'],
    // data(){
    //   return{
    //     time: 0
    //   }
    // },

    // mounted(){
    //   setInterval(()=>{
    //     this.time = this.time+1
    //   }, 1000)
    // }
    computed: {
      per(){
        return this.time * 5
      } 
    },
    beforeDestroy() {
      clearInterval(this.time);
    },
  }
</script>

<template>
  <el-progress class="p-2 mb-2 bg-body rounded shadow"
  :text-inside="true" :stroke-width="26" :percentage="per" status="exception"></el-progress>
</template>

