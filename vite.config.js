import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  server: {
    host: true, 
    port: 5173,
    cors: true,
    strictPort: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'probankruptcy-stanley-sheeplike.ngrok-free.dev', // your ngrok domain
    ],
  },
})
