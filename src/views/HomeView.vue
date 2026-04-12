<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-col-reverse md:flex-row items-center justify-between w-full pt-10 pb-20 md:py-0 min-h-[calc(100vh-5rem)]">
    
    <!-- Left Section: Content -->
    <div class="flex-1 md:pr-10 mt-16 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left">
      <!-- Decorative Bars -->
      <div class="flex gap-2 mb-7">
        <div class="h-3 w-14 bg-[#232323]"></div>
        <div class="h-3 w-4 bg-[#232323]"></div>
        <div class="h-3 w-4 bg-[#232323]"></div>
      </div>
      
      <h1 class="text-5xl sm:text-6xl md:text-7xl font-black text-[#1a1a1a] tracking-tight leading-none mb-5">
        DZXY
      </h1>
      
      <p class="text-base md:text-lg lg:text-xl text-[#3b3b3b] leading-relaxed max-w-2xl font-medium mb-10">
        Content Creator - Freelancer Minecraft Skin - <br class="block">
        3D Rendering Artist
      </p>

      <div class="flex flex-wrap justify-center md:justify-start gap-4">
        <RouterLink to="/project" class="bg-[#242424] hover:bg-black text-white font-bold py-3 px-6 text-sm md:text-base transition-colors inline-block text-center min-w-[130px]">
          My Projects
        </RouterLink>
        <RouterLink to="/contact" class="bg-transparent border-[3px] border-[#242424] text-[#1a1a1a] hover:bg-[#242424] hover:text-white font-bold py-3 px-6 text-sm md:text-base transition-colors inline-block text-center min-w-[130px]">
          Contact
        </RouterLink>
      </div>
    </div>

    <!-- Right Section: Graphic/Logo -->
    <div class="flex-1 flex justify-center  mb-10 md:mb-0">
      <img src="@/assets/images/logo_1.png" alt="DZXY" class="w-40 sm:w-50 md:w-64 lg:w-[250px] object-contain drop-shadow-sm" />
    </div>

  </div>
</template>
