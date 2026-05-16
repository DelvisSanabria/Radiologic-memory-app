"use client"

import { useState, useEffect, useRef } from "react"
import Slider from "react-slick"
import ProjectionCard from "./ProjectionCard"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Import CSS files for react-slick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function ProjectionSlider({ initialProjections = [] }) {
  const [randomProjections, setRandomProjections] = useState([])
  const sliderRef = useRef(null)

  useEffect(() => {
    const getRandomProjections = () => {
      const shuffled = [...initialProjections].sort(() => 0.5 - Math.random())
      return shuffled.slice(0, 5) // Show 5 random projections
    }

    setRandomProjections(getRandomProjections())

    // Update random projections every hour
    const interval = setInterval(
      () => {
        setRandomProjections(getRandomProjections())
      },
      60 * 60 * 1000,
    ) // 1 hour in milliseconds

    return () => clearInterval(interval)
  }, [initialProjections])

  const settings = {
    dots: true,
    infinite: randomProjections.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }

  const goToPrev = () => {
    sliderRef.current.slickPrev()
  }

  const goToNext = () => {
    sliderRef.current.slickNext()
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h3 className="text-xl font-semibold mb-4">Quick Study (Updates Hourly)</h3>
      {randomProjections.length > 0 ? (
        <div className="relative px-8">
          <Slider ref={sliderRef} {...settings}>
            {randomProjections.map((projection) => (
              <div key={projection.id} className="px-2">
                <ProjectionCard projection={projection} />
              </div>
            ))}
          </Slider>
          <Button
            onClick={goToPrev}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            onClick={goToNext}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <p className="text-center text-gray-500">No studies available.</p>
      )}
    </div>
  )
}

