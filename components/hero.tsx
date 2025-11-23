import { ArrowRight, Github } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="gradient-text">Reclaim Your</span>
              <br />
              <span>Digital</span>
              <br />
              <span>Wellbeing</span>
            </h1>

            <p className="text-lg text-foreground/70 max-w-lg leading-relaxed">
              Track. Understand. Improve — Privacy-first screen time analytics for desktop. Monitor your app usage in
              real-time with zero cloud tracking.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#download" className="btn-primary flex items-center justify-center gap-2">
                Download for Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>

            <p className="text-sm text-foreground/50">✓ Privacy-first • ✓ ML-powered insights • ✓ Open source</p>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-border">
              <img src="/digital-wellbeing-dashboard-with-app-usage-charts.jpg" alt="Dashboard Preview" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
