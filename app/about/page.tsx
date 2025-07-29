import Link from "next/link"
import { Zap, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="bg-black py-20 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">About Us</h1>
            <p className="text-lg">The story behind Kaylas Ink</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Where Art Meets Skin</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Kaylas Ink, we believe that tattoos are more than just body art—they're personal
                stories, memories, and expressions of identity. Located in the vibrant heart of Houston, we've been
                serving the community with exceptional tattoo artistry, professional piercings, and custom designs that
                honor both traditional techniques and contemporary innovation.
              </p>
            </div>

            {/* Values */}
            <div className="mb-12 grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Zap className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold">Artistry</h3>
                  <p className="text-muted-foreground">
                    Every tattoo is a unique work of art, crafted with precision, creativity, and respect for your
                    vision.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold">Community</h3>
                  <p className="text-muted-foreground">
                    We're more than a studio—we're a creative space where artists and clients collaborate to create
                    meaningful art.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
                  <p className="text-muted-foreground">
                    Our commitment to excellence means maintaining the highest standards of safety, cleanliness, and
                    artistic quality.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Our Story */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">Our Story</h2>
              <div className="prose max-w-none text-muted-foreground">
                <p className="mb-4">
                  Founded in 2018 by a collective of passionate tattoo artists, Kaylas Ink was born from
                  a shared vision of creating a space where artistry, professionalism, and client care converge. Our
                  name reflects our commitment to personal expression and artistic excellence.
                </p>
                <p className="mb-4">
                  Our talented artists bring diverse backgrounds and specialties, from photorealistic portraits to bold
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
            <div className="mb-10">
              <h2 className="mb-6 text-2xl font-bold">Hours of Operation</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Monday:</span>
                        <span className="text-primary font-medium">Closed</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Tuesday:</span>
                        <span>12:00 PM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Wednesday:</span>
                        <span>12:00 PM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Thursday:</span>
                        <span>12:00 PM - 8:00 PM</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Friday:</span>
                        <span>12:00 PM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Saturday:</span>
                        <span>12:00 PM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sunday:</span>
                        <span className="text-primary font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="mb-4 text-2xl font-bold">Ready to Create Something Amazing?</h2>
              <p className="mb-6 text-muted-foreground">
                Book your consultation today and discover why we're Houston's premier tattoo studio.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="/artists">Book Your Artist</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
