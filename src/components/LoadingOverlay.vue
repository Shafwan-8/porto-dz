<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { isGlobalLoading } from '../loadingState';

const dots = ref('');
let interval;

onMounted(() => {
  interval = setInterval(() => {
    if (dots.value.length >= 3) {
      dots.value = '';
    } else {
      dots.value += '.';
    }
  }, 400);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div 
    class="fixed inset-0 z-[9999] bg-[#1E1E1E] flex justify-center items-center pointer-events-none transition-transform duration-700 ease-in-out"
    :class="isGlobalLoading ? 'translate-y-0' : 'translate-y-full'"
  >
    <div class="text-white text-2xl md:text-4xl font-bold tracking-widest font-['Poppins']">
      Loading{{ dots }}
    </div>
  </div>
</template>
