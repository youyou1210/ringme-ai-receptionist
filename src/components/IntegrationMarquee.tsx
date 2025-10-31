export const IntegrationMarquee = () => {
  const integrations = [
    { name: "Zapier", logo: "⚡" },
    { name: "Twilio", logo: "📱" },
    { name: "Make.com", logo: "🔧" },
    { name: "Google Calendar", logo: "📅" },
    { name: "Slack", logo: "💬" },
    { name: "HubSpot", logo: "🎯" },
    { name: "Salesforce", logo: "☁️" },
    { name: "Stripe", logo: "💳" },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedIntegrations = [...integrations, ...integrations];

  return (
    <div className="w-full overflow-hidden bg-primary/5 border-y border-border py-6">
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedIntegrations.map((integration, index) => (
            <div
              key={index}
              className="mx-8 inline-flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg"
            >
              <span className="text-3xl">{integration.logo}</span>
              <span className="text-lg font-semibold text-foreground">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
          {duplicatedIntegrations.map((integration, index) => (
            <div
              key={index}
              className="mx-8 inline-flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg"
            >
              <span className="text-3xl">{integration.logo}</span>
              <span className="text-lg font-semibold text-foreground">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
