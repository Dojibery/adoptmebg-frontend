import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-router', 'react-router-dom', 'react-redux'],
      output: {
        globals: {
          'react': 'React',
          'react-router': 'ReactRouter',
          'react-router-dom': 'ReactRouterDOM',
          'react-redux': 'ReactRedux',
        },
      },
    },
  },
  base: import.meta.env.VITE_DEV ? '/' : '/adoptmebg-frontend/'
});


