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

const data = [
  {
    key: 0,
    name: "Women's Dress",
    price: 1599,
    originalPrice: 1999,
    discount: 40,
    sizes: ["S", "M", "L"],
  },
  {
    key: 1,
    name: "Women's Dress",
    price: 1599,
    originalPrice: 1999,
    discount: 40,
    sizes: ["S", "M", "L"],
  },
  {
    key: 2,
    name: "Women's Dress",
    price: 1599,
    originalPrice: 1999,
    discount: 40,
    sizes: ["S", "M", "L"],
  },
  {
    key: 3,
    name: "Women's Dress",
    price: 1599,
    originalPrice: 1999,
    discount: 40,
    sizes: ["S", "M", "L"],
  },
  {
    key: 4,
    name: "Women's Dress",
    price: 1599,
    originalPrice: 1999,
    discount: 40,
    sizes: ["S", "M", "L"],
  },
  {
    key: 5,
    name: "Women's Dress",
    price: 1599,
    originalPrice: 1999,
    discount: 40,
    sizes: ["S", "M", "L"],
  },
];

export default function Home() {
  return (
    <main className=" font-serif">
      <section
        className=" relative flex items-center justify-center p-5 pt-24 bg-[#606e5c]
       w-full h-[calc(100vh-20vh)]"
      >
        <div className=" relative w-full h-full">
          <div className=" absolute z-10 w-full h-full p-3 md:p-20 flex flex-col gap-4 justify-end text-white font-medium">
            <h1 className=" text-5xl md:text-8xl italic ">
              Pure Art <br /> Pure Living
            </h1>
            <p className=" text-md font-sans max-w-xl text-stone-300">
              Discover the art of pure living with Shuddhi Kalaa – where every
              product is a testament to India’s valuable heritage and promising
              future
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
        <div className="  max-w-full w-screen h-[70px] relative overflow-x-hidden">
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
            <h3 className=" text-6xl font-medium">New Drops</h3>
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
            {data.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div>
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-red-500">
                          {product.discount}% off
                        </p>
                        <p className="my-2"> 
                          <span className="font-bold">&#8377;</span>
                          <span className="line-through ml-1 text-gray-500">
                            {product.originalPrice}
                          </span>
                          <span className="text-green-500 ml-1 font-bold">
                            {product.price}
                          </span>
                        </p>
                        <p>Sizes: {product.sizes.join(", ")}</p>
                        {/* <p className="flex justify-center lg:justify-start items-center font-semibold">
                      <MdOutlineTimer className="text-xl lg:text-2xl" />
                      <CountdownTimer initialTime={600} />
                    </p> */}
                      </div>
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
