import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/JWT-AUTH/",
  server: {
    port: 5000,
    open: true,
  },
  plugins: [react()],
});
