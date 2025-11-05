import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, TrendingUp, Clock, Users, Phone, Calendar, Target } from "lucide-react";

export const DashboardShowcase = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-semibold mb-4 tracking-wider">DASHBOARD PREVIEW</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the Power of <span className="text-gradient">RingmeAI Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get real-time insights, track performance metrics, and monitor every interaction—all from one elegant dashboard designed for growth
          </p>
        </div>

        {/* Main Dashboard Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Smart Insights Card */}
          <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-border backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Smart Insights</h3>
              <p className="text-muted-foreground mb-6">
                RingmeAI answers every call, day or night, using AI trained on your workflow—no more missed leads or urgent requests.
              </p>
              
              {/* Sentiment Analysis */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-3">Sentiment Analysis</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground w-20">Positive</span>
                    <div className="flex-1 h-8 bg-secondary rounded-lg overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg transition-all duration-500"
                        style={{ width: '75%' }}
                      />
                    </div>
                    <span className="font-bold text-emerald-500 w-16 text-right">5,490</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground w-20">Neutral</span>
                    <div className="flex-1 h-8 bg-secondary rounded-lg overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg transition-all duration-500"
                        style={{ width: '40%' }}
                      />
                    </div>
                    <span className="font-bold text-blue-500 w-16 text-right">2,100</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground w-20">Negative</span>
                    <div className="flex-1 h-8 bg-secondary rounded-lg overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-rose-500 to-rose-600 rounded-lg transition-all duration-500"
                        style={{ width: '15%' }}
                      />
                    </div>
                    <span className="font-bold text-rose-500 w-16 text-right">410</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Smart Communication Card */}
          <Card className="bg-gradient-to-br from-card via-primary/5 to-card border-border backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Smart Communication</h3>
              <p className="text-muted-foreground mb-6">
                Route, triage, and respond with intelligent call handling and patient-ready responses tailored to your business.
              </p>
              
              {/* Communication Visual */}
              <div className="relative h-48 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Waveform effect */}
                  <div className="flex items-center gap-1 opacity-30">
                    {[...Array(40)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-1 bg-primary rounded-full"
                        style={{ 
                          height: `${Math.random() * 60 + 20}px`,
                          animation: `pulse ${Math.random() * 2 + 1}s ease-in-out infinite`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Icons */}
                <div className="relative z-10 flex items-center justify-around w-full">
                  <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-lg border border-primary/30 flex items-center justify-center animate-pulse">
                    <Phone className="w-10 h-10 text-primary" />
                  </div>
                  <div className="w-16 h-16 rounded-full bg-card/80 backdrop-blur-lg border border-border flex items-center justify-center">
                    <Users className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="w-20 h-20 rounded-full bg-primary/30 backdrop-blur-lg border border-primary/40 flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Multi-Language Support */}
          <Card className="bg-card/50 border-border backdrop-blur-sm hover:bg-card/70 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">Multi-Language Support</h4>
              <p className="text-muted-foreground text-sm">
                RingmeAI understands, responds, and schedules in 100+ languages.
              </p>
            </CardContent>
          </Card>

          {/* Appointment Scheduling */}
          <Card className="bg-card/50 border-border backdrop-blur-sm hover:bg-card/70 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">Appointment Scheduling</h4>
              <p className="text-muted-foreground text-sm">
                Call insights turn into confirmed appointments, automatically synced with your systems.
              </p>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="bg-card/50 border-border backdrop-blur-sm hover:bg-card/70 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">Real-Time Analytics</h4>
              <p className="text-muted-foreground text-sm">
                Track call volume, duration, conversion rates, and sentiment in real-time.
              </p>
            </CardContent>
          </Card>

          {/* 24/7 Availability */}
          <Card className="bg-card/50 border-border backdrop-blur-sm hover:bg-card/70 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">24/7 Coverage</h4>
              <p className="text-muted-foreground text-sm">
                Never miss a call with round-the-clock AI receptionist service.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join hundreds of businesses already using RingmeAI to never miss a call, automate bookings, and scale effortlessly.
              </p>
              <button 
                onClick={() => { window.location.href = 'https://cal.com/ringmeai/15min'; }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Book Your Demo Now
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
