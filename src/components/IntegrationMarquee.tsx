import zapierLogo from "@/assets/brands/zapier.svg";
import twilioLogo from "@/assets/brands/twilio.svg";
import makeLogo from "@/assets/brands/make.svg";
import n8nLogo from "@/assets/brands/n8n.svg";
import airtableLogo from "@/assets/brands/airtable.svg";
import googleSheetsLogo from "@/assets/brands/googlesheets.svg";

export const IntegrationMarquee = () => {
  const integrations = [
    { name: "Zapier", logo: zapierLogo },
    { name: "Twilio", logo: twilioLogo },
    { name: "Make.com", logo: makeLogo },
    { name: "n8n", logo: n8nLogo },
    { name: "Airtable", logo: airtableLogo },
    { name: "Google Sheets", logo: googleSheetsLogo },
  ];

  // Duplicate for seamless loop
  const allLogos = [...integrations, ...integrations];

  return (
    <section aria-label="Integrations marquee" className="w-full overflow-hidden bg-primary/5 border-y border-border py-6">
      <div className="flex items-center whitespace-nowrap animate-marquee gap-12 px-4">
        {allLogos.map((integration, index) => (
          <div key={`${integration.name}-${index}`} className="inline-flex items-center flex-shrink-0">
            <img
              src={integration.logo}
              alt={`${integration.name} logo`}
              loading="lazy"
              className="h-8 w-auto object-contain hover:scale-110 transition-transform"
            />
            <span className="sr-only">{integration.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
