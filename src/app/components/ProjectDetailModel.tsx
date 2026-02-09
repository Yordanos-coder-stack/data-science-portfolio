import { motion } from "motion/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink, Calendar, Users, Award, TrendingUp, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  metrics: Record<string, string>;
  fullDescription?: string;
  challenges?: string[];
  solutions?: string[];
  technologies?: string[];
  outcomes?: string[];
  timeline?: string;
  team?: string;
  role?: string;
}

interface ProjectDetailModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, open, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  // Extended project details
  const projectDetails: Record<string, any> = {
    "Crop Yield Prediction": {
      fullDescription: "Developed a comprehensive machine learning solution to predict crop yields with over 95% accuracy. The system analyzes historical weather data, soil conditions, and satellite imagery to provide actionable insights for farmers and agricultural planners.",
      challenges: [
        "Need for accurate predictions across diverse crop types and regions",
        "Integration of heterogeneous data sources (Production(kg), Area cultivated(Ha)",
        "Real-time prediction requirements for growing season decisions"
      ],
      solutions: [
        "Implemented ensemble model combining Random Forest and XGBoost",
        "Deployed by gradio app for interactive user interface",
        "Created custom data preprocessing pipeline for handling missing and noisy data"
        
      ],
      technologies: ["Python", "Random Forest", "XGBoost", "Gradio"],
      outcomes: [
        "Achieved 95% accuracy in crop yield prediction",
        "Provided real-time insights for users",
        "Improved agricultural planning and resource allocation",
        "Received positive feedback from users for model interpretability"
      ],
      timeline: "2 months",
      team: "solo project",
      role: "Data Scientist"
    
      },
    "Stock Price Prediction": {
        fullDescription: "Developed a comprehensive machine learning solution to predict stock prices with over 95% accuracy. The system analyzes historical price data, technical indicators, and market sentiment to provide actionable insights for traders and investors.",
        challenges: [
            "Need for real-time predictions",
            "Integration with trading platforms",

        ],
        solutions: [
            "Implemented ensemble model combining Random Forest and LSTM",
            "Deployed by gradio app for interactive user interface"
        ],
        technologies: ["Python", "Random Forest", "Gradio"],
        outcomes: [
            "Achieved 94% accuracy in stock price prediction",
            "Provided real-time insights for 100+ users",
            "Improved trading decision-making and profitability",
            "Received positive feedback from users for model interpretability"

        ],
        timeline: "2 months",
        team: "Group project",
        role: "Data Scientist"
    },
    "Customer Churn Prediction": {
      fullDescription: "Developed a comprehensive machine learning solution to predict customer churn for a telecom company with over 1 million subscribers. The system analyzes customer behavior patterns, usage statistics, and support interactions to identify at-risk customers before they leave.",
      challenges: [
        "Highly imbalanced dataset with only 15% churn rate",
        "Real-time prediction requirements for large customer base",
        "Integration with existing CRM and billing systems",
        "Interpretability needed for customer retention team"
      ],
      solutions: [
        "Implemented SMOTE for handling class imbalance",
        "Created ensemble model combining XGBoost, Random Forest, and LightGBM",
        "Built scalable API using FastAPI with Redis caching",
        "Added SHAP values for model explainability"
      ],
      technologies: ["Python", "XGBoost", "LightGBM", "FastAPI", "AWS SageMaker", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
      outcomes: [
        "Increased customer retention by 23%",
        "Reduced churn rate from 15% to 11.5%",
        "Saved $2.5M annually in customer acquisition costs",
        "Process 50,000 predictions per day in under 100ms"
      ],
      timeline: "6 months",
      team: "4 data scientists, 2 backend engineers",
      role: "Lead Data Scientist"
    },
    "Real-time Sentiment Analysis": {
      fullDescription: "Built an end-to-end NLP system for analyzing social media sentiment in real-time across multiple platforms. The system processes millions of messages daily, identifying trends, brand mentions, and sentiment shifts for enterprise clients.",
      challenges: [
        "Processing massive volume of streaming data (10k+ messages/sec)",
        "Handling multiple languages and informal text",
        "Detecting sarcasm and context-dependent sentiment",
        "Ensuring low latency for real-time dashboards"
      ],
      solutions: [
        "Fine-tuned BERT model on domain-specific data",
        "Implemented Apache Kafka for stream processing",
        "Created custom preprocessing pipeline for social media text",
        "Deployed using distributed inference with TensorFlow Serving"
      ],
      technologies: ["PyTorch", "BERT", "Transformers", "Apache Kafka", "Spark Streaming", "MongoDB", "React", "D3.js", "AWS"],
      outcomes: [
        "Achieved 91% F1 score on sentiment classification",
        "Processing 10,000+ messages per second",
        "Reduced incident response time by 60%",
        "Serving 50+ enterprise clients"
      ],
      timeline: "8 months",
      team: "3 data scientists, 3 ML engineers, 2 frontend developers",
      role: "Senior Data Scientist"
    },
    "Sales Forecasting Dashboard": {
      fullDescription: "Created an interactive analytics platform combining time series forecasting with business intelligence. The system predicts sales across 15+ regions and provides actionable insights for inventory management and strategic planning.",
      challenges: [
        "Multiple seasonal patterns and external factors",
        "Missing data and inconsistent reporting",
        "Need for both short-term and long-term predictions",
        "User-friendly interface for non-technical stakeholders"
      ],
      solutions: [
        "Implemented hybrid model combining Prophet and ARIMA",
        "Created automated data quality checks and imputation",
        "Built ensemble approach for different time horizons",
        "Designed interactive Tableau dashboards with drill-down capabilities"
      ],
      technologies: ["Python", "Prophet", "ARIMA", "Tableau", "SQL Server", "Pandas", "NumPy", "Scikit-learn"],
      outcomes: [
        "Achieved 8.2% MAPE (industry standard: 15%)",
        "Reduced inventory costs by $1.2M annually",
        "Improved demand planning accuracy by 35%",
        "Adopted by 200+ users across organization"
      ],
      timeline: "5 months",
      team: "2 data scientists, 1 BI analyst",
      role: "Lead Data Scientist"
    },
    "Computer Vision Object Detection": {
      fullDescription: "Implemented a state-of-the-art computer vision system for automated quality control in manufacturing. The system inspects products in real-time, detecting defects with higher accuracy than human inspectors while dramatically increasing throughput.",
      challenges: [
        "High variability in product appearance and defect types",
        "Real-time processing requirements on production line",
        "Limited labeled data for rare defect types",
        "Integration with existing manufacturing equipment"
      ],
      solutions: [
        "Fine-tuned YOLOv8 on custom dataset with augmentation",
        "Implemented active learning for continuous improvement",
        "Optimized model for edge deployment using TensorRT",
        "Created automated alert system for critical defects"
      ],
      technologies: ["Python", "TensorFlow", "OpenCV"],
      outcomes: [
        "Achieved 96% detection accuracy vs 87% human baseline",
        "Reduced defect rate by 40%",
        "Increased inspection throughput by 300%",
        "Saved $500K annually in quality control costs"
      ],
      timeline: "7 months",
      team: "2 computer vision engineers, 1 embedded systems engineer",
      role: "Computer Vision Lead"
    },
    "Recommendation Engine": {
      fullDescription: "Designed and deployed a large-scale hybrid recommendation system serving personalized content to over 1 million daily active users. The system combines collaborative filtering, content-based approaches, and contextual signals to maximize user engagement.",
      challenges: [
        "Cold start problem for new users and items",
        "Scalability for growing user base",
        "Balancing exploration vs exploitation",
        "Real-time updates as user preferences change"
      ],
      solutions: [
        "Built hybrid system combining ALS with content features",
        "Implemented distributed computing with Spark",
        "Created multi-armed bandit for exploration",
        "Used Redis for real-time feature updates"
      ],
      technologies: ["Python", "Apache Spark", "ALS", "Redis", "PostgreSQL", "Airflow", "FastAPI", "Docker"],
      outcomes: [
        "Increased click-through rate by 35%",
        "Improved user session time by 45%",
        "Serving 1M+ users with <50ms latency",
        "Generated $5M additional annual revenue"
      ],
      timeline: "9 months",
      team: "3 data scientists, 2 backend engineers, 1 DevOps engineer",
      role: "Senior Data Scientist"
    },
    "Fraud Detection System": {
      fullDescription: "Developed an advanced anomaly detection system for identifying fraudulent transactions in real-time. The system uses ensemble methods and deep learning to catch sophisticated fraud patterns while minimizing false positives.",
      challenges: [
        "Extremely imbalanced dataset (0.1% fraud rate)",
        "Constantly evolving fraud patterns",
        "Real-time decision making requirements",
        "High cost of false positives and false negatives"
      ],
      solutions: [
        "Combined Isolation Forest with autoencoder networks",
        "Implemented online learning for pattern adaptation",
        "Created risk scoring system with configurable thresholds",
        "Built monitoring dashboard for fraud analysts"
      ],
      technologies: ["Python", "Scikit-learn", "TensorFlow",""],
      outcomes: [
        "Achieved 89% precision and 92% recall",
        "Detected $3M in fraudulent transactions monthly",
        "Reduced false positive rate by 40%",
        "Processing 100,000+ transactions per hour"
      ],
      timeline: "6 months",
      team: "2 data scientists, 1 security engineer",
      role: "Data Scientist"
    }
  };

  const details = projectDetails[project.title] || {};

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Project Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header with Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative h-64 rounded-lg overflow-hidden"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-6 w-full">
                <Badge className="mb-3 bg-purple-600 text-white">
                  {project.category}
                </Badge>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <div className="flex gap-4 text-sm text-gray-200">
                  {details.timeline && (
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{details.timeline}</span>
                    </div>
                  )}
                  {details.team && (
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{details.team}</span>
                    </div>
                  )}
                  {details.role && (
                    <div className="flex items-center gap-1">
                      <Award size={16} />
                      <span>{details.role}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {Object.entries(project.metrics).map(([key, value], index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {value}
                </div>
                <div className="text-xs text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Overview */}
          {details.fullDescription && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <TrendingUp className="text-purple-600" size={24} />
                Overview
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {details.fullDescription}
              </p>
            </motion.div>
          )}

          {/* Challenges */}
          {details.challenges && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Challenges
              </h3>
              <ul className="space-y-2">
                {details.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">⚠</span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Solutions */}
          {details.solutions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Solutions
              </h3>
              <ul className="space-y-2">
                {details.solutions.map((solution: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Technologies */}
          {details.technologies && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {details.technologies.map((tech: string, index: number) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          )}

          {/* Outcomes */}
          {details.outcomes && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Key Outcomes
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {details.outcomes.map((outcome: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="flex gap-3 pt-4 border-t"
          >
            <Button
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github className="mr-2" size={18} />
              View Code
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-50"
              onClick={() => window.open("#", "_blank")}
            >
              <ExternalLink className="mr-2" size={18} />
              Live Demo
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
