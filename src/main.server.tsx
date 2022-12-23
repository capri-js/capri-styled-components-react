import { RenderFunction, renderToString } from "@capri-js/react/server";
import { StrictMode } from "react";
import { StaticRouter } from "react-router-dom/server.js";
import { ServerStyleSheet } from "styled-components";

import { App } from "./App";

export const render: RenderFunction = async (url: string) => {
  const sheet = new ServerStyleSheet();
  const html = await renderToString(
    sheet.collectStyles(
      <StrictMode>
        <StaticRouter location={url} basename={import.meta.env.BASE_URL}>
          <App />
        </StaticRouter>
      </StrictMode>
    )
  );
  const styleTags = sheet.getStyleTags();
  return {
    head: styleTags,
    "#app": html,
  };
};
