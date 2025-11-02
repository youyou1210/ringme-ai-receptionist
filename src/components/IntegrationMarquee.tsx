import zapierLogo from "@/assets/brands/zapier.svg";
import twilioLogo from "@/assets/brands/twilio.svg";
import makeLogo from "@/assets/brands/make.svg";

export const IntegrationMarquee = () => {
  const integrations = [
    { name: "Zapier", logo: zapierLogo },
    { name: "Twilio", logo: twilioLogo },
    { name: "Make.com", logo: makeLogo },
  ];

  // Build a long single track to avoid layered banners
  const trackItems = [...integrations, ...integrations, ...integrations];

  return (
    <section aria-label="Integrations marquee" className="w-full overflow-hidden bg-primary/5 border-y border-border py-6">
      <div className="relative">
        <div className="flex items-center whitespace-nowrap animate-marquee gap-12 px-4">
          {trackItems.map((integration, index) => (
            <div key={`logo-${index}`} className="inline-flex items-center">
              <img
                src={integration.logo}
                alt={`${integration.name} logo`}
                loading="lazy"
                className="h-8 w-auto object-contain"
              />
              <span className="sr-only">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
