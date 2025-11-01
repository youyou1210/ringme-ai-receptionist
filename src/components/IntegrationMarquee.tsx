import zapierLogo from "@/assets/brands/zapier.svg";
import twilioLogo from "@/assets/brands/twilio.svg";
import makeLogo from "@/assets/brands/make.svg";

export const IntegrationMarquee = () => {
  const integrations = [
    { name: "Zapier", logo: zapierLogo },
    { name: "Twilio", logo: twilioLogo },
    { name: "Make.com", logo: makeLogo },
    { name: "Zapier", logo: zapierLogo },
    { name: "Twilio", logo: twilioLogo },
    { name: "Make.com", logo: makeLogo },
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedIntegrations = [...integrations, ...integrations];

  return (
    <section aria-label="Integrations marquee" className="w-full overflow-hidden bg-primary/5 border-y border-border py-6">
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedIntegrations.map((integration, index) => (
            <div
              key={`track1-${index}`}
              className="mx-8 inline-flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover-scale"
            >
              <img
                src={integration.logo}
                alt={`${integration.name} integration logo`}
                loading="lazy"
                className="h-8 w-auto object-contain opacity-90"
              />
              <span className="text-lg font-semibold text-foreground/90 sr-only">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
          {duplicatedIntegrations.map((integration, index) => (
            <div
              key={`track2-${index}`}
              className="mx-8 inline-flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover-scale"
            >
              <img
                src={integration.logo}
                alt={`${integration.name} integration logo`}
                loading="lazy"
                className="h-8 w-auto object-contain opacity-90"
              />
              <span className="text-lg font-semibold text-foreground/90 sr-only">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
