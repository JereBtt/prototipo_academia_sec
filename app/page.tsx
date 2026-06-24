"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Menu, X, Users, Music, Heart, Award, MapPin, Clock, CheckCircle, Sparkles, Zap, House, Watch, ChevronLeft, ChevronRight } from "lucide-react"
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

const scheduleFromZero = [
  { day: "Martes", location: "Studio – Vélez Sársfield 520", style: "ESPECIAL DE SALSA", time: "21:00 a 22:30Hs" },
  { day: "Jueves", location: "Studio – Vélez Sársfield 520", style: "ESPECIAL DE BACHATA", time: "21:00 a 22:30Hs" },
  { day: "Sábados", location: "Best Club – Chacabuco 472", style: "SALSA Y MERENGUE", time: "15:00 a 16:30Hs" },
  { day: "Sábados", location: "Best Club – Chacabuco 472", style: "ESPECIAL DE BACHATA", time: "18:00 a 19:30Hs" },
]

const scheduleExperienced = [
  { day: "Martes", location: "Studio – Vélez Sársfield 520", style: "ESPECIAL DE SALSA", time: "21:00 a 22:30Hs" },
  { day: "Jueves", location: "Studio – Vélez Sársfield 520", style: "ESPECIAL DE BACHATA", time: "21:00 a 22:30Hs" },
  { day: "Sábados", location: "Best Club – Chacabuco 472", style: "ESPECIAL DE SALSA", time: "16:30 a 18:00 Hs" },
  { day: "Sábados", location: "Best Club – Chacabuco 472", style: "ESPECIAL DE BACHATA", time: "18:00 a 19:30 Hs" },
]

const testimonials = [
  { name: "María García", quote: "Empecé desde cero y en pocos meses ya me siento segura bailando. El ambiente es increíble.", image: "/images/testimonial-1.jpg" },
  { name: "Laura Fernández", quote: "Los profesores son muy pacientes y dedicados. Cada clase es un momento para desconectar y disfrutar.", image: "/images/testimonial-2.jpg" },
  { name: "Carlos Rodríguez", quote: "Vine solo y encontré una comunidad. Ahora no me pierdo ninguna clase.", image: "/images/testimonial-3.jpg" },
]

const WHATSAPP_NUMBER = "5493513715379"

const whatsappLink = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

const sectionTitleClass = "bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(251,191,36,0.22)]"
const sectionLeadClass = "mt-4 font-[Arial] text-xl sm:text-2xl leading-relaxed"

function GoldenSectionDivider() {
  return (
    <div aria-hidden="true" className="relative z-30 -my-5 flex h-10 items-center justify-center overflow-hidden px-6 pointer-events-none sm:h-12 sm:px-10">
      <div className="relative h-8 w-full max-w-md sm:max-w-xl">
        <Image
          src="/images/golden-section-divider.webp"
          alt=""
          fill
          sizes="(max-width: 640px) 90vw, 576px"
          className="object-cover object-center opacity-90"
        />
      </div>
    </div>
  )
}

const heroSlides = [
  {
    phrase: "Salsa y Bachata.",
    image: "/images/hero-carousel-1-salsa-bachata.png",
    alt: "Pareja bailando salsa y bachata",
    imageClass: "object-cover object-center sm:object-contain",
    backdropClass: "opacity-25",
  },
  {
    phrase: "Cortá la semana o hacé del sábado tu día especial.",
    image: "/images/hero-carousel-2-corta-semana.png",
    alt: "Pareja bailando en clase",
    imageClass: "object-cover object-center sm:object-contain",
    backdropClass: "opacity-25",
  },
  {
    phrase: "¡Hacé amigos y divertite!",
    image: "/images/hero-carousel-3-amigos.png",
    alt: "Grupo de alumnos bailando salsa",
    imageClass: "object-cover object-center sm:object-contain",
    backdropClass: "opacity-25",
  },
  {
    phrase: "Dale un giro a tu vida.",
    image: "/images/hero-carousel-4-giro.png",
    alt: "Grupo de alumnos de Salsa en Córdoba",
    imageClass: "object-cover object-center sm:object-contain",
    backdropClass: "opacity-25",
  },
  {
    phrase: "Promo universitarios.",
    image: "/images/hero-carousel-5-universitarios.png",
    alt: "Pareja joven bailando en estudio",
    imageClass: "object-cover object-center sm:object-contain",
    backdropClass: "opacity-25",
  },
] as const


