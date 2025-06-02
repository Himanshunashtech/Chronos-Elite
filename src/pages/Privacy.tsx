
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Eye, Lock, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Privacy = () => {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Personal identification information (name, email address, phone number, etc.)",
        "Payment and billing information for transactions",
        "Consultation preferences and appointment details",
        "Watch collection interests and investment preferences",
        "Website usage data and analytics information"
      ]
    },
    {
      icon: Shield,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our luxury watch services",
        "To process transactions and manage your account",
        "To schedule consultations and appointments",
        "To send you service updates and marketing communications",
        "To improve our services and customer experience"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "Industry-standard encryption for all data transmission",
        "Secure servers with regular security audits",
        "Limited access to personal information on a need-to-know basis",
        "Regular backup and disaster recovery procedures",
        "Compliance with international data protection standards"
      ]
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: [
        "We do not sell your personal information to third parties",
        "Information may be shared with service providers under strict confidentiality agreements",
        "Legal compliance may require information disclosure when mandated by law",
        "Anonymous, aggregated data may be used for business analytics",
        "Your explicit consent will be obtained for any other data sharing"
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
              <span className="text-[#D4AF37]">Privacy Policy</span>
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
            <h2 className="text-2xl font-bold mb-4 text-[#D4AF37]">Our Commitment to Privacy</h2>
            <p className="text-muted-foreground mb-4">
              At Chronos Elite, we understand that privacy is paramount when dealing with luxury timepieces and high-value transactions. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
            </p>
            <p className="text-muted-foreground">
              We are committed to maintaining the highest standards of data protection and transparency in all our operations. Your trust is essential to our business, and we take every measure to ensure your personal information remains secure and confidential.
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
            <h2 className="text-2xl font-bold mb-4 text-[#D4AF37]">Your Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Access & Correction</h3>
                <p className="text-sm text-muted-foreground">
                  You have the right to access and correct your personal information at any time.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Data Portability</h3>
                <p className="text-sm text-muted-foreground">
                  Request a copy of your data in a commonly used format.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Deletion</h3>
                <p className="text-sm text-muted-foreground">
                  Request deletion of your personal information, subject to legal requirements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Opt-out</h3>
                <p className="text-sm text-muted-foreground">
                  Unsubscribe from marketing communications at any time.
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
            <h2 className="text-2xl font-bold mb-4 text-[#D4AF37]">Contact Us</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> privacy@chronoselite.com</p>
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

export default Privacy;
