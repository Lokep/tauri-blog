import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import ViteComponents from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig(async () => ({
  plugins: [
    vue(),
    vueJsx(),
    ViteComponents({
      dts: "types/components.d.ts",
      resolvers: [NaiveUiResolver()],
      exclude: [/[\\/]node_modules[\\/](?!justfe-vue)/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),

    AutoImport({
      dts: "types/auto-imports.d.ts",
      imports: [
        "vue",
        "pinia",
        "vue-router",
        {
          "@vueuse/core": ["useLocalStorage"],
        },

        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ],
      eslintrc: {
        enabled: true, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
        filepath: "./.eslintrc-auto-import.json", // 生成json文件
        globalsPropValue: true,
      },
    })
  ],
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
  },

  envPrefix: ["VITE_", "TAURI_"],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue'],
    alias: {
      "@/": fileURLToPath(new URL("./src/", import.meta.url)),
    },
  },
}));
