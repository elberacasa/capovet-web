import { motion } from 'framer-motion';
import { Building2, Users, Clock, Shield } from 'lucide-react';

const Alliances = () => {
  const alliances = [
    {
      icon: Building2,
      title: "Clínicas veterinarias especializadas",
      description: "Red de clínicas de confianza para casos complejos",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-[#34497F]/5 to-[#6D97CF]/10"
    },
    {
      icon: Clock,
      title: "Referencias rápidas",
      description: "Coordinación inmediata cuando se requiere hospitalización",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-[#A8D8A8]/10 to-[#C8E8C8]/15"
    },
    {
      icon: Shield,
      title: "Seguimiento continuo",
      description: "Comunicación permanente entre servicios",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-[#8BB8E8]/8 to-[#A8D8F0]/12"
    },
    {
      icon: Users,
      title: "Equipo multidisciplinario",
      description: "Especialistas en diferentes áreas veterinarias",
      color: "from-teal-500 to-cyan-600",
      bgColor: "from-[#4F7BB8]/8 to-[#6D97CF]/12"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#34497F]/20 via-[#6D97CF]/25 to-[#8BB8E8]/20 relative overflow-hidden">
      {/* Enhanced Brand Color Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 right-12 w-32 h-32 bg-gradient-to-br from-[#34497F]/12 to-[#4F9CF9]/18 rounded-full blur-3xl"></div>
        <div className="absolute bottom-12 left-12 w-40 h-40 bg-gradient-to-br from-[#6D97CF]/10 to-[#8BB8E8]/15 rounded-full blur-3xl"></div>
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
            <Building2 className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-section-title mb-4">
            Alianzas estratégicas
          </h2>
          <p className="text-lg text-gray-600 font-dm-sans max-w-2xl mx-auto">
            Cuando tu mascota necesita atención especializada, contamos con una red de clínicas veterinarias de confianza
          </p>
          <div className="w-24 h-1 bg-brand-gradient mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid-cols-responsive grid-responsive"
        >
          {alliances.map((alliance, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`bg-gradient-to-br from-white via-[#34497F]/5 to-[#6D97CF]/8 rounded-3xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-[#34497F]/20 group overflow-hidden relative`}
            >
              {/* Icon with background */}
              <div
                className={`relative z-10 w-14 h-14 bg-gradient-to-br ${alliance.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-300`}
              >
                <alliance.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg lg:text-xl font-anton text-[#34497F] mb-3 transition-colors duration-300 relative z-10">
                {alliance.title}
              </h3>

              <p className="text-gray-600 text-sm font-dm-sans leading-relaxed relative z-10">
                {alliance.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Alliances;
