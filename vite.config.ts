import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";
import path from "node:path";
import fs from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, "client"), // กำหนดให้ Vite หา index.html ในโฟลเดอร์ client
  base: "/intevia-website/",
  build: {
    outDir: path.resolve(__dirname, "dist/public"), // กำหนดให้ build ออกมาที่ dist/public
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});
// ============================================================================
// Manus Debug Collector - Vite Plugin
// ============================================================================

const PROJECT_ROOT = import.meta.dirname;
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");
const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024; // 1MB per log file
const TRIM_TARGET_BYTES = Math.floor(MAX_LOG_SIZE_BYTES * 0.6);

type LogSource = "browserConsole" | "networkRequests" | "sessionReplay";

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function trimLogFile(logPath: string, maxSize: number) {
  try {
    if (!fs.existsSync(logPath) || fs.statSync(logPath).size <= maxSize) {
      return;
    }
    const lines = fs.readFileSync(logPath, "utf-8").split("\n");
    const keptLines: string[] = [];
    let keptBytes = 0;
    for (let i = lines.length - 1; i >= 0; i--) {
      const lineBytes = Buffer.byteLength(lines[i] + "\n", "utf-8");
      if (keptBytes + lineBytes > TRIM_TARGET_BYTES) break;
      keptLines.unshift(lines[i]);
      keptBytes += lineBytes;
    }
    fs.writeFileSync(logPath, keptLines.join("\n"), "utf-8");
  } catch (err) {
    console.error(`[manus-debug] Error trimming log file ${logPath}:`, err);
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    jsxLocPlugin(),
    vitePluginManusRuntime(),
  ],
  base: "/intevia-website/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});
