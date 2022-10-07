<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Navbar from '../components/navbar.vue'
import Plot from '../components/plot.vue'
import Question from '../components/question.vue';
import Question2 from '../components/question2.vue';
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