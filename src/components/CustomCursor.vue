<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursorRef = ref(null)
const isVisible = ref(false)
const isHovering = ref(false)

// Target posisi mouse (langsung)
let mouseX = 0
let mouseY = 0
// Posisi cursor saat ini (di-lerp untuk efek trailing)
let curX = 0
let curY = 0
let rafId = null

// Linear interpolation untuk efek smooth lag
const lerp = (a, b, t) => a + (b - a) * t

const loop = () => {
  // Semakin kecil nilai t (0.1-0.2), semakin "tertinggal" kursornya
  curX = lerp(curX, mouseX, 0.16)
  curY = lerp(curY, mouseY, 0.16)

  if (cursorRef.value) {
    cursorRef.value.style.transform = `translate(${curX}px, ${curY}px)`
  }

  rafId = requestAnimationFrame(loop)
}

const onMouseMove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
  if (!isVisible.value) isVisible.value = true
}

const onMouseEnter = () => { isVisible.value = true }
const onMouseLeave = () => { isVisible.value = false }

// Deteksi hover pada elemen interaktif (link, button, dll)
const onMouseOver = (e) => {
  isHovering.value = !!e.target.closest('a, button, input, textarea, [role="button"], label')
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseover', onMouseOver)
  document.documentElement.addEventListener('mouseleave', onMouseLeave)
  document.documentElement.addEventListener('mouseenter', onMouseEnter)
  rafId = requestAnimationFrame(loop)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseover', onMouseOver)
  document.documentElement.removeEventListener('mouseleave', onMouseLeave)
  document.documentElement.removeEventListener('mouseenter', onMouseEnter)
  cancelAnimationFrame(rafId)
})
</script>

<template>
  <div
    ref="cursorRef"
    class="custom-cursor"
    :class="{
      'custom-cursor--visible': isVisible,
      'custom-cursor--hovering': isHovering,
    }"
  />
</template>

<style scoped>
.custom-cursor {
  /* Posisi awal di pojok kiri atas, digeser via transform di JS */
  position: fixed;
  top: -18px;   /* setengah dari height agar center di cursor */
  left: -18px;  /* setengah dari width */
  z-index: 99999;

  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid white;
  background: transparent;

  /* Kunci utama: otomatis invert warna dari background di bawahnya */
  mix-blend-mode: difference;

  pointer-events: none; /* tidak mengganggu klik */
  will-change: transform;

  /* Sembunyikan saat mouse belum terdeteksi */
  opacity: 0;
  transition:
    opacity 0.3s ease,
    width 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    height 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    top 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    left 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Tampil saat mouse terdeteksi */
.custom-cursor--visible {
  opacity: 1;
}

/* Membesar saat hover elemen interaktif */
.custom-cursor--hovering {
  width: 52px;
  height: 52px;
  top: -26px;
  left: -26px;
}
</style>
