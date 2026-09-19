export const SECTION_THEMES = {
  HOME: {
    id: "home",
    name: "Home",
    video: "/videos/hero.mp4",
    colors: {
      bg: "#0A0A0A",
      text: "#FFFFFF",
      accent: "#C9A96E",
      muted: "#666666"
    }
  },
  CRAFT: {
    id: "craft",
    name: "Craft",
    video: "/videos/fabric.mp4",
    colors: {
      bg: "#F5EDE0",
      text: "#2A1810",
      accent: "#8B6914",
      muted: "#8A7D76"
    }
  },
  PORTFOLIO: {
    id: "portfolio",
    name: "Portfolio",
    video: "/videos/orbit.mp4",
    colors: {
      bg: "#0A1628",
      text: "#E8E0D4",
      accent: "#D4A853",
      muted: "#4A5668"
    }
  },
  PROCESS: {
    id: "process",
    name: "Process",
    video: "/videos/texture.mp4",
    colors: {
      bg: "#1A1410",
      text: "#E8D5B7",
      accent: "#C9A96E",
      muted: "#7A6450"
    }
  }
};

export const SITE_CONFIG = {
  name: 'THREADLAB',
  title: 'THREADLAB',
  tagline: 'A Global Hub for Fashion Manufacturing in 3D',
  description: 'THREADLAB is the premier digital fashion hub connecting global manufacturing with 3D design and innovation.',
  url: 'https://threadlab.com',
};

export const ANIMATION_CONFIG = {
  duration: 1.2,
  ease: "power3.inOut",
};

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1440,
};

export const SECTIONS = [
  {
    id: "home",
    title: "The Silhouette",
    subtitle: "Avant-Garde Designs",
    description: "Redefining form and structure through innovative silhouettes.",
    video: "/videos/hero.mp4",
    theme: SECTION_THEMES.HOME
  },
  {
    id: "craft",
    title: "The Fabric",
    subtitle: "Material Excellence",
    description: "Sourcing the finest textiles for unparalleled quality.",
    video: "/videos/fabric.mp4",
    theme: SECTION_THEMES.CRAFT
  },
  {
    id: "portfolio",
    title: "The Collection",
    subtitle: "Curated Masterpieces",
    description: "A showcase of our most iconic and celebrated pieces.",
    video: "/videos/orbit.mp4",
    theme: SECTION_THEMES.PORTFOLIO
  },
  {
    id: "process",
    title: "The Detail",
    subtitle: "Intricate Artistry",
    description: "Meticulous attention to every stitch and seam.",
    video: "/videos/texture.mp4",
    theme: SECTION_THEMES.PROCESS
  }
];
