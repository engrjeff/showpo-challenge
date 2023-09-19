import React from "react";
import Link from "next/link";

import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { colorOptions } from "@/lib/constants";
import { type Product } from "@/services/products";

import ProductColorPicker from "./ProductColorPicker";
import ProductSizePicker from "./ProductSizePicker";
import AddToCartButton from "./AddToCartButton";
import FavoriteButton from "./FavoriteButton";
import ProductImageCarousel from "./ProductImageCarousel";
import ProductDescription from "./ProductDescription";
import BreadCrumbs from "./BreadCrumbs";
import ProductBasicDetails from "./ProductBasicDetails";

function ProductDetail({ product }: { product: Product }) {
  const price = product.price_range.minimum_price.regular_price;
  const sizeOptions = product.attributes[1].attribute_options;

  return (
    <>
      <BreadCrumbs
        items={product.categories}
        current={{ name: product.name }}
      />
      <div className='flex gap-8 flex-col lg:flex-row'>
        <div className='flex-1'>
          <ProductImageCarousel product={product} />
          <ProductDescription />
        </div>
        <div className='space-y-6 lg:w-[410px]'>
          <ProductBasicDetails
            name={product.name}
            currency={price.currency}
            price={price.value}
            rating={5}
          />
          <ProductColorPicker options={colorOptions} />
          <ProductSizePicker options={sizeOptions} />
          <div>
            <span className='block text-sm font-medium uppercase'>
              SIZE OUT OF STOCK?{" "}
              <Link href='/' className='underline'>
                GET NOTIFIED IF IT COMES BACK
              </Link>
            </span>
            <span className='block text-sm font-medium uppercase'>
              SEE{" "}
              <Link href='/' className='underline'>
                SIMILAR ITEMS
              </Link>{" "}
              OR{" "}
              <Link href='/' className='underline'>
                MORE FORMAL DRESSES
              </Link>
            </span>
          </div>

          <div className='grid grid-cols-3'>
            <div className='text-center border-t-8 border-gray-200 py-2'>
              <span className='text-sm font-light uppercase'>Runs Small</span>
            </div>
            <div className='text-center border-t-8 border-black py-2'>
              <span className='text-sm font-light uppercase'>True To Size</span>
            </div>
            <div className='text-center border-t-8 border-gray-200 py-2'>
              <span className='text-sm font-light uppercase'>Runs Large</span>
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <AddToCartButton />
            <FavoriteButton />
          </div>

          <div className='py-4 border-t border-b border-gray-300'>
            <button className='font-bold uppercase w-full flex items-center justify-between'>
              FREE SHIPPING, EASY RETURNS & REFUNDS{" "}
              <ChevronRightIcon className='w-5 h-5 text-appGray ml-auto' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
