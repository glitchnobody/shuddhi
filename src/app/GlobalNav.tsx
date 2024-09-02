"use client";
import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  animate,
  AnimatePresence,
  delay,
  easeInOut,
  motion,
} from "framer-motion";
import { useScroll } from "framer-motion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { set } from "date-fns";
import Image from "next/image";

export default function GlobalNav() {
  const { scrollY } = useScroll();
  const [outputY, setOutputY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const LoadingAnimation = async () => {
      if (!isLoaded) {
        document.body.style.overflow = "hidden";
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoaded(true);
        document.body.style.overflow = "auto";
      }
    };

    LoadingAnimation();
  }, [isLoaded]);

  const LoadingVarients = {
    initial: {
      clipPath: "circle(150% at 100% 100%)",
    },
    exit: {
      clipPath: "circle(50% at 50% -50%) ",
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoaded == false && (
        <motion.div
          className=" fixed top-0 left-0 w-full h-full bg-black z-[9999]"
          initial="initial"
          animate="exit"
          variants={LoadingVarients}
        >
          <div className=" flex relative h-full justify-center items-center">
            <Image
              alt="splash"
              fill
              className=" object-cover"
              src="/splash.png"
            />
            <div className=" relative z-20 w-[300px] h-[300px]">
              <GlobalLogo />
            </div>
          </div>
        </motion.div>
      )}
      <Sheet>
        <motion.nav className=" fixed w-full p-2 z-[999] bg-black h-24  top-0 left-0 flex justify-center">
          <div className="max-w-screen-2xl m-auto  w-full px-3 items-center  flex justify-between">
            <SheetContent
              side="left"
              className=" bg-black/90 md:rounded-md backdrop-blur-md  z-[9999]"
            >
              <div className=" text-md flex flex-col gap-6  h-full justify-center  mt-4 text-3xl font-light text-stone-300">
                <div className=" hover:text-white cursor-pointer">Clothing</div>
                <div className=" hover:text-white cursor-pointer">
                  Electronics
                </div>
                <div className=" hover:text-white cursor-pointer">Footwear</div>
                <div className=" hover:text-white cursor-pointer">
                  Home and Furniture
                </div>
                <div className=" hover:text-white cursor-pointer">
                  Appliances
                </div>
                <div className=" hover:text-white cursor-pointer">
                  Beauty and cosmetics
                </div>
                <div className=" hover:text-white cursor-pointer">
                  Gaming & Lifestyle
                </div>
              </div>
            </SheetContent>
            <SheetTrigger asChild>
              <span className=" text-white text-2xl ml-4">
                <Icon
                  className=" hover:text-stone-300 cursor-pointer"
                  icon="material-symbols-light:menu"
                />
              </span>
            </SheetTrigger>
            <div className="w-20 aspect-[208.19/198.49]">
              <GlobalLogo />
            </div>
            <div className=" flex text-2xl gap-3 text-white">
              <Icon
                className=" hover:text-stone-300 cursor-pointer"
                icon="material-symbols:search"
              />
              <Icon
                className=" hover:text-stone-300 cursor-pointer"
                icon="ph:bag"
              />
              <Icon
                className=" hover:text-stone-300 cursor-pointer"
                icon="mdi:heart-outline"
              />
              <Icon
                className=" hover:text-stone-300 cursor-pointer"
                icon="ph:user"
              />
            </div>
          </div>
        </motion.nav>
      </Sheet>
    </AnimatePresence>
  );
}

