<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Navbar from '../components/navbar.vue'
import Choose from '../components/choose.vue'
import Plot from '../components/plot.vue'
</script>
  
<template>
  <div class="container">
    <Navbar></Navbar>
    <div class="row">
      <div class="col"></div>
      <div class="col-8">
        <Plot></Plot>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>