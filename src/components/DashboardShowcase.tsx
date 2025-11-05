import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Clock, Users, Phone, Calendar, CheckCircle2, ArrowUpRight, ArrowDownRight } from "lucide-react";

export const DashboardShowcase = () => {
  const callLogs = [
    { id: 1, caller: "Sarah Johnson", time: "2 min ago", duration: "3:45", status: "completed", sentiment: "positive", type: "Appointment" },
    { id: 2, caller: "Michael Chen", time: "8 min ago", duration: "2:12", status: "completed", sentiment: "positive", type: "Inquiry" },
    { id: 3, caller: "Emma Davis", time: "15 min ago", duration: "5:23", status: "completed", sentiment: "neutral", type: "Follow-up" },
    { id: 4, caller: "James Wilson", time: "22 min ago", duration: "1:45", status: "completed", sentiment: "positive", type: "Booking" },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-semibold mb-4 tracking-wider">LIVE DASHBOARD PREVIEW</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Your Business in <span className="text-gradient">Real-Time</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor calls, track conversions, and manage appointments—all from your RingmeAI dashboard
          </p>
        </div>

        {/* Main Dashboard Mockup */}
        <div className="bg-gradient-to-br from-card via-card to-primary/5 border-2 border-border rounded-2xl p-6 shadow-2xl">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
            <div>
              <h3 className="text-2xl font-bold">RingmeAI Dashboard</h3>
              <p className="text-sm text-muted-foreground">Welcome back! Here's what's happening today.</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Live</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground font-medium">Total Calls Today</p>
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <p className="text-3xl font-bold mb-1">247</p>
                <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-sm font-semibold">+18%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-emerald-500/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground font-medium">Appointments Booked</p>
                  <Calendar className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-3xl font-bold mb-1">89</p>
                <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-sm font-semibold">+24%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground font-medium">Avg. Response Time</p>
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-3xl font-bold mb-1">0.8s</p>
                <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <ArrowDownRight className="w-4 h-4" />
                  <span className="text-sm font-semibold">-15%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground font-medium">Conversion Rate</p>
                  <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="text-3xl font-bold mb-1">36%</p>
                <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-sm font-semibold">+8%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts and Call Logs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Call Volume Chart */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Call Volume - Last 7 Days</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { day: "Mon", calls: 180, width: "75%" },
                    { day: "Tue", calls: 210, width: "88%" },
                    { day: "Wed", calls: 195, width: "81%" },
                    { day: "Thu", calls: 238, width: "100%" },
                    { day: "Fri", calls: 225, width: "94%" },
                    { day: "Sat", calls: 165, width: "69%" },
                    { day: "Sun", calls: 145, width: "61%" },
                  ].map((item) => (
                    <div key={item.day} className="flex items-center gap-4">
                      <span className="text-sm font-medium text-muted-foreground w-10">{item.day}</span>
                      <div className="flex-1 h-10 bg-secondary rounded-lg overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-lg transition-all duration-500 flex items-center justify-end px-3"
                          style={{ width: item.width }}
                        >
                          <span className="text-xs font-bold text-primary-foreground">{item.calls}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Calls Log */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Recent Call Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {callLogs.map((call) => (
                    <div key={call.id} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{call.caller}</p>
                          <p className="text-xs text-muted-foreground">{call.type} • {call.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-muted-foreground">{call.duration}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          call.sentiment === 'positive' ? 'bg-emerald-500' :
                          call.sentiment === 'neutral' ? 'bg-blue-500' : 'bg-rose-500'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-emerald-500/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <p className="text-2xl font-bold">98.5%</p>
                    <p className="text-xs text-muted-foreground">Call Success Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-xs text-muted-foreground">Active Coverage</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  <div>
                    <p className="text-2xl font-bold">100+</p>
                    <p className="text-xs text-muted-foreground">Languages Supported</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
