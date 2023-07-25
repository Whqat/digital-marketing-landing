import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({

  plugins: [
    vue({
      template: {
        compilerOptions: {
          delimiters: ['[[', ']]']
        }
      }
    })
  ],

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

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))  
    }
  }

})
