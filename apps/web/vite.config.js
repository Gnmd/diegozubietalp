import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	build: {
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, 'index.html'),
				links: path.resolve(__dirname, 'links/index.html'),
			},
		},
	},
	server: {
		port: 3000,
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
