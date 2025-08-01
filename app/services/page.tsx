import React from "react"
import Link from "next/link"
import { Clock, Star, Zap, Palette, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-xl mb-6">Our <span className="gradient-text">Services</span></h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">Professional tattoo artistry and body modification services</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={category.name} className="mb-16 lg:mb-20">
                <div className="text-center mb-12">
                  <h2 className="heading-lg mb-4">
                    {category.name === 'Tattoo Services' && 'Tattoo '}
                    {category.name === 'Piercing Services' && 'Piercing '}
                    {category.name === 'Consultation Services' && 'Consultation '}
                    <span className="gradient-text">Services</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto" />
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service) => (
                    <Card key={service.name} className="h-full glass-effect border-primary/20 shadow-2xl group card-hover relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <CardHeader className="relative z-10">
                        <CardTitle className="flex items-start justify-between gap-4">
                          <span className="text-lg font-semibold">{service.name}</span>
                          <div className="text-right">
                            <span className="text-xl font-bold text-primary">${service.price}</span>
                            {service.popular && (
                              <Badge className="ml-2 bg-primary/90 text-primary-foreground">
                                <Star className="h-3 w-3 mr-1" />
                                Popular
                              </Badge>
                            )}
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <Clock className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium">{service.duration}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-12 lg:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-card/30 to-background" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Additional <span className="gradient-text">Services</span></h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto" />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {addOnServices.map((service) => (
                <Card key={service.name} className="glass-effect border-primary/20 shadow-lg group card-hover">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </div>
                    <div className="ml-4">
                      <span className="font-bold text-xl text-primary">${service.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="heading-lg mb-6">Ready to <span className="gradient-text">Book?</span></h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">Choose your artist and schedule your consultation today</p>
            <Button size="lg" className="px-12 py-4 glow-effect hover:scale-105 transition-all duration-300" asChild>
              <Link href="/booking">Book Your Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

const serviceCategories = [
  {
    name: "Tattoo Services",
    services: [
      {
        name: "Custom Tattoo (Small)",
        price: 150,
        duration: "2-3 hrs",
        description: "Original custom design up to 3 inches. Includes consultation and design time.",
        popular: true,
      },
      {
        name: "Custom Tattoo (Medium)",
        price: 300,
        duration: "4-6 hrs",
        description: "Custom design 3-6 inches. May require multiple sessions for complex pieces.",
        popular: true,
      },
      {
        name: "Custom Tattoo (Large)",
        price: 500,
        duration: "6+ hrs",
        description: "Large custom pieces over 6 inches. Multiple sessions typically required.",
      },
      {
        name: "Flash Tattoo",
        price: 80,
        duration: "1-2 hrs",
        description: "Pre-designed flash pieces. Quick turnaround with no design time needed.",
      },
      {
        name: "Cover-Up Tattoo",
        price: 200,
        duration: "3-5 hrs",
        description: "Transform old tattoos into new artwork. Consultation required for assessment.",
      },
      {
        name: "Touch-Up",
        price: 50,
        duration: "1 hr",
        description: "Free touch-ups within 6 months. After 6 months, standard touch-up rate applies.",
      },
    ],
  },
  {
    name: "Piercing Services",
    services: [
      {
        name: "Ear Piercing",
        price: 40,
        duration: "30 min",
        description: "Professional ear piercing with high-quality jewelry included.",
      },
      {
        name: "Nose Piercing",
        price: 50,
        duration: "30 min",
        description: "Nostril or septum piercing with starter jewelry included.",
      },
      {
        name: "Body Piercing",
        price: 60,
        duration: "45 min",
        description: "Various body piercings including navel, eyebrow, and lip piercings.",
      },
    ],
  },
  {
    name: "Consultation Services",
    services: [
      {
        name: "Design Consultation",
        price: 50,
        duration: "1 hr",
        description: "Discuss your tattoo ideas and create a custom design. Applied to tattoo cost.",
        popular: true,
      },
      {
        name: "Cover-Up Consultation",
        price: 75,
        duration: "1 hr",
        description: "Assessment of existing tattoo and cover-up options. Applied to cover-up cost.",
      },
    ],
  },
]

const addOnServices = [
  {
    name: "Rush Design",
    price: 25,
    description: "Expedited design service for same-week appointments",
  },
  {
    name: "Color Add-On",
    price: 50,
    description: "Additional cost for color work on black & grey pieces",
  },
  {
    name: "Numbing Cream",
    price: 15,
    description: "Professional numbing cream for sensitive areas",
  },
  {
    name: "Aftercare Kit",
    price: 20,
    description: "Complete healing kit with instructions",
  },
  {
    name: "Photo Session",
    price: 30,
    description: "Professional photos of your fresh tattoo",
  },
  {
    name: "Design Revision",
    price: 25,
    description: "Additional design changes beyond initial concept",
  },
]
