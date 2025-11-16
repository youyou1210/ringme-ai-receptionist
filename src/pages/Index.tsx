import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Bot, Calendar, TrendingUp, Users, Shield, BarChart3, Clock, Target, CheckCircle2, Instagram } from "lucide-react";
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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
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
      <section id="home" className="pt-32 pb-20 px-4">
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

      {/* RingmeAI Dashboard Preview */}
      <DashboardShowcase />

      {/* Founder's Note */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="bg-gradient-to-br from-card to-card/50 border-primary/30">
            <CardContent className="p-6 md:p-8 text-center">
              <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
                "Every call is a chance to grow. With the right technology, you'll never miss that chance again. We built RingmeAI to ensure businesses never lose opportunities just because a call went unanswered."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI That Fits Your Business */}
      <section id="features" className="py-12 px-4 gradient-bg">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">AI That Fits Your Business</h3>
          <p className="text-base md:text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            From dental clinics to roofers, med spas to private tutors—our AI adapts to your industry's unique needs
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {["Dental Clinics", "Med Spas", "Chiropractors", "Roofers", "HVAC Companies", "Private Tutors"].map((business) => (
              <Card key={business} className="bg-card/50 border-border backdrop-blur-sm">
                <CardContent className="p-3 md:p-4 text-center">
                  <p className="font-medium text-sm md:text-base">{business}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits - Compact */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">Scale Smarter With AI</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-5 md:p-6">
                <Calendar className="w-7 h-7 text-primary mb-3" />
                <h4 className="font-bold text-lg mb-2">Scale Without Limits</h4>
                <p className="text-muted-foreground text-sm">Handle 10 or 1,000 calls—no added staff needed</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-5 md:p-6">
                <Clock className="w-7 h-7 text-primary mb-3" />
                <h4 className="font-bold text-lg mb-2">Automate Follow-Ups</h4>
                <p className="text-muted-foreground text-sm">Never miss a lead with smart nurturing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 px-4 gradient-bg">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose RingmeAI</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { icon: Clock, title: "24/7 Coverage", desc: "Never miss a call" },
              { icon: Calendar, title: "Auto-Booking", desc: "Instant scheduling" },
              { icon: Target, title: "Lead Capture", desc: "Every call counts" },
              { icon: TrendingUp, title: "Smart Insights", desc: "Data-driven growth" }
            ].map((item) => (
              <Card key={item.title} className="bg-card border-border hover:border-primary/50 transition-all">
                <CardContent className="p-4 md:p-5 text-center">
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-2 md:mb-3" />
                  <h4 className="font-bold text-sm md:text-base mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Custom AI trained to sound natural and represent your brand 24/7",
              "Books appointments directly into your calendar—no back-and-forth",
              "Nurtures every lead with smart follow-ups and instant handoffs"
            ].map((text, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-4 md:p-5">
                  <div className="flex gap-3 items-start">
                    <span className="text-primary font-bold text-lg">{i + 1}.</span>
                    <p className="text-muted-foreground text-sm md:text-base">{text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-12 px-4 gradient-bg">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why RingmeAI Stands Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card className="bg-primary/10 border-primary">
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">RingmeAI</h3>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    "24/7 availability—no missed calls",
                    "Auto-booking & calendar sync",
                    "Seamless tool integrations",
                    "Matches your brand voice"
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card border-border opacity-75">
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-muted-foreground">Others</h3>
                <ul className="space-y-2 md:space-y-3 text-muted-foreground">
                  {[
                    "Missed calls, lost leads",
                    "Manual scheduling chaos",
                    "Complex, poor integrations",
                    "Generic, robotic responses"
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Common Questions</h2>
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
      <section id="contact" className="py-12 px-4 gradient-bg">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Talk About Your Growth</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Ready to transform how your business handles calls?
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
