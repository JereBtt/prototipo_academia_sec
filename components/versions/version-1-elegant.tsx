"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Instagram, Facebook, Menu, X, Users, Music, Heart, Award, MapPin, Clock, CheckCircle } from "lucide-react"
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

export default function Version1Elegant() {
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">S</span>
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">Salsa en Córdoba</span>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Phone className="w-4 h-4" />
                WhatsApp
              </Button>
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 mt-4">
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
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-card leading-tight text-balance">
              Aprendé Salsa y Bachata en un ambiente divertido y profesional
            </h1>
            <p className="mt-6 text-lg text-card/90 leading-relaxed">
              Más de 13 años haciendo bailar corazones. Clases multinivel, profesores dedicados y un ambiente pensado para que disfrutes desde el primer día.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Phone className="w-5 h-5" />
                Consultar por WhatsApp
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:flex sm:gap-6">
              {[
                "Clases multinivel",
                "Ambiente cálido",
                "Profesores experimentados",
                "No necesitás experiencia"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-card/90">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nuestras Clases */}
      <section id="clases" className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Nuestras Clases</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nuestras clases están pensadas para que cualquiera pueda aprender a bailar, sin importar si empezás desde cero o si ya tenés experiencia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Clases Multinivel", description: "Organizadas por grupos según tu nivel, para aprender a tu ritmo." },
              { icon: Award, title: "Varios Profesores", description: "Más de 4 profesores por clase para atención personalizada." },
              { icon: Music, title: "Técnica y Musicalidad", description: "Combinamos técnica, práctica, musicalidad y conexión." },
              { icon: Heart, title: "Ambiente Cálido", description: "Un espacio para disfrutar, conectar y sentirse bien." },
            ].map((feature) => (
              <Card key={feature.title} className="border-border bg-secondary/30">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Niveles y Horarios */}
      <section id="horarios" className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Niveles y Horarios</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Encontrá el horario y nivel que mejor se adapte a vos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Desde Cero */}
            <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">Desde Cero</h3>
              </div>
              <p className="text-muted-foreground mb-6">Ideal si nunca bailaste. Clases pensadas para acompañarte paso a paso.</p>
              
              <div className="space-y-4">
                {scheduleFromZero.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-2 min-w-[100px]">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">{item.day}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{item.style} - {item.level}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-primary">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ya Bailo */}
            <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">2</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">Ya Bailo</h3>
              </div>
              <p className="text-muted-foreground mb-6">Para quienes ya tienen experiencia y quieren seguir creciendo.</p>
              
              <div className="space-y-4">
                {scheduleExperienced.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-2 min-w-[100px]">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="font-medium text-foreground">{item.day}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{item.style} - {item.level}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-accent">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultura */}
      <section id="cultura" className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nuestra Cultura
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En Salsa en Córdoba creemos que bailar es un espacio para disfrutar, conectar y sentirse bien. 
                Promovemos un ambiente cálido y respetuoso, sin presiones ni exigencias, abierto a todas las edades y niveles.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nuestro objetivo es que cada persona se sienta cómoda, acompañada y motivada, disfrutando del proceso de aprender a bailar y formando parte de una comunidad donde la buena energía es protagonista.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {["Comunidad activa", "Buena energía", "Sin presiones", "Aprendizaje a tu ritmo"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-secondary rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-dancing.jpg"
                  alt="Comunidad bailando"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl">
                <p className="font-serif text-3xl font-bold">13+</p>
                <p className="text-sm opacity-90">años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Lo que dicen nuestros alumnos</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Alumna</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                ¿Querés empezar a bailar?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Dejanos tu consulta y te asesoramos según tu nivel y disponibilidad. También podés contactarnos directamente por WhatsApp.
              </p>

              <div className="space-y-4 mb-8">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  <Phone className="w-5 h-5" />
                  Contactanos por WhatsApp
                </Button>
              </div>

              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <Card className="border-border">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Nombre *</label>
                    <Input placeholder="Tu nombre" className="bg-secondary/50 border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                    <Input type="email" placeholder="tu@email.com" className="bg-secondary/50 border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Teléfono</label>
                    <Input placeholder="+54" className="bg-secondary/50 border-border" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Enviar consulta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-card py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">S</span>
              </div>
              <span className="font-serif text-xl font-semibold">Salsa en Córdoba</span>
            </div>

            <p className="text-card/70 text-sm">
              Más de 13 años haciendo bailar corazones en Córdoba, Argentina.
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-card/20 text-center text-card/50 text-sm">
            © 2024 Salsa en Córdoba. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
