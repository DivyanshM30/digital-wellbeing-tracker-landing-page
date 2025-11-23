import { Github, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-xs font-bold">
                DW
              </div>
              <span className="font-bold">DWT</span>
            </div>
            <p className="text-sm text-foreground/60">Privacy-first digital wellbeing tracker</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-foreground/60 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-foreground/60 hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#download" className="text-foreground/60 hover:text-primary transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="flex items-center gap-2 text-sm mb-3">
              <Mail className="w-4 h-4" />
              <span>contact@digitalwellbeing.dev</span>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>© 2025 Digital Wellbeing Tracker. All rights reserved.</p>
          <p>MIT License • Privacy-First • Open Source</p>
        </div>
      </div>
    </footer>
  )
}
