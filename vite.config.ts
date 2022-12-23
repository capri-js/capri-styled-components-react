import capri from "@capri-js/react";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  ssr: {
    //see https://github.com/styled-components/styled-components/issues/3832
    noExternal: ["styled-components", "@emotion/*"],
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-styled-components", { ssr: true }]],
      },
    }),
    capri({
      spa: "/preview",
    }),
  ],
});
