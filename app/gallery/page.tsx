"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Camera, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
      <section className="bg-black py-20 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Our Work</h1>
            <p className="text-lg">Showcasing the artistry and craftsmanship that defines Yuyuicy Ink</p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((image) => (
              <Card
                key={image.id}
                className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow"
                onClick={() => openLightbox(image)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Ready for Your Turn?</h2>
            <p className="mb-8 text-muted-foreground">
              Book your consultation and experience the artistry that our clients love
            </p>
            <Button size="lg" asChild>
              <Link href="/booking">Book Your Artist</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative aspect-square max-h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="80vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Professional Tattoo Art</h3>
                <p className="text-muted-foreground">Expert artistry by the Yuyuicy Ink team</p>
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
    src: "/portfolio-images/IMG_8531.png",
    alt: "Custom tattoo artwork by Yuyuicy Ink",
  },
  {
    id: 2,
    src: "/portfolio-images/IMG_8532.png",
    alt: "Fine line tattoo work",
  },
  {
    id: 3,
    src: "/portfolio-images/IMG_8533.png",
    alt: "Artistic tattoo design",
  },
]