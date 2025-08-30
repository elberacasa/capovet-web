import { motion } from 'framer-motion';
import { Camera, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Gallery = () => {
  const [showAllImages, setShowAllImages] = useState(false);

  // 🎯 FUTURE-PROOF GALLERY SYSTEM
  // Automatically includes new images as you add them (13.jpeg, 14.jpeg, etc.)
  // Supports up to 36 images (1.jpeg through 36.jpeg) - increase maxImages if needed
  // Missing images are automatically hidden for a clean gallery
  // No code changes needed when adding new patient photos!
  const maxImages = 36;
  const galleryImages = Array.from({ length: maxImages }, (_, i) => ({
    id: i + 1,
    src: `/brand/gallery/${i + 1}.jpeg`,
    alt: `Historia de éxito ${i + 1} - Mascota recuperada en CAPOVET`,
    exists: true // Will be set to false by error handler for missing images
  }));

  // Show first 6 images on all screen sizes, or all when expanded
  // Missing images are automatically hidden, so only existing images are shown
  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 6);

  return (
    <section id="gallery" className="section bg-gradient-to-br from-[#34497F]/20 via-[#6D97CF]/25 to-[#8BB8E8]/20 relative overflow-hidden">
      {/* Brand Color Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-16 w-20 h-20 bg-[#34497F]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-16 left-16 w-28 h-28 bg-[#6D97CF]/4 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center spacing-section"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-brand-gradient rounded-2xl mb-6 shadow-lg"
          >
            <Camera className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-section-title mb-4">
            Historias de Éxito
          </h2>
          <p className="text-lg text-gray-600 font-dm-sans max-w-2xl mx-auto">
            Mascotas felices y recuperadas que confirman nuestro compromiso con su bienestar
          </p>
          <div className="w-24 h-1 bg-brand-gradient mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6"
        >
          {displayedImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white via-[#34497F]/3 to-[#6D97CF]/5 border border-[#34497F]/20 backdrop-blur-sm"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    // Hide missing images completely for cleaner gallery
                    const target = e.target as HTMLImageElement;
                    const container = target.closest('.group') as HTMLElement;
                    if (container) {
                      container.style.display = 'none';
                    }
                  }}
                />
              </div>

              {/* Subtle border animation */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#6D97CF]/30 rounded-xl sm:rounded-2xl transition-colors duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button - All Screen Sizes */}
        {!showAllImages && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllImages(true)}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#34497F] text-white rounded-xl font-semibold hover:bg-[#4F9CF9] transition-all duration-300 shadow-lg"
            >
              <span>Ver más historias</span>
              <ChevronDown className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}

        {/* View Less Button - All Screen Sizes */}
        {showAllImages && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllImages(false)}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#34497F] text-white rounded-xl font-semibold hover:bg-[#4F9CF9] transition-all duration-300 shadow-lg"
            >
              <span>Ver menos</span>
              <ChevronUp className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-gradient-to-r from-[#34497F] to-[#6D97CF] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-anton mb-3 sm:mb-4">
              ¿Listo para la historia de éxito de tu mascota?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg opacity-90 font-dm-sans mb-6">
              Confía en nosotros para el cuidado veterinario que tu mascota merece
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/584128299663"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold bg-white text-[#34497F] hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              <span className="text-sm sm:text-base">Agendar Consulta</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
