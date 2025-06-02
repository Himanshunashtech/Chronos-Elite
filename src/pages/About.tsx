
import { motion } from "framer-motion";
import { Award, Users, Shield, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { number: "25+", label: "Years of Experience" },
    { number: "10,000+", label: "Satisfied Collectors" },
    { number: "50+", label: "Master Watchmakers" },
    { number: "100%", label: "Authentication Rate" }
  ];

  const team = [
    {
      name: "Alexander Rothschild",
      role: "Founder & Chief Horologist",
      bio: "Former master watchmaker at Patek Philippe with 30 years of experience in haute horlogerie."
    },
    {
      name: "Isabella Chen",
      role: "Authentication Director",
      bio: "Certified by the Swiss Watch Industry Federation with expertise in vintage timepiece authentication."
    },
    {
      name: "Marcus Zimmermann",
      role: "Acquisition Specialist",
      bio: "International network spanning Geneva, London, and Hong Kong for sourcing rare timepieces."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#D4AF37]">About Chronos Elite</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              For over two decades, we have been the trusted guardian of horological excellence, 
              connecting passionate collectors with the world's most extraordinary timepieces.
            </p>
          </motion.div>

          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-8 md:p-12 mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#D4AF37]">Our Story</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-muted-foreground mb-4">
                  Founded in 1999 by master horologist Alexander Rothschild, Chronos Elite began 
                  as a boutique atelier in Geneva's prestigious watchmaking district. What started 
                  as a passion for mechanical precision has evolved into one of the world's most 
                  respected luxury watch dealers.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our journey has taken us from the workshops of Switzerland to the auction houses 
                  of London, from private collectors in Hong Kong to connoisseurs in New York. 
                  Every step has been guided by an unwavering commitment to authenticity, quality, 
                  and the preservation of horological heritage.
                </p>
                <p className="text-muted-foreground">
                  Today, we stand as custodians of time itself, ensuring that each timepiece in 
                  our collection continues its journey through generations of appreciative owners.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#D4AF37]/20 to-black/40 rounded-lg p-8 flex items-center justify-center">
                <Clock className="w-24 h-24 text-[#D4AF37]" />
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-[#D4AF37]">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass glass-hover rounded-xl p-6 text-center">
                <Shield className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
                <p className="text-muted-foreground text-sm">
                  Rigorous authentication process ensuring every piece is genuine
                </p>
              </div>
              
              <div className="glass glass-hover rounded-xl p-6 text-center">
                <Award className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Uncompromising standards in every aspect of our service
                </p>
              </div>
              
              <div className="glass glass-hover rounded-xl p-6 text-center">
                <Users className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Trust</h3>
                <p className="text-muted-foreground text-sm">
                  Building lasting relationships with collectors worldwide
                </p>
              </div>
              
              <div className="glass glass-hover rounded-xl p-6 text-center">
                <Clock className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Heritage</h3>
                <p className="text-muted-foreground text-sm">
                  Preserving horological history for future generations
                </p>
              </div>
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-[#D4AF37]">Our Expert Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={member.name} className="glass glass-hover rounded-xl p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-[#F4E99B] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-black">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-[#D4AF37] text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
