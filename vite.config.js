import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Ye line add karein

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
