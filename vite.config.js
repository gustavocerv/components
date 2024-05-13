import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For development
  server: {
    port: 3000,
    host: true,
  },
  // For preview (e2e tests)
  preview: {
    port: 3001,
    host: true,
  },
});
