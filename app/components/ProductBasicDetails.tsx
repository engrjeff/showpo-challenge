import React from "react";

import Rating from "./Rating";
import ReviewsInfo from "./ReviewsInfo";

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
        <ReviewsInfo reviewCount={10} />
      </div>
    </div>
  );
}

export default ProductBasicDetails;
