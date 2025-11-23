export default function Download() {
  return (
    <section id="download" className="py-20 sm:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Download & Install</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Available for Windows, Linux, and Python environments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { os: "Windows", method: "Direct Download", code: ".exe Download" },
            { os: "Linux", method: "Terminal Command", code: "sudo apt install dwt" },
            { os: "Python", method: "From Source", code: "pip install -r requirements.txt" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary transition-colors"
            >
              <h3 className="font-bold text-lg mb-2">{item.os}</h3>
              <p className="text-sm text-foreground/60 mb-4">{item.method}</p>
              <code className="block bg-muted p-3 rounded text-xs font-mono text-foreground break-all">
                {item.code}
              </code>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-6 md:p-8">
          <h3 className="font-bold text-lg mb-4">Quick Start (Python)</h3>
          <pre className="bg-foreground/5 p-4 rounded text-xs overflow-x-auto">
            <code>{`# Clone repository
git clone https://github.com/yourusername/digital-wellbeing-tracker.git
cd digital-wellbeing-tracker

# Install dependencies
pip install -r requirements.txt

# Run the application
python main.py`}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
