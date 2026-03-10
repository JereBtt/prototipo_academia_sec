"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Instagram, Facebook, Menu, X, Users, Music, Heart, Award, MapPin, Clock, CheckCircle, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const scheduleFromZero = [
  { day: "Martes", location: "Studio – Vélez Sarsfield 520", level: "Multinivel (apto principiantes)", style: "Salsa", time: "21:00 a 22:30" },
  { day: "Jueves", location: "Studio – Vélez Sarsfield 520", level: "Multinivel (apto principiantes)", style: "Bachata", time: "21:00 a 22:30" },
  { day: "Sábado", location: "BestClub Gym – Chacabuco 472", level: "Introductorio I (Cero absoluto)", group: "Grupo 1", style: "Salsa & Bachata", time: "15:00 a 16:30" },
  { day: "Sábado", location: "BestClub Gym – Chacabuco 472", level: "Introductorio II", group: "Grupo 2", style: "Salsa & Bachata", time: "15:00 a 16:30" },
]

const scheduleExperienced = [
  { day: "Martes", location: "Studio – Vélez Sarsfield 520", level: "Multinivel", style: "Salsa", time: "21:00 a 22:30" },
  { day: "Jueves", location: "Studio – Vélez Sarsfield 520", level: "Multinivel", style: "Bachata", time: "21:00 a 22:30" },
  { day: "Sábado", location: "BestClub Gym – Chacabuco 472", level: "Principiantes 1 / 1.5", group: "Grupo 1", style: "Bachata", time: "16:30 a 18:00" },
  { day: "Sábado", location: "BestClub Gym – Chacabuco 472", level: "Principiantes 2 / Intermedios", group: "Grupo 2", style: "Bachata", time: "16:30 a 18:00" },
  { day: "Sábado", location: "BestClub Gym – Chacabuco 472", level: "Principiantes 1 / 1.5", group: "Grupo 1", style: "Salsa", time: "18:00 a 19:30" },
  { day: "Sábado", location: "BestClub Gym – Chacabuco 472", level: "Principiantes 2 / Intermedios", group: "Grupo 2", style: "Salsa", time: "18:00 a 19:30" },
]

const testimonials = [
  { name: "María García", quote: "Empecé desde cero y en pocos meses ya me siento segura bailando. El ambiente es increíble.", image: "/images/testimonial-1.jpg" },
  { name: "Laura Fernández", quote: "Los profesores son muy pacientes y dedicados. Cada clase es un momento para desconectar y disfrutar.", image: "/images/testimonial-2.jpg" },
  { name: "Carlos Rodríguez", quote: "Vine solo y encontré una comunidad. Ahora no me pierdo ninguna clase.", image: "/images/testimonial-3.jpg" },
]

