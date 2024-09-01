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
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import CountdownTimer from "@/components/ui/countdown";
import CategoryFilter from "@/components/ui/categoryfilter";
import { MdOutlineTimer } from "react-icons/md";
// product image import
import product1 from "../images/Product/product1.png";
import product2 from "../images/Product/product2.png";
import product3 from "../images/Product/product3.png";
import product4 from "../images/Product/product4.png";
import product5 from "../images/Product/product5.jpg";
// Category image import
import link from "../images/Product/1.png";
import link1 from "../images/Product/2.png";
import link2 from "../images/Product/3.png";
import link3 from "../images/Product/6.png";
import link4 from "../images/Product/5.png";
import link5 from "../images/Product/7.png";
//Home Decor images
import decor from "../images/Product/decor.jpg";
import decor2 from "../images/Product/decor2.jpg";
import decor3 from "../images/Product/decor3.jpg";
import decor4 from "../images/Product/decor4.jpg";
import decor5 from "../images/Product/decor5.jpg";
import decor6 from "../images/Product/decor6.jpg";
//Footwear images
import footwear from "../images/Product/footwear.jpg";
import footwear1 from "../images/Product/footwear2.jpg";
import footwear2 from "../images/Product/footwear3.jpg";
import footwear3 from "../images/Product/footwear4.jpg";
//Toys images
import toys from "../images/Product/toys.jpg";
import toys2 from "../images/Product/toys2.jpg";
import toys3 from "../images/Product/toys3.jpg";
import toys4 from "../images/Product/toys4.jpg";
import toys5 from "../images/Product/toys5.jpg";
import toys6 from "../images/Product/toys6.jpg";
//Appliances image
import elect from "../images/Product/eLect.jpg";
import elect2 from "../images/Product/elect2.jpg";
import elect3 from "../images/Product/elect3.jpg";
import elect4 from "../images/Product/elect4.jpg";
import elect5 from "../images/Product/elect5.jpg";
//Gifts image
import gift from "../images/Product/gift.jpg";
import gift2 from "../images/Product/gift2.jpg";
import gift3 from "../images/Product/gift3.jpg";
import gift4 from "../images/Product/gift4.jpg";
import gift5 from "../images/Product/gift5.jpg";
//Cosmetic images
import cosmetic from "../images/Product/cosmetic.jpg";
import cosmetic2 from "../images/Product/cosmetic2.jpg";
import cosmetic3 from "../images/Product/cosmetic3.jpg";
import cosmetic4 from "../images/Product/cosmetic4.jpg";
import cosmetic5 from "../images/Product/cosmetic5.jpg";
import cosmetic6 from "../images/Product/cosmetic6.jpg";
//Home & Furniture image
import home from "../images/Product/home.jpg";
import home2 from "../images/Product/home2.jpg";
import home3 from "../images/Product/home3.jpg";
import home4 from "../images/Product/home4.jpg";
import home5 from "../images/Product/home5.jpg";
import home6 from "../images/Product/home6.jpg";
const marqueeVariants = {
  animate: {
    x: [0, -4311.655],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};
// dress data
const data = [
  {
    key: 0,
    name: "Carpet",
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
    image: product2,
  },
  {
    key: 3,
    name: "Women's Dress",
    price: 1599,
    originalPrice: 1999,
    discount: 40,
    sizes: ["S", "M", "L"],
    image: product4,
  },
  {
    key: 4,
    name: "Women's Dress",
    price: 1599,
    originalPrice: 1999,
    discount: 40,
    sizes: ["S", "M", "L"],
    image: link1,
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
  {
    key: 6,
    name: "Women's Dress",
    price: 999,
    originalPrice: 1399,
    discount: 30,
    image: link2,
  },
];
//footwear data
const data2 = [
  {
    key: 0,
    name: "Footwear",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: footwear,
  },
  {
    key: 1,
    name: "Footwear",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: footwear2,
  },
  {
    key: 2,
    name: "Footwear",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: footwear1,
  },
  {
    key: 3,
    name: "Footwear",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: footwear3,
  },
  {
    key: 4,
    name: "Footwear",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: footwear,
  },
  {
    key: 5,
    name: "Footwear",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: footwear2,
  },
];
//home decor data
const data3 = [
  {
    key: 0,
    name: "Home Decor",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: decor,
  },
  {
    key: 1,
    name: "Home Decor",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: decor2,
  },
  {
    key: 2,
    name: "Home Decor",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: decor3,
  },
  {
    key: 3,
    name: "Home Decor",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: decor4,
  },
  {
    key: 4,
    name: "Home Decor",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: decor5,
  },
  {
    key: 5,
    name: "Home Decor",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: decor6,
  },
];
//Cosmetics data
const data4 = [
  {
    key: 0,
    name: "Cosmetics",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: cosmetic,
  },
  {
    key: 1,
    name: "Cosmetics",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: cosmetic2,
  },
  {
    key: 2,
    name: "Cosmetics",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: cosmetic3,
  },
  {
    key: 3,
    name: "Cosmetics",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: cosmetic4,
  },
  {
    key: 4,
    name: "Cosmetics",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: cosmetic5,
  },
  {
    key: 5,
    name: "Cosmetics",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: cosmetic6,
  },
];
//Toys Data
const data5 = [
  {
    key: 0,
    name: "Wooden toys",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: toys,
  },
  {
    key: 1,
    name: "Wooden toys",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: toys2,
  },
  {
    key: 2,
    name: "Wooden toys",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: toys3,
  },
  {
    key: 3,
    name: "Wooden toys",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: toys4,
  },
  {
    key: 4,
    name: "Wooden toys",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: toys5,
  },
  {
    key: 5,
    name: "Wooden toys",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: toys6,
  },
];
//Electronics Data
const data6 = [
  {
    key: 0,
    name: "Appliances",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: elect,
  },
  {
    key: 1,
    name: "Appliances",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: elect2,
  },
  {
    key: 2,
    name: "Appliances",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: elect3,
  },
  {
    key: 3,
    name: "Appliances",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: elect4,
  },
  {
    key: 4,
    name: "Appliances",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: elect5,
  },
  {
    key: 5,
    name: "Appliances",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: elect3,
  },
];
//Gifts data
const data7 = [
  {
    key: 0,
    name: "Gifts & Hampers",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: gift,
  },
  {
    key: 1,
    name: "Gifts & Hampers",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: gift2,
  },
  {
    key: 2,
    name: "Gifts & Hampers",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: gift3,
  },
  {
    key: 3,
    name: "Gifts & Hampers",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: gift4,
  },
  {
    key: 4,
    name: "Gifts & Hampers",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: gift5,
  },
  {
    key: 5,
    name: "Gifts & Hampers",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: gift3,
  },
];
//home furniture data
const data8 = [
  {
    key: 0,
    name: "Home & Furniture",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: home,
  },
  {
    key: 1,
    name: "Home & Furniture",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: home2,
  },
  {
    key: 2,
    name: "Home & Furniture",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: home3,
  },
  {
    key: 3,
    name: "Home & Furniture",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: home4,
  },
  {
    key: 4,
    name: "Home & Furniture",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: home5,
  },
  {
    key: 5,
    name: "Home & Furniture",
    price: 599,
    originalPrice: 799,
    discount: 30,
    image: home6,
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
  const plugin4 = useRef(Autoplay({ delay: 2300, stopOnInteraction: false }));
  const plugin5 = useRef(Autoplay({ delay: 2400, stopOnInteraction: false }));
  const plugin6 = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));
  const plugin7 = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));
  const plugin8 = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));

  return (
    <>
      <section className=" w-full min-h-[80vh] relative  h-fit flex   bg-red-50">
        <Image
          src="/hero.png"
          alt="hero image"
          fill
          className=" object-cover object-center absolute top-0 left-0 z-0 "
        ></Image>
        <div className=" w-full h-full flex flex-col justify-center items-center gap-10 absolute top-0 left-0 z-[10]  bg-gradient-to-t from-black to-black/0 ">
          <h1 className=" text-5xl md:text-7xl text-white font-serif italic">
            Pure Art and Living
          </h1>
          <Input
            type="search"
            placeholder="Search "
            className="  w-1/2 min-w-md px-6 h-10 bg-white/80 rounded-full "
          />
          <div className="w-full max-w-2xl   flex flex-wrap justify-center gap-4 ">
            <Button className="bg-white/70 gap-2 hover:bg-white text-black rounded-full">
              <Icon icon="mdi:clothes-hanger" />
              clothing
            </Button>
            <Button className="bg-white/70 gap-2 hover:bg-white text-black rounded-full">
              <Icon icon="mingcute:shoe-line" />
              Footwear
            </Button>
            <Button className="bg-white/70 gap-2 hover:bg-white text-black rounded-full">
              <Icon icon="ph:devices" />
              Electronics
            </Button>
            <Button className="bg-white/70 gap-2 hover:bg-white text-black rounded-full">
              <Icon icon="maki:furniture" />
              Home and Furniture
            </Button>
            <Button className="bg-white/70 gap-2 hover:bg-white text-black rounded-full">
              <Icon icon="cbi:bulb-group-pillar-turaco-short-tall" />
              Appliances
            </Button>
            <Button className="bg-white/70 gap-2 hover:bg-white text-black rounded-full">
              <Icon icon="mage:stars-c" />
              Beauty and cosmetics
            </Button>
            <Button className="bg-white/70 gap-2 hover:bg-white text-black rounded-full">
              <Icon icon="material-symbols-light:toys-and-games-outline" />
              Toys
            </Button>
          </div>
        </div>
      </section>
      <section className=" py-12">
        <div className=" w-full h-px max-w-screen-2xl mb-10 bg-black m-auto"></div>
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
        <div className=" w-full h-px max-w-screen-2xl mt-10 bg-black m-auto"></div>
      </section>

      <section className="mt-10 w-full flex flex-col px-3 items-center mx-auto justify-center">
        <Carousel
          plugins={[plugin6.current as any]}
          opts={{
            align: "start",
          }}
          className="w-full max-w-screen-2xl"
        >
          <div className="w-full flex md:justify-between items-center max-w-screen-2xl px-3">
            <h3 className="text-6xl font-medium">Gifts & Hampers</h3>
            <div className="relative md:flex hidden gap-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>

          {/* Carousel for both Mobile and Desktop */}
          <CarouselContent className="mt-10 flex">
            {data7.map((product, index) => (
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
                    {/* <p>Sizes: {product.sizes.join(", ")}</p> */}
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
    </>
  );
}
