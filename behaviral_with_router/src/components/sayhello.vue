<script>
export default {
  props: ['userName'],
  // data() {
  //   return {
  //     userName: ""
  //   }
  // },
}
</script>
<template>
  <div class="shadow p-2 mb-2 bg-body rounded">
    用户名：{{userName}}
  </div>
</template>