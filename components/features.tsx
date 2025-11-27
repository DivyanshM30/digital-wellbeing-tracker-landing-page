import { Activity, Lock, Zap, Bell } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Real-time App Tracking",
    description: "Lightweight monitoring that doesn't slow down your system — see what's running instantly.",
  },
  {
    icon: Lock,
    title: "Privacy-first Local Storage",
    description: "Your data never leaves your machine. SQLite database, zero cloud sync by default.",
  },
  {
    icon: Zap,
    title: "ML-based Pattern Analysis",
    description: "K-Means clustering reveals your usage patterns and helps identify time sinks.",
  },
  {
    icon: Bell,
    title: "Voice Reminders & Nudges",
    description: "Configurable audio alerts remind you to take breaks and stay focused.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Powerful Features for Digital Health</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Everything you need to understand and improve your screen time habits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                role="listitem"
                className="card-hover group p-6 rounded-xl bg-card border border-border focus-within:ring-2 focus-within:ring-primary transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
