const testimonials = [
  {
    quote:
      "Finally, a tracker that respects my privacy! No cloud uploads, no telemetry. This is exactly what developers need.",
    author: "Sarah Chen",
    role: "Full-Stack Developer",
  },
  {
    quote:
      "The ML insights helped me cut 2 hours of daily distraction. Highly recommend for anyone serious about digital wellbeing.",
    author: "Alex Rodriguez",
    role: "Freelance Designer",
  },
  {
    quote: "Simple, effective, and runs smoothly even on my old Linux laptop. Perfect for students on a budget.",
    author: "Jordan Kim",
    role: "CS Student",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Users Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6" role="list">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              role="listitem"
              className="p-6 rounded-xl bg-card border border-border card-hover focus-within:ring-2 focus-within:ring-primary transition-all"
            >
              <p className="text-foreground/70 mb-4 italic" aria-label={`Testimonial from ${testimonial.author}`}>
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </blockquote>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-foreground/60 mb-4">Trusted by developers and digital wellness advocates</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium">⭐ Open Source</div>
            <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium">🔒 Privacy First</div>
            <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium">🚀 Performance</div>
          </div>
        </div>
      </div>
    </section>
  )
}
