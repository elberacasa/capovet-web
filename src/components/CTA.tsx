import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MessageCircle, Heart } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="section bg-brand-gradient relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-28 h-28 bg-white/8 rounded-full blur-2xl"
        ></motion.div>
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/6 rounded-full blur-xl"
        ></motion.div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 shadow-2xl"
          >
            <Heart className="w-10 h-10 text-white" />
          </motion.div>

          <a
            href="https://wa.me/584128299663"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center hover:scale-105 transition-transform duration-200"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-anton mb-6 leading-tight hover:text-white/90 transition-colors duration-200">
              ¿Listo para cuidar de tu mascota?
            </h2>
          </a>
          <a
            href="https://wa.me/584128299663"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center hover:text-white transition-colors duration-200"
          >
            <p className="text-lg lg:text-xl text-white/90 font-dm-sans mb-12 lg:mb-16 max-w-3xl mx-auto leading-relaxed">
              Agenda tu consulta a domicilio y brinda el mejor cuidado veterinario a tu compañero fiel.
            </p>
          </a>

          {/* Main CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/584128299663"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center justify-center space-x-3 px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Agendar por WhatsApp</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:scapobvet@gmail.com?subject=Consulta%20Veterinaria%20CAPOVET"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-email flex items-center justify-center space-x-3 px-8 py-4"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Escribir por email</span>
            </motion.a>
          </motion.div>

          {/* Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/80 text-sm"
          >
            <a
              href="https://wa.me/584128299663"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-white transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>+58 412-8299663</span>
            </a>
            <div className="hidden sm:block text-white/60">•</div>
            <a
              href="mailto:scapobvet@gmail.com?subject=Consulta%20Veterinaria%20CAPOVET"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-white transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>scapobvet@gmail.com</span>
            </a>
            <div className="hidden sm:block text-white/60">•</div>
            <a
              href="https://instagram.com/capovet_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-white transition-colors duration-200"
            >
              <Instagram className="w-4 h-4" />
              <span>@capovet_</span>
            </a>
          </motion.div>

          {/* Emergency Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <p className="text-white/90 text-sm">
              <strong>Emergencias:</strong> Para casos urgentes, contacta inmediatamente por WhatsApp.
              Estamos disponibles para atender situaciones que requieren atención veterinaria inmediata.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
