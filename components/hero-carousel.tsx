"use client"

import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

const slides = [
  {
    title: "Power Your Future with Volt Wheels",
    description: "From short-term projects to long-term needs, Volt Wheels provides dependable EV charging solutions with built-in support for worry-free operation.",
    highlight: "Innovation is Our Foundation",
  },
  {
    title: "Sustainable Energy Solutions",
    description: "Comprehensive renewable energy systems and smart grid technology powering tomorrow's infrastructure with reliable, efficient solutions.",
    highlight: "Performance & Reliability",
  },
  {
    title: "Integrated Mobility Ecosystem",
    description: "Complete EV mobility solutions from charging infrastructure to fleet management, designed for seamless integration and maximum efficiency.",
    highlight: "Your Trusted Partner",
  },
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  useEffect(() => {
    if (!emblaApi) return

    setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="min-w-0 flex-[0_0_100%]">
                <div className="flex flex-col items-center justify-center text-center px-4 py-12 md:py-20">
                  <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="pt-4">
                      <p className="text-xl md:text-2xl font-semibold text-primary">
                        {slide.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

