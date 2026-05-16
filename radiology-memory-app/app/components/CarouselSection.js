"use client"

import { useState, useRef } from "react"
import Slider from "react-slick"
import ProjectionCard from "./ProjectionCard"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Import CSS files for react-slick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function CarouselSection({ title, items, filterOptions, onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const sliderRef = useRef(null)

  const filteredItems =
    selectedFilter === "All"
      ? items
      : items.filter((item) => {
          if (filterOptions.key === "labels") {
            return item[filterOptions.key].includes(selectedFilter)
          }
          return item[filterOptions.key] === selectedFilter
        })

  const settings = {
    dots: true,
    infinite: filteredItems.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter)
    if (onFilterChange) {
      onFilterChange(filter)
    }
  }

  const goToPrev = () => {
    sliderRef.current.slickPrev()
  }

  const goToNext = () => {
    sliderRef.current.slickNext()
  }

  return (
    <div className="w-full max-w-3xl mx-auto mb-12">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
        {filterOptions.options.map((option) => (
          <button
            key={option}
            onClick={() => handleFilterChange(option)}
            className={`px-4 py-2 rounded-full ${
              selectedFilter === option
                ? "bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900"
                : "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {filteredItems.length > 0 ? (
        <div className="relative px-8">
          <Slider ref={sliderRef} {...settings}>
            {filteredItems.map((item) => (
              <div key={item.id} className="px-2">
                <ProjectionCard projection={item} />
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
        <p className="text-center text-gray-500">No studies available for this filter.</p>
      )}
    </div>
  )
}

