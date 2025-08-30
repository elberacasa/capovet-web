import { motion } from 'framer-motion';
import { Award, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-brand-light relative overflow-hidden">
      {/* Brand Color Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-24 h-24 bg-brand-primary/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-brand-secondary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-brand-accent/12 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="container-custom">
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
            <Heart className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-section-title mb-4">
            Quién soy
          </h2>
          <p className="text-lg text-gray-600 font-dm-sans max-w-2xl mx-auto">
            Conoce al equipo detrás de CAPOVET
          </p>
          <div className="w-24 h-1 bg-brand-gradient mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Responsive Layout - Mobile Stack, Desktop Side-by-Side */}
        <div className="space-y-8 lg:space-y-12">
          {/* Mobile: Vertical Stack | Desktop: Side-by-Side */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">

            {/* Santiago Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-1 lg:col-span-1"
            >
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl">
                <img
                  src="/brand/santiago.jpg"
                  alt="Dr. Santiago Capobianco - Médico Veterinario"
                  className="w-full h-80 sm:h-96 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#34497F]/60 via-transparent to-transparent"></div>

                {/* Clean Name overlay - Removed specialty badges */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  {/* Decorative background element behind the name card */}
                  <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 bg-[#34497F]/20 rounded-full"></div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg relative z-10">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-anton text-[#34497F] mb-1">
                      Dr. Santiago Capobianco
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 font-medium">
                      Médico Veterinario Especialista
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 bg-[#6D97CF]/20 rounded-full"></div>
            </motion.div>

            {/* Content Section - Desktop: Right side, Mobile: Below image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="order-2 lg:col-span-1 space-y-6"
            >
              {/* About Content */}
              <div className="spacing-element">
                <h3 className="text-2xl lg:text-card-title mb-4">
                  Soy <span className="brand-secondary">Santiago Capobianco</span>
                </h3>
                <p className="text-base lg:text-lg text-gray-700 font-dm-sans leading-relaxed">
                  Médico veterinario con interés en <strong className="brand-primary">medicina preventiva</strong>,
                  <strong className="brand-primary"> medicina felina</strong> y
                  <strong className="brand-primary"> terapia neural</strong> aplicada en pequeños animales.
                </p>
              </div>

              {/* Compact Credentials - Mobile: Below image, Desktop: In content flow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100"
              >
                <h4 className="text-base sm:text-lg font-anton brand-primary mb-4 text-center">Credenciales profesionales</h4>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center p-2 sm:p-3 bg-[#34497F]/5 rounded-lg border border-[#34497F]/10">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#34497F] mx-auto mb-1 sm:mb-2" />
                    <div className="text-xs font-semibold text-[#34497F]">CMVM</div>
                    <div className="text-sm sm:text-base font-anton font-bold text-[#34497F]">533</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-[#6D97CF]/5 rounded-lg border border-[#6D97CF]/10">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#6D97CF] mx-auto mb-1 sm:mb-2" />
                    <div className="text-xs font-semibold text-[#6D97CF]">MPPS</div>
                    <div className="text-sm sm:text-base font-anton font-bold text-[#6D97CF]">13116</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-[#34497F]/5 rounded-lg border border-[#34497F]/10">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#34497F] mx-auto mb-1 sm:mb-2" />
                    <div className="text-xs font-semibold text-[#34497F]">INSAI</div>
                    <div className="text-xs sm:text-sm font-anton font-bold text-[#34497F] leading-tight">952923371967</div>
                  </div>
                </div>
              </motion.div>

              {/* Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="flex items-start space-x-4 lg:space-x-6">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl sm:rounded-2xl p-3 flex-shrink-0">
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg lg:text-xl font-anton brand-primary mb-2 sm:mb-3">Mi filosofía</h4>
                    <p className="text-gray-700 font-dm-sans italic leading-relaxed text-sm lg:text-base">
                      "<strong>Prevenir es cuidar</strong>". Cada consulta es una oportunidad para acompañar al tutor
                      en la construcción de una vida más sana y plena para su mascota.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
