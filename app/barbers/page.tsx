import Link from "next/link"
import { Calendar, Star, Clock, Scissors } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BarbersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="bg-black py-20 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Book Your Barber</h1>
            <p className="text-lg">Choose your preferred barber and schedule your appointment</p>
          </div>
        </div>
      </section>

      {/* Barbers Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {barbers.map((barber) => (
                <Card key={barber.id} className="overflow-hidden">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-600">{barber.name.charAt(0)}</span>
                    </div>
                    <CardTitle className="text-2xl">{barber.name}</CardTitle>
                    <p className="text-muted-foreground">{barber.title}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {barber.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">
                          {barber.rating} rating • {barber.reviews} reviews
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{barber.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Scissors className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Starting at ${barber.startingPrice}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">About {barber.name}:</h4>
                      <p className="text-sm text-muted-foreground">{barber.bio}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Available Services:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {barber.services.map((service) => (
                          <li key={service} className="flex items-center gap-2">
                            <span className="h-1 w-1 bg-red-600 rounded-full"></span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-red-600 text-white hover:bg-red-700" size="lg" disabled>
                      <Calendar className="mr-2 h-4 w-4" />
                      Book with {barber.name} (Coming Soon)
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Calendly integration coming soon. Call us to book for now.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="bg-gray-50 py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Booking Information</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Walk-ins Welcome</h3>
                  <p className="text-sm text-muted-foreground">
                    We accept walk-ins based on availability, but booking ahead is recommended.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Cancellation Policy</h3>
                  <p className="text-sm text-muted-foreground">
                    Please give us at least 2 hours notice if you need to cancel or reschedule.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <p className="mb-4 text-muted-foreground">For immediate booking, call us or visit our shop</p>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const barbers = [
  {
    id: "precendente",
    name: "Precendente",
    title: "Master Barber",
    specialties: ["Classic Cuts", "Fades", "Straight Razor", "Hot Towel"],
    rating: "4.9",
    reviews: "150+",
    experience: "10+ years experience",
    startingPrice: "25",
    bio: "Precendente is a master of classic barbering techniques with over a decade of experience. Known for his precision with fades and traditional straight razor shaves, he brings old-school craftsmanship to every cut.",
    services: [
      "Classic Haircuts",
      "Skin Fades",
      "Beard Trims",
      "Hot Towel Shaves",
      "Mustache Grooming",
      "Hair Washing & Styling",
    ],
  },
  {
    id: "gabriel",
    name: "Gabriel (Gabo)",
    title: "Senior Barber",
    specialties: ["Modern Styles", "Beard Work", "Designs", "Color"],
    rating: "4.8",
    reviews: "120+",
    experience: "8+ years experience",
    startingPrice: "25",
    bio: "Gabriel, known as Gabo, specializes in modern cuts and creative beard styling. His attention to detail and ability to create custom looks makes him a favorite among clients looking for contemporary styles.",
    services: [
      "Modern Haircuts",
      "Beard Sculpting",
      "Hair Designs",
      "Eyebrow Trimming",
      "Hair Washing",
      "Styling & Finishing",
    ],
  },
]
