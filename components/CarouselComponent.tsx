"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselComponent() {
  const images = [
    { id: 1, src: "/1.jpg", alt: "Image 1" },
    { id: 2, src: "/2.jpg", alt: "Image 2" },
    { id: 3, src: "/3.jpg", alt: "Image 3" },
  ]

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full">
          {images.map((image) => (
            <CarouselItem key={image.id} className="basis-full h-full p-0">
              <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 z-10" />
        <CarouselNext className="right-4 z-10" />
      </Carousel>
    </div>
  )
}
