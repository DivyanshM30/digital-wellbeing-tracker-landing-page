"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"

// TODO: Replace with your Formspree form ID
// 1. Go to https://formspree.io/
// 2. Create a new form and get your Form ID
// 3. Replace 'YOUR_FORM_ID' below with your actual ID
// Example: "https://formspree.io/f/xyzabc123"
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ID || "https://formspree.io/f/YOUR_FORM_ID"

export default function ContactForm() {
  const [formState, setFormState] = useState({ email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formState.email || !formState.message) {
      setError("Please fill in all fields")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formState.email,
          message: formState.message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormState({ email: "", message: "" })
        // Reset success message after 3 seconds
        setTimeout(() => {
          setSubmitted(false)
        }, 3000)
      } else {
        // Fallback for demo/development
        if (FORM_ENDPOINT.includes("YOUR_FORM_ID")) {
          setSubmitted(true)
          console.log("Demo: Form would be sent to Formspree with data:", formState)
          setFormState({ email: "", message: "" })
          setTimeout(() => {
            setSubmitted(false)
          }, 3000)
        } else {
          setError("Failed to send message. Please try again.")
        }
      }
    } catch (err) {
      // For demo/development when no real endpoint is configured
      if (FORM_ENDPOINT.includes("YOUR_FORM_ID")) {
        setSubmitted(true)
        console.log("Demo: Form would be sent to Formspree with data:", formState)
        setFormState({ email: "", message: "" })
        setTimeout(() => {
          setSubmitted(false)
        }, 3000)
      } else {
        setError("An error occurred. Please try again.")
        console.error("Form submission error:", err)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-foreground/60">Have a question? We'd love to hear from you.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-xl p-8">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              disabled={loading || submitted}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              placeholder="your@email.com"
              aria-label="Email address"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message <span className="text-destructive">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              disabled={loading || submitted}
              rows={5}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed resize-none transition-colors"
              placeholder="Tell us what's on your mind..."
              aria-label="Message"
            />
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm" role="alert">
              {error}
            </div>
          )}

          {submitted && (
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400 text-sm" role="status">
              ✓ Message sent successfully! We'll get back to you soon.
            </div>
          )}

          <button
            type="submit"
            disabled={loading || submitted}
            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            aria-label="Send message"
          >
            <Mail className="w-4 h-4" />
            {loading ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
          </button>

          <p className="text-xs text-foreground/50 text-center">
            Your email will only be used to respond to your inquiry. We respect your privacy.
          </p>
        </form>
      </div>
    </section>
  )
}
