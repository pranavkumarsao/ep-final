import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function WorkWithUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Let's Talk</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Work With Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              When decisions matter, perspective matters. Start a strategic conversation.
            </p>
            <div className="section-divider mt-8" />
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-14 md:py-20 lg:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Start a Conversation</h2>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                Share your challenge with us. We'll respond within 24 hours to explore how we can help.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium tracking-wide uppercase mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:border-primary transition-colors text-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium tracking-wide uppercase mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:border-primary transition-colors text-sm"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium tracking-wide uppercase mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:border-primary transition-colors text-sm"
                      placeholder="Your organisation"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-xs font-medium tracking-wide uppercase mb-2">
                      Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:border-primary transition-colors text-sm"
                      placeholder="Your role or title"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium tracking-wide uppercase mb-2">
                    Tell us about your challenge *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:border-primary transition-colors resize-none text-sm"
                    placeholder="What strategic challenge are you facing? What decision needs to be made?"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-[hsl(235_70%_35%)] active:bg-[hsl(235_70%_35%)] transition-colors"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Get in <span className="text-primary-gradient">Touch</span>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Whether you're facing a specific strategic challenge or exploring how we can support your
                  organisation, we're here to help.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-5 p-6 bg-background border border-border">
                  <div className="w-10 h-10 bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-semibold tracking-wide uppercase mb-1">Email Us</h4>
                    <a
                      href="mailto:insights@eagleperspectives.in"
                      className="text-sm text-muted-foreground hover:text-primary active:text-primary transition-colors break-all"
                    >
                      insights@eagleperspectives.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-background border border-border">
                  <div className="w-10 h-10 bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-wide uppercase mb-1">Call Us</h4>
                    <a
                      href="tel:+919892231033"
                      className="text-sm text-muted-foreground hover:text-primary active:text-primary transition-colors"
                    >
                      +91 98922 31033
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-background border border-border">
                  <div className="w-10 h-10 bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-wide uppercase mb-1">Our Office</h4>
                    <p className="text-sm text-muted-foreground">
                      India
                      <br />
                      (Serving clients globally)
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-primary/20 pl-6 py-2">
                <h4 className="text-xs font-semibold tracking-wide uppercase mb-4">What happens next?</h4>
                <ul className="space-y-3">
                  {[
                    "We review your inquiry within 24 hours",
                    "We schedule an initial conversation to understand your challenge",
                    "We propose an approach tailored to your needs",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary font-semibold flex-shrink-0 text-sm">{i + 1}.</span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
