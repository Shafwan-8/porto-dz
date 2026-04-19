<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { isGlobalLoading } from '../loadingState'

const router = useRouter()

onMounted(() => {
    isGlobalLoading.value = false;
})

const goToSkins = () => {
    isGlobalLoading.value = true
    setTimeout(() => {
        router.push('/project/skins')
    }, 700) // matches our duration-700 from LoadingOverlay
}

const goToRendering = () => {
    isGlobalLoading.value = true
    setTimeout(() => {
        router.push('/project/rendering')
    }, 700) // matches our duration-700 from LoadingOverlay
}
</script>

<template>
  <section class="flex flex-col items-center mt-16 gap-6 w-full">
    
    <!-- Header -->
    <div class="text-center space-y-3">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1a1a1a] mb-3">My Projects</h1>
      <p class="text-base md:text-lg text-[#3b3b3b] font-medium">Things I've built and worked on</p>
      
      <p class="text-sm md:text-base text-gray-400 pt-10">- Select a category below -</p>
    </div>

    <!-- Categories Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
      
      <!-- Category 1: Custom Skins Minecraft -->
      <a @click.prevent="goToSkins" href="/project/skins" class="cursor-pointer group flex flex-col items-center justify-center bg-[#e5e7eb] hover:bg-[#d1d5db] transition-all duration-300 p-16 md:p-20 text-[#1a1a1a]">
        <!-- Blocky Shirt Icon -->
        <div class="mb-6 transform group-hover:scale-110 transition-transform duration-300">
          <svg width="48" height="48" viewBox="0 0 32 32" fill="currentColor">
             <path d="M4 8 H28 V16 H22 V28 H10 V16 H4 V8 Z M16 13 L12 8 H20 L16 13 Z" fill-rule="evenodd"/>
          </svg>
        </div>
        <h2 class="text-xl md:text-2xl font-bold text-center">Custom Skins<br>Minecraft</h2>
      </a>

      <!-- Category 2: Rendering -->
      <a @click.prevent="goToRendering" href="/project/rendering" class="group flex flex-col items-center justify-center bg-[#e5e7eb] hover:bg-[#d1d5db] transition-all duration-300 p-16 md:p-20 text-[#1a1a1a]">
        <!-- Isometric Box with Cursor Arrow Icon -->
        <div class="mb-6 transform group-hover:scale-110 transition-transform duration-300">
          <svg width="48" height="48" viewBox="0 0 32 32" fill="currentColor">
            <!-- Box -->
            <path d="M16 4 L26 9 L16 14 L6 9 Z"/>
            <path d="M6 10.5 V21 L15 25.5 V15 Z"/>
            <path d="M17 15 V25.5 L26 21 V10.5 Z"/>
            <!-- Cursor Overlay -->
            <polygon points="20,16 20,28 23,24 26,29 28,28 25,23 29,23" fill="#1a1a1a" stroke="#e5e7eb" stroke-width="1.5" class="group-hover:stroke-[#d1d5db] transition-colors duration-300"/>
          </svg>
        </div>
        <h2 class="text-xl md:text-2xl font-bold text-center">3D Rendering</h2>
      </a>

    </div>

  </section>
</template>