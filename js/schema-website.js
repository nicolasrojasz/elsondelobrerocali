const schemaWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.elsondelobrerocali.com/#website",
  url: "https://www.elsondelobrerocali.com/",
  name: "El Son del Obrero Cali Radio",
  description: "Radio de salsa en vivo desde Cali.",
  publisher: {
    "@id": "https://www.elsondelobrerocali.com/#radiostation",
  },
  inLanguage: "es-CO",
};

const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(schemaWebsite);

document.head.appendChild(script);
