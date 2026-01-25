import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy requests to Moodle assets to avoid CORS
      "/theme": {
        target: "https://lmsstyle.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
