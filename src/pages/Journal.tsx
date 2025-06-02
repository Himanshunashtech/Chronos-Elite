
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Journal = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "The Art of Horological Investment: Why Patek Philippe Leads the Market",
      excerpt: "Exploring the intricate relationship between craftsmanship, heritage, and investment potential in luxury timepieces.",
      image: "/lovable-uploads/patek-nautilus.jpg",
      author: "Marcus Thornfield",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Investment"
    },
    {
      id: 2,
      title: "Behind the Scenes: Master Watchmakers of Geneva",
      excerpt: "An exclusive look into the workshops where horological legends are born, featuring interviews with master craftsmen.",
      image: "/lovable-uploads/rolex-submariner.jpg",
      author: "Isabella Clarke",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Craftsmanship"
    },
    {
      id: 3,
      title: "Collecting Vintage: The Romance of Pre-Owned Luxury",
      excerpt: "Understanding the allure and considerations when acquiring vintage timepieces from prestigious houses.",
      image: "/lovable-uploads/omega-speedmaster.jpg",
      author: "Alexander Pemberton",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Collecting"
    }
  ];

  const editorialSections = [
    {
      title: "Market Insights",
      description: "Expert analysis on luxury watch market trends and investment opportunities",
      articles: 12
    },
    {
      title: "Heritage Stories",
      description: "Exploring the rich history and cultural significance of iconic timepieces",
      articles: 8
    },
    {
      title: "Collector Profiles",
      description: "Intimate conversations with distinguished watch collectors worldwide",
      articles: 6
    },
    {
      title: "Restoration Chronicles",
      description: "The meticulous process of bringing vintage timepieces back to life",
      articles: 4
    }
  ];

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Chronos Journal</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Curated editorial excellence exploring the world of haute horlogerie, 
              investment insights, and the stories behind exceptional timepieces.
            </p>
          </motion.div>

          {/* Featured Articles */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-8">Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#D4AF37] text-black px-3 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <Button variant="link" className="text-[#D4AF37] p-0 h-auto font-semibold">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Editorial Sections */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-8">Editorial Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {editorialSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-8 group hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-[#D4AF37] mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {section.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      {section.articles} articles
                    </span>
                    <Button variant="link" className="text-[#D4AF37] p-0 h-auto">
                      Explore Collection
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Newsletter Subscription */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="glass rounded-xl p-12">
              <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
                Subscribe to Chronos Insights
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Receive exclusive editorial content, market analysis, and early access to 
                rare timepiece acquisitions directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400"
                />
                <Button className="bg-[#D4AF37] text-black px-8">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                Exclusive insights for discerning collectors. Unsubscribe anytime.
              </p>
            </div>
          </motion.section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Journal;
