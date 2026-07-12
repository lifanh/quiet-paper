import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
			rollupTypes: true,
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "QuietPaper",
			formats: ["es"],
			fileName: "quiet-paper",
		},
		rollupOptions: {
			external: [
				"@base-ui/react",
				"react",
				"react-dom",
				"react/jsx-runtime",
			],
			output: {
				preserveModules: false,
			},
		},
		sourcemap: true,
		emptyOutDir: true,
	},
});
