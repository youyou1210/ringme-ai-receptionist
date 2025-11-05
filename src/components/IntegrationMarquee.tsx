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
    <section aria-label="Integrations marquee" className="w-full overflow-hidden bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-y border-primary/20 py-8">
      <div className="flex items-center whitespace-nowrap animate-marquee gap-16 px-4">
        {allLogos.map((integration, index) => (
          <div key={`${integration.name}-${index}`} className="inline-flex items-center flex-shrink-0 group">
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/20">
              <img
                src={integration.logo}
                alt={`${integration.name} logo`}
                loading="lazy"
                className="h-10 w-auto object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                style={{ 
                  filter: 'brightness(0) saturate(100%) invert(77%) sepia(70%) saturate(500%) hue-rotate(190deg) brightness(100%) contrast(90%)'
                }}
              />
            </div>
            <span className="sr-only">{integration.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
