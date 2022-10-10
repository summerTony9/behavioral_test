<script setup>
import Navbar from '../components/navbar.vue'

import Marketcard from '../components/marketcard.vue';
</script>
      
<template>
  <div class="container">
    <Navbar></Navbar>
    <div class="row">
      <div class="col"></div>
      <div class="col-8">
        <Marketcard></Marketcard>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>