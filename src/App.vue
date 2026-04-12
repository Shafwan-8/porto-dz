<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Lenis from 'lenis'

// Deteksi arah navigasi
const transitionName = ref('slide-left')
const router = useRouter()

router.beforeEach((to, from) => {
  const toOrder = to.meta?.order ?? 0
  const fromOrder = from.meta?.order ?? 0
  transitionName.value = toOrder > fromOrder ? 'slide-left' : 'slide-right'
})

// Scroll ke atas setiap perpindahan halaman
router.afterEach(() => {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true })
  }
})

// Scroll Smooth
let lenis;
let rafId;

onMounted(() => {
  lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    rafId = requestAnimationFrame(raf)
  }

  rafId = requestAnimationFrame(raf)
})

onBeforeUnmount(() => {
  if (lenis) {
    lenis.destroy()
  }
  if (rafId) {
    cancelAnimationFrame(rafId)
  }
})
</script>

<template>
  <div class="min-h-screen bg-[#fafafa] font-sans text-gray-900 flex flex-col items-center">
    <Navbar />

    <main class="w-full mt-20 max-w-7xl flex-1 flex flex-col justify-center px-8 relative">
      <RouterView v-slot="{ Component }">
        <Transition :name="transitionName" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <Footer />
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

/* Page Transition Animation */

/* Maju: halaman baru masuk dari kanan, halaman lama keluar ke kiri */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

/* Mundur: halaman baru masuk dari kiri, halaman lama keluar ke kanan */
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>
