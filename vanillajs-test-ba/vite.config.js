import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // Standardmäßig der aktuelle Ordner
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
});
