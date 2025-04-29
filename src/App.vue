<script setup>
import Header from './components/global/Header.vue';
</script>

<template>
  <Header />
  <div class="app">
    <router-view /> 
  </div>
</template> 

<style>
* {
  font-family: 'Poppins', sans-serif;
}
</style>