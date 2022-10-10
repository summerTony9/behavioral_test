<script setup>
import Navbar from '../components/navbar.vue'
import Calculate from '../components/calculate.vue';
</script>
      
<template>
  <div class="container">
    <Navbar></Navbar>
    <div class="row">
      <div class="col"></div>
      <div class="col-8">
        <Calculate></Calculate>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>