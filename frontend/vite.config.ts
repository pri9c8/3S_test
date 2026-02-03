import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: { port: 9878 },
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@constants': path.resolve(__dirname, './src/constants'),
			'@lib': path.resolve(__dirname, './src/lib'),
			'@types': path.resolve(__dirname, './src/types'),
		},
	},
})
