import { motion } from "motion/react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const skillsData = {
  languages: [
    { name: "Python", level: 95, icon: "🐍" },
    { name: "R", level: 88, icon: "📊" },
    { name: "SQL", level: 92, icon: "🗄️" },
    { name: "JavaScript", level: 75, icon: "⚡" },
    { name: "HTML&CSS", level: 88, icon: "🌐" },
    
  ],
  frameworks: [
    { name: "TensorFlow", level: 90, icon: "🧠" },
    { name: "PyTorch", level: 85, icon: "🔥" },
    { name: "Scikit-learn", level: 95, icon: "🎯" },
    { name: "Pandas", level: 98, icon: "🐼" },
    { name: "NumPy", level: 95, icon: "🔢" },
    { name: "Keras", level: 88, icon: "⚙️" },
    { name: "XGBoost", level: 90, icon: "🚀" },
    //{ name: "Spark", level: 82, icon: "✨" }
  ],
  tools: [
    { name: "Jupyter", level: 98, icon: "📓" },
    { name: "Git", level: 92, icon: "🌿" },
    {name: "VS Code", level: 98, icon: "🖥️" },
    {name:"excel", level: 85, icon: "📊"},
    {name: "Google Colab", level: 95, icon: "☁️" },
    {name:"cursor", level: 98, icon: "🖱️"},
    //{ name: "Docker", level: 85, icon: "🐳" },
    //{ name: "AWS", level: 80, icon: "☁️" },
    //{ name: "Tableau", level: 88, icon: "📈" },
    { name: "Power BI", level: 70, icon: "💼" },
    //{ name: "MLflow", level: 78, icon: "🔄" },
    //{ name: "Airflow", level: 75, icon: "🌊" }
  ],
  specializations: [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Time Series Analysis",
   // "A/B Testing",
    "Feature Engineering",
    "Model Deployment",
    "Data Pipelines",
    "Statistical Modeling",
    "Big Data Processing",
    "Neural Networks"
  ]
};

export function Skills() {
  const [activeTab, setActiveTab] = useState("languages");

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for turning data into actionable intelligence
          </p>
        </motion.div>

        <Tabs defaultValue="languages" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="specializations">Expertise</TabsTrigger>
          </TabsList>

          <TabsContent value="languages" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.languages.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-purple-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{skill.icon}</span>
                        <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                      </div>
                      <span className="text-purple-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                      />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="frameworks" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillsData.frameworks.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-purple-300">
                    <div className="text-center mb-4">
                      <span className="text-4xl">{skill.icon}</span>
                    </div>
                    <h3 className="text-center font-bold text-gray-900 mb-3">{skill.name}</h3>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.08 + 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-600"
                      />
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-2">{skill.level}% Proficiency</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillsData.tools.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-purple-300">
                    <div className="text-center mb-4">
                      <span className="text-4xl">{skill.icon}</span>
                    </div>
                    <h3 className="text-center font-bold text-gray-900 mb-3">{skill.name}</h3>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.08 + 0.2 }}
                        className="h-full bg-gradient-to-r from-green-600 to-emerald-600"
                      />
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-2">{skill.level}% Proficiency</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="specializations" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 md:p-12">
                <div className="flex flex-wrap gap-3 justify-center">
                  {skillsData.specializations.map((spec, index) => (
                    <motion.div
                      key={spec}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-6 py-3 text-base bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-purple-900 cursor-pointer"
                      >
                        {spec}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
