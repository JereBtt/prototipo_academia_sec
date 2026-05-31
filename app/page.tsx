"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Phone, Instagram, Facebook, Menu, X, Users, Music, Heart, Award, MapPin, Clock, CheckCircle, Sparkles, Zap, House, Watch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

const scheduleFromZero = [
  { day: "Martes", location: "Studio – Vélez Sarsfield 520", level: "Multinivel (apto principiantes)", style: "Salsa", time: "21:00 a 22:30" },
  { day: "Jueves", location: "Studio – Vélez Sarsfield 520", level: "Multinivel (apto principiantes)", style: "Bachata", time: "21:00 a 22:30" },
  { day: "Sábado", location: "BestClub Gym – Chacabuco 472", level: "Introductorio I (Cero absoluto)", group: "Grupo 1", style: "Salsa & Bachata", time: "15:00 a 16:30" },
  { day: "Sábado", location: "BestClub Gym – Chacabuco 472", level: "Introductorio II", group: "Grupo 2", style: "Salsa & Bachata", time: "15:00 a 16:30" },
]

const scheduleExperienced = [
  { day: "Martes", location: "Studio – Vélez Sarsfield 520", level: "Multinivel", style: "Salsa", time: "21:00 a 22:30" },
  { day: "Jueves", location: "Studio – Vélez Sarsfield 520", level: "Multinivel", style: "Bachata", time: "21:00 a 22:30" },
  { day: "Sábado", location: "BestClub Gym – Chacabuco 472", level: "Principiantes 1 / 1.5", group: "Grupo 1", style: "Salsa", time: "16:30 a 18:00" },
  { day: "Sábado", location: "BestClub Gym – Chacabuco 472", level: "Principiantes 2 / Intermedios", group: "Grupo 2", style: "Salsa", time: "16:30 a 18:00" },
  { day: "Sábado", location: "BestClub Gym – Chacabuco 472", level: "Principiantes 1 / 1.5", group: "Grupo 1", style: "Bachata", time: "18:00 a 19:30" },
  { day: "Sábado", location: "BestClub Gym – Chacabuco 472", level: "Principiantes 2 / Intermedios", group: "Grupo 2", style: "Bachata", time: "18:00 a 19:30" },
]

const testimonials = [
  { name: "María García", quote: "Empecé desde cero y en pocos meses ya me siento segura bailando. El ambiente es increíble.", image: "/images/testimonial-1.jpg" },
  { name: "Laura Fernández", quote: "Los profesores son muy pacientes y dedicados. Cada clase es un momento para desconectar y disfrutar.", image: "/images/testimonial-2.jpg" },
  { name: "Carlos Rodríguez", quote: "Vine solo y encontré una comunidad. Ahora no me pierdo ninguna clase.", image: "/images/testimonial-3.jpg" },
]

const WHATSAPP_NUMBER = "5493513715379"

