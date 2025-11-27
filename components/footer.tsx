import { Github, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1">
              <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-xs font-bold">
                DW
              </div>
              <span className="font-bold">DWT</span>
            </a>
            <p className="text-sm text-foreground/60">Privacy-first digital wellbeing tracker</p>
          </div>

          {/* Quick Links */}
          <nav>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-foreground/60 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1 transition-colors inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-foreground/60 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1 transition-colors inline-block"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-foreground/60 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1 transition-colors inline-block"
                >
                  Download
                </a>
              </li>
            </ul>
          </nav>

          {/* Resources */}
          <nav>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#docs"
                  className="text-foreground/60 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1 transition-colors inline-block"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/DivyanshM30/digital-wellbeing-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1 transition-colors inline-block"
                  aria-label="Visit GitHub repository (opens in new window)"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-foreground/60 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1 transition-colors inline-block"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="flex items-center gap-2 text-sm mb-3">
              <Mail className="w-4 h-4" aria-hidden="true" />
              <a
                href="mailto:contact@digitalwellbeing.dev"
                className="text-foreground/60 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1 transition-colors"
              >
                contact@dwt.dev
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/DivyanshM30/digital-wellbeing-tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                aria-label="Visit GitHub repository (opens in new window)"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>© {currentYear} Digital Wellbeing Tracker. All rights reserved.</p>
          <p>MIT License • Privacy-First • Open Source</p>
        </div>
      </div>
    </footer>
  )
}
