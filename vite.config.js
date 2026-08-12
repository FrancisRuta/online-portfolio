import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Change this to match your GitHub repo name.
  // If deploying to user page https://username.github.io/ leave as '/'
  // If deploying to a project page https://username.github.io/<repo>/ set to '/<repo>/'
  base: "/online-portfolio/",
});
