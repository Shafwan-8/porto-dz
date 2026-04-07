<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-col-reverse md:flex-row items-center justify-between w-full pt-10 pb-20 md:py-0">
    
    <!-- Left Section: Content -->
    <div class="flex-1 md:pr-10 mt-16 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left">
      <!-- Decorative Bars -->
      <div class="flex gap-1.5 mb-6">
        <div class="h-2.5 w-12 bg-[#232323]"></div>
        <div class="h-2.5 w-4 bg-[#232323]"></div>
        <div class="h-2.5 w-4 bg-[#232323]"></div>
      </div>
      
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-[#1a1a1a] tracking-tight leading-none mb-4">
        DZXY
      </h1>
      
      <p class="text-sm md:text-base lg:text-lg text-[#3b3b3b] leading-relaxed max-w-2xl font-medium mb-10">
        Content Creator - Freelancer Minecraft Skin -
        3D Rendering Artist - Thumbnail Designer
      </p>

      <div class="flex flex-wrap justify-center md:justify-start gap-3">
        <RouterLink to="/project" class="bg-[#242424] hover:bg-black text-white font-bold py-2.5 px-5 text-xs md:text-sm transition-colors inline-block text-center min-w-[120px]">
          My Projects
        </RouterLink>
        <RouterLink to="/contact" class="bg-transparent border-[3px] border-[#242424] text-[#1a1a1a] hover:bg-[#242424] hover:text-white font-bold py-2.5 px-5 text-xs md:text-sm transition-colors inline-block text-center min-w-[120px]">
          Contact
        </RouterLink>
      </div>
    </div>

    <!-- Right Section: Graphic/Logo -->
    <div class="flex-1 flex justify-center  mb-10 md:mb-0">
      <img src="@/assets/images/logo 1.png" alt="DZXY" class="w-40 sm:w-50 md:w-64 lg:w-[250px] object-contain drop-shadow-sm" />
    </div>

  </div>
</template>
