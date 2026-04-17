<script setup>
import { ref, computed } from 'vue'

const BIRTH_YEAR  = 2007  // tahun lahir
const START_YEAR  = 2024  // tahun mulai aktif berkarya

const currentYear  = new Date().getFullYear()
const age          = computed(() => currentYear - BIRTH_YEAR)
const yearsActive  = computed(() => currentYear - START_YEAR)

const polaroidRef = ref(null)

const onMouseMove = (e) => {
  const card = polaroidRef.value
  if (!card) return

  const rect = card.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width   // 0 → 1
  const y = (e.clientY - rect.top)  / rect.height  // 0 → 1

  const rotateX = (y - 0.5) * -18  // -9deg → +9deg
  const rotateY = (x - 0.5) *  18  // -9deg → +9deg

  // Transition singkat agar terasa real-time mengikuti kursor
  card.style.transition = 'transform 0.05s linear'
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
}

const onMouseLeave = () => {
  const card = polaroidRef.value
  if (!card) return

  // cubic-bezier kustom mensimulasikan efek spring/bouncy untuk snap-back
  card.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
  card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
}
</script>

<template>
    <div class="flex flex-col md:flex-row w-full pt-10 pb-2 md:py-0 mb-16">
    
        <!-- Left Section: Content -->
        <div class="md:w-[50%] mt-8 md:mt-16 flex flex-col items-center md:items-start text-left">

            <!-- intro -->
            <div class="border-2 p-5 hover:shadow-[8px_8px_0_0_#1a1a1a] transition-all duration-300 ease-out mb-10">
            <!-- Decorative Bars -->
            <div class="flex gap-2 mb-5 flex-row items-center">
                <div class="h-3 w-14 bg-[#232323] me-2"></div>
                <p class="text-1xl md:text-2xl lg:text-3xl font-black text-[#1a1a1a] max-w-2xl">Hi! I'm Dizz</p>
            </div>
        
            
            <p class="text-base md:text-lg lg:text-xl text-[#3b3b3b] leading-relaxed max-w-2xl font-medium mb-5">
                A 3D Artist and Minecraft Thumbnail Designer from Makassar. I dedicate my time to creating strong visual identities, whether for content creators or specific freelance Minecraft skin projects.
            </p>
            
            <p class="text-base md:text-lg lg:text-xl text-[#3b3b3b] leading-relaxed max-w-2xl font-medium">
                I am proficient in various design tools, including Blockbench for creating Minecraft skins, Mine-imator for 3D rendering, and more.
            </p>
            </div>

            <!-- Decorative Bars -->
            <div class="flex gap-2 mb-5 flex-row items-center">
                <div class="h-3 w-14 bg-[#232323] me-2"></div>
                <p class="text-1xl md:text-2xl lg:text-3xl font-black text-[#1a1a1a] max-w-2xl">Software Proficiency</p>
            </div>
            
            <!-- software proficiency -->
            <div class="flex flex-row gap-5 flex-wrap justify-center md:justify-start">
                <div class="border-2 p-3 hover:shadow-[8px_8px_0_0_#1a1a1a] transition-all duration-300 ease-out mb-5 flex flex-col items-center">
                    <div class="w-full flex items-center justify-center mb-1">
                        <img src="../assets/images/blockbench.png" alt="" class="w-14" />
                    </div>

                    <p class="text-base text-[#3b3b3b] leading-relaxed max-w-2xl font-bold">Blockbench</p>
                </div>

                <div class="border-2 p-3 hover:shadow-[8px_8px_0_0_#1a1a1a] transition-all duration-300 ease-out mb-5 flex flex-col items-center ">
                    <div class="w-full flex items-center justify-center mb-1">
                        <img src="../assets/images/mineimator.png" alt="" class="w-14" />
                    </div>
                    <p class="text-base text-[#3b3b3b] leading-relaxed max-w-2xl font-bold">Mine-imator</p>
                </div>

                <div class="border-2 p-3 hover:shadow-[8px_8px_0_0_#1a1a1a] transition-all duration-300 ease-out mb-5 flex flex-col items-center w-28">
                    <div class="w-full flex items-center justify-center mb-1">
                        <img src="../assets/images/figma.png" alt="" class="w-9" />
                    </div>
                    <p class="text-base text-[#3b3b3b] leading-relaxed max-w-2xl font-bold">Figma</p>
                </div>
            </div>

        </div>

        <!-- Right Section: Graphic/Logo & Stats -->
        <div class="flex-1 flex flex-col justify-center md:justify-start md:mt-16 items-center md:items-end mb-10 md:mb-0">
            
            <!-- Polaroid: perspective di parent agar tidak terganggu transform animasi -->
            <div style="perspective: 900px;">
              <div
                ref="polaroidRef"
                @mousemove="onMouseMove"
                @mouseleave="onMouseLeave"
                class="bg-white p-3 sm:p-4 pb-7 sm:pb-8 shadow-2xl w-72 sm:w-80 md:w-96 border border-gray-100 flex flex-col cursor-pointer"
                style="will-change: transform;"
              >
                <div class="bg-[#1a1a1a] w-full aspect-square flex items-center justify-center overflow-hidden">
                    <img src="@/assets/images/logo_2.png" alt="DZXY" class="w-2/3 h-2/3 object-contain" />
                </div>
                
                <!-- Info text at bottom of polaroid -->
                <div class="mt-4 mb-2 flex justify-between items-center text-[#1a1a1a] text-xs sm:text-sm font-normal px-2">
                    <div class="flex items-center gap-1.5">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="w-3 sm:w-4 h-3 sm:h-4">
                            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>
                        <span>Makassar, Indonesia</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="w-3 sm:w-4 h-3 sm:h-4">
                            <path d="M12 2a1 1 0 0 0-1 1c0 1 1 2.5 1 2.5s1-1.5 1-2.5a1 1 0 0 0-1-1z" />
                            <path d="M11 6h2v3h-2z" />
                            <path d="M7 9h10v3H7zM6 13h12v3H6zM4 17h16v3H4z" />
                        </svg>
                        <span>{{ age }} years old</span>
                    </div>
                </div>
              </div><!-- end polaroid card -->
            </div><!-- end perspective wrapper -->

            <!-- Stats Container -->
            <div class="w-72 sm:w-80 md:w-96 flex flex-col gap-3 mt-6">
                <!-- Stat 1 -->
                <div class="bg-[#1a1a1a] text-center text-white py-2 px-4 shadow-sm border border-[#2a2a2a]">
                    <h3 class="text-2xl font-black">{{ yearsActive }}+</h3>
                    <p class="text-sm font-medium text-gray-400 mt-1">Years active</p>
                </div>
                <!-- Stat 2 -->
                <div class="bg-[#1a1a1a] text-center text-white py-2 px-4 shadow-sm border border-[#2a2a2a]">
                    <h3 class="text-2xl font-black">500+</h3>
                    <p class="text-sm font-medium text-gray-400 mt-1">Skins created</p>
                </div>
                <div class="bg-[#1a1a1a] text-center text-white py-2 px-4 shadow-sm border border-[#2a2a2a]">
                    <h3 class="text-2xl font-black">500+</h3>
                    <p class="text-sm font-medium text-gray-400 mt-1">Skins created</p>
                </div>
            </div>

        </div>

  </div>
</template>