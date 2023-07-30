import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { createWebHistory } from 'vue-router'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  history: createWebHistory(import.meta.env.BASE_URL),
  server: {
    middleware: [    
      function (req, res, next) {
        const type = {
          '.html': 'text/html',
          '.js': 'text/javascript',  
          '.css': 'text/css'
        }[path.extname(req.path)];
        
        if (type) {
          res.setHeader('Content-Type', type);
        }
        
        next();
      }
   ]
  },
  
  plugins: [
    [vue({
      template: {
        compilerOptions: {
          delimiters: ['[[', ']]']
        }
      }
    })],
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    format: 'esm' // Add this line
  }
})
