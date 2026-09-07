const schemaRadio = {
  "@context": "https://schema.org",
  "@type": "RadioStation",
  "@id": "https://www.elsondelobrerocali.com/#radiostation",
  "name": "El Son del Obrero Cali Radio",
  "alternateName": "El Son del Obrero",
  "url": "https://www.elsondelobrerocali.com/",
  "description": "Emisora de radio online de Cali dedicada a la salsa, clásicos, entrevistas y programación salsera.",
  "image": "https://www.elsondelobrerocali.com/assets/logo.webp",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.elsondelobrerocali.com/assets/logo.webp"
  },
  "areaServed": {
    "@type": "City",
    "name": "Cali",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cali",
      "addressCountry": "CO"
    }
  },
  "sameAs": []
};

const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(schemaRadio);

document.head.appendChild(script);