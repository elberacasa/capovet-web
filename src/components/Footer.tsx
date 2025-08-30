import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#34497F] to-[#6D97CF] text-white relative">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#34497F]/90 to-[#6D97CF]/90"></div>

      <div className="container-custom py-12 lg:py-16 relative z-10">
        {/* Clean, Centered CAPOVET Section */}
        <div className="max-w-2xl mx-auto">
          {/* Centered Brand Section - Both Mobile & Desktop */}
          <div className="text-center">
            <div className="flex flex-col items-center space-y-4 mb-8">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden shadow-xl border-2 border-white/30">
                <img
                  src="/brand/logo.jpg"
                  alt="CAPOVET Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = 'w-full h-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center';
                    fallbackDiv.innerHTML = '<span class="text-[#34497F] font-anton text-2xl font-bold">C</span>';
                    e.currentTarget.parentElement!.appendChild(fallbackDiv);
                  }}
                />
              </div>
              <div className="text-center">
                <h2 className="font-anton text-3xl lg:text-4xl font-bold text-white mb-2">CAPOVET</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-[#6D97CF] to-[#8BB8E8] rounded-full mx-auto"></div>
              </div>
            </div>

            <p className="text-white/90 text-base lg:text-lg font-dm-sans leading-relaxed mb-8 max-w-lg mx-auto">
              Atención veterinaria especializada a domicilio en Caracas.
              Cuidamos de tu mascota con profesionalismo y cariño.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white/15 px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                🏠 A domicilio
              </span>
              <span className="bg-white/15 px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                🐱 Especialistas
              </span>
              <span className="bg-white/15 px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                24/7
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section with Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/20 mt-12 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-white/80 text-sm font-dm-sans">
                © {currentYear} CAPOVET — Todos los derechos reservados
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-2">
              {/* Veneweb Attribution - Made More Prominent */}
              <div className="text-white text-sm font-medium">
                made with{' '}
                <Heart className="w-4 h-4 inline text-red-400 animate-pulse" />{' '}
                by{' '}
                <a
                  href="https://veneweb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors duration-300 group"
                >
                  <span className="font-bold text-lg group-hover:text-cyan-300 transition-colors bg-white/10 px-2 py-1 rounded-lg">
                    veneweb
                  </span>
                </a>
              </div>

              <div className="flex items-center space-x-2 text-white text-sm">
                <span>🐾 Caracas</span>
                <span>•</span>
                <span>🏥 Veterinaria</span>
                <span>•</span>
                <span>❤️ Mascotas</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
