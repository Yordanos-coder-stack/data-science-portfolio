import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";
import { TypeAnimation } from "react-type-animation";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">

      {/* Subtle modern grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(168,85,247,0.25)_1px,transparent_0)] [background-size:40px_40px]" />
      </div>

      {/* Soft glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-3xl rounded-full top-[-200px] left-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-pink-600/20 blur-3xl rounded-full bottom-[-150px] right-[-100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-[2px] shadow-xl">
            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-5xl">
              👩‍💻
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-bold text-white tracking-tight"
        >
          Yordanos Fentahun
        </motion.h1>

        {/* Role animation */}
        <div className="mt-4">
          <TypeAnimation
            sequence={[
              "Data Scientist",
              2000,
              "Machine Learning Engineer",
              2000,
              "AI & NLP Developer",
              2000,
              "Data Storyteller",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-xl sm:text-3xl font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
          />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
        >
          I design and build machine learning systems that transform raw data into
          insights, predictions, and real-world decisions.
        </motion.p>

        {/* Tech highlights (modern trust line) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-5 text-sm text-gray-400"
        >
          Python • SQL • Scikit-learn • TensorFlow • Pandas • Power BI
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 justify-center mt-8 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-5 text-base"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Projects <ArrowRight className="ml-2 w-4 h-4" />
          </Button>

          <Button variant="outline" asChild className="px-6 py-5 text-base">
            <a href="/resume.pdf" download>
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex justify-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <a
            href="https://github.com/Yordanos-coder-stack"
            target="_blank"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            <Github />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            <Linkedin />
          </a>

          <a
            href="mailto:your@email.com"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            <Mail />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
