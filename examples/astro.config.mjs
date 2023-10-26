import { defineConfig } from 'astro/config';

export default defineConfig({
   // tus opciones de configuración van aquí...
   // https://docs.astro.build/es/reference/configuration-reference/
   vite: {
      logLevel: 'info',
      define: {
         __DATE__: `'${new Date().toISOString()}'`
      },
      server: {
         watch: {
            ignored: ['**/.history/**']
         }
      }
   }
});
