<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <!-- Navbar -->
  <header class="w-full max-w-7xl px-8 py-5 flex justify-between items-center fixed top-0 z-50 backdrop-blur-md bg-[#fafafa]/80">
    <div class="flex items-center relative z-20">
      <img src="@/assets/images/logo 1.png" alt="DZXY" class="h-12 w-auto" />
    </div>
    
    <!-- Desktop Navigation -->
    <nav class="hidden md:flex space-x-10 text-[15px] font-bold text-gray-500 tracking-wide">
      <RouterLink to="/" active-class="!text-black !border-black" class="border-transparent hover:text-black transition-all duration-300 ease-out pb-1 border-b-[3px] hover:border-black hover:-translate-y-1">Home</RouterLink>
      <RouterLink to="/about" active-class="!text-black !border-black" class="border-transparent hover:text-black transition-all duration-300 ease-out pb-1 border-b-[3px] hover:border-black hover:-translate-y-1">About</RouterLink>
      <RouterLink to="/service" active-class="!text-black !border-black" class="border-transparent hover:text-black transition-all duration-300 ease-out pb-1 border-b-[3px] hover:border-black hover:-translate-y-1">Service</RouterLink>
      <RouterLink to="/project" active-class="!text-black !border-black" class="border-transparent hover:text-black transition-all duration-300 ease-out pb-1 border-b-[3px] hover:border-black hover:-translate-y-1">Project</RouterLink>
      <RouterLink to="/contact" active-class="!text-black !border-black" class="border-transparent hover:text-black transition-all duration-300 ease-out pb-1 border-b-[3px] hover:border-black hover:-translate-y-1">Contact</RouterLink>
    </nav>
      
    <!-- Mobile menu toggle button -->
    <div class="md:hidden flex items-center relative z-20">
        <button @click="isMenuOpen = !isMenuOpen" class="text-gray-900 focus:outline-none transition-transform duration-200" :class="isMenuOpen ? 'rotate-90' : ''">
            <svg v-if="!isMenuOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-show="isMenuOpen" class="absolute top-full left-0 w-full bg-[#fafafa]/80 backdrop-blur-md shadow-xl shadow-black/5 border-t border-gray-200 flex flex-col px-6 py-4 space-y-2 text-[15px] font-bold text-gray-500 md:hidden z-10 transition-all">
      <RouterLink @click="closeMenu" to="/" active-class="!text-black bg-gray-100/50" class="block w-full text-left p-3 rounded-lg hover:bg-gray-100 hover:text-black transition-colors">Home</RouterLink>
      <RouterLink @click="closeMenu" to="/about" active-class="!text-black bg-gray-100/50" class="block w-full text-left p-3 rounded-lg hover:bg-gray-100 hover:text-black transition-colors">About</RouterLink>
      <RouterLink @click="closeMenu" to="/service" active-class="!text-black bg-gray-100/50" class="block w-full text-left p-3 rounded-lg hover:bg-gray-100 hover:text-black transition-colors">Service</RouterLink>
      <RouterLink @click="closeMenu" to="/project" active-class="!text-black bg-gray-100/50" class="block w-full text-left p-3 rounded-lg hover:bg-gray-100 hover:text-black transition-colors">Project</RouterLink>
      <RouterLink @click="closeMenu" to="/contact" active-class="!text-black bg-gray-100/50" class="block w-full text-left p-3 rounded-lg hover:bg-gray-100 hover:text-black transition-colors">Contact</RouterLink>
    </div>
  </header>
</template>
