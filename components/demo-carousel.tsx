"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const demoScreens = [
  { caption: "Dashboard Overview", image: "/app-tracking-dashboard.jpg" },
  { caption: "Weekly Analytics", image: "/analytics-charts-and-reports.jpg" },
  { caption: "App Breakdown", image: "/app-usage-breakdown-by-category.jpg" },
  { caption: "Settings Panel", image: "/settings-and-preferences-panel.jpg" },
  { caption: "Usage Trends", image: "/time-series-usage-trends.jpg" },
]

export default function DemoCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % demoScreens.length)
  const prev = () => setCurrent((current - 1 + demoScreens.length) % demoScreens.length)

  return (
    <section id="demo" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">See It In Action</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={demoScreens[current].image || "/placeholder.svg"}
              alt={demoScreens[current].caption}
              className="w-full h-auto"
            />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {demoScreens.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-primary w-6" : "bg-muted"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button onClick={next} className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Next slide">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <p className="text-center mt-4 text-foreground/60 text-sm">{demoScreens[current].caption}</p>
        </div>
      </div>
    </section>
  )
}