function GlobalLogo() {
  return (
    <svg viewBox="0 0 209 199" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77.3941 49.5419C77.2846 47.3438 85.7992 46.5301 86.4252 49.5419L83.0386 91.6145C81.5128 94.8348 80.2369 92.3392 79.6519 91.6145L77.3941 49.5419Z"
        fill="#D5DEC9"
      />
      <path
        d="M77.3941 49.5419C77.2846 47.3438 85.7992 46.5301 86.4252 49.5419L83.0386 91.6145C81.5128 94.8348 80.2369 92.3392 79.6519 91.6145L77.3941 49.5419Z"
        stroke="#D5DEC9"
        strokeWidth="0.22"
        strokeMiterlimit="2.61"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77.3704 45.6516L205.092 48.1505L205.229 45.2071L77.497 44.6055C76.9838 44.9302 76.9188 45.2789 77.3704 45.6516Z"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M140.054 63.1752C138.032 58.1806 134.051 58.4165 132.785 58.9259C125.68 62.3034 121.554 73.2087 123.374 80.7707C126.877 95.3065 142.928 84.1243 150.255 78.1281C131.304 120.006 102.732 58.5464 134.506 56.3995C141.125 57.0388 142.233 65.346 140.537 64.505L140.054 63.1752Z"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M160.47 63.6334C165.232 59.073 170.562 57.8047 176.497 60.037C192.134 66.4913 179.165 84.9824 173.582 93.4435C178.94 90.9205 183.178 85.779 186.182 77.7692C189.332 67.9647 186 61.36 178.04 57.0423C171.345 54.7074 165.632 55.7125 160.898 60.0404L160.47 63.6368V63.6334Z"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M189.8 50.3145C191.124 49.1453 193.026 49.0906 194.439 49.2889C195.855 49.4872 197.333 50.2256 197.538 52.2049C195.39 58.6319 195.308 65.0623 195.818 72.2276C196.594 76.8666 197.313 81.6185 200.597 85.4712C202.386 88.2779 205.04 91.5461 207.876 91.4196C208.342 91.9016 208.222 92.1238 207.969 92.4554C204.801 93.5596 200.805 89.4299 198.404 86.8318C192.192 79.4648 184.276 58.8473 189.797 50.3145"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M111.267 7.87269C111.031 9.09654 108.479 8.32735 108.999 4.73442C109.909 -1.83953 118.383 -0.919922 121.154 6.61123C121.869 8.88459 122.43 11.2229 122.556 13.9133C122.679 16.6038 122.508 19.5061 122.03 22.6205L119.874 41.0467C117.446 58.102 115.612 87.3036 117.723 90.5034C117.004 92.4451 115.674 91.8913 114.832 91.4093C113.419 87.0506 112.79 82.3637 112.749 77.4341L113.631 65.0246L115.995 18.1626C116.255 14.3338 115.656 10.6554 114.876 7.08641C114.507 5.87281 114.117 5.11046 113.074 4.97372C112.01 4.95663 111.438 5.51727 110.96 6.16681C110.823 6.81634 110.994 7.35306 111.264 7.87269"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M90.6328 112.239C88.9463 118.468 87.0648 121.551 80.076 122.789C73.0871 124.023 63.5805 120.82 56.4514 113.712C49.1923 105.573 43.2502 96.7014 37.7974 87.5566L41.509 87.4849C45.9185 96.9475 52.8561 106.178 59.5233 112.864C66.1906 119.548 71.5682 121.602 79.8023 120.888C83.2197 119.852 87.2837 118.276 88.3784 112.317L90.6259 112.239H90.6328Z"
        fill="#D5DEC9"
      />
      <path
        d="M90.6328 112.239C88.9463 118.468 87.0648 121.551 80.076 122.789C73.0871 124.023 63.5805 120.82 56.4514 113.712C49.1923 105.573 43.2502 96.7014 37.7974 87.5566L41.509 87.4849C45.9185 96.9475 52.8561 106.178 59.5233 112.864C66.1906 119.548 71.5682 121.602 79.8023 120.888C83.2197 119.852 87.2837 118.276 88.3784 112.317L90.6259 112.239H90.6328Z"
        stroke="#D5DEC9"
        strokeWidth="0.22"
        strokeMiterlimit="2.61"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75.7384 95.0433C72.1567 99.3986 74.9106 108.041 81.9986 111.729C89.3774 113.709 91.8747 112.717 97.1154 107.938C116.293 119.483 124.311 134.313 119.963 153.19C112.29 173.883 103.153 182.115 91.7755 187.202C84.4787 190.463 76.2618 192.671 66.9228 193.208C43.0177 194.576 22.5643 178.939 14.6074 152.284C9.37344 133.205 12.1786 112.311 20.6384 90.9205C8.54559 108.362 3.67768 128.252 9.40081 152.712C16.8207 182.822 36.0563 198.035 67.0015 198.493C123.74 195.861 151.74 132.214 98.949 101.491C93.113 97.9047 85.6042 96.0826 75.735 95.0468"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M141.621 7.54114C141.385 8.76158 138.833 7.99581 139.353 4.40287C140.263 -2.17107 148.736 -1.25146 151.507 6.27968C152.222 8.55305 152.783 10.8914 152.91 13.5818C153.033 16.2722 152.862 19.1746 152.383 22.2889L150.228 40.7151C147.799 57.7704 145.965 86.972 148.076 90.1718C147.358 92.1136 146.027 91.5598 145.185 91.0778C143.773 86.7191 143.143 82.0322 143.102 77.1026L143.985 64.6931L146.349 17.8311C146.609 14.0023 146.01 10.3239 145.23 6.75486C144.861 5.54126 144.471 4.77892 143.427 4.64218C142.363 4.62509 141.792 5.18573 141.313 5.83526C141.176 6.48479 141.347 7.02152 141.618 7.54114"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M166.002 8.03687C166.238 9.2573 168.79 8.49154 168.27 4.8986C167.36 -1.67534 158.886 -0.755743 156.115 6.77541C155.4 9.04877 154.839 11.3871 154.713 14.0775C154.59 16.7679 154.761 19.6703 155.24 22.7847L157.395 41.2108C159.824 58.2662 161.657 87.4678 159.547 90.6676C160.265 92.6093 161.596 92.0555 162.437 91.5735C163.85 87.2148 164.479 82.5279 164.521 77.5983L163.638 65.1888L161.274 18.3268C161.014 14.498 161.613 10.8196 162.393 7.25059C162.762 6.037 163.152 5.27465 164.196 5.13791C165.259 5.12082 165.831 5.68146 166.31 6.33099C166.446 6.98053 166.275 7.51724 166.005 8.03687"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M107.881 64.3854C105.859 59.3908 101.877 59.6267 100.612 60.1361C93.5064 63.5136 89.3808 74.4189 91.2007 81.9808C94.7037 96.5167 110.754 85.3345 118.082 79.3383C99.1303 121.216 70.5591 59.7566 102.332 57.6097C108.952 58.249 110.06 66.5562 108.363 65.7152L107.881 64.3854Z"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M187.782 36.0111C186.626 40.0382 188.241 42.8004 192.907 44.1679C193.516 39.4092 191.538 37.0333 187.782 36.0111Z"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M194.679 31.9327C192.168 34.8009 190.734 37.6008 194.426 41.6381C196.981 38.4041 196.906 35.1667 194.679 31.9327Z"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M200.85 36.5171C201.692 40.7459 199.926 43.1286 195.852 43.8705C195.794 43.3987 195.982 42.8996 195.924 42.4757C195.469 38.9922 197.467 37.023 200.85 36.5171Z"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M180.742 105.408C180.77 103.911 179.726 103.538 179.347 103.532C177.161 103.62 174.916 105.959 174.557 108.092C173.866 112.191 179.189 111.08 181.717 110.345C172.303 118.987 171.704 100.161 180.061 103.074C181.683 103.959 181.06 106.202 180.718 105.802L180.739 105.408H180.742Z"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M182.702 106.154C182.227 104.714 183.123 104.038 183.489 103.918C185.63 103.347 188.504 104.937 189.493 106.892C191.391 110.649 185.908 111.172 183.243 111.22C194.945 116.755 189.869 98.3627 182.661 103.689C181.358 105.032 182.634 107.015 182.846 106.526L182.706 106.154H182.702Z"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M181.573 99.9559C181.556 99.2551 182.863 98.9987 182.959 99.9559L182.439 113.346C182.206 114.372 182.011 113.576 181.919 113.346L181.573 99.9559Z"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M205.372 99.4396C205.355 98.6978 206.795 98.4209 206.901 99.4396L206.33 113.661C206.073 114.748 205.858 113.907 205.759 113.661L205.376 99.4396H205.372Z"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M172.446 99.655L208.167 99.9182L208.181 98.4414L172.474 99.132C172.333 99.2995 172.32 99.4738 172.446 99.6584"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M199.376 106.075C198.13 104.889 196.735 104.557 195.182 105.138C191.09 106.817 194.484 111.627 195.944 113.828C194.542 113.172 193.433 111.835 192.647 109.75C191.822 107.2 192.695 105.48 194.778 104.359C196.529 103.75 198.024 104.014 199.263 105.138L199.376 106.075Z"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M198.374 107.791C199.526 106.687 200.819 106.379 202.256 106.919C206.043 108.482 202.903 112.964 201.552 115.011C202.848 114.399 203.874 113.155 204.603 111.213C205.366 108.837 204.558 107.237 202.629 106.191C201.008 105.627 199.622 105.87 198.476 106.916L198.374 107.788V107.791Z"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M200.012 99.843C199.991 99.5012 201.483 99.3747 201.592 99.843L201.001 106.4C200.734 106.902 200.511 106.513 200.409 106.4L200.012 99.843Z"
        fill="#D5DEC9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.2723 35.0847C43.8455 34.3463 37.4485 39.0606 35.136 49.3061C34.2055 53.9007 34.4791 58.3106 36.5111 62.4471C41.8511 70.5936 47.9916 72.3268 54.4707 71.3731C61.6956 69.0313 65.3662 64.4743 67.1314 58.7209C67.6958 66.6657 66.3959 74.2378 58.9863 80.593C54.4673 85.3448 47.4785 86.0012 42.1077 85.8884L33.275 66.2725C30.3604 59.7533 26.5872 56.3073 21.9348 52.0033C7.76212 38.8931 -8.19626 58.714 4.81332 75.0993C13.1158 85.5568 24.0763 91.4573 37.8863 92.4589C47.9574 93.7306 56.7969 91.5461 64.2852 85.5944C71.127 79.3862 74.4829 71.3662 74.3939 61.7634C74.305 52.2119 69.8134 36.4282 54.2758 35.0882L54.2723 35.0847ZM51.3441 61.842C46.7704 61.842 43.0587 57.8355 43.0587 52.8922C43.0587 47.9489 46.7669 43.9423 51.3441 43.9423C55.9212 43.9423 59.6294 47.9489 59.6294 52.8922C59.6294 57.8355 55.9212 61.842 51.3441 61.842ZM12.199 72.2516C7.63554 66.7887 6.22956 62.5634 8.58655 58.6046C13.3552 52.9742 19.2426 55.0219 26.4196 65.9375L36.6343 85.1431C26.8745 83.8646 19.2528 79.5469 12.199 72.2551V72.2516Z"
        fill="#D5DEC9"
      />
    </svg>
  );
}
