export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Convo",
  slogan: "Say the unsaid",
  applicationCategory: "LifestyleApplication",
  applicationSubCategory: "HealthApplication", // Mental wellness focus
  operatingSystem: "Web",
  url: "https://convo.rullysaputra.com/",
  description:
    "Talk freely in a warm, anonymous chat. No account, no tracking—messages are used to reply, then deleted. A friendly ear, no judgment. Start a safe chat.",
  inLanguage: ["en", "id"],
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
  audience: { "@type": "PeopleAudience", suggestedMinAge: 13 },
  // Clarify boundaries without medical claims:
  about:
    "Listening & supportive conversation. Not a replacement for professional care.",
  // Add publisher for credibility
  publisher: {
    "@type": "Person",
    name: "Rully Saputra",
  },
  author: {
    "@type": "Person",
    name: "Rully Saputra",
    url: "https://www.linkedin.com/in/rully-saputra-7554a7138", // if you have a personal site
  },

  // Required for WebApplication
  browserRequirements: "Requires JavaScript. Modern web browser required.",

  // Add screenshot/image
  screenshot: "https://convo.rullysaputra.com/og/hero.png",

  // Add creation/modification dates
  dateCreated: "2024", // adjust to your actual launch date
  dateModified: "2025-09-01",
};