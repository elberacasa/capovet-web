import React, { useEffect, useState } from 'react';
import { Award, MessageCircle } from 'lucide-react';

const ModernHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const AnimatedElement = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Static Pet-Themed Background */}
      <div className="absolute inset-0">
        {/* Static Gradient Background */}
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl bg-gradient-to-br from-cyan-400/20 to-blue-500/10"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15 blur-3xl bg-gradient-to-br from-teal-400/15 to-cyan-500/10"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-25 blur-2xl bg-gradient-to-br from-blue-400/15 to-indigo-500/10"></div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>


      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-20 lg:pt-24">
        <div className="container mx-auto px-6 lg:px-16 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start lg:items-center">

            {/* Left Column - Content */}
            <div className="relative space-y-4 lg:space-y-8 mb-4 lg:mb-12">
              {/* Main Headline */}
              <AnimatedElement delay={200}>
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none">
                  <span className="block mb-2">Cuidado</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                    Veterinario
                  </span>
                  <span className="block text-4xl lg:text-5xl font-bold text-blue-100 mt-4">
                    en tu hogar
                  </span>
                </h1>
              </AnimatedElement>

              {/* Description */}
              <AnimatedElement delay={600}>
                <p className="text-xl lg:text-2xl text-blue-100/80 leading-relaxed max-w-2xl">
                  Profesionales certificados con
                  <span className="text-cyan-300 font-semibold"> tecnología avanzada </span>
                  ofrecen atención personalizada para la salud y bienestar de tu mascota.
                </p>
              </AnimatedElement>

              {/* Left Column Decorative Element */}
              <div className="absolute -top-2 -right-4 w-10 h-10 bg-gradient-to-br from-blue-400/12 to-cyan-500/8 rounded-full blur-lg"></div>
            </div>

            {/* Right Column - Professional Trust Section */}
            <div className="relative mb-8 lg:mb-12 -mt-8 lg:mt-4">
              <div className="space-y-6 lg:space-y-8">
                {/* Trust Indicators */}
                <AnimatedElement delay={300}>
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <h3 className="text-[17px] sm:text-lg font-bold text-center mb-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">Atención veterinaria integral para tu mascota bajo previa cita</h3>
                    <p className="text-blue-200 text-sm text-center leading-relaxed">Consulta la disponibilidad en tu zona y horarios por WhatsApp</p>
                  </div>
                </AnimatedElement>

                {/* Key Statistics */}
                <AnimatedElement delay={500}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center">
                      <div className="text-2xl font-bold text-cyan-300 mb-1">500+</div>
                      <div className="text-xs text-blue-200">Mascotas Atendidas</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center">
                      <div className="text-2xl font-bold text-cyan-300 mb-1">3+</div>
                      <div className="text-xs text-blue-200">Años de Experiencia</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center">
                      <div className="text-2xl font-bold text-cyan-300 mb-1">5.0</div>
                      <div className="text-xs text-blue-200">Calificación</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center">
                      <div className="text-2xl font-bold text-cyan-300 mb-1">24/7</div>
                      <div className="text-xs text-blue-200">Disponibilidad</div>
                    </div>
                  </div>
                </AnimatedElement>

                {/* Certifications - Compact Layout */}
                <AnimatedElement delay={700}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 lg:p-6 border border-white/10">
                    <div className="space-y-3 lg:space-y-4">
                      <h3 className="text-base lg:text-lg font-bold text-white text-center">Certificaciones y Especialidades</h3>
                      <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
                        <div className="bg-cyan-500/20 text-cyan-200 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">Medicina Felina</div>
                        <div className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">Cirugía Menor</div>
                        <div className="bg-teal-500/20 text-teal-200 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">Terapia Neural</div>
                        <div className="bg-indigo-500/20 text-indigo-200 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">Medicina Preventiva</div>
                        <div className="bg-purple-500/20 text-purple-200 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">Hematología Veterinaria</div>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              </div>

              {/* Professional Decorative Elements - Perfect Symmetry */}
              <div className="absolute top-4 right-6 w-16 h-16 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 rounded-full blur-lg"></div>
              <div className="absolute -top-4 -left-6 w-12 h-12 bg-gradient-to-br from-cyan-400/8 to-blue-500/6 rounded-full blur-lg"></div>

            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button - Mobile Only */}
      <a
        href="https://wa.me/584128299663"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:hidden z-50 group"
        aria-label="Contact us on WhatsApp"
      >
        <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-6 h-6" />
        </div>
      </a>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 text-slate-800/50">
          <path fill="currentColor" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ModernHero; 