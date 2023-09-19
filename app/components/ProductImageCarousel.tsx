"use client";

import React from "react";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { type Product } from "@/services/products";

import ShareButton from "./ShareButton";

function ProductImageCarousel({ product }: { product: Product }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const slides = product.media_gallery_entries;

  const handlePrevious = () => {
    emblaApi?.scrollPrev();
  };
  const handleNext = () => {
    emblaApi?.scrollNext();
  };

  const handleThumbClick = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };

  return (
    <div className='flex gap-4'>
      <ProductThumbs
        thumbs={slides.map((thumb) => ({ url: thumb.thumbnail.url }))}
        onThumbClick={handleThumbClick}
      />
      <div className='flex-1 relative'>
        <SliderControls onNext={handleNext} onPrevious={handlePrevious} />
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex'>
            {slides.map((slide, index) => (
              <ProductSlideItem
                key={slide.id}
                imageSrc={slide.large.url}
                name={slide.file}
              />
            ))}
          </div>
        </div>
        <ShareButton />
      </div>
    </div>
  );
}

export default ProductImageCarousel;

interface ProductSlideItemProps {
  imageSrc: string;
  name: string;
}

function ProductSlideItem({ imageSrc, name }: ProductSlideItemProps) {
  return (
    <div className='flex-[0_0_100%] lg:flex-[0_0_50%] min-w-0 h-[600px] ml-4 relative'>
      <Image
        src={imageSrc}
        alt={name}
        fill
        className='w-full h-full object-cover mr-4'
      />
      <button className='absolute bottom-4 bg-black/60 rounded-full py-1 px-3 text-white text-xs left-1/2 -translate-x-1/2'>
        Hover to zoom
      </button>
    </div>
  );
}

interface ProductThumbsProps {
  thumbs: { url: string }[];
  onThumbClick: (index: number) => void;
}

function ProductThumbs({ thumbs, onThumbClick }: ProductThumbsProps) {
  return (
    <div className='overflow-hidden hidden lg:block'>
      <div className='flex flex-col gap-3'>
        {thumbs.map((thumb, index) => (
          <ProductThumbItem
            key={index}
            imageSrc={thumb.url}
            onClick={() => onThumbClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

interface ProductThumbItemProps {
  imageSrc: string;
  onClick: () => void;
}

function ProductThumbItem({ imageSrc, onClick }: ProductThumbItemProps) {
  return (
    <button className='hover:opacity-80 active:opacity-80' onClick={onClick}>
      <span className='sr-only'>scroll to slide</span>
      <div className={"w-full"}>
        <Image
          src={imageSrc}
          alt='thumbnail'
          className='object-cover'
          width={41}
          height={66}
        />
      </div>
    </button>
  );
}

interface SliderControlsProps {
  onNext: () => void;
  onPrevious: () => void;
}

function SliderControls({ onNext, onPrevious }: SliderControlsProps) {
  return (
    <>
      <button
        aria-label='go to previous slide'
        onClick={onPrevious}
        className='absolute top-[300px] z-10 left-2 text-appGray'
      >
        <ChevronLeftIcon className='w-8 h-8' />
      </button>
      <button
        aria-label='go to next slide'
        onClick={onNext}
        className='absolute top-[300px] z-10 right-2 text-appGray'
      >
        <ChevronRightIcon className='w-8 h-8' />
      </button>
    </>
  );
}
