import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: "./env",
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      ui: "/src/components/ui",
      data: "/src/data",
      assets: "/src/assets",
      lib: "/src/lib",
    },
  },
});
