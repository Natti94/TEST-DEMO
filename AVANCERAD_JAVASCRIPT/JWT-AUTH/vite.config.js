import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/login": "http://localhost:80", 
      "/protected": "http://localhost:80",
      "/logout": "http://localhost:80",
    },
  },
});
