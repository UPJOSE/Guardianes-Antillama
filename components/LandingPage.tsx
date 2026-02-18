'use client';

import { useState } from 'react';
import { ShieldCheck, Flame, Sparkles, BookOpen, Gamepad2, Award, HeartHandshake, Globe, Heart, ArrowRight, Menu, X, ShieldAlert, Users, Lightbulb, HandMetal } from 'lucide-react';
import AudioButton from './AudioButton';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Misión', href: '#mision' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Aniquem', href: '#aniquem' },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--warm-cream)' }}>
      {/* ── NAVBAR ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b-2" style={{ borderColor: 'var(--warm-peach)' }}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: 'var(--warm-orange)' }}>
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold" style={{ color: 'var(--warm-orange)', fontFamily: 'var(--font-baloo2), sans-serif' }}>
              Guardianes AntiLlama
            </span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium transition-colors hover:text-[#FF8C42]" style={{ color: '#7A6B5D' }}>
                {link.label}
              </a>
            ))}
            <button onClick={onStart} className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold text-white transition-all hover:scale-105" style={{ background: 'var(--warm-orange)' }}>
              <Sparkles className="h-4 w-4" />
              Empezar aventura
            </button>
          </div>

          <button className="flex items-center justify-center md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t bg-white px-4 pb-4 md:hidden" style={{ borderColor: 'var(--warm-peach)' }}>
            <div className="flex flex-col gap-3 pt-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-orange-50" style={{ color: '#7A6B5D' }} onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <button onClick={() => { setMobileMenuOpen(false); onStart(); }} className="mt-1 rounded-full px-5 py-2 text-sm font-bold text-white" style={{ background: 'var(--warm-orange)' }}>
                Empezar aventura
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* ── HERO SECTION ── */}
        <section id="inicio" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full blur-3xl" style={{ background: 'rgba(255, 209, 102, 0.25)' }} />
            <div className="absolute top-1/2 -left-20 h-64 w-64 rounded-full blur-3xl" style={{ background: 'rgba(255, 140, 66, 0.12)' }} />
            <div className="absolute -bottom-10 right-1/3 h-48 w-48 rounded-full blur-3xl" style={{ background: 'rgba(81, 207, 102, 0.12)' }} />
          </div>

          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 animate-pop-in" style={{ background: 'rgba(255, 209, 102, 0.3)' }}>
                <Flame className="h-4 w-4" style={{ color: 'var(--warm-orange)' }} />
                <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#5A3E1B' }}>
                  En alianza con Aniquem
                </span>
              </div>

              <div className="flex items-center gap-5 mb-6 animate-slide-up">
                <ShieldCheck className="h-16 w-16 md:h-20 md:w-20 animate-float" style={{ color: 'var(--warm-orange)' }} />
                <Flame className="h-14 w-14 md:h-16 md:w-16 animate-wiggle" style={{ color: 'var(--warm-yellow)' }} />
                <Heart className="h-14 w-14 md:h-16 md:w-16 animate-bounce-soft" style={{ color: 'var(--warm-coral)' }} />
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-balance animate-slide-up" style={{ color: 'var(--warm-orange)', fontFamily: 'var(--font-baloo2), sans-serif' }}>
                Guardianes AntiLlama
              </h1>

              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-balance animate-slide-up animate-delay-100" style={{ color: 'var(--warm-yellow)', fontFamily: 'var(--font-baloo2), sans-serif' }}>
                Aprende a cuidarte del fuego jugando con historias reales
              </h2>

              <div className="flex justify-center mt-4 animate-slide-up animate-delay-200">
                <AudioButton text="Guardianes AntiLlama. Aprende a cuidarte del fuego jugando con historias reales." />
              </div>

              <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed animate-slide-up animate-delay-200" style={{ color: '#7A6B5D' }}>
                Guardianes AntiLlama es un juego educativo donde escucharás historias reales de niños que enfrentaron situaciones peligrosas con fuego o calor.
                Tu misión será tomar decisiones seguras, aprender a prevenir quemaduras y convertirte en un Guardián del Cuidado para la vida real.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-slide-up animate-delay-300">
                <button onClick={onStart} className="btn-primary animate-pulse-glow flex items-center gap-3 text-2xl">
                  <ShieldCheck className="h-7 w-7" />
                  Empezar aventura
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-12 flex gap-8 animate-slide-up animate-delay-400">
                <div className="text-center">
                  <p className="text-2xl font-bold" style={{ color: 'var(--warm-orange)' }}>500+</p>
                  <p className="text-xs" style={{ color: '#7A6B5D' }}>Guardianes activos</p>
                </div>
                <div className="h-10 w-px" style={{ background: 'var(--warm-peach)' }} />
                <div className="text-center">
                  <p className="text-2xl font-bold" style={{ color: 'var(--warm-green)' }}>15+</p>
                  <p className="text-xs" style={{ color: '#7A6B5D' }}>Comunidades seguras</p>
                </div>
                <div className="h-10 w-px" style={{ background: 'var(--warm-peach)' }} />
                <div className="text-center">
                  <p className="text-2xl font-bold" style={{ color: 'var(--warm-sky)' }}>100%</p>
                  <p className="text-xs" style={{ color: '#7A6B5D' }}>Gratis</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION SECTION ── */}
        <section id="mision" className="py-16 md:py-24" style={{ background: 'white' }}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: 'var(--warm-orange)' }}>Nuestra misión</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-balance" style={{ color: '#3D2E1F', fontFamily: 'var(--font-baloo2), sans-serif' }}>
                Transformar hogares en espacios seguros
              </h2>
              <p className="mt-4 text-lg leading-relaxed" style={{ color: '#7A6B5D' }}>
                Ayudamos a los niños, niñas y adolescentes a identificar riesgos y adoptar conductas seguras para proteger a sus familias.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: ShieldAlert, title: 'Falta de prevención', desc: 'Muchos hogares no cuentan con sistemas de prevención de accidentes por quemaduras.', color: 'var(--warm-coral)', bg: 'rgba(255, 107, 107, 0.1)' },
                { icon: Heart, title: 'Prácticas normalizadas', desc: 'Conductas riesgosas dentro del hogar se han normalizado y pasan desapercibidas.', color: 'var(--warm-pink)', bg: 'rgba(247, 131, 172, 0.1)' },
                { icon: Users, title: 'Sectores vulnerables', desc: 'Niños y niñas de sectores vulnerables están más expuestos a riesgos en sus comunidades.', color: 'var(--warm-purple)', bg: 'rgba(204, 93, 232, 0.1)' },
                { icon: Lightbulb, title: 'Nuestra solución', desc: 'Creando conciencia a través del juego: transformamos prácticas cotidianas en conductas seguras.', color: 'white', bg: 'var(--warm-orange)', highlight: true },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className={`card animate-slide-up ${item.highlight ? 'text-white' : ''}`} style={{ animationDelay: `${i * 0.1}s`, ...(item.highlight ? { background: 'var(--warm-orange)', border: 'none' } : {}) }}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl mb-4" style={{ background: item.highlight ? 'rgba(255,255,255,0.2)' : item.bg }}>
                      <Icon className="h-6 w-6" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: item.highlight ? 'white' : '#3D2E1F', fontFamily: 'var(--font-baloo2), sans-serif' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: item.highlight ? 'rgba(255,255,255,0.85)' : '#7A6B5D' }}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS SECTION ── */}
        <section id="como-funciona" className="py-16 md:py-24" style={{ background: 'var(--warm-cream)' }}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: 'var(--warm-green)' }}>Cómo funciona</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-balance" style={{ color: '#3D2E1F', fontFamily: 'var(--font-baloo2), sans-serif' }}>
                Tres pasos para ser guardián
              </h2>
              <p className="mt-4 max-w-md mx-auto text-lg leading-relaxed" style={{ color: '#7A6B5D' }}>
                Un camino divertido donde cada misión te acerca más a proteger tu hogar y tu comunidad.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {[
                { icon: BookOpen, step: '01', title: 'Aprende', desc: 'Descubre los peligros ocultos en tu hogar a través de historias interactivas y contenido divertido.', color: 'var(--warm-sky)', bg: 'rgba(116, 192, 252, 0.15)' },
                { icon: Gamepad2, step: '02', title: 'Juega', desc: 'Completa misiones y desafíos que te enseñan cómo prevenir accidentes por quemaduras de forma segura.', color: 'var(--warm-orange)', bg: 'rgba(255, 140, 66, 0.15)' },
                { icon: Award, step: '03', title: 'Protege', desc: 'Comparte lo aprendido con tu familia y comunidad. Conviértete en un verdadero guardián antillamas.', color: 'var(--warm-green)', bg: 'rgba(81, 207, 102, 0.15)' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="card text-center animate-slide-up" style={{ animationDelay: `${i * 0.15}s` }}>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl mb-4 animate-bounce-soft" style={{ background: item.bg, animationDelay: `${i * 0.3}s` }}>
                      <Icon className="h-8 w-8" style={{ color: item.color }} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: item.color }}>Paso {item.step}</span>
                    <h3 className="text-2xl font-bold mt-1 mb-3" style={{ color: '#3D2E1F', fontFamily: 'var(--font-baloo2), sans-serif' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#7A6B5D' }}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ANIQUEM SECTION ── */}
        <section id="aniquem" className="py-16 md:py-24" style={{ background: 'white' }}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: 'var(--warm-orange)' }}>Nuestro aliado</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-balance" style={{ color: '#3D2E1F', fontFamily: 'var(--font-baloo2), sans-serif' }}>
                Trabajamos junto a Aniquem
              </h2>
              <p className="mt-4 text-lg leading-relaxed" style={{ color: '#7A6B5D' }}>
                Aniquem es la Asociación de Ayuda al Niño Quemado, que trabaja por la rehabilitación integral de niños, niñas y adolescentes sobrevivientes de quemaduras en el Perú.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              {[
                { icon: HeartHandshake, title: 'Rehabilitación integral', desc: 'Apoyo físico, psicológico y social para niños sobrevivientes de quemaduras.', color: 'var(--warm-coral)' },
                { icon: HandMetal, title: 'Prevención comunitaria', desc: 'Programas educativos para prevenir accidentes por quemaduras en comunidades vulnerables.', color: 'var(--warm-orange)' },
                { icon: Globe, title: 'Impacto nacional', desc: 'Presencia en múltiples regiones del Perú, llegando a las familias que más lo necesitan.', color: 'var(--warm-green)' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="card text-center animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl mb-4" style={{ background: `${item.color}18` }}>
                      <Icon className="h-6 w-6" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#3D2E1F', fontFamily: 'var(--font-baloo2), sans-serif' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#7A6B5D' }}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="py-16 md:py-24" style={{ background: 'var(--warm-cream)' }}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl px-6 py-16 text-center md:px-16 md:py-20" style={{ background: 'linear-gradient(135deg, var(--warm-orange), var(--warm-coral))' }}>
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full blur-2xl" style={{ background: 'rgba(255,255,255,0.08)' }} />
                <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full blur-2xl" style={{ background: 'rgba(255,255,255,0.08)' }} />
              </div>

              <div className="relative z-10 mx-auto max-w-2xl">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl animate-wiggle" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-balance" style={{ fontFamily: 'var(--font-baloo2), sans-serif' }}>
                  Conviértete en Guardián AntiLlama
                </h2>

                <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-white/80">
                  Únete a nuestra comunidad de héroes que protegen sus hogares y familias. Es gratis, divertido y puedes salvar vidas.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <button onClick={onStart} className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-bold transition-all hover:scale-110 active:scale-95 animate-pulse-glow" style={{ background: 'var(--warm-yellow)', color: '#5A3E1B' }}>
                    Empezar aventura
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

                <p className="mt-6 text-sm text-white/60">
                  Completamente gratis. Diseñado para niños de 9 a 12 años.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t py-10" style={{ borderColor: 'var(--warm-peach)', background: 'white' }}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: 'var(--warm-orange)' }}>
                <ShieldCheck className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold" style={{ color: 'var(--warm-orange)', fontFamily: 'var(--font-baloo2), sans-serif' }}>
                Guardianes AntiLlama
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm transition-colors hover:text-[#FF8C42]" style={{ color: '#7A6B5D' }}>
                  {link.label}
                </a>
              ))}
            </div>

            <p className="text-xs" style={{ color: '#7A6B5D' }}>En alianza con Aniquem</p>
          </div>

          <div className="mt-8 border-t pt-6 text-center" style={{ borderColor: 'var(--warm-peach)' }}>
            <p className="text-lg font-semibold italic mb-2" style={{ color: '#3D2E1F' }}>
              No enseñamos a tener miedo al fuego. Enseñamos a cuidarse para la vida real.
            </p>
            <p className="text-xs" style={{ color: '#7A6B5D' }}>
              Guardianes AntiLlama 2026. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
