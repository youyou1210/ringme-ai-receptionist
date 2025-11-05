import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Bot, Calendar, TrendingUp, Users, Shield, BarChart3, Clock, Target, CheckCircle2, Instagram } from "lucide-react";
import ceoImage from "@/assets/ceo-younes.jpg";
import { BookingModal } from "@/components/BookingModal";
import { ContactForm } from "@/components/ContactForm";
import { IntegrationMarquee } from "@/components/IntegrationMarquee";
import { DashboardShowcase } from "@/components/DashboardShowcase";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 border-b border-primary/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 text-center">
          <p className="text-sm md:text-base font-medium">
            🎉 <span className="text-primary font-bold">Limited Offer:</span> Book a demo this week and get{" "}
            <span className="text-gradient font-bold">50% off your first month</span> 🚀
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-[52px] left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gradient">RingmeAI</div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("home")} className="text-muted-foreground hover:text-foreground transition-colors">Home</button>
              <button onClick={() => scrollToSection("features")} className="text-muted-foreground hover:text-foreground transition-colors">Features</button>
              <button onClick={() => scrollToSection("faq")} className="text-muted-foreground hover:text-foreground transition-colors">FAQ</button>
              <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-foreground transition-colors">Contact</button>
            </div>
            <Button onClick={() => { window.location.href = 'https://cal.com/ringmeai/15min'; }} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Book a Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The AI Receptionist that never sleeps—
              <span className="text-gradient">Turning every ring into revenue</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Your AI voice agent answers instantly, books appointments, and turns callers into customers—while you focus on scaling, not dialing
            </p>
            <Button onClick={() => { window.location.href = 'https://cal.com/ringmeai/15min'; }} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Integration Marquee */}
      <IntegrationMarquee />

      {/* Dashboard Showcase */}
      <DashboardShowcase />

      {/* Distinguish Yourself */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-6 text-center">Distinguish yourself</h3>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Our AI receptionists are designed to give every caller the experience of speaking with a real person. They don't just answer phones—they greet, guide, and handle tasks with professionalism, ensuring your business always leaves a lasting impression
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-card border-border animate-scale-in hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-semibold">Robinson - Sales Agent</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI That Fits Your Business */}
      <section id="features" className="py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="features" className="border-0">
              <AccordionTrigger className="text-4xl font-bold text-center hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                AI That Fits Your Business
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-lg text-muted-foreground mb-12 text-center max-w-4xl mx-auto">
                  From dental clinics to roofers, med spas to private tutors, we design AI receptionists that adapt to your industry's unique needs. Whether it's booking patient check-ups, scheduling roofing consultations, or handling spa appointments, our agents deliver personalized, professional service—so your clients always feel valued and your business runs smoother
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                      <Phone className="w-10 h-10 text-primary" />
                    </div>
                    <p className="font-semibold text-xl">RingmeAI</p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <p className="font-semibold text-xl">Your Business</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["Dental Clinic's", "Med Spa's", "Chiropractor's", "Roofer's", "HVAC Companies", "Private Tutors"].map((business) => (
                    <Card key={business} className="bg-card/50 border-border backdrop-blur-sm">
                      <CardContent className="p-4 text-center">
                        <p className="font-medium">{business}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* AI That Expands With You */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="expand" className="border-0">
              <AccordionTrigger className="text-4xl font-bold text-center hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                AI That Expands With You
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                  Growing a business shouldn't mean adding endless overhead. With our AI-powered agents, you scale smarter—not harder. Whether you're handling 10 calls or 1,000, our system adapts instantly, giving you the freedom to focus on the bigger picture
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-card border-border">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <TrendingUp className="w-8 h-8 text-primary" />
                        <h4 className="text-2xl font-bold">See Growth</h4>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Monthly Visits</span>
                          <span className="font-bold text-2xl text-primary">+247%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Last 24hrs</span>
                          <span className="font-bold text-xl">1,842</span>
                        </div>
                        <div className="h-32 bg-primary/10 rounded-lg flex items-end gap-2 p-4">
                          {[40, 60, 45, 75, 90, 85, 100].map((height, i) => (
                            <div key={i} className="flex-1 bg-primary rounded-t" style={{ height: `${height}%` }} />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="space-y-4">
                    <Card className="bg-card border-border">
                      <CardContent className="p-6">
                        <Calendar className="w-8 h-8 text-primary mb-3" />
                        <h4 className="font-bold text-xl mb-2">Scale Without Limits</h4>
                        <p className="text-muted-foreground">Handle unlimited calls without adding staff</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-card border-border">
                      <CardContent className="p-6">
                        <Clock className="w-8 h-8 text-primary mb-3" />
                        <h4 className="font-bold text-xl mb-2">Automate Follow-Ups</h4>
                        <p className="text-muted-foreground">Never miss a lead with automated nurturing</p>
                      </CardContent>
                    </Card>
                    <Button onClick={() => { window.location.href = 'https://cal.com/ringmeai/15min'; }} size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Start Growing Now
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Insights */}
      <section className="py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="insights" className="border-0">
              <AccordionTrigger className="text-4xl font-bold text-center hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                Insights
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                  Every interaction tells a story. Our platform transforms call data into meaningful insights, helping you spot trends, measure performance, and make smarter decisions that drive real growth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: Clock, title: "24/7 Coverage", desc: "Never miss a call" },
                    { icon: Users, title: "Retention", desc: "Keep clients happy" },
                    { icon: Target, title: "Conversion", desc: "Turn leads into sales" },
                    { icon: TrendingUp, title: "Grow Income", desc: "Scale revenue" }
                  ].map((item) => (
                    <Card key={item.title} className="bg-card border-border">
                      <CardContent className="p-6 text-center">
                        <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <p className="text-sm text-primary font-semibold mb-4 text-center tracking-wider">FOUNDERS NOTE</p>
          <Card className="bg-card border-border">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img src={ceoImage} alt="Younes - Co-Founder & CEO" className="w-32 h-32 rounded-full object-cover" />
                <div>
                  <h3 className="text-2xl font-bold mb-4">" We gather your site data. We know your target audience & how your brand can standout from crowd. Best part is we also help you with Solutions „</h3>
                  <p className="text-muted-foreground mb-4">
                    When I started this journey, I saw the same problem over and over again — businesses losing opportunities, not because their product wasn't great, but because a call went unanswered or a lead slipped through the cracks.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The way I see it, every call is a chance to grow. And with the right technology, you'll never miss that chance again.
                  </p>
                  <p className="font-semibold">Younes - Co-Founder & CEO</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <p className="text-sm text-primary font-semibold mb-4 text-center tracking-wider">INTEGRATIONS</p>
          <Accordion type="single" collapsible>
            <AccordionItem value="integrations" className="border-0">
              <AccordionTrigger className="text-4xl font-bold text-center hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                Seamless Integrations
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-lg text-muted-foreground mb-12 text-center">Smart integrations built to scale with you</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    "We build agents tailored to your business—trained to sound natural, answer correctly, and represent your brand 24/7.",
                    "Your AI receptionist is now ready to launch, custom-trained to match your brand voice, book calls, and handle leads 24/7.",
                    "Your AI receptionist books appointments directly into your calendar—no back-and-forth, no missed opportunities.",
                    "Every booked call is nurtured into a paying client with reminders, follow-ups, via sms etc and instant hand-offs to your team."
                  ].map((text, i) => (
                    <Card key={i} className="bg-card border-border">
                      <CardContent className="p-6">
                        <p className="text-muted-foreground">{text}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <p className="text-sm text-primary font-semibold mb-4 text-center tracking-wider">COMPARISON</p>
          <Accordion type="single" collapsible>
            <AccordionItem value="comparison" className="border-0">
              <AccordionTrigger className="text-4xl font-bold text-center hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                Why RingmeAI Stands Out
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-lg text-muted-foreground mb-12 text-center">See how we compare against others in performance, growth</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-primary/10 border-primary">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-6 text-primary">RingmeAI</h3>
                      <ul className="space-y-4">
                        {[
                          "Automates booking calls & filling calendars",
                          "24/7 availability with no missed calls",
                          "Seamless integrations with your favorite tools",
                          "Transparent pricing with no hidden fees",
                          "Personalized to match your brand voice"
                        ].map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-card border-border opacity-75">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-6 text-muted-foreground">Others</h3>
                      <ul className="space-y-4 text-muted-foreground">
                        {[
                          "Manual scheduling & messy follow-ups",
                          "Missed calls and lost leads",
                          "Complicated setups, poor integrations",
                          "No automation for follow-ups",
                          "Slow response times"
                        ].map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full border-2 border-muted-foreground flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* AI-Driven Efficiency */}
      <section className="py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <p className="text-sm text-primary font-semibold mb-4 text-center tracking-wider">AI-DRIVEN EFFICIENCY</p>
          <Accordion type="single" collapsible>
            <AccordionItem value="efficiency" className="border-0">
              <AccordionTrigger className="text-4xl font-bold text-center hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                Never Miss an Opportunity
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-lg text-muted-foreground mb-12 text-center">Capture leads, analyze trends, and centralize critical insights</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: Target, title: "Instant Lead Capture", desc: "Never miss a call or inquiry — every lead is logged automatically" },
                    { icon: Shield, title: "AI You Can Trust", desc: "Smart, secure, and reliable call handling for peace of mind" },
                    { icon: TrendingUp, title: "Grow Smarter", desc: "Focus on expansion while we handle the conversations" }
                  ].map((item) => (
                    <Card key={item.title} className="bg-card border-border">
                      <CardContent className="p-6">
                        <item.icon className="w-10 h-10 text-primary mb-4" />
                        <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  {["Smart Analytics", "Real-Time Collaboration", "Task Prioritization"].map((feature) => (
                    <div key={feature} className="px-6 py-3 bg-card border border-border rounded-full">
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <p className="text-sm text-primary font-semibold mb-4 text-center tracking-wider">FAQ'S SECTION</p>
          <h2 className="text-4xl font-bold mb-6 text-center">Some Common FAQ's</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">Get answers to your questions and learn about our platform</p>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "How does an AI receptionist work?",
                a: "Our AI receptionist answers calls instantly, books appointments, qualifies leads, and integrates directly with your CRM — just like a real receptionist, but available 24/7."
              },
              {
                q: "Will my callers know they're speaking to AI?",
                a: "Not unless you want them to. Our agents are trained to sound natural, professional, and on-brand, so conversations feel human and engaging"
              },
              {
                q: "Why should I choose an AI receptionist over a human one?",
                a: "Unlike humans, our AI is available 24/7, never misses a call, and costs a fraction of a full-time hire — while still delivering a professional, natural-sounding experience"
              },
              {
                q: "What if the AI doesn't understand a caller's request?",
                a: "If the AI ever encounters something it can't handle, it smoothly escalates the call to a human team member or leaves a detailed message so nothing slips through the cracks"
              },
              {
                q: "How much does it cost?",
                a: "Pricing depends on your call volume and features, but our plans are built to be more affordable than hiring and training staff"
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-sm text-primary font-semibold mb-4 tracking-wider">GET IN TOUCH</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Talk About Your Growth</h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform how your business handles calls? We're here to help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <ContactForm />
            <div className="space-y-6">
              <Card className="bg-card/50 border-border backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Why Choose RingmeAI?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Never miss a call again with 24/7 AI coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Book appointments automatically into your calendar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Turn every lead into revenue with smart follow-ups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Seamless integrations with your existing tools</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">Or schedule a demo right away</p>
                <Button 
                  onClick={() => { window.location.href = 'https://cal.com/ringmeai/15min'; }} 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Book a Demo Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">RingmeAI</div>
              <a href="mailto:hello@ringmeai.org" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                hello@ringmeai.org
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://instagram.com/ringmeai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">© 2025 RingmeAI.org — All Rights Reserved</p>
          </div>
        </div>
      </footer>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default Index;
