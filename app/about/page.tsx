import React from "react"
import Link from "next/link"
import { Zap, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col no-horizontal-scroll">
      {/* Header */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-xl mb-6 mobile-safe">About <span className="text-black">Us</span></h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mobile-safe">The story behind Mollie Row Tattoos</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="heading-lg mb-6 mobile-safe">Where Art Meets <span className="text-black">Skin</span></h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto mobile-safe">
                At Mollie Row Tattoos, we believe that tattoos are more than just body art—they're personal
                stories, memories, and expressions of identity. Located in the vibrant heart of Asheville, we've been
                serving the community with exceptional tattoo artistry and custom designs that
                honor both traditional techniques and contemporary innovation.
              </p>
            </div>

            {/* Values */}
            <div className="mb-16 grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-3">
              <Card className="text-center glass-effect border-primary/20 shadow-2xl group card-hover relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 glow-effect group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                  </div>
                  <h3 className="mb-4 text-lg sm:text-xl lg:text-2xl font-semibold mobile-safe">Artistry</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mobile-safe">
                    Every tattoo is a unique work of art, crafted with precision, creativity, and respect for your
                    vision.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center glass-effect border-primary/20 shadow-2xl group card-hover relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 glow-effect group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold">Community</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We're more than a studio—we're a creative space where artists and clients collaborate to create
                    meaningful art.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center glass-effect border-primary/20 shadow-2xl group card-hover relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 glow-effect group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold">Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our commitment to excellence means maintaining the highest standards of safety, cleanliness, and
                    artistic quality.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Our Story */}
            <div className="mb-16">
              <h2 className="heading-md mb-8 text-center">Our <span className="text-black">Story</span></h2>
              <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded by Mollie Row, Mollie Row Tattoos was born from
                  a vision of creating a space where artistry, professionalism, and client care converge. Our
                  name reflects our commitment to personal expression and artistic excellence.
                </p>
                <p>
                  Mollie Row brings diverse experience and specialties, from photorealistic portraits to bold
                  traditional work, ensuring that every client finds their perfect artistic match. We pride ourselves on
                  maintaining a sterile, welcoming environment where clients feel comfortable expressing their ideas and
                  collaborating on their perfect piece.
                </p>
                <p>
                  Step into our studio and experience the difference that comes from true artistic passion, technical
                  expertise, and a genuine commitment to bringing your vision to life on skin.
                </p>
              </div>
            </div>

            {/* Hours of Operation */}
            <div className="mb-16">
              <h2 className="heading-md mb-8 text-center">Hours of <span className="text-black">Operation</span></h2>
              <Card className="glass-effect border-primary/20 shadow-2xl max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Monday:</span>
                        <span className="text-primary font-semibold">Closed</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Tuesday:</span>
                        <span>12:00 PM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Wednesday:</span>
                        <span>12:00 PM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Thursday:</span>
                        <span>12:00 PM - 8:00 PM</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Friday:</span>
                        <span>12:00 PM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Saturday:</span>
                        <span>12:00 PM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Sunday:</span>
                        <span className="text-primary font-semibold">Closed</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="heading-md mb-6">Ready to Create Something <span className="text-black">Amazing?</span></h2>
              <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Book your consultation today and discover why we're Asheville's premier tattoo studio.
              </p>
              <Button size="lg" className="px-12 py-4 glow-effect hover:scale-105 transition-all duration-300" asChild>
                <Link href="/booking">Book Your Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
