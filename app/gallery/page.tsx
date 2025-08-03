"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Camera, X, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const openLightbox = (image: any) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="heading-xl mb-6">Our <span className="text-black">Work</span></h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">Showcasing the artistry and craftsmanship that defines Mollie Row Tattoos</p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((image) => (
              <Card
                key={image.id}
                className="group cursor-pointer overflow-hidden glass-effect border-primary/20 shadow-2xl card-hover relative"
                onClick={() => openLightbox(image)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="bg-primary/90 text-primary-foreground mb-2">
                          <Eye className="h-3 w-3 mr-1" />
                          View Details
                        </Badge>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Camera className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">More portfolio pieces coming soon!</p>
            <Button variant="outline" className="px-8 py-3" disabled>
              Load More Images
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-card/30 to-background" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="heading-lg mb-6">Ready for Your <span className="text-black">Turn?</span></h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Book your consultation and experience the artistry that our clients love
            </p>
            <Button size="lg" className="px-12 py-4 glow-effect hover:scale-105 transition-all duration-300" asChild>
              <Link href="/booking">Book Your Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 w-10 h-10 rounded-full border border-white/20 z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>

            <div className="bg-card rounded-lg overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/3] max-h-[70vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain bg-black"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Professional Tattoo Art</h3>
                <p className="text-muted-foreground mb-4">Expert artistry by Mollie Row at Mollie Row Tattoos</p>
                <Button className="w-full sm:w-auto" asChild>
                  <Link href="/booking">Book Similar Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

// Tattoo gallery images
const galleryImages = [
  {
    id: 1,
    src: "/portfolio-images/IMG_8731.png",
    alt: "Custom tattoo artwork by Mollie Row Tattoos",
  },
  {
    id: 2,
    src: "/portfolio-images/IMG_8732.png",
    alt: "Fine line tattoo work",
  },
  {
    id: 3,
    src: "/portfolio-images/IMG_8733.png",
    alt: "Artistic tattoo design",
  },
]