const whatsappLink = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`


export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Por qué bailar", href: "#por-que" },
    { name: "Sedes", href: "#sedes" },
    { name: "Niveles y Horarios", href: "#horarios" },
    { name: "Nuestra Cultura", href: "#cultura" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ]

  const openWhatsAppWidget = () => {
    window.dispatchEvent(new Event("open-whatsapp-widget"))
  }

  useEffect(() => {
    const hero = heroRef.current

    if (!hero) return

    const mobileQuery = window.matchMedia("(max-width: 767px)")
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    let animationFrame: number | null = null

    const updateParallax = () => {
      animationFrame = null

      if (reduceMotionQuery.matches) {
        hero.style.setProperty("--hero-parallax", "0px")
        return
      }

      const rect = hero.getBoundingClientRect()
      const heroIsVisible = rect.bottom > 0 && rect.top < window.innerHeight

      if (!heroIsVisible) return

      const scrollDistance = window.scrollY - hero.offsetTop
      const strength = mobileQuery.matches ? 0.46 : 0.38
      const minOffset = mobileQuery.matches ? -72 : -56
      const maxOffset = mobileQuery.matches ? 150 : 190
      const offset = Math.min(Math.max(scrollDistance * strength, minOffset), maxOffset)

      hero.style.setProperty("--hero-parallax", `${offset}px`)
    }

    const requestUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateParallax)
      }
    }

    updateParallax()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)
    mobileQuery.addEventListener("change", requestUpdate)
    reduceMotionQuery.addEventListener("change", requestUpdate)

    return () => {
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
      mobileQuery.removeEventListener("change", requestUpdate)
      reduceMotionQuery.removeEventListener("change", requestUpdate)

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-foreground text-card overflow-x-hidden">
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Cerrar menu"
          className="fixed inset-0 z-40 cursor-default bg-transparent lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm border-b border-card/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[1fr_2.5rem] items-center gap-3 h-16 lg:h-20 lg:grid-cols-[auto_1fr_auto] lg:gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-lg bg-black">
                <Image
                  src="/images/logo-sec-navbar.png"
                  alt="Salsa en CÃ³rdoba"
                  fill
                  sizes="44px"
                  className="object-contain p-1"
                  priority
                />
              </div>
              <span className="font-serif text-2xl font-bold text-card">Salsa en Córdoba</span>
            </div>

            <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-center text-sm font-semibold text-card/70 hover:text-primary transition-colors uppercase tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center justify-self-end gap-4">
              <Button className="hidden lg:flex bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full px-6">
                <Phone className="w-4 h-4" />
                <a
                  href={whatsappLink("Hola! Quiero consultar por las clases de salsa y bachata.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
              <button
                className="justify-self-end p-2 text-card lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden bg-foreground border-t border-card/10">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-card hover:text-primary transition-colors uppercase tracking-wide text-sm font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full mt-4">
                <Phone className="w-4 h-4" />
                <a
                  href={whatsappLink("Hola, quiero consultar por las clases de salsa y bachata.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section ref={heroRef} id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0">
          <div
            className="absolute -inset-y-28 inset-x-0 will-change-transform"
            style={{ transform: "translate3d(0, var(--hero-parallax, 0px), 0) scale(1.1)" }}
          >
            <Image
              src="/images/fondo-hero3.png"
              alt="Pareja bailando salsa"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-foreground/70" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 border-4 border-primary/30 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center">

            {/* Experiencia */}
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wide">+20 años de experiencia</span>
            </div>

            {/* Título principal */}
            <div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-card leading-none text-balance">
                Corta <span className="text-primary">la Semana.</span><br />
                <span className="text-primary">o</span><br />
                Hace del Sábado <span className="text-primary">tu día Especial.</span>
              </h1>
              <p className="mt-6 text-xl text-card/80 leading-relaxed max-w-4xl mx-auto text-center">
                Dale un Giro a tu vida, Divertite, Hace amigos y Descubrí el Ritmo que llevas dentro… <br /> En un espacio diseñado especialmente para vos, lleno de energía.
              </p>
            </div>

            {/* Titulo secundario */}
            <div className="mt-20">
              <h2 className="font-extralight text-3xl sm:text-4xl lg:text-5xl text-card/85 leading-none text-balance">
                Clases de Salsa y Bachata en Córdoba
              </h2>
              <p className="mt-6 text-lg text-card/80 leading-relaxed max-w-4xl mx-auto text-center">
                Para todos los Niveles Para ir solo/a en pareja o con tus amistades.<br /> Conoce todos los Planes y Promos que tenemos para vos!!
              </p>
            </div>

            {/* Botones */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full text-lg px-8 py-6">
                <Phone className="w-5 h-5" />
                <a
                  href={whatsappLink("Hola! Vi la página de salsa y bachata en Córdoba y quiero empezar a bailar. ¿Me pasás mas info?")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar por WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-card text-card hover:bg-card hover:text-foreground gap-2 rounded-full text-lg px-8 py-6 bg-transparent">
                <a href="#horarios">Ver horarios</a>
              </Button>
            </div>

            {/* Características */}
            <div className="mt-12 flex flex-wrap gap-6">
              {[
                { icon: House, text: "2 de los Salones más Grandes de Córdoba" },
                { icon: Users, text: "Multinivel" },
                { icon: Heart, text: "Ambiente único" },
                { icon: Award, text: "4+ profes" },
                { icon: Music, text: "Desde Cero y Todos los Niveles" },
                { icon: Watch, text: "Jornadas de Clases Extendidas de 1 hora y media" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 bg-card/10 px-4 py-2 rounded-full">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-card font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué aprender salsa y bachata? */}
      <section id="por-que" className="py-20 lg:py-28 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(185,28,28,0.15),transparent_50%)]" />
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary/20 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary/20 rounded-full blur-xl hidden lg:block" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-orange-500/20 rounded-full hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Beneficios</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-card mt-2 text-balance">¿Por qué aprender salsa y bachata?</h2>
            <p className="mt-4 text-card/70 leading-relaxed text-lg">
              En nuestra academia Salsa en Córdoba podés aprender a bailar desde cero, conocer gente, moverte y divertirte. Llegate a nuestras clases y descubrí de forma divertida el Ritmo que hay en vos!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: CheckCircle,
                title: "No necesitás experiencia previa",
                description: "Todos empezamos de cero. Nuestras clases están diseñadas para acompañarte paso a paso.",
                gradient: "from-red-600 to-orange-500"
              },
              {
                icon: Users,
                title: "Conocés gente nueva",
                description: "El baile es social. Hacé amigos, conectá con otros y disfrutá de una comunidad cálida.",
                gradient: "from-orange-500 to-yellow-500"
              },
              {
                icon: Award,
                title: "Mejorás coordinación y confianza",
                description: "Con cada clase vas a notar cómo tu cuerpo responde mejor y tu seguridad crece.",
                gradient: "from-red-700 to-red-500"
              },
              {
                icon: Zap,
                title: "Activás el cuerpo de forma divertida",
                description: "Olvidate del gimnasio aburrido. Acá movés todo el cuerpo mientras te divertís.",
                gradient: "from-red-500 to-pink-500"
              },
              {
                icon: Heart,
                title: "Reducís estrés",
                description: "La música, el movimiento y la conexión humana son el mejor antídoto contra el estrés.",
                gradient: "from-pink-500 to-red-600"
              },
              {
                icon: Music,
                title: "Disfrutás la música latina",
                description: "Aprendé a sentir el ritmo, entender la música y dejarte llevar por los sonidos latinos.",
                gradient: "from-orange-600 to-red-500"
              },
            ].map((benefit, idx) => (
              <div
                key={benefit.title}
                className="group relative"
              >
                <div className={`absolute -inset-1 bg-gradient-to-br ${benefit.gradient} rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition-opacity`} />
                <div className="relative bg-card/5 border border-card/10 rounded-2xl p-6 hover:bg-card/10 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${idx % 2 === 0 ? '-rotate-3' : 'rotate-3'}`}>
                    <benefit.icon className="w-7 h-7 text-card" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-card mb-2">{benefit.title}</h3>
                  <p className="text-card/60 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestras Sedes */}
      <section id="sedes" className="py-20 lg:py-28 bg-foreground relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(185,28,28,0.15),transparent_50%)]" />
        <div className="absolute top-20 right-20 w-40 h-40 border-4 border-primary/20 rounded-full hidden lg:block" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/10 rounded-full blur-xl hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Ubicaciones</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-card mt-2">Nuestras Sedes</h2>
            <p className="mt-4 text-card/70 leading-relaxed text-lg">
              Elegí la sede que mejor se adapte a tus tiempos y a tu rutina. <br /> Conoce donde se viven nuestras clases.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sucursal Studio */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-500 rounded-3xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative bg-card/5 border border-card/10 rounded-2xl overflow-hidden">
                {/* Main Photo */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/studio-main-1.jpg"
                    alt="Studio de baile Vélez Sarsfield"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                      SUCURSAL STUDIO
                    </span>
                  </div>
                </div>

                {/* Supporting Photos */}
                <div className="grid grid-cols-2 gap-2 p-2">
                  <div className="relative h-32 rounded-xl overflow-hidden">
                    <Image
                      src="/images/studio-detail-1.jpg"
                      alt="Detalles del studio"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative h-32 rounded-xl overflow-hidden">
                    <Image
                      src="/images/studio-detail-2.jpg"
                      alt="Clase en el studio"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Map Placeholder STUDIO */}
                <div className="p-4">
                  <div className="relative h-48 rounded-xl overflow-hidden bg-card/10 border border-card/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.7386783558304!2d-64.19215342350932!3d-31.42132519649172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a3a0e80a326f%3A0xef01065cef7c5957!2sStudio%20Multiespacio!5e0!3m2!1ses-419!2sus!4v1777463974328!5m2!1ses-419!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Location Info */}
                <div className="p-6 pt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 -rotate-3">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-card leading-tight">Av. Vélez Sarsfield 520</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sucursal Best Club */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative bg-card/5 border border-card/10 rounded-2xl overflow-hidden">
                {/* Main Photo */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/studio-main-2.jpg"
                    alt="Studio de baile Best Club"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold">
                      SUCURSAL BESTCLUB
                    </span>
                  </div>
                </div>

                {/* Supporting Photos */}
                <div className="grid grid-cols-2 gap-2 p-2">
                  <div className="relative h-32 rounded-xl overflow-hidden">
                    <Image
                      src="/images/studio-detail-3.jpg"
                      alt="Comunidad de baile"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative h-32 rounded-xl overflow-hidden">
                    <Image
                      src="/images/studio-detail-4.jpg"
                      alt="Pareja bailando"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Map Placeholder BESTCLUB*/}
                <div className="p-4">
                  <div className="relative h-48 rounded-xl overflow-hidden bg-card/10 border border-card/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.68033830429!2d-64.18531322350927!3d-31.42293219656928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a29007ba43a1%3A0x71d68825809b990e!2sBest%20Club!5e0!3m2!1ses-419!2sus!4v1777463892343!5m2!1ses-419!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Location Info */}
                <div className="p-6 pt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 rotate-3">
                      <MapPin className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-card leading-tight">Bv. Chacabuco 472</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Niveles y Horarios - Detailed structure from Version 1 with Version 2 styling */}
      <section id="horarios" className="py-20 lg:py-28 bg-card text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Encontrá tu horario</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-2">Niveles y Horarios</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Encontrá el horario y nivel que mejor se adapte a vos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Desde Cero */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-500 rounded-3xl blur-sm opacity-30" />
              <div className="relative bg-card rounded-2xl p-6 lg:p-8 border border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center -rotate-3">
                    <Sparkles className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">Desde Cero</h3>
                    <p className="text-muted-foreground">Primera vez bailando</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 text-sm">Ideal si nunca bailaste. Clases pensadas para acompañarte paso a paso.</p>

                <div className="space-y-4">
                  {scheduleFromZero.map((item, idx) => (
                    <div key={idx} className="p-4 bg-secondary rounded-xl hover:bg-primary/5 transition-colors">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="font-bold text-foreground">{item.day}</span>
                          </div>
                          <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{item.time}</span>
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium text-foreground">{item.style}</p>
                          <p className="text-sm text-muted-foreground">{item.level}</p>
                          <p className="font-medium text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ya Bailo */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl blur-sm opacity-30" />
              <div className="relative bg-card rounded-2xl p-6 lg:p-8 border border-accent/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center rotate-3">
                    <Zap className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">Ya Bailo</h3>
                    <p className="text-muted-foreground">Con experiencia previa</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 text-sm">Para quienes ya tienen experiencia y quieren seguir creciendo.</p>

                <div className="space-y-4">
                  {scheduleExperienced.map((item, idx) => (
                    <div key={idx} className="p-4 bg-secondary rounded-xl hover:bg-accent/5 transition-colors">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-accent" />
                            <span className="font-bold text-foreground">{item.day}</span>
                          </div>
                          <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">{item.time}</span>
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium text-foreground">{item.style}</p>
                          <p className="text-sm text-muted-foreground">{item.level}</p>
                          <p className="font-medium  text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Cultura */}
      <section id="cultura" className="py-20 lg:py-28 bg-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <Image
            src="/images/hero-dancing.jpg"
            alt="Comunidad bailando"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Filosofía</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-card mt-2 mb-6">
              Nuestra Cultura
            </h2>
            <p className="text-card/70 leading-relaxed text-lg mb-8">
              En Salsa en Córdoba creemos que bailar es mucho más que aprender pasos. Es un espacio para
              desconectar, conectar con otros y sentirte bien. Sin presiones, sin exigencias, solo buena energía.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Comunidad activa y unida",
                "Energía positiva siempre",
                "Respeto y buenas vibras",
                "Aprendizaje sin presiones"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card/10 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-card font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-6 bg-primary/20 rounded-2xl p-6">
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-primary">20+</p>
                <p className="text-sm text-card/70">Años</p>
              </div>
              <div className="w-px h-12 bg-card/20" />
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-primary">3000+</p>
                <p className="text-sm text-card/70">Alumnos</p>
              </div>
              <div className="w-px h-12 bg-card/20" />
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-primary">4+</p>
                <p className="text-sm text-card/70">Profes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-20 lg:py-28 bg-card text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Testimonios</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-2">Lo que dicen nuestros alumnos</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.name}
                className={`relative bg-secondary rounded-2xl p-6 ${idx === 1 ? 'lg:-translate-y-4' : ''}`}
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-2xl font-serif">&ldquo;</span>
                </div>
                <div className="flex items-center gap-4 mb-4 pt-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative ring-4 ring-primary/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Alumna</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 lg:py-28 bg-foreground relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(185,28,28,0.1),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Contacto</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-card mt-2 mb-6">
                ¿Querés empezar a bailar?
              </h2>
              <p className="text-card/70 leading-relaxed text-lg mb-8">
                Dejanos tu consulta y te asesoramos según tu nivel y disponibilidad. También podés visitar nuestro perfil de Instagram y Facebook.
              </p>

              <div className="flex gap-4">
                <a
                  aria-label="Abrir Instagram"
                  href="https://www.instagram.com/salsa.en.cordoba?igsh=MW5ua2NjdDN4a21lOA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary text-card hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>

                <a
                  aria-label="Abrir Facebook"
                  href="https://www.facebook.com/Salsa.en.Cordoba1?rdid=hd1RaF0Wfv1ZMEWc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18Hpq3zRsX%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary text-card hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-500 rounded-3xl blur-sm opacity-30" />
              <Card className="relative border-card/20 bg-card/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div
                    className="space-y-4"
                    role="button"
                    tabIndex={0}
                    onClick={openWhatsAppWidget}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault()
                        openWhatsAppWidget()
                      }
                    }}
                  >
                    <Input
                      type="text"
                      placeholder="Tu nombre"
                      maxLength={30}
                      readOnly
                      onFocus={openWhatsAppWidget}
                      className="bg-card/10 border-card/20 text-card placeholder:text-card/40"
                    />

                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      maxLength={50}
                      readOnly
                      onFocus={openWhatsAppWidget}
                      className="bg-card/10 border-card/20 text-card placeholder:text-card/40"
                    />

                    <Input
                      type="tel"
                      placeholder="+54 9 1234 5678"
                      maxLength={30}
                      readOnly
                      onFocus={openWhatsAppWidget}
                      className="bg-card/10 border-card/20 text-card placeholder:text-card/40"
                    />
                    <Button type="button" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                      Enviar consulta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground border-t border-card/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold text-card">Salsa en Córdoba</span>
            </div>

            <p className="text-card/50 text-sm">© 2026 Salsa en Córdoba. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  )
}
