import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Palette } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ArtistsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-xl mb-6">Meet Your <span className="gradient-text">Artist</span></h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">Schedule your consultation with Mollie Row</p>
          </div>
        </div>
      </section>

      {/* Artist Section */}
      <section className="py-12 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <Card className="glass-effect border-primary/20 shadow-2xl overflow-hidden group">
              <CardHeader className="text-center pb-6">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/80 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={`/artist-portraits/Mollie.png`}
                        alt={artist.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-effect" />
                </div>
                <CardTitle className="heading-md mb-2">{artist.name}</CardTitle>
                <p className="text-primary font-semibold text-lg">{artist.title}</p>
              </CardHeader>
              <CardContent className="space-y-6 px-8 pb-8">
                <div className="flex flex-wrap gap-3 justify-center">
                  {artist.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center justify-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{artist.experience}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Palette className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Starting at ${artist.startingPrice}/hour</span>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="font-semibold text-lg mb-3">About {artist.name}:</h4>
                  <p className="text-muted-foreground leading-relaxed">{artist.bio}</p>
                </div>

                <div className="text-center">
                  <h4 className="font-semibold text-lg mb-4">Specializes In:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    {artist.services.map((service) => (
                      <li key={service} className="flex items-center justify-center gap-3">
                        <span className="h-2 w-2 bg-primary rounded-full"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full glow-effect hover:scale-105 transition-all duration-300 py-4"
                  size="lg"
                  disabled
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book with {artist.name} (Coming Soon)
                </Button>

                <p className="text-center text-muted-foreground">
                  Online booking coming soon. Call us to schedule for now.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-12 lg:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-card/30 to-background" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="heading-lg mb-12">Booking <span className="gradient-text">Information</span></h2>
            <div className="grid gap-6 md:grid-cols-2 mb-12">
              <Card className="glass-effect border-primary/20 shadow-2xl group card-hover">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Consultation Required</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All custom tattoos require a consultation to discuss design, placement, and pricing.
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-effect border-primary/20 shadow-2xl group card-hover">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Deposit Policy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A $50 deposit is required to secure your appointment and will be applied to your final cost.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">For immediate booking, call us or visit our studio</p>
              <Button
                size="lg"
                variant="outline"
                className="px-12 py-4 glass-effect border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
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

const artist = {
  id: "mollie-row",
  name: "Mollie Row",
  title: "Tattoo Artist & Owner",
  specialties: ["Custom Designs", "Fine Line", "Artistic Tattoos", "Color Work"],
  rating: "4.9",
  reviews: "150+",
  experience: "10+ years experience",
  startingPrice: "150",
  bio: "Mollie Row is passionate about creating unique, meaningful tattoos that tell each client's personal story. Her artistic approach and attention to detail ensure every piece is a one-of-a-kind work of art.",
  services: [
    "Custom Tattoo Designs",
    "Fine Line Work",
    "Artistic Pieces",
    "Color Tattoos",
    "Cover-Up Work",
    "Consultation & Design",
  ],
}