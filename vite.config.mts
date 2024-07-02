import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/findora-open-beta-react/",
  build: {
    outDir: "build",
  },
  plugins: [react()],
});
