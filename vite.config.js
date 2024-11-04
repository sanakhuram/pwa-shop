// vite.config.js
import { defineConfig } from "vite";
import { VitePWA } from "@vitejs/plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "PWA Shop",
        short_name: "Shop",
        description: "A Progressive Web App (PWA) for an online shop",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/images/logo.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
