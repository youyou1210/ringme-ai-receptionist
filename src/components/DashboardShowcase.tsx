import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, MessageSquare, ArrowUpRight, ArrowDownRight, Clock, Globe2, BarChart3 } from "lucide-react";
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
    <section aria-label="RingmeAI Dashboard Preview" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm text-primary font-semibold mb-3 tracking-wider">DASHBOARD PREVIEW</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">See RingmeAI in Action</h2>
          <p className="text-lg text-muted-foreground">Live-style metrics that demonstrate how RingmeAI books, qualifies, and reports — all in one place.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: KPIs + Chart */}
          <div className="lg:col-span-2 space-y-6">
            {/* KPIs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Calls Today</p>
                      <p className="text-2xl font-bold">182</p>
                    </div>
                    <span className="inline-flex items-center text-sm text-primary">
                      <ArrowUpRight className="w-4 h-4 mr-1" /> 12%
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Appointments</p>
                      <p className="text-2xl font-bold">36</p>
                    </div>
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg. Response</p>
                      <p className="text-2xl font-bold">0.3s</p>
                    </div>
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Conversion</p>
                      <p className="text-2xl font-bold">19%</p>
                    </div>
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call Volume Chart */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Call Volume (Today)</CardTitle>
              </CardHeader>
              <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={volumeData} margin={{ left: 4, right: 4, top: 10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.6} />
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fill: "hsl(var(--muted-foreground))" }} axisLine={{ stroke: "hsl(var(--border))" }} tickLine={{ stroke: "hsl(var(--border))" }} />
                    <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} axisLine={{ stroke: "hsl(var(--border))" }} tickLine={{ stroke: "hsl(var(--border))" }} />
                    <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", color: "hsl(var(--foreground))" }} />
                    <Area type="monotone" dataKey="calls" stroke="hsl(var(--primary))" fill="url(#volumeGradient)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Right: Recent Calls + Features */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Recent Call Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCalls.map((c) => (
                    <div key={c.id} className="flex items-center justify-between py-2 border-b border-border last:border-none">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                          <Phone className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{c.caller}</p>
                          <p className="text-xs text-muted-foreground">{c.intent}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{c.status}</p>
                        <p className="text-xs text-muted-foreground">{c.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <p className="font-semibold">Multi‑language + Smart Replies</p>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Globe2 className="w-4 h-4" /> 12 languages</div>
                  <div className="flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> Auto‑follow‑ups</div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Book a Live Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
