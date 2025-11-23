import { Download, BarChart3, Zap } from "lucide-react"

const steps = [
  {
    icon: Download,
    title: "Track",
    description: "Install and let it monitor your apps passively",
  },
  {
    icon: BarChart3,
    title: "Analyze",
    description: "View charts and ML-generated insights weekly",
  },
  {
    icon: Zap,
    title: "Act",
    description: "Get nudges and adjust habits based on data",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">Three simple steps to better digital habits</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative z-10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-foreground/60">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
