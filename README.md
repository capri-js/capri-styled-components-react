# 🍋 capri + 💅 styled-components

This is an example of how to use styled-components with Capri.

In order for styled-components to work with SSR, their [babel plugin](https://github.com/styled-components/babel-plugin-styled-components) must be used. Refer to `/vite.config.js` to see how the `@vitejs/plugin-react` can be configured to apply this plugin.

The code in `/src/main.server.tsx` is taken straight from the official [SSR example](https://styled-components.com/docs/advanced#example).

A nice feature is that each page only contains the CSS styles that are actually used by the components on that page.

> **Note**
> Be aware, that if you use styled-components inside your islands, your JS bundle size will increase, as it will contain the CSS-in-JS runtime as well as your component's styles.
