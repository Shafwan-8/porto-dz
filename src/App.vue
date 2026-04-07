<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-[#fafafa] font-sans text-gray-900 flex flex-col items-center">
    <Navbar />

    <main class="w-full mt-20 max-w-7xl flex-1 flex flex-col justify-center px-8 relative">
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Add Poppins font for the matching thick exact look from the design */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap');
html, body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
