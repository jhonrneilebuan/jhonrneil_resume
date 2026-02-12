import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  const isVercel = !!process.env.VERCEL;
  const isProd = mode === "production";

  return {
    base: isProd ? (isVercel ? "/" : "/jhonrneil_resume/") : "/",
    plugins: [react()],
    server: {
      host: "::",
      port: 8080,
      hmr: { overlay: false },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
