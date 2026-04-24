<script setup>
import { ref } from 'vue'

const email = 'dizzxy7@gmail.com'
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
    name: 'X (Twitter)',
    href: 'https://x.com/dzxy7_',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.264 5.634 5.9-5.634Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/dizzc7/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>`
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