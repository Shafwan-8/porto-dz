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
        <RouterLink to="/contact" class="border-[3px] border-[#242424] text-[#1a1a1a] bg-linear-to-r from-[#242424] from-50% to-transparent to-50% bg-size-[201%_100%] bg-right hover:bg-left hover:text-white font-bold py-3 px-6 text-sm md:text-base transition-all duration-300 ease-out inline-block text-center min-w-[130px]">
          Contact
        </RouterLink>
      </div>
    </div>

    <!-- Right Section: Graphic/Logo -->
    <!-- Right Section: Graphic/Logo -->
    <div class="flex-1 flex justify-center items-center mb-10 md:mb-0">
      <!-- "scale" membesarkan video secara visual TANPA merusak layout / menekan elemen sekitarnya -->
      <!-- "pointer-events-none" agar area transparan video tidak menutupi klik elemen lain -->
      <video src="@/assets/videos/logoAnimate.mp4" autoplay loop muted playsinline class="mix-blend-multiply w-[300px] md:w-[400px] xl:w-[500px] scale-[2] md:scale-[1.8] lg:scale-[2.2] object-contain pointer-events-none"></video>
    </div>

  </div>
</template>
