"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Does this send data to the cloud?",
    answer:
      "No. All data is stored locally in an SQLite database. We have zero cloud sync by default and no telemetry collection.",
  },
  {
    question: "How much system resources does it use?",
    answer:
      "Digital Wellbeing Tracker is designed to be lightweight. It uses psutil for efficient monitoring and typically consumes less than 50MB of RAM.",
  },
  {
    question: "Can I customize tracking intervals?",
    answer:
      "Yes. The app includes a settings panel where you can configure monitoring frequency, alert thresholds, and app categories.",
  },
  {
    question: "Is this open source?",
    answer:
      "Yes! The entire project is open source under the MIT license. You can find the repository on GitHub and contribute.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg border border-border bg-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium text-left">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-muted/20 border-t border-border text-foreground/70">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-accent/5 border border-accent/20 text-center">
          <p className="text-foreground/70">
            <strong>Privacy Commitment:</strong> All data is stored locally in an SQLite database. No telemetry, no
            cloud syncing by default. You own your data.
          </p>
        </div>
      </div>
    </section>
  )
}
