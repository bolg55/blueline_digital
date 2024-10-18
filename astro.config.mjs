// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://bluelinedigital.io',
  integrations: [react(), tailwind(), sitemap(), robotsTxt(), icon()],
});
