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

import img1 from '@/assets/images/skins/1.png'
import img2 from '@/assets/images/skins/2.png'
import img3 from '@/assets/images/skins/3.png'
import img4 from '@/assets/images/skins/4.png'
import img5 from '@/assets/images/skins/5.png'
import img6 from '@/assets/images/skins/6.png'
import img7 from '@/assets/images/skins/7.png'
import img8 from '@/assets/images/skins/8.png'
import img9 from '@/assets/images/skins/9.png'
import img10 from '@/assets/images/skins/10.png'
import img11 from '@/assets/images/skins/11.png'
import img12 from '@/assets/images/skins/12.png'
import img13 from '@/assets/images/skins/13.png'
import img14 from '@/assets/images/skins/14.png'
import img15 from '@/assets/images/skins/15.png'
import img16 from '@/assets/images/skins/16.png'
import img17 from '@/assets/images/skins/17.png'
import img18 from '@/assets/images/skins/18.png'
import img19 from '@/assets/images/skins/19.png'
import img20 from '@/assets/images/skins/20.png'
import img21 from '@/assets/images/skins/21.png'
import img22 from '@/assets/images/skins/22.png'
import img23 from '@/assets/images/skins/23.png'
import img24 from '@/assets/images/skins/24.png'
import img25 from '@/assets/images/skins/25.png'
import img26 from '@/assets/images/skins/26.png'
import img27 from '@/assets/images/skins/27.png'
import img28 from '@/assets/images/skins/28.png'
import img29 from '@/assets/images/skins/29.png'
import img30 from '@/assets/images/skins/30.png'

const set1 = [img1, img2, img3, img4, img5];
const set2 = [img6, img7, img8, img9, img10];
const set3 = [img11, img12, img13, img14, img15];
const set4 = [img16, img17, img18, img19, img20];
const set5 = [img21, img22, img23, img24, img25];
const set6 = [img26, img27, img28, img29, img30];

// Digabungkan 2X secara akurat. Modulo animasi akan membuatnya menjadi tak terbatas.
const col1 = [...set1, ...set1];
const col2 = [...set2, ...set2];
const col3 = [...set3, ...set3];
const col4 = [...set4, ...set4];
const col5 = [...set5, ...set5];
const col6 = [...set6, ...set6];

// Referensi elemen 6 kolom
const colRefs = ref([]);

// Setup variabel untuk Mesin Auto Scroll + Parallax 60FPS murni JS (Performa tinggi)
const offsets = [0, 0, 0, 0, 0, 0];
const autoSpeeds = [0.8, 0.4, 0.9, 0.3, 0.6, 0.2]; // Kecepatan gerak otomatis per-frame (pengganti keyframe gap)
const scrollFactors = [0.7, 0.3, 0.9, 0.2, 0.5, 0.1]; // Seberapa kuat efek dorongan dari kontrol Mouse Scroll

let rafId;
let lastScrollY = 0;

const animationLoop = () => {
    const currentScrollY = window.scrollY;
    // Deteksi tarikan kursor scroll manual pengguna
    const delta = currentScrollY - lastScrollY;
    lastScrollY = currentScrollY;

    // Terapkan ke 6 kolom tanpa menggunakan Vue Reactivity (Update DOM direct)
    for (let i = 0; i < 6; i++) {
        const el = colRefs.value[i];
        if (!el) continue;

        // Bergerak auto + tambahan dorongan jika di scroll
        offsets[i] += autoSpeeds[i] + (delta * scrollFactors[i]);

        // Karena item di-duplikat penuh dan terukur akurat dengan Math, 
        // separuh persis dari tingginya (half-height) adalah posisi pertemuan yang tak terlihat mata
        const loopPoint = el.scrollHeight / 2;
        
        if (loopPoint > 0) {
            // Formula Infinite Modulo bebas loncatan, ke atas dan ke bawah
            offsets[i] = ((offsets[i] % loopPoint) + loopPoint) % loopPoint;
            
            // Terapkan efek visual
            el.style.transform = `translateY(-${offsets[i]}px)`;
        }
    }

    rafId = requestAnimationFrame(animationLoop);
};

