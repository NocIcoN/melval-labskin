import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Primary: Living Coral ──────────────────────────────
        coral: {
          DEFAULT: "#E8604C",
          light:   "#F08070",
          dark:    "#C04030",
          50:  "#FEF2F0",
          100: "#FDE0DC",
          200: "#FAC0B8",
          300: "#F59080",
          400: "#EE7060",
          500: "#E8604C",  // Living Coral
          600: "#C04030",
          700: "#9A3025",
          800: "#7A251C",
          900: "#621D16",
        },

        // ── Secondary: Persimmon Glaze ─────────────────────────
        persimmon: {
          DEFAULT: "#C0392B",
          light:   "#D45547",
          dark:    "#962D22",
        },

        // ── Accent: Old Gold ───────────────────────────────────
        gold: {
          DEFAULT: "#C8A84B",
          light:   "#D9BF72",
          dark:    "#A08530",
          50:  "#FBF7EC",
          100: "#F5EDD3",
          200: "#ECD9A3",
          300: "#DFC06A",
          400: "#D4AD52",
          500: "#C8A84B",  // Old Gold
          600: "#A08530",
          700: "#7E6624",
          800: "#64501D",
          900: "#514018",
        },

        // ── Neutral ────────────────────────────────────────────
        cream: {
          DEFAULT: "#FFF8F4",
          50:  "#FFFFFF",
          100: "#FFF8F4",
          200: "#FFEDE8",
          300: "#FFE0D8",
        },

        brand: {
          black: "#222222",
          gray:  "#6B6B6B",   // Grey dari palette
          "gray-light": "#F5F5F5",
          border: "#E8E8E8",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "Georgia", "serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
        poppins: ["Poppins", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-md": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.3" }],
        "display-xs": ["1.5rem", { lineHeight: "1.35" }],
      },
      spacing: {
        "section": "6rem",
        "section-sm": "4rem",
        "section-lg": "8rem",
      },
      borderRadius: {
        "brand": "0.75rem",
        "brand-lg": "1.25rem",
        "brand-xl": "2rem",
      },
      boxShadow: {
        "brand-sm": "0 2px 8px rgba(232, 96, 76, 0.08)",
        "brand":    "0 4px 24px rgba(232, 96, 76, 0.12)",
        "brand-lg": "0 8px 40px rgba(232, 96, 76, 0.18)",
        "card":       "0 4px 20px rgba(34, 34, 34, 0.06)",
        "card-hover": "0 8px 32px rgba(34, 34, 34, 0.12)",
        "luxury": "0 20px 60px rgba(232, 96, 76, 0.12), 0 4px 16px rgba(0,0,0,0.06)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in-slow": "fadeIn 1s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212, 175, 55, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(212, 175, 55, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-gold":    "linear-gradient(135deg, #C8A84B 0%, #A08530 100%)",
        "gradient-cream":   "linear-gradient(180deg, #FFFFFF 0%, #FFF8F4 100%)",
        "gradient-luxury":  "linear-gradient(135deg, #FFF8F4 0%, #FFEDE8 50%, #FFF8F4 100%)",
        "gradient-hero":    "linear-gradient(180deg, rgba(255,248,244,0.95) 0%, rgba(255,255,255,0.8) 100%)",
        "gradient-coral":   "linear-gradient(135deg, #E8604C 0%, #C0392B 100%)",
      },
      screens: {
        "xs": "375px",
      },
    },
  },
  plugins: [],
};

export default config;
