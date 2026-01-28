import posthog from "posthog-js";
import "./custom.css";
import { EnhanceAppContext } from "vitepress";
import DefaultTheme from "vitepress/theme";

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    if (typeof window !== "undefined") {
      posthog.init("phc_deBOw8kT4gv66Oew16opF3wW0BhfhTSrhezCqFXPQHo", {
        api_host: "https://us.i.posthog.com",
        person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
      });
    }
  },
};
