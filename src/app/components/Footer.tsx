import { motion } from "motion/react";
import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Yordanos-coder-stack", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yordanos-fentahun-987466361/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/YordanosFe16682", label: "Twitter" },
    { icon: Mail, href: "mailto:yordanosfentahundata@gmail.com", label: "Email" }
  ];

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Yordanos Fentahun
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Data Scientist passionate about transforming data into meaningful insights
                and building intelligent systems that make a difference.
              </p>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-purple-600 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
              <p className="text-gray-300 mb-4">
                Get notified about my latest projects and insights in data science.
              </p>
              <NewsletterForm />
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Yordanos Fentahun. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with{" "}
              <Heart size={16} className="text-pink-500 fill-pink-500" /> using React & Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

/* ✅ Updated Newsletter Form with Formspree */
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus({ type: "error", message: "Please enter your email." });
      return;
    }

    if (!validateEmail(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setStatus({ type: "loading", message: "Subscribing..." });

    try {
      const res = await fetch("https://formspree.io/f/mykdkplp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Thanks — you are subscribed!" });
        setEmail("");
      } else {
        setStatus({ type: "error", message: "Subscription failed. Try again later." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Please try again later." });
    }
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit} aria-live="polite">
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
          required
        />

        <button
          type="submit"
          disabled={status.type === "loading"}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-colors disabled:opacity-60"
        >
          {status.type === "loading" ? "Sending..." : "Subscribe"}
        </button>
      </div>

      {status.message && (
        <p
          className={`text-sm ${
            status.type === "error" ? "text-red-400" : "text-green-400"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
