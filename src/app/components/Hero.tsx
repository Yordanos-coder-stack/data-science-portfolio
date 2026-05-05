import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";
import { TypeAnimation } from "react-type-animation";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              opacity: Math.random(),
            }}
            animate={{
              y: ["0vh", "100vh"],
              opacity: [1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">

        {/* Avatar */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mb-6"
        >
          <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-600 p-1">
            <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-5xl">
              👩‍💻
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-7xl font-bold text-white mb-4"
        >
          Yordanos Fentahun
        </motion.h1>

        {/* Typing Role */}
        <TypeAnimation
          sequence={[
            "Data Scientist",
            2000,
            "Machine Learning Engineer",
            2000,
            "AI Developer",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-2xl sm:text-4xl bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto"
        >
          Transforming complex data into actionable insights through advanced analytics,
          machine learning,deep learning and compelling visualizations. Let's unlock the power of your data.
        
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 justify-center mt-8 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects <ArrowRight className="ml-2" />
          </Button>

          <Button variant="outline" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2" />
              Resume
            </a>
          </Button>
        </motion.div>

        {/* Socials */}
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/Yordanos-coder-stack" target="_blank">
            <Github className="text-gray-400 hover:text-purple-400" />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <Linkedin className="text-gray-400 hover:text-purple-400" />
          </a>
          <a href="mailto:your@email.com">
            <Mail className="text-gray-400 hover:text-purple-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
