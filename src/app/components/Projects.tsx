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
    title: "Website for online marketing",
    description: "Built on HTML, CSS, and JavaScript, this responsive website features a clean design and intuitive navigation. It includes a contact form and integrates with social media platforms to enhance online presence.",
    image: "https://continuinged.utah.edu/_resources/images/_d1/anc/featured-images/mktg231.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
    metrics: { performance: "95%", responsiveness: "+20%" }
  },
  {
    title: "Crop Yield Prediction",
    description: "Built an ML model to predict crop yields with 95% accuracy using ensemble methods. Deployed on Gradio for interactive user interface.",
    image: "https://i0.wp.com/geopard.tech/wp-content/uploads/2022/06/63-min.jpg?w=1200&ssl=1",
    tags: ["Python", "Random Forest", "Sklearn","Gradio","XGBoost"],
    category: "Machine Learning",
    metrics: { accuracy: "95%", improvement: "+20%" }
  },
  {
    title: "Stock Price Prediction",
    description: "Built an ML model to predict stock prices with 95% accuracy using ensemble methods. Deployed on Gradio for interactive user interface.",
    image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/0*rz_QvtXeqqHm5SIa.jpeg",
    tags: ["Python", "Random Forest", "Sklearn","Gradio"],
    category: "Machine Learning",
    metrics: { accuracy: "95%", improvement: "+23%" }
  },
  {
    title: "Customer Churn Prediction",
    description: "Built an ML model to predict customer churn with 94% accuracy using ensemble methods. Deployed on AWS with real-time prediction API.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljcyUyMGNvZGV8ZW58MXx8fHwxNzcwNjE1MTU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "XGBoost", "Sklearn"],
    category: "Machine Learning",
    metrics: { accuracy: "94%", improvement: "+23%" }
  },/*
  {
    title: "Real-time Sentiment Analysis",
    description: "Developed a deep learning NLP system for analyzing social media sentiment in real-time using BERT and streaming data pipelines.",
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc3MDU2MjUwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["PyTorch", "BERT", "Kafka", "NLP"],
    category: "Deep Learning",
    metrics: { f1Score: "0.91", throughput: "10k/sec" }
  },*/
  /*{
    title: "Sales Forecasting Dashboard",
    description: "Created an interactive dashboard with time series forecasting models (ARIMA, Prophet) to predict sales trends across multiple regions.",
    image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzA1OTI5NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Prophet", "Tableau", "Python", "SQL"],
    category: "Analytics",
    metrics: { mape: "8.2%", regions: "15+" }
  },*/
  {
    title: "Computer Vision Object Detection",
    description: "Implemented YOLOv8 for real-time object detection in manufacturing quality control, reducing defect rates by 40%.",
    image: "https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MDUzODI3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: [, "OpenCV", "TensorFlow",],
    category: "Computer Vision",
    metrics: { accuracy: "96%", fps: "30" }
  },/*
  {
    title: "Recommendation Engine",
    description: "Built a hybrid recommendation system combining collaborative filtering and content-based approaches, increasing user engagement by 35%.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljcyUyMGNvZGV8ZW58MXx8fHwxNzcwNjE1MTU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "Spark", "ALS", "Redis"],
    category: "Machine Learning",
    metrics: { ctr: "+35%", users: "1M+" }
  },*/
  {
    title: "Fraud Detection System",
    description: "Developed an anomaly detection system using isolation forests and autoencoders to identify fraudulent transactions in real-time.",
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc3MDU2MjUwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Scikit-learn", "TensorFlow", "PostgreSQL"],
    category: "Machine Learning",
    metrics: { precision: "89%", recall: "92%" }
  }
];

const categories = ["All", "Machine Learning", "Deep Learning", "Computer Vision", "Analytics"];


export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const handleViewDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing real-world applications of machine learning and data science
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" 
                : "hover:border-purple-400"}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-2xl transition-shadow duration-300 border-2 hover:border-purple-200">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Github size={16} />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full group/btn hover:bg-purple-50 hover:text-purple-600"
                    onClick={() => handleViewDetails(project)}
                  >
                    View Details
                    <ChevronRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
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