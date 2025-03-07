// @ts-check
import {defineConfig} from 'astro/config';
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: 'https://luiscm17.github.io',
    integrations: [mdx(), react(), tailwind({
        applyBaseStyles: false,
    }),
    icon({
        include: {
            'petroleum-tools': ['./src/icons/*.svg'],
            'custom-icons': ['./src/icons/*.svg'] // Para íconos generales
        }
    }), 
    sitemap()],
    markdown: {
        shikiConfig: {
            theme: 'plastic',
            wrap: true,
        },
    },
    experimental: {
        svg: true,
    }});
