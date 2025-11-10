import zapierLogo from "@/assets/brands/zapier.svg";
import twilioLogo from "@/assets/brands/twilio.svg";
import makeLogo from "@/assets/brands/make.svg";
import n8nLogo from "@/assets/brands/n8n.svg";
import airtableLogo from "@/assets/brands/airtable.svg";
import googleSheetsLogo from "@/assets/brands/googlesheets.svg";

export const IntegrationMarquee = () => {
  const integrations = [
    { name: "Zapier", logo: zapierLogo, color: "hue-rotate-[350deg] saturate-[1.5] brightness-110" },
    { name: "Twilio", logo: twilioLogo, color: "hue-rotate-[340deg] saturate-[1.8] brightness-110" },
    { name: "Make.com", logo: makeLogo, color: "hue-rotate-[260deg] saturate-[1.6] brightness-120" },
    { name: "n8n", logo: n8nLogo, color: "hue-rotate-[330deg] saturate-[1.7] brightness-110" },
    { name: "Airtable", logo: airtableLogo, color: "hue-rotate-[30deg] saturate-[1.5] brightness-110" },
    { name: "Google Sheets", logo: googleSheetsLogo, color: "hue-rotate-[90deg] saturate-[1.6] brightness-120" },
  ];

  // Duplicate for seamless loop
  const allLogos = [...integrations, ...integrations];

  return (
    <section aria-label="Integrations marquee" className="w-full overflow-hidden bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-y border-primary/20 py-8">
      <div className="flex items-center whitespace-nowrap animate-marquee gap-16 px-4">
        {allLogos.map((integration, index) => (
          <div 
            key={`${integration.name}-${index}`} 
            className="inline-flex items-center flex-shrink-0 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={integration.logo}
                alt={`${integration.name} logo`}
                loading="lazy"
                className={`h-10 w-auto object-contain filter ${integration.color} transition-all duration-300 group-hover:scale-110 relative z-10`}
              />
            </div>
            <span className="sr-only">{integration.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
