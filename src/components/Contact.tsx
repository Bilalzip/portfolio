import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Send, CheckCircle, AlertCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "@/data/portfolio";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError("Email service is not configured yet.");
      return;
    }

    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
          to_name: "Mohd Bilal",
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch {
      setSending(false);
      setError("Message failed to send. Please try again.");
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="flex items-center gap-3 mb-8">
        <Mail className="w-5 h-5 text-cool" />
        <h2 className="text-2xl md:text-3xl font-bold font-mono">
          <span className="text-cool">./</span>contact
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {/* Info */}
        <div className="space-y-4">
          <div className="glass space-y-4 rounded-xl p-5 md:p-6">
            {[
              { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: Phone, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { icon: MapPin, label: personalInfo.location },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 break-all text-sm font-mono text-foreground/80 transition-colors hover:text-cool"
              >
                <Icon className="w-4 h-4 text-cool" />
                {label}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohd-bilal-b9a0b71a8/" },
              { icon: Github, label: "GitHub", href: "https://github.com/bilalzip" },
              { icon: Globe, label: "Portfolio", href: "https://codewithbilal.com/" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-xs font-mono text-muted-foreground transition-all hover:bg-cool/10 hover:text-cool"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={submit}
          className="glass glow-cool space-y-4 rounded-xl p-5 md:p-6"
        >
          <div className="font-mono text-xs text-muted-foreground mb-2">{"// send-message.sh"}</div>

          {(["name", "email", "message"] as const).map((field) => (
            <div key={field}>
              <label className="text-xs font-mono text-muted-foreground mb-1 block">{field}:</label>
              {field === "message" ? (
                <textarea
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  required
                  rows={4}
                  className="w-full bg-secondary/50 rounded-lg px-3 py-2 text-sm font-mono text-foreground border border-border/50 focus:border-warm/50 focus:outline-none transition-colors resize-none"
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  required
                  className="w-full bg-secondary/50 rounded-lg px-3 py-2 text-sm font-mono text-foreground border border-border/50 focus:border-warm/50 focus:outline-none transition-colors"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={sending}
            className="w-full glass  px-5 py-2.5 rounded-lg text-sm font-mono text-success hover:bg-success/10 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {sending ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                ./send-message.sh
              </>
            )}
          </button>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-sm text-destructive"
              >
                <AlertCircle className="w-4 h-4" />
                {error}
              </motion.div>
            )}
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-sm text-success"
              >
                <CheckCircle className="w-4 h-4" />
                Message sent successfully. Connection established.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
