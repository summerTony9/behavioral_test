<script setup>
import Navbar from '../components/navbar.vue'
import LoginForm from '../components/loginForm.vue';
</script>
      
<template>
  <div class="container">
    <Navbar></Navbar>
    <div class="row">
      <div class="col"></div>
      <div class="col-8">
        <LoginForm></LoginForm>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>