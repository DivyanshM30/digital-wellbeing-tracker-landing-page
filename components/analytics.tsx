export default function Analytics() {
  return (
    <section id="analytics" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Visualize Your Patterns</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Matplotlib-powered charts exported as PNG/PDF for your personal records
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden border border-border bg-card p-6">
            <img src="/bar-chart-showing-app-usage-hours.jpg" alt="App Usage Chart" className="w-full h-auto rounded-lg" />
            <p className="mt-4 text-center text-sm text-foreground/60">Daily App Usage Distribution</p>
          </div>

          <div className="rounded-xl overflow-hidden border border-border bg-card p-6">
            <img src="/pie-chart-showing-productivity-vs-social-media-spl.jpg" alt="Category Breakdown" className="w-full h-auto rounded-lg" />
            <p className="mt-4 text-center text-sm text-foreground/60">Category Breakdown Analysis</p>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-xl bg-accent/5 border border-accent/20">
          <p className="text-center text-foreground/70">
            <strong>Export capability:</strong> Save all reports as high-resolution PNG or PDF files for sharing and
            archival
          </p>
        </div>
      </div>
    </section>
  )
}
