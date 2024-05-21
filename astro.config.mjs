import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://solucionesagrovialeshm.com.ar/',
  build: {
    // Ejemplo: Genera `page.html` en lugar de `page/index.html` durante la compilación.
    format: 'file'
  },
  integrations: [tailwind(), react()]
});