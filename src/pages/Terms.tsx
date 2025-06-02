
import { motion } from "framer-motion";
import { ArrowLeft, Scale, AlertTriangle, FileCheck, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Terms = () => {
  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using our services, you accept and agree to be bound by these Terms of Use",
        "These terms apply to all visitors, users, and others who access or use our services",
        "If you disagree with any part of these terms, you may not access our services",
        "We reserve the right to update these terms at any time without prior notice",
        "Your continued use of our services constitutes acceptance of revised terms"
      ]
    },
    {
      icon: FileCheck,
      title: "Use License",
      content: [
        "Permission is granted to temporarily access our services for personal, non-commercial use",
        "This license does not include the right to download or copy materials without express written consent",
        "Commercial use or resale of our content or services is strictly prohibited",
        "Modification or use of materials for any other purpose is a violation of our copyright",
        "This license shall automatically terminate if you violate any restrictions"
      ]
    },
    {
      icon: Scale,
      title: "Purchase Terms",
      content: [
        "All timepieces are sold subject to availability and authentication verification",
        "Prices are subject to change without notice until purchase completion",
        "Full payment is required before transfer of ownership",
        "All sales are final unless otherwise stated in writing",
        "Authenticity is guaranteed with certification provided for all timepieces"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Disclaimers",
      content: [
        "Services are provided 'as is' without warranties of any kind, express or implied",
        "We do not warrant that services will be uninterrupted or error-free",
        "Information on our website may contain technical inaccuracies or typographical errors",
        "We reserve the right to make changes to services and prices at any time",
        "Your use of our services is at your sole risk"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container px-4 max-w-4xl">
          <Link to="/" className="inline-flex items-center text-[#D4AF37] hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#D4AF37]">Terms of Use</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#D4AF37]">Welcome to Chronos Elite</h2>
            <p className="text-muted-foreground mb-4">
              These Terms of Use ("Terms") govern your relationship with Chronos Elite and our luxury timepiece services. By accessing our website and services, you agree to comply with and be bound by these terms.
            </p>
            <p className="text-muted-foreground">
              Please read these Terms carefully before using our services. If you have any questions about these Terms, please contact us before proceeding.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <section.icon className="w-8 h-8 text-[#D4AF37] mr-3" />
                  <h2 className="text-2xl font-bold text-[#D4AF37]">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start text-muted-foreground">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass rounded-xl p-8 mt-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#D4AF37]">Additional Important Terms</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3 text-[#D4AF37]">Limitation of Liability</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  In no event shall Chronos Elite be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-[#D4AF37]">Governing Law</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  These Terms shall be interpreted and governed by the laws of Switzerland, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Geneva.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-[#D4AF37]">Intellectual Property</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  All content on our website, including text, graphics, logos, and images, is the property of Chronos Elite and protected by international copyright laws.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-[#D4AF37]">Severability</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  If any provision of these Terms is held to be unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="glass rounded-xl p-8 mt-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#D4AF37]">Questions?</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms of Use, please don't hesitate to contact us:
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> legal@chronoselite.com</p>
              <p><strong>Phone:</strong> +41 22 123 4567</p>
              <p><strong>Address:</strong> Rue du Rhône 123, 1204 Geneva, Switzerland</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
