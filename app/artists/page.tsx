import Link from "next/link"
import { Calendar, Star, Clock, Palette } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ArtistsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="bg-black py-20 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Book Your Artist</h1>
            <p className="text-lg">Choose your preferred tattoo artist and schedule your consultation</p>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {artists.map((artist) => (
                <Card key={artist.id} className="overflow-hidden">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-600">{artist.name.charAt(0)}</span>
                    </div>
                    <CardTitle className="text-2xl">{artist.name}</CardTitle>
                    <p className="text-muted-foreground">{artist.title}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {artist.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">
                          {artist.rating} rating • {artist.reviews} reviews
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{artist.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Palette className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Starting at ${artist.startingPrice}/hour</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">About {artist.name}:</h4>
                      <p className="text-sm text-muted-foreground">{artist.bio}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Specializes In:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {artist.services.map((service) => (
                          <li key={service} className="flex items-center gap-2">
                            <span className="h-1 w-1 bg-primary rounded-full"></span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      size="lg"
                      disabled
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Book with {artist.name} (Coming Soon)
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Online booking coming soon. Call us to schedule for now.
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
                  <h3 className="mb-2 font-semibold">Consultation Required</h3>
                  <p className="text-sm text-muted-foreground">
                    All custom tattoos require a consultation to discuss design, placement, and pricing.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Deposit Policy</h3>
                  <p className="text-sm text-muted-foreground">
                    A $50 deposit is required to secure your appointment and will be applied to your final cost.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <p className="mb-4 text-muted-foreground">For immediate booking, call us or visit our studio</p>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
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

const artists = [
  {
    id: "maya",
    name: "Maya Rodriguez",
    title: "Lead Tattoo Artist",
    specialties: ["Realism", "Portraits", "Black & Grey", "Fine Line"],
    rating: "4.9",
    reviews: "200+",
    experience: "8+ years experience",
    startingPrice: "150",
    bio: "Maya specializes in photorealistic portraits and detailed black & grey work. Her attention to detail and ability to capture emotion in her pieces has made her one of Austin's most sought-after artists.",
    services: [
      "Portrait Tattoos",
      "Realism Work",
      "Black & Grey Pieces",
      "Fine Line Tattoos",
      "Memorial Tattoos",
      "Custom Designs",
    ],
  },
  {
    id: "zane",
    name: "Zane Mitchell",
    title: "Senior Tattoo Artist",
    specialties: ["Traditional", "Neo-Traditional", "Color Work", "Japanese"],
    rating: "4.8",
    reviews: "180+",
    experience: "12+ years experience",
    startingPrice: "140",
    bio: "Zane brings over a decade of experience in traditional and neo-traditional tattooing. His bold use of color and clean line work creates timeless pieces that stand the test of time.",
    services: [
      "Traditional Tattoos",
      "Neo-Traditional Work",
      "Japanese Style",
      "Color Tattoos",
      "Flash Designs",
      "Cover-Up Work",
    ],
  },
]
