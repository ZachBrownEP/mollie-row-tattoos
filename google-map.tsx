"use client"

import { MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface GoogleMapProps {
  apiKey?: string
  address?: string
  className?: string
}

export default function GoogleMap({
  apiKey = "AIzaSyCLemH2gsGIe3bFRKZ2jhpB1z6VCsNvXQM",
  address = "1550 N Mason, Chicago, Illinois",
  className = "h-96",
}: GoogleMapProps) {
  const encodedAddress = encodeURIComponent(address)
  
  return (
    <Card className="overflow-hidden shadow-lg">
      <CardContent className="p-0">
        <div className={`${className} relative`}>
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}&zoom=15`}
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <a
              href={`https://maps.google.com/?q=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}