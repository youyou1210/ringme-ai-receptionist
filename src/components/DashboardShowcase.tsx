import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, MessageSquare, ArrowUpRight, ArrowDownRight, Clock, Globe2, BarChart3, Settings } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const volumeData = [
  { name: "9a", calls: 12 },
  { name: "10a", calls: 18 },
  { name: "11a", calls: 22 },
  { name: "12p", calls: 16 },
  { name: "1p", calls: 25 },
  { name: "2p", calls: 29 },
  { name: "3p", calls: 21 },
  { name: "4p", calls: 27 },
  { name: "5p", calls: 19 },
];

const recentCalls = [
  { id: "C-1028", caller: "+1 (415) 555‑0132", intent: "Book consult", status: "Booked", time: "2m ago" },
  { id: "C-1027", caller: "+1 (646) 555‑0199", intent: "Pricing", status: "Follow‑up", time: "12m ago" },
  { id: "C-1026", caller: "+44 20 7946 0958", intent: "Reschedule", status: "Handled", time: "29m ago" },
  { id: "C-1025", caller: "+1 (213) 555‑0170", intent: "New lead", status: "Qualified", time: "48m ago" },
];

export const DashboardShowcase = () => {
  return (
    <section aria-label="RingmeAI Dashboard Preview" className="py-20 px-4 relative overflow-hidden">
      {/* Floating Gear Animation */}
      <div className="absolute top-20 right-10 opacity-10">
        <Settings className="w-32 h-32 text-primary animate-spin-slow" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <Settings className="w-24 h-24 text-primary animate-spin-slow" style={{ animationDirection: "reverse" }} />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-10 text-center">
          <p className="text-sm text-primary font-semibold mb-3 tracking-wider uppercase">Dashboard Preview</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">See RingmeAI in Action</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Live-style metrics that demonstrate how RingmeAI books, qualifies, and reports — all in one place with real-time insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: KPIs + Chart */}
          <div className="lg:col-span-2 space-y-6">
            {/* KPIs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-card to-card/50 border-primary/30 hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/20 animate-pulse-glow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Calls Today</p>
                      <p className="text-3xl font-bold text-primary">182</p>
                    </div>
                    <span className="inline-flex items-center text-sm text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                      <ArrowUpRight className="w-4 h-4 mr-1" /> 12%
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-card to-card/50 border-primary/30 hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Appointments</p>
                      <p className="text-3xl font-bold text-primary">36</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-card to-card/50 border-primary/30 hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg. Response</p>
                      <p className="text-3xl font-bold text-primary">0.3s</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-card to-card/50 border-primary/30 hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Conversion Rate</p>
                      <p className="text-3xl font-bold text-primary">19%</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call Volume Chart */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/30 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Call Volume (Today)
                </CardTitle>
              </CardHeader>
              <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={volumeData} margin={{ left: 4, right: 4, top: 10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="name" tick={{ fill: "hsl(var(--muted-foreground))" }} axisLine={{ stroke: "hsl(var(--border))" }} tickLine={{ stroke: "hsl(var(--border))" }} />
                    <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} axisLine={{ stroke: "hsl(var(--border))" }} tickLine={{ stroke: "hsl(var(--border))" }} />
                    <Tooltip 
                      contentStyle={{ 
                        background: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--primary) / 0.5)", 
                        color: "hsl(var(--foreground))",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px hsl(var(--primary) / 0.2)"
                      }} 
                    />
                    <Area type="monotone" dataKey="calls" stroke="hsl(var(--primary))" fill="url(#volumeGradient)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Right: Recent Calls + Features */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Recent Call Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCalls.map((c) => (
                    <div key={c.id} className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-primary/5 transition-colors border-b border-border/50 last:border-none">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/30">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{c.caller}</p>
                          <p className="text-xs text-muted-foreground">{c.intent}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/15 text-primary">{c.status}</span>
                        <p className="text-xs text-muted-foreground mt-1">{c.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 via-card to-card border-primary/40 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-lg">Multi‑language + Smart Replies</p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Globe2 className="w-4 h-4 text-primary" /> 
                    <span className="font-medium">12+ languages</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ArrowUpRight className="w-4 h-4 text-primary" /> 
                    <span className="font-medium">Auto‑follow‑ups</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold py-6 text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
              onClick={() => { window.location.href = 'https://cal.com/ringmeai/15min'; }}
            >
              Book a Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
