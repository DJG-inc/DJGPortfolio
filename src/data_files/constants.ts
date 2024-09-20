import ogImageSrc from "@images/icon.png";

export const SITE = {
  title: "DJG",
  tagline: "Top-quality software Tools",
  description: "DJG offers top-tier software tools and expert construction services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
  description_short: "DJG offers top-tier software tools and expert construction services to meet all your project needs.",
  url: "https://djg.netlify.app/",
  author: "Emil Gulamov",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : software Tools & Construction Services`,
  description: "Build your projects with DJG's top-quality software tools and expert software project development. DJG offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc,
};
