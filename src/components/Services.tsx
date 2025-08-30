import { motion } from 'framer-motion';
import {
  Stethoscope,
  Syringe,
  TestTube,
  Scan,
  Hospital,
  Shield,
  Heart,
  Home
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Consultas médicas a domicilio",
      description: "Atención veterinaria completa en la comodidad de tu hogar",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-[#34497F]/5 to-[#6D97CF]/10"
    },
    {
      icon: Syringe,
      title: "Vacunación y desparasitación",
      description: "Programas de vacunación completos y tratamientos antiparasitarios",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-[#A8D8A8]/10 to-[#C8E8C8]/15"
    },
    {
      icon: TestTube,
      title: "Exámenes de laboratorio",
      description: "Análisis clínicos completos para diagnóstico preciso",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-[#8BB8E8]/8 to-[#A8D8F0]/12"
    },
    {
      icon: Scan,
      title: "Ecografía veterinaria",
      description: "Diagnóstico por imágenes no invasivo",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-[#F0A8D0]/10 to-[#F8C8E0]/15"
    },
    {
      icon: Hospital,
      title: "Hospitalización y tratamiento en casa",
      description: "Cuidado intensivo y tratamientos en el hogar",
      color: "from-orange-500 to-red-500",
      bgColor: "from-[#FFB366]/10 to-[#FFCC99]/15"
    },
    {
      icon: Shield,
      title: "Alianzas con clínicas veterinarias",
      description: "Referencias rápidas y seguras cuando se requiere",
      color: "from-teal-500 to-cyan-600",
      bgColor: "from-[#4F7BB8]/8 to-[#6D97CF]/12"
    },
    {
      icon: Heart,
      title: "Medicina preventiva",
      description: "Planes de salud adaptados a cada etapa de vida",
      color: "from-rose-500 to-pink-600",
      bgColor: "from-[#F0A8D0]/10 to-[#F8C8E0]/15"
    },
    {
      icon: Home,
      title: "Terapia neural y enfoque integral",
      description: "Apoyo en manejo del dolor, trastornos crónicos y recuperación funcional",
      color: "from-indigo-500 to-purple-600",
      bgColor: "from-[#8BB8E8]/8 to-[#A8D8F0]/12"
    },
    {
      icon: Hospital,
      title: "Servicio de traslado y acompañamiento en clínica veterinaria",
      description: "Traslado y acompañamiento para estudios complementarios en clínicas especializadas",
      color: "from-amber-500 to-orange-500",
      bgColor: "from-[#FFD700]/10 to-[#FFA500]/15"
    }
  ];

  return (
    <section id="services" className="section bg-gradient-to-br from-[#34497F]/20 via-[#6D97CF]/25 to-[#8BB8E8]/20 relative overflow-hidden">
      {/* Brand Color Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 w-20 h-20 bg-gradient-to-br from-[#34497F]/8 to-[#4F9CF9]/12 rounded-full blur-2xl"></div>
        <div className="absolute bottom-16 right-8 w-24 h-24 bg-gradient-to-br from-[#6D97CF]/6 to-[#8BB8E8]/10 rounded-full blur-3xl"></div>
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
            <Heart className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-section-title mb-4">
            Nuestros servicios
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-dm-sans max-w-2xl mx-auto">
            Atención veterinaria a domicilio, enfocada en el bienestar de tu mascota y la comodidad de tu familia.
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`bg-gradient-to-br ${service.bgColor} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group overflow-hidden relative`}
            >
              {/* Animated background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>

              {/* Icon with animated background */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
              >
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </motion.div>

              <h3 className="text-base sm:text-lg lg:text-xl font-anton text-[#34497F] mb-3 group-hover:text-[#6D97CF] transition-colors duration-300 relative z-10">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base font-dm-sans leading-relaxed relative z-10">
                {service.description}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gray-200/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special focus sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16 grid lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {/* Lab Services */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-[#34497F]/5 to-[#6D97CF]/10 rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group overflow-hidden relative"
          >
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <TestTube className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-anton text-[#34497F] group-hover:text-[#6D97CF] transition-colors duration-300">Laboratorio</h3>
              </div>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600 font-dm-sans leading-relaxed">
                <li>• Hematología completa</li>
                <li>• Perfil bioquímico sanguíneo</li>
                <li>• Exámenes especializados</li>
                <li>• Endocrinología</li>
                <li>• Virología</li>
                <li>• Pruebas rápidas</li>
              </ul>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-blue-200/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* Preventive Care */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-[#A8D8A8]/10 to-[#C8E8C8]/15 rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group overflow-hidden relative"
          >
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-anton text-[#34497F] group-hover:text-[#6D97CF] transition-colors duration-300">Preventiva</h3>
              </div>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600 font-dm-sans leading-relaxed">
                <li>• Planes de salud personalizados</li>
                <li>• Chequeos periódicos</li>
                <li>• Vacunación programada</li>
                <li>• Control de peso y nutrición</li>
                <li>• Prevención de enfermedades</li>
                <li>• Educación al propietario</li>
              </ul>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-green-200/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* Neural Therapy */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-[#8BB8E8]/8 to-[#A8D8F0]/12 rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group overflow-hidden relative"
          >
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-anton text-[#34497F] group-hover:text-[#6D97CF] transition-colors duration-300">Terapia Neural</h3>
              </div>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600 font-dm-sans leading-relaxed">
                <li>• Manejo del dolor crónico</li>
                <li>• Trastornos neurológicos</li>
                <li>• Recuperación funcional</li>
                <li>• Apoyo integral</li>
                <li>• Técnicas especializadas</li>
                <li>• Seguimiento personalizado</li>
              </ul>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-purple-200/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
