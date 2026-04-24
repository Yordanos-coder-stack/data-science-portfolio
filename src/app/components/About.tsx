import { motion } from "motion/react";
import { Code2, Database, Brain, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

const expertise = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Building and deploying predictive models using scikit-learn, TensorFlow, and PyTorch",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Designing scalable data pipelines and ETL processes with SQL, Spark, and cloud platforms",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Data Visualization",
    description: "Creating interactive dashboards and insights using Tableau, Power BI, and Python libraries",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Code2,
    title: "Statistical Analysis",
    description: "Conducting rigorous statistical testing and experimental design for data-driven decisions",
    color: "from-orange-500 to-red-500"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate data scientist with expertise in transforming raw data into strategic insights.
            With a strong foundation in mathematics, statistics, and computer science, I specialize in
            building intelligent systems that drive business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-purple-200 group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}>
                    <item.icon className="text-white" size={28} />
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                My Journey
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                My passion for data science began during my academic journey where I discovered
                the power of statistical analysis and machine learning. Since then, I've worked
                on diverse projects ranging from predictive analytics to natural language processing.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I believe in continuous learning and staying updated with the latest advancements
                in AI and data science. When I'm not analyzing data, you'll find me contributing
                to open-source projects and sharing knowledge with the community.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Python & R", value: 95 },
                { label: "Machine Learning", value: 90 },
                { label: "Data Visualization", value: 88 },
                { label: "Deep Learning", value: 85 },
                { label: "Cloud Platforms", value: 65 }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{skill.label}</span>
                    <span className="text-gray-600">{skill.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
