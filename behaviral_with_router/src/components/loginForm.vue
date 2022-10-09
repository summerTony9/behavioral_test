<script>
import axios, * as others from 'axios';
export default {
  data() {
    return {
      userName: ""
    }
  },
  methods: {
    login() {
      axios
        .post('http://127.0.0.1:8000/login', {
          userName: this.userName
        });

      this.$router.push(
        {
          name: 'home',
          query: {
            id: this.userName,
            nround: 1
          }
        }
      )
    }
  }

}
</script>
  
<template>
  <div class="shadow p-2 mb-2 bg-body rounded">
    {{userName}},你好！
  </div>

  <div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="userName">
    <label for="floatingInput">请输入用户名</label>
  </div>
  <div class="d-grid gap-2">
    <button class="btn btn-outline-primary" type="button" @click="login">登陆</button>
  </div>
</template>
  
  