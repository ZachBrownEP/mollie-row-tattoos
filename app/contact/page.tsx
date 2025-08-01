import React from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Navigation, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import GoogleMap from "@/google-map"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col no-horizontal-scroll">
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="heading-xl mb-6 mobile-safe">Contact <span className="gradient-text">Us</span></h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mobile-safe">Visit us or get in touch to schedule your consultation</p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 lg:gap-12 lg:grid-cols-2">
            <div>
              <h2 className="heading-md mb-8">Visit Our <span className="gradient-text">Studio</span></h2>
              <div className="space-y-6">
                <Card className="glass-effect border-primary/20 shadow-2xl group card-hover">
                  <CardContent className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg mb-2">Address</h3>
                      <p className="text-muted-foreground mb-4 text-sm sm:text-base lg:text-lg mobile-safe">271 W McMillan St Cincinnati, OH, United States</p>
                      <Button variant="outline" className="group/btn text-xs sm:text-sm" asChild>
                        <a
                          href="https://maps.google.com/?q=271+W+McMillan+St+Cincinnati,+OH,+United+States"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Navigation className="h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform" />
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border-primary/20 shadow-2xl group card-hover">
                  <CardContent className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg mb-2">Phone</h3>
                      <p className="text-muted-foreground mb-2 text-sm sm:text-base mobile-safe">Call us to book or ask questions</p>
                      <a href="tel:+15125550123" className="text-lg sm:text-xl font-bold text-primary hover:text-primary/80 transition-colors mobile-safe">
                        (512) 555-0123
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border-primary/20 shadow-2xl group card-hover">
                  <CardContent className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground mb-2 text-sm sm:text-base mobile-safe">Send us a message</p>
                      <a href="mailto:info@risatattoos.com" className="text-sm sm:text-base lg:text-xl font-bold text-primary hover:text-primary/80 transition-colors mobile-safe">
                        info@risatattoos.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border-primary/20 shadow-2xl group card-hover">
                  <CardContent className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg mb-3">Hours</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p className="text-sm sm:text-base lg:text-lg mobile-safe">Tuesday - Saturday: <span className="font-semibold text-foreground">12:00 PM - 8:00 PM</span></p>
                        <p className="text-sm sm:text-base lg:text-lg mobile-safe">Sunday - Monday: <span className="font-semibold text-primary">Closed</span></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="heading-md mb-6 mobile-safe">Follow <span className="gradient-text">Us</span></h3>
                <Card className="glass-effect border-primary/20 shadow-2xl group card-hover">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                        <Instagram className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="mb-4 text-muted-foreground leading-relaxed text-sm sm:text-base mobile-safe">
                          Stay updated with our latest work and announcements on Instagram.
                        </p>
                        <Button variant="outline" size="sm" className="text-xs sm:text-sm" asChild>
                          <a href="https://www.instagram.com/bai.bai.bunni.tattoos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="mobile-safe">@bai.bai.bunni.tattoos</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="heading-md mb-8 mobile-safe">Book a <span className="gradient-text">Consultation</span></h2>
              <Card className="glass-effect border-primary/20 shadow-2xl mb-8">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <p className="mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mobile-safe">
                    Ready for your next tattoo? Choose your preferred artist and schedule your consultation. Our online
                    booking system will be available soon!
                  </p>
                  <Button className="w-full py-3 sm:py-4 glow-effect hover:scale-105 transition-all duration-300" size="lg" asChild>
                    <Link href="/booking">Book Your Consultation</Link>
                  </Button>
                </CardContent>
              </Card>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 mobile-safe">Walk-ins Welcome</h3>
                <Card className="glass-effect border-primary/20 shadow-2xl mb-8">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <p className="mb-6 text-sm sm:text-base text-muted-foreground leading-relaxed mobile-safe">
                      We welcome walk-in consultations based on availability. However, to guarantee your preferred time
                      and artist, we recommend booking in advance.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm sm:text-base mobile-safe"><strong className="text-foreground">Peak Hours:</strong> <span className="text-muted-foreground">Evenings and weekends tend to be busier</span></p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm sm:text-base mobile-safe"><strong className="text-foreground">Best Times for Walk-ins:</strong> <span className="text-muted-foreground">Weekday afternoons</span></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 mobile-safe">Studio Policies</h3>
                <Card className="glass-effect border-primary/20 shadow-2xl">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-base sm:text-lg mb-2 text-foreground mobile-safe">Deposit Policy</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mobile-safe">
                          A $100 deposit is required to secure your appointment and will be applied to your final cost.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg mb-2 text-foreground mobile-safe">Payment</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mobile-safe">We accept cash, credit cards, and Venmo.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg mb-2 text-foreground mobile-safe">Age Policy</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mobile-safe">Must be 18+ for tattoos. Valid ID required.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg mb-2 text-foreground mobile-safe">Aftercare</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mobile-safe">Detailed aftercare instructions and products are provided with every tattoo.</p>
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
      <section className="py-12 lg:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-card/30 to-background" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4 mobile-safe">Find <span className="gradient-text">Us</span></h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl glass-effect border border-primary/20">
              <GoogleMap className="h-64 sm:h-80 md:h-96 lg:h-[500px]" />
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-medium mobile-safe">271 W McMillan St Cincinnati, OH, United States</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