export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeHeroSlide, setActiveHeroSlide] = useState(0)

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sedes", href: "#sedes" },
    { name: "Niveles y Horarios", href: "#horarios" },
    { name: "Nuestra Cultura", href: "#cultura" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ]

  const openWhatsAppWidget = () => {
    window.dispatchEvent(new Event("open-whatsapp-widget"))
  }

  const showPreviousHeroSlide = () => {
    setActiveHeroSlide((currentSlide) => (currentSlide - 1 + heroSlides.length) % heroSlides.length)
  }

  const showNextHeroSlide = () => {
    setActiveHeroSlide((currentSlide) => (currentSlide + 1) % heroSlides.length)
  }

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveHeroSlide((currentSlide) => (currentSlide + 1) % heroSlides.length)
    }, 4200)

    return () => window.clearInterval(slideTimer)
  }, [])

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#5f100f]/95 backdrop-blur-sm border-b border-red-950/50 shadow-lg shadow-black/20 font-[Arial]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid h-16 grid-cols-[1fr_2.5rem] items-center gap-3 lg:h-20 lg:grid-cols-[11rem_1fr_11rem] lg:gap-4">
            <a href="#inicio" className="relative z-20 h-16 w-32 self-stretch overflow-visible lg:h-20 lg:w-44" aria-label="Ir al inicio">
              <div className="absolute left-0 top-0 h-24 w-32 overflow-visible drop-shadow-[0_8px_10px_rgba(0,0,0,0.45)] lg:h-32 lg:w-44">
                <Image
                  src="/images/logo-navbar-test.png"
                  alt="Salsa en Córdoba"
                  fill
                  sizes="(min-width: 1024px) 176px, 128px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="sr-only">Salsa en Córdoba</span>
            </a>

            <nav className="hidden h-full items-center justify-center gap-6 self-center lg:flex xl:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-center text-sm font-semibold text-card/80 hover:text-primary transition-colors uppercase tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center justify-self-end self-center gap-4">
              <Button className="hidden lg:flex bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full px-6 shadow-sm">
                <FaWhatsapp className="w-4 h-4" />
                <a
                  href={whatsappLink("Hola! Quiero consultar por las clases de salsa y bachata.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
              <button
                className="self-center justify-self-end p-2 text-card lg:hidden"
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
          <div id="mobile-menu" className="lg:hidden bg-[#5f100f] border-t border-red-950/50 shadow-xl">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-card/90 hover:text-primary transition-colors uppercase tracking-wide text-sm font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full mt-4 shadow-sm">
                <FaWhatsapp className="w-4 h-4" />
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
      <section ref={heroRef} id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-32 font-[Arial]">
        <div className="absolute inset-0">
          <div
            className="absolute -inset-y-28 inset-x-0 will-change-transform"
            style={{ transform: "translate3d(0, var(--hero-parallax, 0px), 0) scale(1.1)" }}
          >
            <Image
              src="/images/background-hero.png"
              alt=""
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-foreground/58" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/35 via-transparent to-foreground/50" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 border-4 border-primary/30 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
            <div className="w-full max-w-4xl">
              <div className="relative w-full overflow-hidden rounded-2xl border border-card/15 bg-foreground/80 shadow-2xl shadow-black/30 backdrop-blur-sm aspect-[4/5] sm:aspect-square lg:aspect-[5/4]">
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.phrase}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${index === activeHeroSlide ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
                      }`}
                    aria-hidden={index !== activeHeroSlide}
                  >
                    <Image
                      src={slide.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
                      className={`object-cover blur-xl scale-110 ${slide.backdropClass}`}
                    />
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
                      priority={index === 0}
                      className={slide.imageClass}
                    />
                  </div>
                ))}

                <button
                  type="button"
                  aria-label="Ver imagen anterior"
                  onClick={showPreviousHeroSlide}
                  className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-card/20 bg-foreground/55 text-card shadow-lg backdrop-blur-md transition-colors hover:bg-primary sm:left-4 sm:h-11 sm:w-11"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  aria-label="Ver imagen siguiente"
                  onClick={showNextHeroSlide}
                  className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-card/20 bg-foreground/55 text-card shadow-lg backdrop-blur-md transition-colors hover:bg-primary sm:right-4 sm:h-11 sm:w-11"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-4 flex justify-center gap-2" aria-label="Slides del carrusel">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.phrase}
                    type="button"
                    aria-label={`Ver slide ${index + 1}`}
                    onClick={() => setActiveHeroSlide(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${index === activeHeroSlide ? "w-9 bg-primary" : "w-3 bg-card/45 hover:bg-card/70"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Botones */}
            <div className="mt-4 flex flex-col gap-4 sm:mt-10 sm:flex-row">
              <Button size="lg" className="bg-[#1FA855] hover:bg-[#188C47] text-white gap-2 rounded-full text-lg px-8 py-6 shadow-lg shadow-emerald-950/25">
                <FaWhatsapp className="w-5 h-5" />
                <a
                  href={whatsappLink("Hola! Vi la página de salsa y bachata en Córdoba y quiero empezar a bailar. ¿Me pasás mas info?")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar por WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-card text-card hover:bg-card hover:text-foreground gap-2 rounded-full text-lg px-8 py-6 bg-transparent">
                <a href="#horarios">Ver horarios</a>
              </Button>
            </div>

            {/* Características */}
            <div className="mt-24 flex flex-wrap gap-6 sm:mt-12">
              {[
                { icon: House, text: "2 de los Salones más Grandes de Córdoba" },
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

      <GoldenSectionDivider />

      {/* ¿Por qué aprender salsa y bachata? */}
      {/* <section id="por-que" className="py-20 lg:py-28 bg-foreground relative overflow-hidden">
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
      </section> */}

      {/* Nuestras Sedes */}
      <section id="sedes" className="scroll-mt-28 py-14 lg:scroll-mt-36 lg:py-20 bg-foreground relative overflow-hidden">
        <Image
          src="/images/background-sedes.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-foreground/55" />
        <div className="absolute top-20 right-20 w-40 h-40 border-4 border-primary/20 rounded-full hidden lg:block" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/10 rounded-full blur-xl hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Ubicaciones</span>
            <h2 className={`font-serif text-4xl sm:text-5xl font-bold mt-2 ${sectionTitleClass}`}>Nuestras Sedes</h2>
            <p className={`${sectionLeadClass} text-card/75`}>
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
                    src="/images/img-sucursales/studio-main.png"
                    alt="Studio de baile Vélez Sarsfield"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
                      src="/images/img-sucursales/studio-detail-1.png"
                      alt="Detalles del studio"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative h-32 rounded-xl overflow-hidden">
                    <Image
                      src="/images/img-sucursales/studio-detail-2.png"
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
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-card leading-tight">Av. Vélez Sarsfield 520</h3>
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
                    src="/images/img-sucursales/best-main.png"
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
                      src="/images/img-sucursales/best-detail-1.png"
                      alt="Comunidad de baile"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative h-32 rounded-xl overflow-hidden">
                    <Image
                      src="/images/img-sucursales/best-detail-2.png"
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
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-card leading-tight">Bv. Chacabuco 472</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldenSectionDivider />

      {/* Niveles y Horarios */}
      <section id="horarios" className="scroll-mt-28 py-14 lg:scroll-mt-36 lg:py-20 bg-foreground text-card relative overflow-hidden font-[Arial]">
        <Image
          src="/images/background-horarios.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-foreground/56" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-foreground/55" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Encontrá tu horario</span>
            <h2 className={`font-serif text-4xl sm:text-5xl font-bold mt-2 ${sectionTitleClass}`}>Niveles y Horarios</h2>
            <p className={`${sectionLeadClass} text-card/80`}>
              Encontrá el horario y nivel que mejor se adapte a vos.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {[
              {
                title: "Desde Cero",
                subtitle: "Primera vez bailando",
                levelLabel: "Niveles:",
                levels: "Intro 1 (Desde cero) | Intro 2 (Básico / Otros ritmos)",
                items: scheduleFromZero,
                Icon: Sparkles,
                glow: "from-primary/60 via-fuchsia-500/30 to-yellow-300/60",
                icon: "bg-primary text-primary-foreground",
              },
              {
                title: "Ya Bailo",
                subtitle: "Con experiencia previa",
                levelLabel: "Niveles:",
                levels: "Principiantes, Principiantes Avanzados e Intermedios",
                items: scheduleExperienced,
                Icon: Zap,
                glow: "from-fuchsia-500/55 via-primary/35 to-yellow-300/60",
                icon: "bg-accent text-accent-foreground",
              },
            ].map((card) => {
              const Icon = card.Icon

              return (
                <div key={card.title} className="relative">
                  <div className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-r ${card.glow} blur-lg opacity-70`} />
                  <div className="relative overflow-hidden rounded-[1.75rem] border border-fuchsia-300/35 bg-slate-950/72 p-4 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-primary/10" />
                    <div className="relative">
                      <div className="rounded-3xl border border-fuchsia-300/60 bg-slate-950/70 p-4 shadow-[0_0_28px_rgba(217,70,239,0.22)] sm:p-5">
                        <div className="flex items-center gap-4">
                          <div className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full ${card.icon} ring-2 ring-yellow-300/70 shadow-[0_0_22px_rgba(250,204,21,0.35)]`}>
                            <Icon className="h-8 w-8" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-black leading-tight text-card sm:text-4xl">{card.title}</h3>
                            <p className="text-base font-medium text-card/85 sm:text-lg">{card.subtitle}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 rounded-xl border border-yellow-300/80 bg-black/45 px-4 py-3 text-sm font-semibold text-card shadow-[0_0_18px_rgba(250,204,21,0.18)] sm:text-base">
                        <span className="font-black text-yellow-300">{card.levelLabel}</span> {card.levels}
                      </div>

                      <div className="mt-7 space-y-7">
                        {[
                          { key: "Studio", name: "STUDIO", address: "Vélez Sársfield 520" },
                          { key: "Best Club", name: "BEST CLUB", address: "Chacabuco 472" },
                        ].map((place) => {
                          const locationItems = card.items.filter((item) => item.location.includes(place.key))

                          if (locationItems.length === 0) return null

                          return (
                            <div key={`${card.title}-${place.key}`} className="space-y-3">
                              <div className="flex items-center gap-3">
                                <MapPin className="h-7 w-7 flex-shrink-0 text-yellow-300" />
                                <h4 className="text-2xl font-black uppercase tracking-wide text-card">
                                  {place.name} <span className="text-lg font-medium normal-case text-card/80">- {place.address}</span>
                                </h4>
                              </div>

                              <div className="space-y-3">
                                {locationItems.map((item) => {
                                  const isStudio = place.key === "Studio"
                                  const danceIcon = item.style.includes("BACHATA")
                                    ? "/images/bachata-silhouette.png"
                                    : "/images/salsa-silhouette.png"

                                  return (
                                    <div
                                      key={`${card.title}-${item.day}-${item.style}-${item.time}`}
                                      className={`relative overflow-hidden rounded-xl border p-3 text-slate-950 shadow-lg ${
                                        isStudio
                                          ? "border-yellow-100/80 bg-gradient-to-r from-yellow-200 via-amber-300 to-orange-400"
                                          : "border-sky-100/80 bg-gradient-to-r from-fuchsia-300 via-violet-300 to-sky-300"
                                      }`}
                                    >
                                      <div className="flex items-center gap-3">
                                        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border-2 border-slate-950/80 bg-white/45 shadow-sm">
                                          <Image
                                            src={danceIcon}
                                            alt=""
                                            fill
                                            sizes="48px"
                                            className="object-contain p-1"
                                          />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                                            <p className="text-base font-bold leading-tight sm:text-lg">{item.day}</p>
                                            <span className="inline-flex items-center gap-1 text-base font-semibold sm:text-lg">
                                              <Clock className="h-4 w-4" />
                                              {item.time}
                                            </span>
                                          </div>
                                          <p className="mt-0.5 text-lg font-black uppercase leading-tight sm:text-xl">
                                            {item.style}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-center text-lg font-black uppercase tracking-[0.28em] text-yellow-300 sm:text-2xl">
            <span>BAILÁ</span>
            <span className="text-card/80">✦</span>
            <span>DISFRUTÁ</span>
            <span className="text-card/80">✦</span>
            <span>CONECTÁ</span>
          </div>
        </div>
      </section>

      <GoldenSectionDivider />

      {/* Nuestra Cultura */}
      <section id="cultura" className="scroll-mt-28 py-14 lg:scroll-mt-36 lg:py-20 bg-foreground relative overflow-hidden">
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
            <h2 className={`font-serif text-4xl sm:text-5xl font-bold mt-2 mb-6 ${sectionTitleClass}`}>
              Nuestra Cultura
            </h2>
            <p className={`${sectionLeadClass} text-card/75 mb-8`}>
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
                  <span className="font-[Arial] text-lg font-semibold leading-snug text-card sm:text-xl">{item}</span>
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

      <GoldenSectionDivider />

      {/* Testimonios */}
      <section id="testimonios" className="scroll-mt-28 py-14 lg:scroll-mt-36 lg:py-20 bg-card text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Testimonios</span>
            <h2 className={`font-serif text-4xl sm:text-5xl font-bold mt-2 ${sectionTitleClass}`}>Lo que dicen nuestros alumnos</h2>
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

      <GoldenSectionDivider />

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-28 py-14 lg:scroll-mt-36 lg:py-20 bg-foreground relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(185,28,28,0.1),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Contacto</span>
              <h2 className={`font-serif text-4xl sm:text-5xl font-bold mt-2 mb-6 ${sectionTitleClass}`}>
                ¿Querés empezar a bailar?
              </h2>
              <p className={`${sectionLeadClass} text-card/75 mb-8`}>
                Dejanos tu consulta y te asesoramos según tu nivel y disponibilidad. También podés visitar nuestro perfil de Instagram y Facebook.
              </p>

              <div className="flex gap-4">
                <a
                  aria-label="Abrir Instagram"
                  href="https://www.instagram.com/salsa.en.cordoba?igsh=MW5ua2NjdDN4a21lOA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center text-pink-500 shadow-lg shadow-black/20 transition-transform hover:scale-105"
                >
                  <FaInstagram className="w-8 h-8 sm:w-9 sm:h-9" />
                </a>

                <a
                  aria-label="Abrir Facebook"
                  href="https://www.facebook.com/Salsa.en.Cordoba1?rdid=hd1RaF0Wfv1ZMEWc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18Hpq3zRsX%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-lg shadow-black/20 transition-transform hover:scale-105"
                >
                  <FaFacebookF className="w-7 h-7 sm:w-8 sm:h-8" />
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
            <a href="#inicio" className="flex items-center" aria-label="Ir al inicio">
              <div className="relative h-20 w-40 overflow-hidden sm:h-24 sm:w-48">
                <Image
                  src="/images/logo-navbar-test.png"
                  alt="Salsa en Córdoba"
                  fill
                  sizes="(min-width: 640px) 192px, 160px"
                  className="object-contain"
                />
              </div>
              <span className="sr-only">Salsa en Córdoba</span>
            </a>

            <p className="text-card/50 text-sm">© 2026 Salsa en Córdoba. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  )
}
