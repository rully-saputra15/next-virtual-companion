export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Convo",
  slogan: "Say the unsaid",
  applicationCategory: "LifestyleApplication",
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
};
