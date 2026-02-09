import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, GraduationCap, Award, Link } from "lucide-react";

const experiences = [
  {
    type: "Internship",
    title: " Data Scientist",
    organization: "Amhara Region Agricultural Research Institute(ARARI) .",
    period: "June/2025 - Augest/2025",
    location: "Bahir Dar, Ethiopia",
    description: "Conducted research on crop yield prediction using machine learning models, analyzing large datasets of agricultural data to identify key factors influencing productivity.",
    achievements: [
      "Developed a machine learning model that improved crop yield prediction accuracy by 15%",
      "Published research findings in a peer-reviewed journal",
      "Collaborated with agronomists to translate data insights into actionable recommendations for farmers"
    ],
    skills: ["Python", "sklearn", "Pandas", "Matplotlib", "Jupyter Notebook",]
  },/*
  {
    type: "work",
    title: "Data Scientist",
    organization: "Analytics Solutions Ltd.",
    period: "2020 - 2022",
    location: "San Francisco, CA",
    description: "Developed end-to-end machine learning solutions for various business problems, from data collection to model deployment.",
    achievements: [
      "Built recommendation system serving 2M+ users daily",
      "Automated reporting workflows saving 20 hours per week",
      "Implemented A/B testing framework for product features"
    ],
    skills: ["Python", "Scikit-learn", "PostgreSQL", "Docker"]
  },
  {
    type: "work",
    title: "Junior Data Analyst",
    organization: "Data Insights Corp.",
    period: "2019 - 2020",
    location: "New York, NY",
    description: "Performed statistical analysis and created dashboards to visualize key business metrics and trends.",
    achievements: [
      "Created 15+ interactive dashboards in Tableau",
      "Conducted statistical analyses supporting strategic decisions",
      "Collaborated with cross-functional teams on data projects"
    ],
    skills: ["SQL", "Tableau", "R", "Excel"]
  }*/
];

const education = [
  {
    degree: "Bachelor of Science in Data Science",
    institution: "Bahir Dar University",
    period: "2022 - present",
    description: "Focused on machine learning, data analysis, and big data technologies. Completed coursework in statistical modeling, data mining, and deep learning.",
    gpa: "expected",
    highlights: ["BNMIL community member"]
    
  },/*
  {
    degree: "B.S. in Computer Science",
    institution: "UC Berkeley",
    period: "2013 - 2017",
    description: "Concentration in artificial intelligence and data structures.",
    gpa: "3.8/4.0",
    highlights: ["Summa Cum Laude", "ACM Member", "Hackathon Winner"]
  }*/
];

const certifications = [
  "Data Analysis Fundamentals(2024)",
  "Artificial Intelligence Fundamentals(2025)",
  "Programming Fundamentals(2025)",
  "Android Development Fundamentals(2025)",
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of continuous learning and professional growth
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-purple-600">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-purple-600 font-medium mb-1">
                          {exp.organization}
                        </p>
                        <p className="text-sm text-gray-500">
                          {exp.location}
                        </p>
                      </div>
                      <Badge className="bg-purple-100 text-purple-700 whitespace-nowrap mt-2 md:mt-0">
                        {exp.period}
                      </Badge>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                      <h4 className="font-bold text-gray-900 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 font-medium mb-1">
                        {edu.institution}
                      </p>
                      <Badge variant="outline" className="mb-3 text-xs">
                        {edu.period}
                      </Badge>
                      <p className="text-sm text-gray-600 mb-3">
                        {edu.description}
                      </p>
                      <div className="mb-3">
                        <span className="text-sm font-semibold text-gray-700">GPA: </span>
                        <span className="text-sm text-purple-600 font-medium">{edu.gpa}</span>
                      </div>
                      <div className="space-y-1">
                        {edu.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="text-blue-600">✓</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{cert}</p>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
