"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Instagram, Facebook, Menu, X, Users, Music, Heart, Award, MapPin, Clock, CheckCircle, Sun } from "lucide-react"
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

export default function Version3Warm() {
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary fill-primary/20" />
              <span className="font-serif text-xl text-foreground">Salsa en Córdoba</span>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button className="hidden sm:flex bg-primary/90 hover:bg-primary text-primary-foreground gap-2 rounded-full shadow-sm">
                <Phone className="w-4 h-4" />
                <span className="hidden md:inline">Escribinos</span>
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
          <div className="lg:hidden bg-background border-t border-border">
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
              <Button className="w-full bg-primary/90 hover:bg-primary text-primary-foreground gap-2 rounded-full mt-4">
                <Phone className="w-4 h-4" />
                Escribinos
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 lg:pt-28 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <Sun className="w-5 h-5" />
                <span className="text-sm font-medium">Bienvenida a nuestra comunidad</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl font-medium text-foreground leading-tight text-balance">
                Aprendé a bailar en un lugar donde te vas a sentir como en casa
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Más de 13 años creando un espacio cálido y acogedor para aprender salsa y bachata. 
                Sin importar tu experiencia, acá hay un lugar para vos.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary/90 hover:bg-primary text-primary-foreground gap-2 rounded-full shadow-sm">
                  <Phone className="w-5 h-5" />
                  Consultar por WhatsApp
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Clases para todos los niveles",
                  "Ambiente familiar",
                  "Profesores dedicados",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/images/hero-dancing.jpg"
                  alt="Pareja bailando salsa"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-serif font-semibold text-foreground">13+</p>
                    <p className="text-xs text-muted-foreground">Años de experiencia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestras Clases */}
      <section id="clases" className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground">Nuestras Clases</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Cada clase está pensada para que te sientas cómoda, acompañada y motivada.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Users, title: "Grupos Reducidos", description: "Clases multinivel organizadas por grupos para que aprendas a tu propio ritmo, con atención personalizada." },
              { icon: Award, title: "Varios Profesores", description: "Más de 4 profesores dedicados para acompañarte, corregir y ayudarte a progresar de manera clara y cuidada." },
              { icon: Music, title: "Técnica y Disfrute", description: "Combinamos técnica, práctica, musicalidad y conexión. El objetivo es que disfrutes cada paso." },
              { icon: Heart, title: "Comunidad Cálida", description: "Un espacio sin presiones donde la buena energía es protagonista. Venís sola o acompañada." },
            ].map((feature) => (
              <Card key={feature.title} className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Niveles y Horarios */}
      <section id="horarios" className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground">Niveles y Horarios</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Encontrá el horario que mejor se adapte a tu rutina.
            </p>
          </div>

          <div className="space-y-8">
            {/* Desde Cero */}
            <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Sun className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground">Empezando de Cero</h3>
                  <p className="text-sm text-muted-foreground">Ideal si es tu primera vez bailando</p>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {scheduleFromZero.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="min-w-[70px]">
                      <p className="font-medium text-foreground">{item.day}</p>
                      <p className="text-sm text-primary">{item.time}</p>
                    </div>
                    <div className="flex-1 border-l border-border pl-4">
                      <p className="text-sm text-foreground">{item.style}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location.split(" – ")[0]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ya Bailo */}
            <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Music className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground">Ya Tengo Experiencia</h3>
                  <p className="text-sm text-muted-foreground">Para seguir creciendo y perfeccionando</p>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {scheduleExperienced.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="min-w-[70px]">
                      <p className="font-medium text-foreground">{item.day}</p>
                      <p className="text-sm text-accent">{item.time}</p>
                    </div>
                    <div className="flex-1 border-l border-border pl-4">
                      <p className="text-sm text-foreground">{item.style}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location.split(" – ")[0]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultura */}
      <section id="cultura" className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
                  Más que una academia, una comunidad
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  En Salsa en Córdoba creemos que bailar es un espacio para disfrutar, conectar y sentirse bien. 
                  No importa si empezás desde cero o si ya tenés experiencia: cada clase es una oportunidad para 
                  aprender, crecer y formar parte de algo especial.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Promovemos un ambiente cálido, respetuoso y sin presiones. Nuestro objetivo es que cada 
                  persona se sienta cómoda, acompañada y motivada.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {["Respeto", "Buena energía", "Sin presiones", "Comunidad"].map((item) => (
                    <span 
                      key={item} 
                      className="px-4 py-2 bg-card border border-border/50 rounded-full text-sm text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hero-dancing.jpg"
                    alt="Comunidad bailando"
                    width={300}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="/images/hero-dancing.jpg"
                    alt="Clase de baile"
                    width={300}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground">Historias de nuestra comunidad</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-border/50 bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative mx-auto mb-4 ring-2 ring-primary/10">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
              ¿Lista para empezar?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Escribinos y te asesoramos según tu nivel y disponibilidad. Estamos acá para ayudarte a dar el primer paso.
            </p>

            <Button size="lg" className="bg-primary/90 hover:bg-primary text-primary-foreground gap-2 rounded-full shadow-sm mb-8">
              <Phone className="w-5 h-5" />
              Contactanos por WhatsApp
            </Button>

            <div className="flex justify-center gap-4 mb-10">
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            <Card className="border-border/50 bg-card/50 text-left">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Nombre *</label>
                      <Input placeholder="Tu nombre" className="bg-background border-border rounded-xl" />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Email *</label>
                      <Input type="email" placeholder="tu@email.com" className="bg-background border-border rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Teléfono</label>
                    <Input placeholder="+54" className="bg-background border-border rounded-xl" />
                  </div>
                  <Button type="submit" className="w-full bg-primary/90 hover:bg-primary text-primary-foreground rounded-xl">
                    Enviar consulta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary fill-primary/20" />
              <span className="font-serif text-lg text-foreground">Salsa en Córdoba</span>
            </div>

            <p className="text-muted-foreground text-sm text-center">
              Más de 13 años haciendo bailar corazones en Córdoba, Argentina.
            </p>

            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-muted-foreground text-xs">
            © 2024 Salsa en Córdoba. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
