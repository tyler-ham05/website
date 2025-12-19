import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/leetcode": {
        target: "https://leetcode-api-faisalshohag.vercel.app/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/leetcode/, ""),

      },
      "/api/github": {
        target: "https://api.github.com/graphql",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/github/, ""),
      }
    },
  },
});


