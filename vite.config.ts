import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg', // <-- Эта строка ключевая
    }),
  ],
  server: {
    host: true, // Или '0.0.0.0' для прослушивания всех интерфейсов
    port: 5173, // Порт по умолчанию, можно изменить
  },
  build: {
    manifest: true, // Включаем генерацию манифеста
    outDir: 'dist', // Папка для сборки (по умолчанию 'dist')
  },
});
