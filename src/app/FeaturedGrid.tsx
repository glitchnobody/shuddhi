"use client";
import React from "react";
import HeroImage1 from "../images/Homepage/Hero/hero.png";
import HeroImage2 from "../images/Homepage/Hero/hero2.png";
import Autoplay from "embla-carousel-autoplay";
import { EmblaPluginType } from "embla-carousel";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const heroCarouselImages = [HeroImage1, HeroImage2];

export default function FeaturedGrid() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className=" my-10 px-3">
      <h2 className="text-6xl font-medium mb-2">Featured</h2>
      <Carousel
        plugins={[plugin.current as any]}
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {heroCarouselImages.map((image, index) => (
            <CarouselItem
              className=" w-full h-[calc(60vh)] relative"
              key={index}
            >
              <Image
                src={image}
                alt={`HeroImage${index + 1}`}
                fill
                className="w-full h-fill pb-3 object-cover object-center"
                layout="justify-content"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
