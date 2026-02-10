import { motion } from "motion/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Download, ExternalLink } from "lucide-react";
import profileImage from "../images/yo.jpg";
interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
}

export function ProfileModal({ open, onClose }: ProfileModalProps) {
  const stats = [
    { label: "Years Experience", value: "1" },
    { label: "Projects Completed", value: "4" },
    { label: "Technologies", value: "20+" },
    { label: "Certifications", value: "5" }
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "yordanosfentahundata@gmail.com", href: "mailto:yordanos@example.com" },
    { icon: Phone, label: "Phone", value: "+251928291375", href: "tel:+251928291375" },
    { icon: MapPin, label: "Location", value: "Bahir dar, Ethiopia", href: "https://www.google.com/maps/place/Bahir+Dar/@11.5818516,37.2980201,12z/data=!3m1!4b1!4m6!3m5!1s0x1644d23307d78069:0xab0b134f632dff8!8m2!3d11.5876434!4d37.3878324!16zL20vMDVrbnQ1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Yordanos-coder-stack", username: "Yordanos-coder-stack" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/yordanos-fentahun-987466361/", username: "Yordanos-fentahun" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com", username: "@yordanos_data" }
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Profile</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header with Image */}
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={profileImage}
                alt="Yordanos Fentahun"
                className="w-32 h-32 rounded-full object-cover border-4 border-purple-600 shadow-xl"
              />
            </motion.div>

            <div className="flex-1 text-center sm:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-bold text-gray-900 mb-2"
              >
                Yordanos Fentahun
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-3">
                  Data Scientist & ML Engineer
                </Badge>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 leading-relaxed"
              >
                Passionate about transforming complex data into actionable insights through
                advanced analytics, machine learning, and compelling visualizations.
              </motion.p>
            </div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-3">Contact Information</h3>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500">{info.label}</div>
                    <div className="text-sm font-medium text-gray-900 group-hover:text-purple-600">
                      {info.value}
                    </div>
                  </div>
                  <ExternalLink className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-3">Connect With Me</h3>
            <div className="space-y-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-purple-100 flex items-center justify-center flex-shrink-0 transition-colors">
                    <social.icon className="text-gray-600 group-hover:text-purple-600 transition-colors" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900 group-hover:text-purple-600">
                      {social.label}
                    </div>
                    <div className="text-xs text-gray-500">{social.username}</div>
                  </div>
                  <ExternalLink className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-3"
          >
            <Button
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={onClose}
            >
              <Download className="mr-2" size={18} />
              Download Resume
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-50"
              onClick={() => {
                onClose();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="mr-2" size={18} />
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
