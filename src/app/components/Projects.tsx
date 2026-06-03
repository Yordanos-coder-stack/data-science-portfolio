import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, ChevronRight, Search, SlidersHorizontal } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectDetailModal } from "./ProjectDetailModel";

const defaultGithubUrl = "https://github.com/Yordanos-coder-stack";
const defaultLiveDemoUrl = "https://data-science-portfolio-gules.vercel.app/";

const projects = [
        {
      title: "Fruit Freshness Detection",
      description: "Developed an AI-powered fruit freshness classification system that analyzes fruit images and predicts whether they are fresh or rotten. The solution combines computer vision techniques, image processing, explainable AI visualization, analytics dashboards, and automated report generation within an interactive Streamlit web application.",
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
      tags: ["Python", "Computer Vision", "OpenCV", "Streamlit", "Plotly", "Machine Learning"],
      category: "Deep Learning",
      githubUrl: "https://github.com/Yordanos-coder-stack/senio_project",
      liveDemoUrl: defaultLiveDemoUrl,
      metrics: {
        performance: "Real-time image analysis",
        responsiveness: "Interactive dashboard with instant predictions"
      }
    },
    {
    title: "Sentiment Analaysis",
    description: "Developed an end-to-end sentiment analysis system using Recurrent Neural Networks (LSTM) to classify movie reviews as positive or negative. The model was trained on the IMDB dataset and integrated into an interactive web application, allowing users to input custom text and receive real-time sentiment predictions.",
    image: "https://www.reputationx.com/wp-content/uploads/2026/02/sentiment-analysis-1-1.jpg",
    tags: ["Python","TensorFlow", "LSTM (RNN)", "Sklearn","Streamlit"],
    category: "Machine Learning",
    githubUrl: "https://github.com/Yordanos-coder-stack/sentiment-analysis",
    liveDemoUrl: defaultLiveDemoUrl,
    metrics: { performance: "", responsiveness: "" }
  },
  {
    title: "Business Sales Performance Analytics",
    description: "Performed Exploratory Data Analysis (EDA) & KPI analysis Analyzed sales & profit by region, category, and segment Built RandomForestRegressor to predict profit Conducted customer segmentation using K-Means Forecasted future sales using Prophet.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxc6e-fy6qdFQr8-7xXnfA6QrK0-Q2J3oMBQ&s",
    tags: ["Python", "K-Means","RandomForestRegressor", "Sklearn"],
    category: "Analytics",
    githubUrl: "https://github.com/Yordanos-coder-stack/FUTURE_DS_01",
    liveDemoUrl: defaultLiveDemoUrl,
    metrics: { performance: "", responsiveness: "" }
  },
  {
    title: "Website for online marketing",
    description: "Built on HTML, CSS, and JavaScript, this responsive website features a clean design and intuitive navigation. It includes a contact form and integrates with social media platforms to enhance online presence.",
    image: "https://continuinged.utah.edu/_resources/images/_d1/anc/featured-images/mktg231.jpg",
    tags: ["HTML", "CSS", "JavaScript","Node.Js","MongoDB"],
    category: "Web Development",
    githubUrl: "https://github.com/Yordanos-coder-stack/web-project",
    liveDemoUrl: defaultLiveDemoUrl,
    metrics: { performance: "95%", responsiveness: "+20%" }
  },
  {
    title: "Crop Yield Prediction",
    description: "Built an ML model to predict crop yields with 95% accuracy using ensemble methods. Deployed on Gradio for interactive user interface.",
    image: "https://i0.wp.com/geopard.tech/wp-content/uploads/2022/06/63-min.jpg?w=1200&ssl=1",
    tags: ["Python", "Random Forest", "Sklearn","Gradio","XGBoost"],
    category: "Machine Learning",
    githubUrl: "https://github.com/Yordanos-coder-stack/Crop-Yield-Prediction",
    liveDemoUrl: defaultLiveDemoUrl,
    metrics: { accuracy: "95%", improvement: "+20%" }
  },
  {
    title: "Stock Price Prediction",
    description: "Built an ML model to predict stock prices with 95% accuracy using ensemble methods. Deployed on Gradio for interactive user interface.",
    image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/0*rz_QvtXeqqHm5SIa.jpeg",
    tags: ["Python", "Random Forest", "Sklearn","Gradio"],
    category: "Machine Learning",
    githubUrl: "https://github.com/Yordanos-coder-stack/price-prediction",
    liveDemoUrl: defaultLiveDemoUrl,
    metrics: { accuracy: "95%", improvement: "+23%" }
  },
  {
    title: "Customer Churn Prediction",
    description: "Built an ML model to predict customer churn with 94% accuracy using ensemble methods. Deployed on AWS with real-time prediction API.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljcyUyMGNvZGV8ZW58MXx8fHwxNzcwNjE1MTU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "XGBoost", "Sklearn"],
    category: "Machine Learning",
    githubUrl: "https://github.com/Yordanos-coder-stack/FUTURE_DS_02",
    liveDemoUrl: defaultLiveDemoUrl,
    metrics: { accuracy: "94%", improvement: "+23%" }
  },
 
  {
    title: "Computer Vision Object Detection",
    description: "Implemented YOLOv8 for real-time object detection in manufacturing quality control, reducing defect rates by 40%.",
    image: "https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MDUzODI3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["OpenCV", "TensorFlow"],
    category: "Computer Vision",
    githubUrl: defaultGithubUrl,
    liveDemoUrl: defaultLiveDemoUrl,
    metrics: { accuracy: "96%", fps: "30" }
  },
  {
    title: "Fraud Detection System",
    description: "Developed an anomaly detection system using isolation forests and autoencoders to identify fraudulent transactions in real-time.",
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc3MDU2MjUwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Scikit-learn", "TensorFlow", "PostgreSQL"],
    category: "Machine Learning",
    githubUrl: defaultGithubUrl,
    liveDemoUrl: defaultLiveDemoUrl,
    metrics: { precision: "89%", recall: "92%" }
  }
];

