export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack & Architecture</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Built with proven, privacy-respecting technologies
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[
            "Python",
            "Tkinter",
            "psutil",
            "scikit-learn",
            "SQLite",
            "React",
            "Tailwind CSS",
            "matplotlib",
            "Open Source",
          ].map((tech, index) => (
            <div
              key={index}
              className="px-4 py-3 rounded-lg bg-card border border-border text-center font-medium text-sm"
            >
              {tech}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-8">
          <h3 className="font-bold text-lg mb-6 text-center">Architecture Overview</h3>
          <div className="space-y-4 text-sm text-foreground/70">
            <div className="flex items-center gap-4">
              <div className="text-primary font-mono">01</div>
              <div>
                <strong className="text-foreground">Desktop App (Python)</strong> → psutil monitoring
              </div>
            </div>
            <div className="flex items-center gap-4 text-center justify-center">↓</div>
            <div className="flex items-center gap-4">
              <div className="text-primary font-mono">02</div>
              <div>
                <strong className="text-foreground">SQLite Database</strong> → Local storage, no cloud sync
              </div>
            </div>
            <div className="flex items-center gap-4 text-center justify-center">↓</div>
            <div className="flex items-center gap-4">
              <div className="text-primary font-mono">03</div>
              <div>
                <strong className="text-foreground">ML Analysis</strong> → scikit-learn K-Means clustering
              </div>
            </div>
            <div className="flex items-center gap-4 text-center justify-center">↓</div>
            <div className="flex items-center gap-4">
              <div className="text-primary font-mono">04</div>
              <div>
                <strong className="text-foreground">Visualization</strong> → Tkinter UI + matplotlib reports
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
