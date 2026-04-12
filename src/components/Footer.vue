<script setup>
import { RouterLink } from 'vue-router'
const year = new Date().getFullYear()

</script>

<template>
  <footer class="w-full border-t-2 border-[#1a1a1a] mt-16">
    <div class="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

      <!-- Left: Logo + tagline -->
      <div class="flex flex-col items-center md:items-start gap-1">
        <img src="@/assets/images/logo_1.png" alt="DZXY" class="h-9 w-auto" />
      </div>

      <!-- Center: copyright -->
      <p class="text-xs text-gray-400 font-medium order-last md:order-0 text-center">
        © {{ year }} <span class="font-bold text-[#1a1a1a]">DZXY</span>. All rights reserved.
      </p>

      <!-- Right: Social links -->
      <div class="flex items-center gap-3">
        <RouterLink to="/" class="text-xs">
          Home
        </RouterLink>
        <RouterLink to="/about" class="text-xs">
          About
        </RouterLink>
        <RouterLink to="/project" class="text-xs">
          Project
        </RouterLink>
        <RouterLink to="/contact" class="text-xs">
          Contact
        </RouterLink>
      </div>

    </div>
  </footer>
</template>
