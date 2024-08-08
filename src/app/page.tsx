"use client";
import Image from "next/image";
import react, { useState, useEffect } from "react";
import HeroImage1 from "../images/Homepage/Hero/hero.png";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const marqueeVariants = {
  animate: {
    x: [0, -1421.235],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

export default function Home() {
  return (
    <main className=" font-serif">
      <section className=" relative flex items-center justify-center p-5 pt-24 bg-orange-900 w-full h-[calc(100vh-20vh)]">
        <div className=" relative w-full h-full">
          <div className=" absolute z-10 w-full h-full p-3 md:p-20 flex flex-col gap-4 justify-end text-white font-medium">
            <h1 className=" text-5xl md:text-8xl italic ">
              Let the fabric <br /> Do the talking.
            </h1>
            <p className=" text-md font-sans max-w-xl text-stone-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ex
              laboriosam laudantium veniam, minima sint accusantium molestias
              sapiente vero culpa.
            </p>
          </div>
          <Image
            src={HeroImage1}
            className=" rounded-xl object-cover object-center "
            alt="Hero Image"
            fill
          />
        </div>
      </section>
      <section className=" py-12">
        <div className="  max-w-full w-screen h-[66px] relative overflow-x-hidden">
          <motion.div
            className=" absolute flex-nowrap mx-5 uppercase"
            variants={marqueeVariants}
            animate="animate"
          >
            <h2 className=" text-black flex gap-12 font-sans items-center font-bold text-6xl ">
              Sustainable
              <Icon width={35} height={35} icon="lucide:earth" />
              Ethical
              <Icon width={35} height={35} icon="ph:recycle-light" />
              Traceable{" "}
              <Icon width={35} height={35} icon="lucide:mountain-snow" />
              Sustainable
              <Icon width={35} height={35} icon="lucide:earth" />
              Ethical
              <Icon width={35} height={35} icon="ph:recycle-light" />
              Traceable
              <Icon width={35} height={35} icon="lucide:mountain-snow" />
            </h2>
          </motion.div>
        </div>
        <div className=" w-full h-px max-w-screen-xl mt-10 bg-black m-auto"></div>
      </section>
      <section className=" mt-10 w-full flex flex-col px-3 items-center mx-auto justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-screen-2xl"
        >
          <div className=" w-full flex md:justify-between items-center max-w-screen-2xl px-3">
            <h3 className=" text-6xl font-medium">Some Heading</h3>
            <div className="relative md:flex  hidden  gap-4  ">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-4 mt-10 md:hidden ">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <CarouselContent className=" mt-10 hidden md:flex">
            {Array.from({ length: 15 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  );
}
