import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use scrollIntoView with block: 'start' for precise alignment
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100/50"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Left Side - Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <motion.div
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl overflow-hidden shadow-lg border-2 border-white/20"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/brand/logo.jpg"
                alt="CAPOVET Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  e.currentTarget.style.display = 'none';
                  const fallbackDiv = document.createElement('div');
                  fallbackDiv.className = 'w-full h-full bg-brand-gradient flex items-center justify-center';
                  fallbackDiv.innerHTML = '<span class="text-white font-anton text-sm sm:text-base md:text-lg font-bold">C</span>';
                  e.currentTarget.parentElement!.appendChild(fallbackDiv);
                }}
              />
            </motion.div>
            <motion.span
              className="font-anton text-lg sm:text-xl md:text-2xl lg:text-3xl brand-primary font-bold"
              whileHover={{ scale: 1.02 }}
            >
              CAPOVET
            </motion.span>
          </motion.div>

          {/* Center - Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:brand-primary transition-all duration-300 font-medium relative group">
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gradient transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:brand-primary transition-all duration-300 font-medium relative group">
              Quién soy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gradient transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:brand-primary transition-all duration-300 font-medium relative group">
              Servicios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gradient transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:brand-primary transition-all duration-300 font-medium relative group">
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gradient transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Right Side - Small Social Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/584128299663"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
              title="WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:scapobvet@gmail.com?subject=Consulta%20Veterinaria%20CAPOVET"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com/capovet_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Clean Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-xl">
            <div className="px-6 py-6 space-y-6">
              {/* Navigation Section */}
              <div className="space-y-2">
                <h3 className="text-sm font-anton text-[#34497F] uppercase tracking-wide mb-4 opacity-80">Navegación</h3>
                <div className="space-y-1">
                  <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-gray-700 hover:text-[#34497F] hover:bg-[#34497F]/5 transition-all duration-200 py-3 px-4 rounded-lg font-medium">
                    Inicio
                  </button>
                  <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-[#34497F] hover:bg-[#34497F]/5 transition-all duration-200 py-3 px-4 rounded-lg font-medium">
                    Quién soy
                  </button>
                  <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-[#34497F] hover:bg-[#34497F]/5 transition-all duration-200 py-3 px-4 rounded-lg font-medium">
                    Servicios
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-[#34497F] hover:bg-[#34497F]/5 transition-all duration-200 py-3 px-4 rounded-lg font-medium">
                    Contacto
                  </button>
                </div>
              </div>

              {/* Contact Section */}
              <div className="pt-4 border-t border-gray-200/50 space-y-3">
                <h3 className="text-sm font-anton text-[#34497F] uppercase tracking-wide mb-4 opacity-80">Contacto</h3>
                <a
                  href="https://wa.me/584128299663"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
                >
                  <Phone className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="mailto:scapobvet@gmail.com?subject=Consulta%20Veterinaria%20CAPOVET"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>

                <a
                  href="https://instagram.com/capovet_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
