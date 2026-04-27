export default defineAppConfig({
  ui: {
    colors: {
      primary: "green",
      neutral: "slate",
    },
    footer: {
      slots: {
        root: "border-t border-default",
        left: "text-sm text-muted",
      },
    },
  },
  seo: {
    siteName: "Nuxt Docs Template",
  },
  header: {
    title: "",
    to: "/",
    logo: {
      alt: "",
      light: "",
      dark: "",
    },
    search: true,
    colorMode: true,
    links: [
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/nuxt-ui-templates/docs",
        target: "_blank",
        "aria-label": "GitHub",
      },
    ],
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        icon: "i-simple-icons-envato",
        to: "https://codecanyon.net/user/george_fx/portfolio",
        target: "_blank",
        "aria-label": "CodeCanyon",
      },
    ],
  },
  toc: {
    title: "Table of Contents",
    bottom: {},
  },
});
