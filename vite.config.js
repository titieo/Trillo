import { defineConfig } from 'vite'

export default defineConfig({
    base: '/Trillo/',
    build: { sourcemap: 'inline' },
    server: {
        open: true,
    },
    publicDir: 'img',
})