export default function Version2Energetic() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Niveles y Horarios", href: "#horarios" },
    { name: "Clases", href: "#clases" },
    { name: "Cultura", href: "#cultura" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <div className="min-h-screen bg-foreground text-card overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm border-b border-card/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center rotate-3">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-serif text-2xl font-bold text-card">Salsa en Córdoba</span>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-card/70 hover:text-primary transition-colors uppercase tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full px-6">
                <Phone className="w-4 h-4" />
                WhatsApp
              </Button>
              <button
                className="lg:hidden p-2 text-card"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-foreground border-t border-card/10">
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
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-16 lg:pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-dancing.jpg"
            alt="Pareja bailando salsa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 border-4 border-primary/30 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl hidden lg:block" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wide">+13 años de experiencia</span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-card leading-none text-balance">
              Sentí el <span className="text-primary">ritmo.</span><br />
              Viví la <span className="text-primary">pasión.</span>
            </h1>
            <p className="mt-6 text-xl text-card/80 leading-relaxed max-w-xl">
              Salsa y Bachata en Córdoba. Clases para todos los niveles en un ambiente lleno de energía y buenas vibras.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full text-lg px-8 py-6">
                <Phone className="w-5 h-5" />
                Consultar por WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-card text-card hover:bg-card hover:text-foreground gap-2 rounded-full text-lg px-8 py-6 bg-transparent">
                Ver horarios
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              {[
                { icon: Users, text: "Multinivel" },
                { icon: Heart, text: "Ambiente único" },
                { icon: Award, text: "4+ profes" },
                { icon: Music, text: "Desde cero" },
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

      {/* Nuestras Clases */}
      <section id="clases" className="py-20 lg:py-28 bg-foreground relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(185,28,28,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Metodología</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-card mt-2">Nuestras Clases</h2>
            <p className="mt-4 text-card/70 leading-relaxed text-lg">
              Aprendé a tu ritmo con profesores dedicados y una metodología pensada para que disfrutes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Multinivel", description: "Grupos organizados según tu nivel real de baile.", color: "from-red-600 to-orange-500" },
              { icon: Award, title: "4+ Profes", description: "Atención personalizada y correcciones en tiempo real.", color: "from-orange-500 to-yellow-500" },
              { icon: Music, title: "Musicalidad", description: "Técnica, ritmo y conexión con la música latina.", color: "from-red-700 to-red-500" },
              { icon: Heart, title: "Diversión", description: "Un espacio donde el protagonista sos vos.", color: "from-red-500 to-pink-500" },
            ].map((feature) => (
              <div 
                key={feature.title} 
                className="group relative bg-card/5 border border-card/10 rounded-2xl p-6 hover:bg-card/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-card" />
                </div>
                <h3 className="font-serif text-xl font-bold text-card mb-2">{feature.title}</h3>
                <p className="text-card/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Niveles y Horarios */}
      <section id="horarios" className="py-20 lg:py-28 bg-card text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Encontrá tu horario</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-2">Niveles y Horarios</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Desde Cero */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-500 rounded-3xl blur-sm opacity-30" />
              <div className="relative bg-card rounded-2xl p-6 lg:p-8 border border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center -rotate-3">
                    <Sparkles className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">Desde Cero</h3>
                    <p className="text-muted-foreground">Primera vez bailando</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {scheduleFromZero.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-secondary rounded-xl hover:bg-primary/5 transition-colors">
                      <div className="flex items-center gap-2 min-w-[100px]">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-bold text-foreground">{item.day}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{item.style}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location.split(" – ")[0]}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ya Bailo */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl blur-sm opacity-30" />
              <div className="relative bg-card rounded-2xl p-6 lg:p-8 border border-accent/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center rotate-3">
                    <Zap className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">Ya Bailo</h3>
                    <p className="text-muted-foreground">Con experiencia previa</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {scheduleExperienced.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-secondary rounded-xl hover:bg-accent/5 transition-colors">
                      <div className="flex items-center gap-2 min-w-[100px]">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="font-bold text-foreground">{item.day}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{item.style}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location.split(" – ")[0]}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultura */}
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
                <p className="font-serif text-4xl font-bold text-primary">13+</p>
                <p className="text-sm text-card/70">Años</p>
              </div>
              <div className="w-px h-12 bg-card/20" />
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-primary">1000+</p>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(185,28,28,0.15),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Contacto</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-card mt-2 mb-6">
                ¿Listo para bailar?
              </h2>
              <p className="text-card/70 leading-relaxed text-lg mb-8">
                Escribinos y te ayudamos a encontrar la clase perfecta para vos. No importa tu nivel, acá hay lugar para todos.
              </p>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full text-lg px-8 mb-8">
                <Phone className="w-5 h-5" />
                Contactanos por WhatsApp
              </Button>

              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors group">
                  <Instagram className="w-6 h-6 text-card group-hover:text-primary-foreground" />
                </a>
                <a href="#" className="w-12 h-12 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors group">
                  <Facebook className="w-6 h-6 text-card group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-orange-500 rounded-3xl blur-lg opacity-20" />
              <Card className="relative border-card/20 bg-card/5 backdrop-blur">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-card mb-2 block">Nombre *</label>
                      <Input placeholder="Tu nombre" className="bg-card/10 border-card/20 text-card placeholder:text-card/50 rounded-xl" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-card mb-2 block">Email *</label>
                      <Input type="email" placeholder="tu@email.com" className="bg-card/10 border-card/20 text-card placeholder:text-card/50 rounded-xl" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-card mb-2 block">Teléfono</label>
                      <Input placeholder="+54" className="bg-card/10 border-card/20 text-card placeholder:text-card/50 rounded-xl" />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-lg font-semibold">
                      Enviar consulta
                    </Button>
                  </form>
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
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center rotate-3">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-serif text-2xl font-bold text-card">Salsa en Córdoba</span>
            </div>

            <p className="text-card/50 text-sm text-center">
              Más de 13 años haciendo bailar corazones en Córdoba, Argentina.
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5 text-card" />
              </a>
              <a href="#" className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5 text-card" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-card/10 text-center text-card/40 text-sm">
            © 2024 Salsa en Córdoba. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
