import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Yu's Blog",
      description: "Yu love everyone",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Yu's Blog",
      description: "Yu的小Blog啊~",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
