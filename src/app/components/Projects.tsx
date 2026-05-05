import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectDetailModal } from "./ProjectDetailModel";

const projects = [
  {
    title: "Sentiment Analysis System",
    description:
      "Built an end-to-end LSTM-based sentiment analysis system trained on IMDB dataset with real-time prediction via web app.",
    image:
      "https://www.reputationx.com/wp-content/uploads/2026/02/sentiment-analysis-1-1.jpg",
    tags: ["Python", "TensorFlow", "LSTM", "Scikit-learn", "Streamlit"],
    category: "Machine Learning",
    metrics: { accuracy: "—", latency: "—" },
  },
  {
    title: "Business Sales Intelligence Dashboard",
    description:
      "Performed EDA, built forecasting models and clustering pipeline to analyze revenue, profit, and customer segments.",
    image:
      "https://demandzen.com/wp-content/uploads/2025/12/Analytics-and-Sales-Performance_-Metrics-That-Drive-Revenue-Growth.jpg",
    tags: ["Python", "Pandas", "K-Means", "RandomForest"],
    category: "Analytics",
    metrics: { insight: "High", automation: "Yes" },
  },
  {
    title: "Marketing Website Platform",
    description:
      "Responsive marketing website with authentication, database integration, and modern UI system.",
    image:
      "https://continuinged.utah.edu/_resources/images/_d1/anc/featured-images/mktg231.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    category: "Web Development",
    metrics: { performance: "95%", responsiveness: "+20%" },
  },
  {
    title: "Crop Yield Prediction Engine",
    description:
      "Ensemble ML model predicting agricultural yield with high accuracy, deployed via interactive interface.",
    image: "https://i0.wp.com/geopard.tech/wp-content/uploads/2022/06/63-min.jpg?w=1200&ssl=1",
    tags: ["Python", "XGBoost", "Random Forest", "Scikit-learn", "Gradio"],
    category: "Machine Learning",
    metrics: { accuracy: "95%", improvement: "+20%" },
  },
  {
    title: "Stock Price Forecasting Model",
    description:
      "Time-series based predictive system using ensemble learning for financial forecasting.",
    image:
      "https://miro.medium.com/v2/resize:fit:2000/format:webp/0*rz_QvtXeqqHm5SIa.jpeg",
    tags: ["Python", "XGBoost", "Random Forest", "Pandas"],
    category: "Machine Learning",
    metrics: { accuracy: "95%", improvement: "+23%" },
  },
  {
    title: "Customer Churn Prediction API",
    description:
      "Real-time churn prediction system deployed with scalable API architecture on cloud.",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1080&q=80",
    tags: ["Python", "XGBoost", "FastAPI", "PostgreSQL"],
    category: "Machine Learning",
    metrics: { accuracy: "94%", recall: "92%" },
  },
  {
    title: "Computer Vision Detection System",
    description:
      "YOLO-based object detection system for industrial quality control with real-time performance.",
    image:
      "https://images.unsplash.com/photo-1762279389083-abf71f22d338?auto=format&fit=crop&w=1080&q=80",
    tags: ["OpenCV", "TensorFlow", "YOLOv8"],
    category: "Computer Vision",
    metrics: { accuracy: "96%", fps: "30" },
  },
  {
    title: "Fraud Detection System",
    description:
      "Anomaly detection system combining isolation forests and autoencoders for fraud prevention.",
    image:
      "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=1080&q=80",
    tags: ["Scikit-learn", "TensorFlow", "PostgreSQL"],
    category: "Machine Learning",
    metrics: { precision: "89%", recall: "92%" },
  },
];

const categories = [
  "All",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Analytics",
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleViewDetails = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real-world machine learning systems, analytics pipelines, and AI applications.
          </p>
        </motion.div>

        {/* Filter Pills (modern UX upgrade) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => {
            const active = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition border ${
                  active
                    ? "bg-purple-600 text-white border-purple-600 shadow-md"
                    : "bg-white text-gray-700 hover:border-purple-400"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Card className="overflow-hidden h-full flex flex-col border hover:shadow-2xl transition-all duration-300">

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

                  <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                    <Button size="sm" variant="secondary">
                      <Github size={16} />
                    </Button>
                    <Button size="sm" variant="secondary">
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">

                  <Badge className="w-fit mb-3 bg-purple-100 text-purple-700">
                    {project.category}
                  </Badge>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2 flex-1">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 mt-4 text-center text-sm bg-gray-50 p-3 rounded-lg">
                    {Object.entries(project.metrics).map(([k, v]) => (
                      <div key={k}>
                        <div className="font-bold text-purple-600">{v}</div>
                        <div className="text-gray-500 capitalize">{k}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="mt-4 justify-between hover:bg-purple-50"
                    onClick={() => handleViewDetails(project)}
                  >
                    View Case Study
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
