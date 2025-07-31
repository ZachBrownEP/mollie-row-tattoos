import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import GoogleMap from "@/google-map"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="bg-black py-20 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
            <p className="text-lg">Visit us or get in touch to schedule your consultation</p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Visit Our Studio</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="mt-1 text-muted-foreground">Tempe, Arizona</p>
                      <Button variant="link" className="mt-2 h-auto p-0 text-primary hover:text-primary/80" asChild>
                        <a
                          href="https://maps.google.com/?q=Tempe,+Arizona"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Navigation className="mr-1 h-4 w-4" />
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <Phone className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="mt-1 text-muted-foreground">Call us to book or ask questions</p>
                      <p className="text-lg font-semibold">(512) 555-0123</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <Mail className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="mt-1 text-muted-foreground">Send us a message</p>
                      <p className="text-lg font-semibold">info@ponyboytattoos.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <Clock className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-semibold">Hours</h3>
                      <div className="mt-1 space-y-1 text-sm text-muted-foreground">
                        <p>Tuesday - Saturday: 12:00 PM - 8:00 PM</p>
                        <p>Sunday - Monday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
                <Card>
                  <CardContent className="p-6">
                    <p className="mb-4 text-sm text-muted-foreground">
                      Stay updated with our latest work and announcements on Instagram.
                    </p>
                    <a href="https://www.instagram.com/ponyboytattoos/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                      @ponyboytattoos on Instagram
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold">Book a Consultation</h2>
              <Card>
                <CardContent className="p-6">
                  <p className="mb-6">
                    Ready for your next tattoo? Choose your preferred artist and schedule your consultation. Our online
                    booking system will be available soon!
                  </p>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg" asChild>
                    <Link href="/artists">Choose Your Artist</Link>
                  </Button>
                </CardContent>
              </Card>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold">Walk-ins Welcome</h3>
                <Card>
                  <CardContent className="p-6">
                    <p className="mb-4 text-sm text-muted-foreground">
                      We welcome walk-in consultations based on availability. However, to guarantee your preferred time
                      and artist, we recommend booking in advance.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Peak Hours:</strong> Evenings and weekends tend to be busier
                      </p>
                      <p>
                        <strong>Best Times for Walk-ins:</strong> Weekday afternoons
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold">Policies</h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>
                        <h4 className="font-semibold text-foreground">Deposit Policy</h4>
                        <p>
                          A $50 deposit is required to secure your appointment and will be applied to your final cost.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Payment</h4>
                        <p>We accept cash, credit cards, and Venmo.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Age Policy</h4>
                        <p>Must be 18+ for tattoos.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Aftercare</h4>
                        <p>Detailed aftercare instructions and products are provided with every tattoo.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-2xl font-bold">Find Us</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <GoogleMap
                apiKey="AIzaSyCLemH2gsGIe3bFRKZ2jhpB1z6VCsNvXQM"
                address="Tempe, Arizona"
                className="h-96"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">Tempe, Arizona</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
