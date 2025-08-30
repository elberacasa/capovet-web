import { motion } from 'framer-motion';
import { Heart, Shield, Users, Award } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Santiago Capobianco",
      role: "Médico Veterinario",
      description: "Médico veterinario con interés en medicina preventiva, medicina felina y terapia neural aplicada en pequeños animales. Actualmente cursando postgrado en medicina felina.",
      specialties: ["🐱 Medicina Felina", "🛡️ Preventiva", "🧠 Neural"],
      quote: "Prevenir es cuidar",
      image: "/brand/santiago.jpg",
      gradient: "from-[#34497F] to-[#6D97CF]",
      icon: Award
    },
    {
      name: "Vanessa Mendez",
      role: "Auxiliar Veterinaria (ATV)",
      description: "Manejo cat friendly.",
      specialties: ["💝 Cuidado Especializado", "📚 Estudiante MV"],
      quote: "Cada mascota merece atención especial",
      image: "/brand/vanessa.jpg",
      gradient: "from-[#6D97CF] via-[#4F9CF9] to-[#34497F]",
      icon: Heart
    }
  ];

  const teamValues = [
    {
      icon: Heart,
      title: "Cuidado Especializado",
      description: "Atención dedicada para cada mascota",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Shield,
      title: "Profesionalismo",
      description: "Estándares veterinarios de calidad",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboración para el mejor cuidado",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className="py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-[#34497F]/20 via-[#6D97CF]/25 to-[#8BB8E8]/20 relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-12 w-28 h-28 bg-gradient-to-br from-[#34497F]/12 to-[#4F9CF9]/18 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-12 w-36 h-36 bg-gradient-to-br from-[#6D97CF]/10 to-[#8BB8E8]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-brand-gradient rounded-2xl mb-6 shadow-lg"
          >
            <Users className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-anton mb-4 text-[#34497F]">
            Mi equipo
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-dm-sans max-w-2xl mx-auto">
            Un equipo comprometido con el bienestar de tu mascota
          </p>
          <div className="w-24 h-1 bg-brand-gradient mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Full-width container for horizontal expansion */}
        <div className="w-full">
          {/* Horizontally Expanded Team Philosophy for Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 lg:mb-16"
          >
            {/* Wide container that expands to sides */}
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-[#34497F]/8 via-[#6D97CF]/5 to-[#34497F]/8 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16 border border-[#34497F]/10 shadow-xl mx-4 sm:mx-6 lg:mx-8 xl:mx-12"
            >
              <div className="max-w-screen-2xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-anton text-[#34497F] mb-4 lg:mb-6 text-center">
                  Comprometidos con tu mascota
                </h3>

                <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-dm-sans leading-relaxed mb-8 lg:mb-12 max-w-3xl mx-auto text-center">
                  Cada miembro de nuestro equipo aporta experiencia única y pasión por el cuidado animal.
                  Juntos creamos un ambiente de confianza, profesionalismo y atención personalizada.
                </p>

                {/* Wide Team Values Grid - Horizontal emphasis */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 px-2 sm:px-4">
                  {teamValues.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-gradient-to-br from-white via-[#34497F]/3 to-[#6D97CF]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#34497F]/20 group backdrop-blur-sm"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#34497F] to-[#6D97CF] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <value.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                        </div>
                        <h4 className="text-sm sm:text-base lg:text-lg font-anton text-[#34497F] mb-2 group-hover:text-[#6D97CF] transition-colors duration-300">
                          {value.title}
                        </h4>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-dm-sans leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

        {/* Meet the Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-anton text-[#34497F] mb-8">
            Conoce a nuestro equipo
          </h3>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-white via-[#34497F]/3 to-[#6D97CF]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#34497F]/20 group backdrop-blur-sm"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    className="relative mb-6"
                  >
                    <div className="relative inline-block">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-gray-100 group-hover:border-[#34497F]/30 transition-colors duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <div className={`w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                          <member.icon className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white" />
                        </div>
                      )}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#34497F] to-[#6D97CF] rounded-full flex items-center justify-center shadow-lg">
                        <member.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    </div>
                  </motion.div>

                  <h4 className="text-lg sm:text-xl lg:text-2xl font-anton text-[#34497F] mb-2">{member.name}</h4>
                  <p className="text-gray-600 font-semibold mb-2 text-sm sm:text-base">{member.role}</p>
                  
                  {member.description && (
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed max-w-sm mx-auto">
                      {member.description}
                    </p>
                  )}

                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.specialties.map((specialty, i) => (
                      <span key={i} className="bg-gradient-to-r from-[#34497F]/10 to-[#6D97CF]/10 text-[#34497F] text-xs px-2 sm:px-3 py-1 rounded-full font-medium border border-[#34497F]/20">
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 italic font-medium">
                    "{member.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#34497F] to-[#6D97CF] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-anton mb-3 sm:mb-4">
              ¿Listo para conocer a nuestro equipo?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg opacity-90 font-dm-sans mb-6">
              Agenda tu consulta y experimenta el cuidado profesional que tu mascota merece
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/584128299663"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-white text-[#34497F] px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Agendar Consulta</span>
            </motion.a>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
