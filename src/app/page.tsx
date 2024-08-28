"use client";
import Image from "next/image";
import react, { useState, useEffect, useRef } from "react";
import HeroImage1 from "../images/Homepage/Hero/hero.png";
import HeroImage2 from "../images/Homepage/Hero/hero2.png";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { EmblaPluginType } from "embla-carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CountdownTimer from "@/components/ui/countdown";
import { MdOutlineTimer } from "react-icons/md";
// product image import
import product1 from "../images/Product/product1.png";
import product2 from "../images/Product/product2.png";
import product3 from "../images/Product/product3.png";
import product4 from "../images/Product/product4.png";
// Category image import
import link from "../images/Product/1.png";
import link1 from "../images/Product/2.png";
import link2 from "../images/Product/3.png";
import link3 from "../images/Product/6.png";
import link4 from "../images/Product/5.png";
import link5 from "../images/Product/7.png";

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
    image: product1,
  },
  {
    key: 1,
    name: "Women's Dress",
    price: 1599,
    originalPrice: 1999,
    discount: 40,
    sizes: ["S", "M", "L"],
    image: product3,
  },
  {
    key: 2,
    name: "Women's Dress",
    price: 1599,
    originalPrice: 1999,
    discount: 40,
    sizes: ["S", "M", "L"],
    image: product4,
  },
  {
    key: 3,
    name: "Women's Dress",
    price: 1599,
    originalPrice: 1999,
    discount: 40,
    sizes: ["S", "M", "L"],
    image: product2,
  },
  {
    key: 4,
    name: "Women's Dress",
    price: 1599,
    originalPrice: 1999,
    discount: 40,
    sizes: ["S", "M", "L"],
    image: product3,
  },
  {
    key: 5,
    name: "Women's Dress",
    price: 1599,
    originalPrice: 1999,
    discount: 40,
    sizes: ["S", "M", "L"],
    image: product4,
  },
];

const heroCarouselImages = [HeroImage1, HeroImage2];

type PropType = {
  plugins?: EmblaPluginType[];
};

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const plugin1 = useRef(Autoplay({ delay: 1900, stopOnInteraction: true }));
  const plugin2 = useRef(Autoplay({ delay: 2100, stopOnInteraction: true }));
  const plugin3 = useRef(Autoplay({ delay: 2200, stopOnInteraction: false }));

  return (
    <main className="font-serif">
      <section className="relative flex items-center justify-center p-5 pt-24 w-full h-[calc(80vh)]">
        <div className="absolute inset-0 z-0">
          <Carousel
            plugins={[plugin3.current as any]}
            opts={{
              align: "start",
            }}
            className=" relative w-full h-[calc(100vh)]"
          >
            <CarouselContent>
              {heroCarouselImages.map((image, index) => (
                <CarouselItem
                  className=" w-full h-[calc(80vh)] relative"
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
        <div className="relative z-10 w-full h-full p-3 md:p-20 flex flex-col gap-4 justify-end text-white font-medium">
          <h1 className="text-5xl md:text-8xl italic">
            Pure Art <br /> Pure Living
          </h1>
          <p className="text-md font-sans max-w-xl text-stone-300">
            Discover the art of pure living with Shuddhi Kalaa – where every
            product is a testament to India’s valuable heritage and promising
            future
          </p>
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
      {/* New Drop Section */}

      <section className="mt-10 w-full flex flex-col px-3 items-center mx-auto justify-center">
        <Carousel
          plugins={[plugin2.current as any]}
          opts={{
            align: "start",
          }}
          className="w-full max-w-screen-2xl"
        >
          <div className="w-full flex md:justify-between items-center max-w-screen-2xl px-3">
            <h3 className="text-6xl font-medium">New Drops</h3>
            <div className="relative md:flex hidden gap-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>

          {/* Carousel for both Mobile and Desktop */}
          <CarouselContent className="mt-10 flex">
            {data.map((product, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1 flex flex-col relative border rounded-md">
                  <div className="relative w-full aspect-[33/50]">
                    <Image src={product.image} alt="Product" fill />
                  </div>
                  <div className="p-2">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-red-500">{product.discount}% off</p>
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
                    <p className="flex justify-center lg:justify-start items-center font-semibold">
                      <MdOutlineTimer className="text-xl lg:text-2xl" />
                      <CountdownTimer initialTime={300} />
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      {/* Tops Section */}
      <section className="mt-10 w-full flex flex-col px-3 items-center mx-auto justify-center">
        <Carousel
          plugins={[plugin1.current as any]}
          opts={{
            align: "start",
          }}
          className="w-full max-w-screen-2xl"
        >
          <div className="w-full flex md:justify-between items-center max-w-screen-2xl px-3">
            <h3 className="text-6xl font-medium">Tops</h3>
            <div className="relative md:flex hidden gap-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <CarouselContent className="mt-10 flex">
            {data.map((product, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1 flex flex-col relative border rounded-md">
                  <div className="relative w-full aspect-[33/50]">
                    <Image src={product.image} alt="Product" fill />
                  </div>
                  <div className="p-2">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-red-500">{product.discount}% off</p>
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
                    <p className="flex justify-center lg:justify-start items-center font-semibold">
                      <MdOutlineTimer className="text-xl lg:text-2xl" />
                      <CountdownTimer initialTime={300} />
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      {/* Dresses Section */}
      <section className="mt-10 w-full flex flex-col px-3 items-center mx-auto justify-center">
        <Carousel
          plugins={[plugin.current as any]}
          opts={{
            align: "start",
          }}
          className="w-full max-w-screen-2xl"
        >
          <div className="w-full flex md:justify-between items-center max-w-screen-2xl px-3">
            <h3 className="text-6xl font-medium">Dresses</h3>
            <div className="relative md:flex hidden gap-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>

          {/* Unified Carousel for Mobile and Desktop */}
          <CarouselContent className="mt-10 flex">
            {data.map((product, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1 flex flex-col relative border rounded-md">
                  <div className="relative w-full aspect-[33/50]">
                    <Image src={product.image} alt="Product" fill />
                  </div>
                  <div className="p-2">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-red-500">{product.discount}% off</p>
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
                    <p className="flex justify-center lg:justify-start items-center font-semibold">
                      <MdOutlineTimer className="text-xl lg:text-2xl" />
                      <CountdownTimer initialTime={300} />
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Category Section */}

      <section className="max-w-7xl mx-auto p-4 sm:p-8 lg:p-4">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            TRENDING NOW{" "}
            <span role="img" aria-label="fire">
              🔥
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <Image src={link} alt="Breezy Linen" className="w-full" />
              <p className="text-center mt-2">BREEZY LINEN</p>
            </div>
            <div>
              <Image src={link1} alt="Tops" className="w-full" />
              <p className="text-center mt-2">TOPS</p>
            </div>
            <div>
              <Image src={link2} alt="Crochet Shirts" className="w-full" />
              <p className="text-center mt-2">CROCHET SHIRTS</p>
            </div>
            <div>
              <Image src={link5} alt="All Black" className="w-full" />
              <p className="text-center mt-2">ALL BLACK</p>
            </div>
            <div>
              <Image src={link4} alt="Cargos" className="w-full" />
              <p className="text-center mt-2">CARGOS</p>
            </div>
            <div>
              <Image src={link3} alt="Full Sleeves" className="w-full" />
              <p className="text-center mt-2">FULL SLEEVES</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
