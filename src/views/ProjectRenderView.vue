<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import { isGlobalLoading } from '../loadingState'

const isOverlayOpen = ref(false);
const selectedImage = ref('');
const router = useRouter();

const goBack = () => {
    isGlobalLoading.value = true;
    setTimeout(() => {
        router.push('/project');
    }, 700); // Wait for the 700ms CSS slide-up transition to finish
};

const openOverlay = (img) => {
  selectedImage.value = img;
  isOverlayOpen.value = true;
};

const closeOverlay = () => {
  isOverlayOpen.value = false;
  selectedImage.value = '';
};

import img1 from '@/assets/images/renders/1.png'
import img2 from '@/assets/images/renders/2.png'
import img3 from '@/assets/images/renders/3.png'
import img4 from '@/assets/images/renders/4.png'
import img5 from '@/assets/images/renders/5.png'
import img6 from '@/assets/images/renders/6.png'
import img7 from '@/assets/images/renders/7.png'
import img8 from '@/assets/images/renders/8.png'
import img9 from '@/assets/images/renders/9.png'
import img10 from '@/assets/images/renders/10.png'
import img11 from '@/assets/images/renders/11.png'
import img12 from '@/assets/images/renders/12.png'
import img13 from '@/assets/images/renders/13.png'
import img14 from '@/assets/images/renders/14.png'
import img15 from '@/assets/images/renders/15.png'
import img16 from '@/assets/images/renders/16.png'

const set1 = [img1, img2, img3, img4, img5];
const set2 = [img6, img7, img8, img9, img10];
const set3 = [img11, img12, img13, img14, img15, img16];

// Digabungkan 4X agar infinite scroll selalu aman dan sempurna untuk lebar layar berapapun
const row1 = [...set3, ...set3, ...set3, ...set3];
const row2 = [...set2, ...set2, ...set2, ...set2];
const row3 = [...set1, ...set1, ...set1, ...set1];

const rowRefs = ref([]);

// Setup variabel untuk Mesin Auto Scroll + Parallax Horizontal 60FPS murni JS
const offsets = [0, 80, 160]; // Staggering awal agar posisi tidak sejajar (lebih natural)
const autoSpeeds = [0.2, 0.4, 0.8]; // Kecepatan gerak otomatis per-frame, berbeda antar baris
const scrollFactors = [1.2, 0.6, 1.5]; // Efek dorongan dari kontrol Mouse Vertical Scroll
const directions = ['rtl', 'ltr', 'rtl']; // Selang-seling arah

let rafId;
let lastScrollY = 0;

const animationLoop = () => {
    const currentScrollY = window.scrollY;
    // Deteksi tarikan kursor scroll manual pengguna diubah menjadi force horizontal sumbu X
    const delta = currentScrollY - lastScrollY;
    lastScrollY = currentScrollY;

    // Terapkan ke 3 baris tanpa reaktif Vue (Update Direct DOM untuk perfoma GPU)
    for (let i = 0; i < 3; i++) {
        const el = rowRefs.value[i];
        if (!el) continue;

        // Bergerak auto + dorongan manual
        offsets[i] += autoSpeeds[i] + (delta * scrollFactors[i]);

        // Cari titik balik: 1 set duplikasi persis 1/4 dari lebar keseluruhan (karena array digandakan 4x: [...set, ...set, ...set, ...set])
        // Angka pembagi ini TIDAK bergantung pada jumlah baris, melainkan jumlah duplikasi data di array agar ukurannya presisi saat nge-loop.
        const loopPoint = el.scrollWidth / 4;
        
        if (loopPoint > 0) {
            // Modulo selalu positif
            offsets[i] = ((offsets[i] % loopPoint) + loopPoint) % loopPoint;
            
            if (directions[i] === 'rtl') {
                el.style.transform = `translateX(-${offsets[i]}px)`;
            } else {
                // LTR: Bergerak arah sebaliknya, trick loop point mundur
                el.style.transform = `translateX(-${loopPoint - offsets[i]}px)`;
            }
        }
    }

    rafId = requestAnimationFrame(animationLoop);
};

onMounted(() => {
    const allUniqueImages = [...set1, ...set2, ...set3];
    let loadedCount = 0;
    const totalImages = allUniqueImages.length;
    
    if (totalImages === 0) {
        isGlobalLoading.value = false;
    } else {
        allUniqueImages.forEach(src => {
            const img = new Image();
            img.src = src;
            img.onload = img.onerror = () => {
                loadedCount++;
                if (loadedCount === totalImages) {
                    setTimeout(() => {
                        isGlobalLoading.value = false;
                    }, 500); 
                }
            };
        });
    }

    lastScrollY = window.scrollY;
    rafId = requestAnimationFrame(animationLoop);
});

onUnmounted(() => {
    cancelAnimationFrame(rafId);
});
</script>