onMounted(() => {
    const allUniqueImages = [...set1, ...set2, ...set3, ...set4, ...set5, ...set6];
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
                    }, 500); // 500ms delay to make it look smooth
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
        <span class="ml-3 text-[11px] font-bold tracking-[0.2em] text-gray-400">CATEGORY: SKINS</span>
      </div>
    </div>
    
    <!-- Container Kolom -->
    <!-- Tidak memakai `gap` lagi karena bisa bikin hitungan scrollHeight melesat sekian pixel dari CSS. Margin diubah pada setiap item secara akurat -->
    <div class="fixed inset-0 flex px-3 md:px-6 lg:px-8 justify-center items-start overflow-hidden pointer-events-none pt-[15vh]">

      <!-- Kolom 1 -->
      <div class="w-1/2 md:w-1/4 lg:w-1/6 px-1.5 md:px-2 lg:px-2.5 mt-0 pointer-events-auto will-change-transform">
        <div :ref="(el) => colRefs[0] = el" class="w-full flex flex-col">
          <div v-for="(img, idx) in col1" :key="'c1'+idx" class="w-full relative bg-[#2a2a2a] overflow-hidden aspect-square rounded-none shadow-xl border border-[#2a2a2a] mb-3 md:mb-4 lg:mb-5 cursor-pointer" @click="openOverlay(img)">
              <img :src="img" draggable="false" @contextmenu.prevent class="select-none w-full h-full object-cover filter brightness-[0.6] hover:brightness-110 transition-all duration-500 hover:scale-110" />
          </div>
        </div>
      </div>

       <!-- Kolom 2 -->
      <div class="w-1/2 md:w-1/4 lg:w-1/6 px-1.5 md:px-2 lg:px-2.5 -mt-20 pointer-events-auto will-change-transform">
        <div :ref="(el) => colRefs[1] = el" class="w-full flex flex-col">
          <div v-for="(img, idx) in col2" :key="'c2'+idx" class="w-full relative bg-[#2a2a2a] overflow-hidden aspect-square rounded-none shadow-xl border border-[#2a2a2a] mb-3 md:mb-4 lg:mb-5 cursor-pointer" @click="openOverlay(img)">
              <img :src="img" draggable="false" @contextmenu.prevent class="select-none w-full h-full object-cover filter brightness-[0.4] hover:brightness-110 transition-all duration-500 hover:scale-110" />
          </div>
        </div>
      </div>

       <!-- Kolom 3 -->
      <div class="hidden md:flex md:w-1/4 lg:w-1/6 px-1.5 md:px-2 lg:px-2.5 -mt-8 pointer-events-auto will-change-transform">
        <div :ref="(el) => colRefs[2] = el" class="w-full flex flex-col">
          <div v-for="(img, idx) in col3" :key="'c3'+idx" class="w-full relative bg-[#2a2a2a] overflow-hidden aspect-square rounded-none shadow-xl border border-[#2a2a2a] mb-3 md:mb-4 lg:mb-5 cursor-pointer" @click="openOverlay(img)">
              <img :src="img" draggable="false" @contextmenu.prevent class="select-none w-full h-full object-cover filter brightness-[0.6] hover:brightness-110 transition-all duration-500 hover:scale-110" />
          </div>
        </div>
      </div>
      
       <!-- Kolom 4 -->
      <div class="hidden md:flex md:w-1/4 lg:w-1/6 px-1.5 md:px-2 lg:px-2.5 -mt-32 pointer-events-auto will-change-transform">
        <div :ref="(el) => colRefs[3] = el" class="w-full flex flex-col">
          <div v-for="(img, idx) in col4" :key="'c4'+idx" class="w-full relative bg-[#2a2a2a] overflow-hidden aspect-square rounded-none shadow-xl border border-[#2a2a2a] mb-3 md:mb-4 lg:mb-5 cursor-pointer" @click="openOverlay(img)">
              <img :src="img" draggable="false" @contextmenu.prevent class="select-none w-full h-full object-cover filter brightness-[0.4] hover:brightness-110 transition-all duration-500 hover:scale-110" />
          </div>
        </div>
      </div>

       <!-- Kolom 5 -->
      <div class="hidden lg:flex w-1/6 px-1.5 md:px-2 lg:px-2.5 -mt-16 pointer-events-auto will-change-transform">
        <div :ref="(el) => colRefs[4] = el" class="w-full flex flex-col">
          <div v-for="(img, idx) in col5" :key="'c5'+idx" class="w-full relative bg-[#2a2a2a] overflow-hidden aspect-square rounded-none shadow-xl border border-[#2a2a2a] mb-3 md:mb-4 lg:mb-5 cursor-pointer" @click="openOverlay(img)">
              <img :src="img" draggable="false" @contextmenu.prevent class="select-none w-full h-full object-cover filter brightness-[0.6] hover:brightness-110 transition-all duration-500 hover:scale-110" />
          </div>
        </div>
      </div>

       <!-- Kolom 6 -->
      <div class="hidden lg:flex w-1/6 px-1.5 md:px-2 lg:px-2.5 -mt-40 pointer-events-auto will-change-transform">
        <div :ref="(el) => colRefs[5] = el" class="w-full flex flex-col">
          <div v-for="(img, idx) in col6" :key="'c6'+idx" class="w-full relative bg-[#2a2a2a] overflow-hidden aspect-square rounded-none shadow-xl border border-[#2a2a2a] mb-3 md:mb-4 lg:mb-5 cursor-pointer" @click="openOverlay(img)">
              <img :src="img" draggable="false" @contextmenu.prevent class="select-none w-full h-full object-cover filter brightness-[0.4] hover:brightness-110 transition-all duration-500 hover:scale-110" />
          </div>
        </div>
      </div>

    </div>

    <!-- Gradient Fading bawah -->
    <div class="fixed bottom-0 left-0 w-full h-40 bg-linear-to-t from-[#1E1E1E] via-[#1E1E1E]/80 to-transparent z-30 pointer-events-none"></div>
    
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
