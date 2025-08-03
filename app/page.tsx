import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Phone, Zap, Palette, Shield, Award, Instagram } from "lucide-react"
import TestimonialSlider from "@/testimonial-slider"
import GoogleMap from "@/google-map"

// Sample data
const testimonials = [
  {
    name: "Sarah K.",
    text: "Brooke did an amazing custom piece for me. Her artistic vision and attention to detail is incredible!",
  },
  {
    name: "Marcus T.",
    text: "The fine line work is absolutely perfect. Clean, precise, and exactly what I envisioned.",
  },
  {
    name: "Jessica L.",
    text: "Professional, clean, and talented artist. This is the only place I trust with my ink.",
  },
  {
    name: "David R.",
    text: "The consultation process was thorough and the final result exceeded my expectations. Highly recommend!",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col no-horizontal-scroll">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-8">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 flex items-center">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center w-full">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left hero-content flex flex-col justify-center">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <Badge variant="outline" className="w-fit glass-effect border-primary/30 text-primary hover:glow-effect transition-all duration-300 mx-auto lg:mx-0">
                  <Zap className="w-4 h-4 mr-2" />
                  Asheville's Premier Tattoo Studio
                </Badge>
                <h1 className="heading-xl mobile-safe">
                  Where Art Meets <span className="text-black">Skin</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0 mobile-safe">
                  Your Vision, Our Craft. Experience premium tattoo artistry with Mollie Row in a
                  clean, professional environment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Button size="lg" asChild className="text-base sm:text-lg px-6 sm:px-10 py-4 glow-effect hover:scale-105 transition-all duration-300 flex-1 sm:flex-none">
                  <Link href="/booking">Book Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base sm:text-lg px-6 sm:px-10 py-4 glass-effect border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300 flex-1 sm:flex-none">
                  <Link href="/gallery">View Portfolio</Link>
                </Button>
              </div>
            </div>

            <div className="relative flex items-center justify-center overflow-hidden">
              <div className="aspect-square max-h-[60vh] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl ring-1 ring-primary/20">
                <Image
                  src="/images/tattoo-studio-interior.jpg"
                  alt="Tattoo studio interior with flash art wall"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-4 left-2 sm:left-4 glass-effect rounded-2xl p-2 sm:p-4 shadow-2xl border border-primary/20">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center glow-effect">
                    <Award className="w-5 h-5 sm:w-7 sm:h-7 text-black" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-lg">Award Winning</div>
                    <div className="text-xs sm:text-sm text-primary">Asheville's Best Tattoo Studio 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="heading-lg mb-4 lg:mb-6">Recent <span className="text-black">Work</span></h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our latest tattoo creations and see the quality of our artistry
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 lg:gap-8 mb-12 lg:mb-16">
            {[
              { src: "/portfolio-images/IMG_8731.png", alt: "Custom tattoo artwork by Mollie Row Tattoos" },
              { src: "/portfolio-images/IMG_8732.png", alt: "Fine line tattoo work" },
              { src: "/portfolio-images/IMG_8733.png", alt: "Artistic tattoo design" },
            ].map((image, index) => (
              <Card key={index} className="overflow-hidden  glass-effect border-primary/20 group">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" asChild className="px-12 py-4 glow-effect ">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Artist Preview */}
      <section className="py-16 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="heading-lg mb-4 lg:mb-6">Meet Your <span className="text-black">Artist</span></h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dedicated to creating exceptional body art that tells your story
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="text-center glass-effect border-primary/20 shadow-2xl overflow-hidden group">
              <CardContent className="pt-8 pb-8">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/80 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/artist-portraits/Mollie.png"
                        alt="Mollie Row"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-effect" />
                </div>
                <h3 className="heading-md mb-2">Mollie Row</h3>
                <p className="text-primary font-semibold text-lg mb-6">Artist & Owner</p>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-lg mx-auto">
                  Specializing in custom designs, fine line work, and artistic tattoos. Passionate about creating unique,
                  meaningful pieces for each client.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">Custom Designs</Badge>
                  <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">Fine Line</Badge>
                  <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">Artistic Tattoos</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16 space-y-6">
            <Button size="lg" asChild className="px-12 py-4 glow-effect ">
              <Link href="/booking">Book a Consultation</Link>
            </Button>
            <div>
              <Button size="lg" variant="outline" asChild className="px-10 py-4 border-2 border-black hover:bg-primary/10">
                <a href="https://www.instagram.com/mollierowtattoos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Instagram className="h-6 w-6" />
                  <span>Follow @mollierowtattoos</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="heading-lg mb-6">Our <span className="text-black">Services</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From custom tattoos to professional piercings, we offer a full range of body art services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Custom Tattoos",
                description: "Unique designs tailored to your vision",
                price: "Starting at $150",
              },
              {
                title: "Cover-ups",
                description: "Transform old tattoos into masterpieces",
                price: "Starting at $200",
              },
              {
                title: "Piercings",
                description: "Professional body piercing services",
                price: "Starting at $50",
              },
              {
                title: "Consultations",
                description: "Design planning and price estimates",
                price: "Free",
              },
            ].map((service, index) => (
              <Card key={index} className="glass-effect border-primary/20 group hover:scale-105 transition-transform duration-300 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <div className="text-center">
                      <span className="font-bold text-primary text-lg">{service.price}</span>
                    </div>
                    <div className="text-center">
                      {service.title === "Cover-ups" || service.title === "Consultations" ? (
                        <Button variant="outline" size="sm" className="border-orange-500/50 bg-orange-500/20 text-pink-500 hover:bg-orange-500/30 hover:border-orange-500 transition-all duration-300">
                          Learn More
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10 transition-all duration-300">
                          Learn More
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" asChild className="px-12 py-4 glow-effect ">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-card/30 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="heading-lg mb-6">Why Choose <span className="text-black">Mollie Row Tattoos?</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We combine artistic excellence with the highest standards of safety and professionalism
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="text-center glass-effect border-primary/20 shadow-2xl group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 glow-effect ">
                  <Palette className="w-10 h-10 text-black" />
                </div>
                <CardTitle className="text-2xl font-semibold">Custom Artistry</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-lg leading-relaxed">
                  Every tattoo is a unique masterpiece. Our artists work closely with you to bring your vision to life
                  with exceptional detail and creativity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center glass-effect border-primary/20 shadow-2xl group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 glow-effect ">
                  <Shield className="w-10 h-10 text-black" />
                </div>
                <CardTitle className="text-2xl font-semibold">Safety First</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-lg leading-relaxed">
                  We maintain the highest standards of cleanliness and safety. All equipment is sterilized, and we
                  follow strict health department guidelines.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center glass-effect border-primary/20 shadow-2xl group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 glow-effect ">
                  <Award className="w-10 h-10 text-black" />
                </div>
                <CardTitle className="text-2xl font-semibold">Expert Artists</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-lg leading-relaxed">
                  Our team consists of award-winning artists with years of experience in various styles, from
                  traditional to photorealistic work.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Visit Our Studio</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Asheville, NC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Tuesday - Saturday: 12:00 PM - 8:00 PM</p>
                      <p>Sunday - Monday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Contact</h3>
                    <p className="text-muted-foreground">
                      Phone: (512) 555-0123
                      <br />
                      Email: info@mollierowtatoos.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Directions</Link>
                </Button>
              </div>
            </div>

            <div>
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-12 text-neutral-200">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 flex items-center text-xl font-bold">
                <Zap className="mr-2 h-5 w-5 text-primary" />
                <span className="text-primary">Mollie Row Tattoos</span>
              </h3>
              <p className="mb-2">Professional Tattoo Artistry</p>
              <p className="mb-4">Asheville, NC</p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="hover:text-primary">
                    Custom Tattoos
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary">
                    Cover-ups
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary">
                    Piercings
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary">
                    Consultations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/gallery" className="hover:text-primary">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/artists" className="hover:text-primary">
                    Artists
                  </Link>
                </li>
                <li>
                  <Link href="/aftercare" className="hover:text-primary">
                    Aftercare
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-primary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Contact</h3>
              <p className="mb-2">Asheville, NC</p>
              <p className="mb-2">(512) 555-0123</p>
              <p className="mb-4">Hours: Tue-Sat 12PM-8PM</p>
              <div className="space-y-2">
                <Link href="/contact" className="block text-primary hover:underline">
                  Get Directions
                </Link>
                <a href="https://www.instagram.com/mollierowtattoos" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
                  Follow us on Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-neutral-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Mollie Row Tattoos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}