<template>
  <section class="w-full min-h-[4000vh] bg-[#1E1E1E] text-white select-none relative">
    <!-- min-h 4000vh memberikan keleluasaan bagi visitor untuk ngescroll sepuas-puasnya tiada akhir -->
    <!-- Gradient Fading atas -->
    <div class="fixed top-0 left-0 w-full h-40 bg-linear-to-b from-[#1E1E1E] via-[#1E1E1E]/80 to-transparent z-30 pointer-events-none"></div>
    
    <!-- Header -->
    <div class="fixed top-0 left-0 w-full z-30 flex justify-center pt-8 pointer-events-none">
      <div class="pointer-events-auto flex items-center shadow-lg border border-[#333333] bg-[#1E1E1E]/80 backdrop-blur-md px-6 py-2.5 rounded-none">
        <a @click.prevent="goBack" class="cursor-pointer hover:text-gray-400 transition-colors mr-6 flex items-center text-sm font-semibold tracking-wide">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          BACK
        </a>
        <div class="w-px h-4 bg-gray-600 mx-3"></div>
        <span class="ml-3 text-[11px] font-bold tracking-[0.2em] text-gray-400">CATEGORY: RENDERS</span>
      </div>
    </div>
    
    <!-- Container Baris (Horizontal) -->
    <!-- Tidak menggunakan justify/center absolute karena konten kita meluber ke samping -->
    <div class="fixed inset-0 flex flex-col items-center overflow-hidden pointer-events-none pt-[12vh]">
        
        <!-- Baris 1: Kanan ke Kiri (RTL) -->
        <div class="w-full flex mb-2 md:mb-3 lg:mb-4 pointer-events-auto will-change-transform opacity-95">
            <div :ref="(el) => rowRefs[0] = el" class="flex flex-row w-max">
                <div v-for="(img, idx) in row1" :key="'r1'+idx" class="w-[60vw] sm:w-[42vw] md:w-[30vw] lg:w-[20vw] 2xl:w-[22vw] aspect-video relative bg-[#2a2a2a] overflow-hidden rounded-none shadow-xl border border-[#2a2a2a] mx-1.5 md:mx-2 lg:mx-2.5 cursor-pointer" @click="openOverlay(img)">
                    <img :src="img" draggable="false" @contextmenu.prevent class="select-none w-full h-full object-cover filter brightness-[0.7] hover:brightness-110 transition-all duration-500 hover:scale-110" />
                </div>
            </div>
        </div>

        <!-- Baris 2: Kiri ke Kanan (LTR) -->
        <div class="w-full flex mb-2 md:mb-3 lg:mb-4 pointer-events-auto will-change-transform opacity-95">
            <div :ref="(el) => rowRefs[1] = el" class="flex flex-row w-max">
                <div v-for="(img, idx) in row2" :key="'r2'+idx" class="w-[60vw] sm:w-[42vw] md:w-[30vw] lg:w-[20vw] 2xl:w-[22vw] aspect-video relative bg-[#2a2a2a] overflow-hidden rounded-none shadow-xl border border-[#2a2a2a] mx-1.5 md:mx-2 lg:mx-2.5 cursor-pointer" @click="openOverlay(img)">
                    <img :src="img" draggable="false" @contextmenu.prevent class="select-none w-full h-full object-cover filter brightness-[0.5] hover:brightness-110 transition-all duration-500 hover:scale-110" />
                </div>
            </div>
        </div>

        <!-- Baris 3: Kanan ke Kiri (RTL) -->
        <div class="w-full flex mb-2 md:mb-3 lg:mb-4 pointer-events-auto will-change-transform opacity-95">
            <div :ref="(el) => rowRefs[2] = el" class="flex flex-row w-max">
                <div v-for="(img, idx) in row3" :key="'r3'+idx" class="w-[60vw] sm:w-[42vw] md:w-[30vw] lg:w-[20vw] 2xl:w-[22vw] aspect-video relative bg-[#2a2a2a] overflow-hidden rounded-none shadow-xl border border-[#2a2a2a] mx-1.5 md:mx-2 lg:mx-2.5 cursor-pointer" @click="openOverlay(img)">
                    <img :src="img" draggable="false" @contextmenu.prevent class="select-none w-full h-full object-cover filter brightness-[0.7] hover:brightness-110 transition-all duration-500 hover:scale-110" />
                </div>
            </div>
        </div>

    </div>

    <!-- Gradient Fading bawah -->
    <div class="fixed bottom-0 left-0 w-full h-40 bg-linear-to-t from-[#1E1E1E] via-[#1E1E1E]/70 to-transparent z-30 pointer-events-none"></div>

    <!-- Overlay Modal -->
    <div v-show="isOverlayOpen" class="fixed inset-0 z-100 flex justify-center items-center pointer-events-auto">
      <!-- Backdrop with blur -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer transition-opacity" @click="closeOverlay"></div>
      
      <!-- Center Image Container -->
      <div class="relative z-10 flex border-4 border-[#2a2a2a] shadow-[0_0_50px_rgba(0,0,0,0.8)] mx-4">
        
        <!-- Close Button (Pojok Kanan Atas Foto) -->
        <button @click="closeOverlay" class="absolute -top-4 -right-4 md:-top-5 md:-right-5 text-white hover:text-red-500 z-60 bg-[#1a1a1a] rounded-full cursor-pointer transition-all hover:rotate-90 hover:scale-110 shadow-xl border-2 border-[#333] p-1.5 flex items-center justify-center">
          <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <img :src="selectedImage" draggable="false" @contextmenu.prevent class="select-none max-w-[90vw] max-h-[85vh] object-contain block" />
      </div>
    </div>

  </section>
</template>
