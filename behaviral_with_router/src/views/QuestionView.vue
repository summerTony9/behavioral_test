<script setup>
import Navbar from '../components/navbar.vue'
import Question from '../components/question.vue';
</script>
    
<template>
  <div class="container">
    <Navbar></Navbar>
    <div class="row">
      <div class="col"></div>
      <div class="col-8">
        <Question></Question>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>