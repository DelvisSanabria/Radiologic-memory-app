"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function ImageViewer({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const goToPrevious = (e) => {
    e.stopPropagation()
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1))
  }

  const goToNext = (e) => {
    e.stopPropagation()
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0))
  }

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  if (!images || images.length === 0) {
    return <div className="w-full h-full bg-gray-200 flex items-center justify-center">No images available</div>
  }

  return (
    <>
      <div className="relative w-full h-full">
        <div className="absolute inset-0" onClick={toggleFullScreen}>
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Image ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {images.length > 1 && (
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full bg-white bg-opacity-50 hover:bg-opacity-75"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous image</span>
            </Button>
          </div>
        )}
        {images.length > 1 && (
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full bg-white bg-opacity-50 hover:bg-opacity-75"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next image</span>
            </Button>
          </div>
        )}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      {isFullScreen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`Full-screen Image ${currentIndex + 1}`}
              layout="fill"
              objectFit="contain"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={toggleFullScreen}
              className="absolute top-4 right-4 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close full-screen view</span>
            </Button>
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75"
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75"
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next image</span>
                </Button>
              </>
            )}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-lg">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

