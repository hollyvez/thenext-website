export const keyframes = {
  "fade-up": {
    "0%": {
      opacity: "0",
      transform: "translateY(10px)",
    },
    "100%": {
      opacity: "1",
      transform: "translateY(0)",
    },
  },
  float: {
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-20px)",
    },
  },
  "float-slow": {
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-10px)",
    },
  },
  "pulse-slow": {
    "0%, 100%": {
      opacity: "1",
    },
    "50%": {
      opacity: "0.8",
    },
  },
  "gradient-x": {
    "0%, 100%": {
      "background-size": "200% 200%",
      "background-position": "left center",
    },
    "50%": {
      "background-size": "200% 200%",
      "background-position": "right center",
    },
  },
  "gradient-xy": {
    "0%, 100%": {
      "background-size": "400% 400%",
      "background-position": "left center",
    },
    "50%": {
      "background-size": "200% 200%",
      "background-position": "right center",
    },
  },
  "bounce-spin": {
    "0%": { transform: "rotate(0deg)" },
    "30%": { transform: "rotate(360deg)" },
    "60%": { transform: "translateY(-25%)" },
    "75%": { transform: "translateY(0)" },
    "85%": { transform: "translateY(-15%)" },
    "100%": { transform: "translateY(0)" },
  },
};

export const animations = {
  "fade-up": "fade-up 0.5s ease-out",
  "float": "float 6s ease-in-out infinite",
  "float-slow": "float-slow 7s ease-in-out infinite",
  "pulse-slow": "pulse-slow 4s ease-in-out infinite",
  "gradient-x": "gradient-x 15s ease infinite",
  "gradient-xy": "gradient-xy 15s ease infinite",
  "bounce-spin": "bounce-spin 2s ease-in-out",
};