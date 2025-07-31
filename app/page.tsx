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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  <Zap className="w-3 h-3 mr-1" />
                  Phoenix's Premier Tattoo Studio
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Where Art Meets <span className="text-primary">Skin</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Your Vision, Our Craft. Experience premium tattoo artistry with Halee Hathaway in a
                  clean, professional environment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link href="/booking">Book Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                  <Link href="/gallery">View Portfolio</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/tattoo-studio-interior.jpg"
                  alt="Tattoo studio interior with flash art wall"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Award Winning</div>
                    <div className="text-sm text-muted-foreground">Phoenix's Best Tattoo Studio 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recent Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our latest tattoo creations and see the quality of our artistry
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { src: "/portfolio-images/IMG_8601.png", alt: "Custom tattoo artwork by Sugs Tattoos" },
              { src: "/portfolio-images/IMG_8602.png", alt: "Fine line tattoo work" },
              { src: "/portfolio-images/IMG_8605.png", alt: "Artistic tattoo design" },
            ].map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Artist Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Your Artist</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated to creating exceptional body art that tells your story
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-4">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/artist-portraits/IMG_8600.png"
                    alt="Halee Hathaway"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Halee Hathaway</h3>
                <p className="text-primary font-medium mb-4">Artist & Owner</p>
                <p className="text-muted-foreground mb-4">
                  Specializing in custom designs, fine line work, and artistic tattoos. Passionate about creating unique,
                  meaningful pieces for each client.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Custom Designs</Badge>
                  <Badge variant="secondary">Fine Line</Badge>
                  <Badge variant="secondary">Artistic Tattoos</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 space-y-4">
            <Button size="lg" asChild>
              <Link href="/booking">Book a Consultation</Link>
            </Button>
            <div>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.instagram.com/sugs_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Instagram className="h-5 w-5" />
                  <span>Follow @sugs_</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From custom tattoos to professional piercings, we offer a full range of body art services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Custom Tattoos",
                description: "Unique designs tailored to your vision",
                price: "Starting at $150",
              },
              {
                title: "Cover-ups",
                description: "Transform old tattoos into new masterpieces",
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
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Sugs Tattoos?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine artistic excellence with the highest standards of safety and professionalism
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Custom Artistry</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Every tattoo is a unique masterpiece. Our artists work closely with you to bring your vision to life
                  with exceptional detail and creativity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We maintain the highest standards of cleanliness and safety. All equipment is sterilized, and we
                  follow strict health department guidelines.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Expert Artists</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
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
                      Phoenix, Arizona
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
                      Email: info@sugstattoos.com
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

            <div className="lg:sticky lg:top-8">
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
                <span className="text-primary">Sugs Tattoos</span>
              </h3>
              <p className="mb-2">Professional Tattoo Artistry</p>
              <p className="mb-4">Phoenix, AZ</p>
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
              <p className="mb-2">Phoenix, Arizona</p>
              <p className="mb-2">(512) 555-0123</p>
              <p className="mb-4">Hours: Tue-Sat 12PM-8PM</p>
              <div className="space-y-2">
                <Link href="/contact" className="block text-primary hover:underline">
                  Get Directions
                </Link>
                <a href="https://www.instagram.com/sugs_/" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
                  Follow us on Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-neutral-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Sugs Tattoos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}