import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/node_modules/**", "**/dist/**", "**/e2e/**"],
    include: ["tests/**/*.test.js", "src/**/*.spec.js", "src/**/*.spec.jsx"],
    globals: true,
    testTimeout: 60_000,
    hookTimeout: 60_000,
    setupFiles: "./tests/_setup.js",
    environment: "jsdom",
  },
});
