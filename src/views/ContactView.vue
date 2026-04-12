<script setup>
import { ref } from 'vue'

const email = 'dejet@gmail.com'
const copied = ref(false)

const copyEmail = () => {
  navigator.clipboard.writeText(email)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}

const form = ref({
  name: '',
  userEmail: '',
  subject: '',
  message: ''
})

const sendMessage = () => {
  const mailto = `mailto:${email}?subject=${encodeURIComponent(form.value.subject)}&body=${encodeURIComponent(`Name: ${form.value.name}\nEmail: ${form.value.userEmail}\n\n${form.value.message}`)}`
  window.open(mailto)
}

const socials = [
  {
    name: 'YouTube',
    href: 'https://youtube.com/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>`
  },
  {
    name: 'Discord',
    href: 'https://discord.com/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.055a19.909 19.909 0 0 0 5.994 3.03.078.078 0 0 0 .084-.026 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`
  },
]
</script>

<template>
  <div class="flex flex-col md:flex-row w-full gap-12 pt-10 pb-20 md:py-10">

    <!-- ===== LEFT SECTION ===== -->
    <div class="md:w-[45%] flex flex-col justify-center">

      <!-- Decorative Bars -->
      <div class="flex gap-2 mb-6">
        <div class="h-3 w-14 bg-[#232323]"></div>
        <div class="h-3 w-4 bg-[#232323]"></div>
        <div class="h-3 w-4 bg-[#232323]"></div>
      </div>

      <!-- Heading -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-[#1a1a1a] tracking-tight leading-none uppercase mb-6">
        Let's Start<br>A Project
      </h1>

      <!-- Subtitle -->
      <p class="text-base text-[#3b3b3b] font-medium leading-relaxed mb-10 max-w-sm">
        Interested in my work? Fill out this form to send it directly to my email or you can go directly to my Vgen account.
      </p>

      <!-- Direct Email -->
      <p class="text-xs font-black text-[#232323] tracking-widest uppercase mb-3">Direct Email</p>
      <div class="border-2 border-[#1a1a1a] flex items-center justify-between px-4 py-3 hover:shadow-[6px_6px_0_0_#1a1a1a] transition-all duration-200 ease-out group max-w-sm">
        <div class="flex items-center gap-3">
          <!-- mail icon -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-[#1a1a1a]"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <span class="text-sm font-bold text-[#1a1a1a]">{{ email }}</span>
        </div>
        <!-- copy button -->
        <button @click="copyEmail" :title="copied ? 'Copied!' : 'Copy email'" class="p-1 text-[#1a1a1a] hover:text-gray-500 transition-colors">
          <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-green-600"><path d="M20 6 9 17l-5-5"/></svg>
        </button>
      </div>

      <!-- Direct Vgen -->
      <p class="text-xs font-black text-[#232323] tracking-widest uppercase my-3">Vgen</p>
      <a href="https://vgen.co/dzxy" target="_blank" class="border-2 border-[#1a1a1a] flex items-center justify-between px-4 py-3 hover:shadow-[6px_6px_0_0_#B8FF26] transition-all duration-200 ease-out group max-w-sm">
        <div class="flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="15 25 170 150" class="w-5 h-5"><path fill="currentColor" d="M77 80C67.29 67.22 50.91 55.87 34.23 63.23 17.55 70.59 13.52 92.65 23.25 105.75 32.98 118.86 40.74 127.95 52.75 139.25 64.77 150.55 76.74 158.83 92.98 163.02 109.21 167.22 128.39 160.16 141.25 150.25 154.11 140.34 161.68 129.21 172.25 117.25 182.81 105.28 190.46 86.03 181.77 71.23 173.08 56.43 166.91 46.16 151.68 38.32 136.44 30.48 115.25 32.24 101.23 41.23 87.21 50.22 77.82 63.58 77 80M112 118C104.5 109.08 97.21 104.05 93.02 92.98 88.84 81.9 91.63 68 100.25 59.25 108.87 50.5 120.89 45.57 133.01 48.99 145.13 52.41 150.11 59.66 157.77 69.23 165.43 78.8 162.57 91.42 155.08 100.08 147.6 108.74 142.63 116.37 134.25 124.25 125.86 132.13 117.02 138.75 105.99 140.99 94.97 143.24 80.83 138.37 72.92 131.08 65.01 123.8 55.04 119.25 50.08 109.92 45.12 100.59 29.05 94.87 33 82c3.95-12.87 21.04-1.41 25.25 7.75 4.21 9.16 15.61 14.95 22.5 22.5C87.63 119.81 102.75 126.61 112 118Z"/><path fill="currentColor" d="M126 104C141.66 98.72 147.78 66.59 125.01 67.01 102.23 67.43 111.25 97.32 126 104Z"/></svg>
            <span class="text-sm font-bold text-[#1a1a1a]">vgen.co/dzxy</span>
        </div>
        </a>

      <!-- Social Presence -->
      <p class="text-xs font-black text-[#232323] tracking-widest uppercase mt-8 mb-3">Social Presence</p>
      <div class="flex gap-3">
        <a
          v-for="s in socials"
          :key="s.name"
          :href="s.href"
          :title="s.name"
          target="_blank"
          rel="noopener noreferrer"
          class="border-2 border-[#1a1a1a] p-2.5 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all duration-200 ease-out hover:shadow-[4px_4px_0_0_#555]"
          v-html="s.icon"
        />
      </div>
    </div>

    <!-- ===== RIGHT SECTION: Form ===== -->
    <div class="flex-1 border-2 border-[#1a1a1a] p-6 md:p-8 hover:shadow-[8px_8px_0_0_#1a1a1a] transition-all duration-300 ease-out">

      <div class="flex flex-col sm:flex-row gap-4 mb-4">
        <!-- Name -->
        <div class="flex-1 flex flex-col gap-1">
          <label class="text-xs font-black tracking-widest uppercase text-[#232323]">Your Name</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="John Doe"
            class="border-2 border-[#1a1a1a] px-4 py-3 text-sm font-medium text-[#1a1a1a] bg-transparent outline-none focus:shadow-[4px_4px_0_0_#1a1a1a] transition-all duration-200 placeholder:text-gray-300"
          />
        </div>
        <!-- Email -->
        <div class="flex-1 flex flex-col gap-1">
          <label class="text-xs font-black tracking-widest uppercase text-[#232323]">Your Email</label>
          <input
            v-model="form.userEmail"
            type="email"
            placeholder="you@example.com"
            class="border-2 border-[#1a1a1a] px-4 py-3 text-sm font-medium text-[#1a1a1a] bg-transparent outline-none focus:shadow-[4px_4px_0_0_#1a1a1a] transition-all duration-200 placeholder:text-gray-300"
          />
        </div>
      </div>

      <!-- Subject -->
      <div class="flex flex-col gap-1 mb-4">
        <label class="text-xs font-black tracking-widest uppercase text-[#232323]">Subject</label>
        <input
          v-model="form.subject"
          type="text"
          placeholder="Commission Request"
          class="border-2 border-[#1a1a1a] px-4 py-3 text-sm font-medium text-[#1a1a1a] bg-transparent outline-none focus:shadow-[4px_4px_0_0_#1a1a1a] transition-all duration-200 placeholder:text-gray-300"
        />
      </div>

      <!-- Message -->
      <div class="flex flex-col gap-1 mb-6">
        <label class="text-xs font-black tracking-widest uppercase text-[#232323]">Message</label>
        <textarea
          v-model="form.message"
          rows="6"
          placeholder="Hi! I'd like to commission a Minecraft skin..."
          class="border-2 border-[#1a1a1a] px-4 py-3 text-sm font-medium text-[#1a1a1a] bg-transparent outline-none resize-none focus:shadow-[4px_4px_0_0_#1a1a1a] transition-all duration-200 placeholder:text-gray-300"
        />
      </div>

      <!-- Submit -->
      <button
        @click="sendMessage"
        class="w-full bg-[#1a1a1a] text-white font-black tracking-widest uppercase py-4 text-sm flex items-center justify-center gap-3 hover:bg-black hover:shadow-[6px_6px_0_0_#555] transition-all duration-200 ease-out group"
      >
        Send Message
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
      </button>

    </div>

  </div>
</template>