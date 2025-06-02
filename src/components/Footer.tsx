
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium text-lg text-[#D4AF37]">Chronos Elite</h3>
              <p className="text-sm text-muted-foreground">
                Curating the world's finest luxury timepieces for discerning collectors since 1999.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Collections</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/collections/rolex" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
                    Rolex
                  </Link>
                </li>
                <li>
                  <Link to="/collections/patek-philippe" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
                    Patek Philippe
                  </Link>
                </li>
                <li>
                  <Link to="/collections/audemars-piguet" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
                    Audemars Piguet
                  </Link>
                </li>
                <li>
                  <Link to="/collections" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
                    View All Brands
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/services" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
                    Authentication
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
                    Restoration
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
                    Investment Advisory
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
                    Consignment
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Chronos Elite. All rights reserved. | Geneva • London • New York
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
