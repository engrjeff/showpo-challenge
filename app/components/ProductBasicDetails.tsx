import React from "react";
import Link from "next/link";

import Rating from "./Rating";

interface ProductBasicDetailsProps {
  name: string;
  currency: string;
  price: number;
  rating: number;
}

function ProductBasicDetails({
  name,
  currency,
  price,
  rating,
}: ProductBasicDetailsProps) {
  return (
    <div className='space-y-1'>
      <h1 className='text-lg font-bold uppercase'>{name}</h1>
      <p className='text-sm uppercase font-semibold text-appGray'>Showpo</p>
      <span className='block font-semibold'>
        {currency}
        {price}
      </span>
      <span className='text-sm text-appGray'>
        or 4 payments of GBP22.49 with{" "}
      </span>
      <span className='font-medium'>AfterPay</span>
      <div className='flex items-center gap-3'>
        <Rating rating={rating} />
        <span className='text-xs text-appGray font-light'>(10) Reviews</span>
        <Link href='/' className='text-xs uppercase underline font-semibold'>
          See Reviews
        </Link>
      </div>
    </div>
  );
}

export default ProductBasicDetails;
