export default function TechStack() {
  const technologies = [
    "Python",
    "Tkinter",
    "psutil",
    "scikit-learn",
    "SQLite",
    "React",
    "Tailwind CSS",
    "matplotlib",
    "Open Source",
  ]

  return (
    <section id="tech-stack" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack & Architecture</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Built with proven, privacy-respecting technologies
          </p>
        </div>

        {/* Technology Badges */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
          role="list"
          aria-label="Technology stack used in Digital Wellbeing Tracker"
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              role="listitem"
              className="px-4 py-3 rounded-lg bg-card border border-border text-center font-medium text-sm hover:border-primary transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-8">
          <h3 className="font-bold text-lg mb-6 text-center">Architecture Overview</h3>
          <div className="space-y-6 text-sm text-foreground/70">
            <div className="flex items-start gap-4">
              <div className="text-primary font-mono font-bold min-w-fit">01</div>
              <div>
                <strong className="text-foreground block">Desktop App (Python)</strong>
                <p>Lightweight process monitoring using psutil for system efficiency</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="text-foreground/40 font-light">↓</div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-primary font-mono font-bold min-w-fit">02</div>
              <div>
                <strong className="text-foreground block">SQLite Database</strong>
                <p>Local storage with zero cloud sync by default — your data stays on your machine</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="text-foreground/40 font-light">↓</div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-primary font-mono font-bold min-w-fit">03</div>
              <div>
                <strong className="text-foreground block">ML Analysis</strong>
                <p>scikit-learn K-Means clustering to identify patterns and usage trends</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="text-foreground/40 font-light">↓</div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-primary font-mono font-bold min-w-fit">04</div>
              <div>
                <strong className="text-foreground block">Visualization & Web</strong>
                <p>Tkinter UI for desktop, matplotlib for reports, and React for this landing page</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <h4 className="font-bold mb-4">Key Technologies:</h4>
            <ul className="grid md:grid-cols-2 gap-3 text-sm">
              <li>✓ <strong>psutil</strong> for OS-level monitoring</li>
              <li>✓ <strong>scikit-learn</strong> for ML clustering</li>
              <li>✓ <strong>SQLite</strong> for local persistence</li>
              <li>✓ <strong>matplotlib</strong> for beautiful charts</li>
              <li>✓ <strong>Tkinter</strong> for native desktop UI</li>
              <li>✓ <strong>React + Next.js</strong> for web interface</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
