"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  name: string
  text: string
}

interface TestimonialSliderProps {
  testimonials?: Testimonial[]
}

export default function TestimonialSlider({ testimonials = [] }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (testimonials.length === 0) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  if (testimonials.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No testimonials available</p>
      </div>
    )
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 text-center">
          <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
          <blockquote className="text-lg md:text-xl mb-6 leading-relaxed">
            "{testimonials[currentIndex].text}"
          </blockquote>
          <cite className="text-primary font-semibold">— {testimonials[currentIndex].name}</cite>
        </CardContent>
      </Card>

      <div className="flex justify-center items-center mt-6 gap-4">
        <Button variant="outline" size="icon" onClick={goToPrevious} className="rounded-full bg-transparent">
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <Button variant="outline" size="icon" onClick={goToNext} className="rounded-full bg-transparent">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
