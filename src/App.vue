<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import CustomCursor from './components/CustomCursor.vue'
import LoadingOverlay from './components/LoadingOverlay.vue'
import Lenis from 'lenis'

const transitionName = ref('slide-left')
const router = useRouter()

router.beforeEach((to, from) => {
  const toOrder = to.meta?.order ?? 0
  const fromOrder = from.meta?.order ?? 0
  transitionName.value = toOrder > fromOrder ? 'slide-left' : 'slide-right'
})

router.afterEach(() => {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true })
  }
})

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
  <div class="min-h-screen font-sans text-gray-900 flex flex-col items-center transition-colors duration-300" :class="$route.meta.hideDefaultLayout ? 'bg-[#1E1E1E]' : 'bg-[#fafafa]'">
    <CustomCursor />
    <Navbar v-if="!$route.meta.hideDefaultLayout" />

    <main :class="$route.meta.hideDefaultLayout ? 'w-full flex-1 relative overflow-hidden' : 'w-full mt-20 max-w-7xl flex-1 flex flex-col justify-center px-8 relative overflow-hidden'">
      <RouterView v-slot="{ Component }">
        <Transition :name="transitionName" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <Footer v-if="!$route.meta.hideDefaultLayout" />

    <LoadingOverlay />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap');
html, body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
}


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

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>
