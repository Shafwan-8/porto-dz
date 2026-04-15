<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="min-h-screen py-24 px-8 max-w-7xl mx-auto w-full">
    <div class="mb-12">
      <RouterLink to="/project" class="inline-flex items-center text-sm font-semibold text-[#1a1a1a] hover:opacity-70 transition-opacity">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Back to Categories
      </RouterLink>
    </div>
    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a1a1a] mb-4">Rendering</h1>
    <p class="text-lg text-gray-500 mb-10">Daftar portofolio karya 3D Render dan environment.</p>
    
    <!-- Placeholder / Area Kosong -->
    <div class="w-full h-64 border-2 border-dashed border-gray-300 bg-gray-50 rounded-xl flex flex-col items-center justify-center text-gray-400">
      <svg class="w-12 h-12 mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      <p>Daftar project akan muncul di sini</p>
    </div>
  </section>
</template>
