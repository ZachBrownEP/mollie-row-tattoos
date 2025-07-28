import Link from "next/link"
import { Clock, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="bg-black py-20 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
            <p className="text-lg">Professional tattoo artistry and body modification services</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            {serviceCategories.map((category) => (
              <div key={category.name} className="mb-12">
                <h2 className="mb-6 text-2xl font-bold">{category.name}</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service) => (
                    <Card key={service.name} className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{service.name}</span>
                          <span className="text-lg font-bold text-primary">${service.price}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                        {service.popular && (
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="text-xs font-medium text-yellow-600">Most Popular</span>
                          </div>
                        )}
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
      <section className="bg-gray-50 py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-2xl font-bold">Additional Services</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {addOnServices.map((service) => (
                <Card key={service.name}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div>
                      <h3 className="font-semibold">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <span className="font-bold text-primary">${service.price}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Ready to Book?</h2>
            <p className="mb-8 text-muted-foreground">Choose your artist and schedule your consultation today</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/artists">Book Your Artist</Link>
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
