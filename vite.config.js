import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 배포 시 파일 경로를 상대 경로로 설정 (매우 중요!)
  base: './', 
  server: {
    port: 80
  }
})