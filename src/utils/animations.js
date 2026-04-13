// Page and section animations
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 24,
    scale: 0.985,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -18,
    scale: 0.985,
    filter: "blur(6px)",
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const pageOverlayVariants = {
  initial: {
    scaleX: 0,
    transformOrigin: "left",
    opacity: 0.12,
  },
  animate: {
    scaleX: 0,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    scaleX: 1,
    opacity: 0.08,
    transition: {
      duration: 0.4,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

// Stagger container for children animations
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Individual item animations
export const itemVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Fade in animation
export const fadeInVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Slide in from left
export const slideInLeftVariants = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Slide in from right
export const slideInRightVariants = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Scale and fade
export const scaleInVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Border animation (neo-brutalist border glow)
export const borderPulseVariants = {
  initial: {
    boxShadow: "0 0 0 2px rgba(255, 255, 255, 0)",
  },
  animate: {
    boxShadow: [
      "0 0 0 2px rgba(255, 255, 255, 0)",
      "0 0 0 2px rgba(255, 255, 255, 0.5)",
      "0 0 0 2px rgba(255, 255, 255, 0)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

// Hover scale effect
export const hoverScaleVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Tap animation
export const tapVariants = {
  tap: {
    scale: 0.98,
  },
};

// Line animation for separators
export const lineVariants = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Heading animation (appears and slightly bounces)
export const headingVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Text reveal animation
export const textRevealVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

// Carousel slide animation
export const carouselSlideVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.3,
    },
  },
};

// Button hover animation
export const buttonHoverVariants = {
  initial: {
    backgroundColor: "transparent",
    color: "white",
  },
  hover: {
    backgroundColor: "white",
    color: "black",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const navContainerVariants = {
  initial: {
    opacity: 0,
    y: -18,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const navLinkUnderlineVariants = {
  initial: {
    scaleX: 0,
    opacity: 0,
  },
  hover: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export const mobileMenuVariants = {
  initial: {
    opacity: 0,
    y: -16,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export const mobileMenuItemVariants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};