const categories = ["All", "Machine Learning", "Deep Learning", "Computer Vision", "Analytics"];


export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filteredProjects = projects
    .filter((project) => selectedCategory === "All" || project.category === selectedCategory)
    .filter((project) => {
      const query = searchTerm.trim().toLowerCase();
      if (!query) return true;

      const titleMatch = project.title.toLowerCase().includes(query);
      const categoryMatch = project.category.toLowerCase().includes(query);
      const descriptionMatch = project.description.toLowerCase().includes(query);
      const tagMatch = project.tags.filter(Boolean).some((tag) => String(tag).toLowerCase().includes(query));

      return titleMatch || categoryMatch || descriptionMatch || tagMatch;
    })
    .sort((a, b) => {
      if (sortBy === "title-asc") return a.title.localeCompare(b.title);
      if (sortBy === "title-desc") return b.title.localeCompare(a.title);
      if (sortBy === "category") return a.category.localeCompare(b.category);
      return 0;
    });

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / projectsPerPage));
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const visibleProjects = filteredProjects.slice(startIndex, endIndex);

  const handleViewDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm, sortBy]);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing real-world applications of machine learning and data science
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-md" 
                : "hover:border-purple-400 bg-white/80 backdrop-blur"}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Search + Sort controls */}
        <div className="mb-8 sm:mb-10 rounded-2xl border border-purple-100/70 bg-white/80 backdrop-blur p-3 sm:p-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2 relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, tag, or keyword..."
                className="h-10 w-full pl-9 pr-3 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div className="relative">
              <SlidersHorizontal size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-10 w-full pl-9 pr-3 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="title-asc">Sort: Title A-Z</option>
                <option value="title-desc">Sort: Title Z-A</option>
                <option value="category">Sort: Category</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mobile swipe carousel */}
        <div className="md:hidden -mx-4 px-4 overflow-x-auto pb-2 snap-x snap-mandatory">
          <div className="flex gap-4">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={`mobile-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="min-w-[88%] snap-start"
              >
                <Card className="overflow-hidden h-full flex flex-col border border-purple-100/70 bg-white/90 backdrop-blur hover:border-purple-300 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative h-44 overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <Badge className="w-fit bg-purple-100 text-purple-700 hover:bg-purple-200 mb-3">
                      {project.category}
                    </Badge>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.filter(Boolean).slice(0, 4).map((tag) => (
                        <Badge key={`${project.title}-${tag}`} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full mt-auto group/btn hover:bg-purple-50 hover:text-purple-600"
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

        {/* Projects Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Card className="overflow-hidden h-full flex flex-col border border-purple-100/80 bg-white/90 backdrop-blur hover:shadow-2xl transition-all duration-300 hover:border-purple-300">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white"
                      onClick={() => window.open(project.githubUrl ?? defaultGithubUrl, "_blank")}
                    >
                      <Github size={16} />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white"
                      onClick={() => window.open(project.liveDemoUrl ?? defaultLiveDemoUrl, "_blank")}
                    >
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed flex-1 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100/70">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.filter(Boolean).slice(0, 5).map((tag) => (
                      <Badge key={`${project.title}-${tag}`} variant="outline" className="text-xs">
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

        {/* Pagination controls for growing project lists */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-3">
          {totalPages > 1 && (
            <div className="flex items-center gap-2 flex-wrap justify-center rounded-xl border border-purple-100/70 bg-white/80 backdrop-blur px-3 py-2">
              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="hover:border-purple-400 disabled:opacity-50 bg-white"
              >
                Previous
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={page === currentPage ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                  className={
                    page === currentPage
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 min-w-10 shadow-sm"
                      : "hover:border-purple-400 min-w-10 bg-white"
                  }
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="hover:border-purple-400 disabled:opacity-50 bg-white"
              >
                Next
              </Button>
            </div>
          )}
          <p className="text-sm text-gray-500">
            Showing {filteredProjects.length === 0 ? 0 : startIndex + 1}-
            {Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length}
          </p>
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No projects found. Try a different search or category.
          </p>
        )}
      </div>

      <ProjectDetailModal 
        project={selectedProject}
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
