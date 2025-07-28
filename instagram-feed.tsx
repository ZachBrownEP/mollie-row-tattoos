"use client"

import { Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const instagramPosts = [
  {
    id: 1,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Fresh traditional rose by Maya ✨",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Portrait work in progress 🎨",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Geometric mandala by Zane 🔥",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Neo-traditional eagle soaring high 🦅",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Delicate fine line florals 🌸",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Japanese dragon sleeve session 🐉",
  },
]

export default function InstagramFeed() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {instagramPosts.map((post) => (
        <Card
          key={post.id}
          className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300"
        >
          <CardContent className="p-0 relative">
            <div className="aspect-square overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <Instagram className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm">{post.caption}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
