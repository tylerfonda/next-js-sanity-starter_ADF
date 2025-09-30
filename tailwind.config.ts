// tailwind.config.ts
import type {Config} from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAFA",
        fg: "#0B0B0B",
        muted: "#6A6A6A",
        border: "#E6E6E6",
        accentMagenta: "#FF1F8F",
        accentCyan: "#00E0FF",
        accentYellow: "#FFE800",
        accentLime: "#6BFF6B",
      },
      fontFamily: {
        ui: ["Inter","ui-sans-serif","system-ui","-apple-system"],
        serif: ["Source Serif Pro","ui-serif","Georgia","serif"],
      },
      fontSize: { xs:"12px", sm:"14px", base:"16px", lg:"21px", xl:"28px", "2xl":"37px", "3xl":"49px", "4xl":"65px" },
      spacing: { 1:"4px", 2:"8px", 3:"12px", 4:"16px", 6:"24px", 8:"32px", 12:"48px", 16:"64px", 24:"96px" },
      borderWidth: { hair:"1px" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
