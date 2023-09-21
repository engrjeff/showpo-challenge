import React from "react";

import Link from "next/link";

function ReviewsInfo({ reviewCount }: { reviewCount: number }) {
  return (
    <>
      <span className='text-xs text-appGray font-light'>
        ({reviewCount}) Reviews
      </span>
      <Link href='/' className='text-xs uppercase underline font-semibold'>
        See Reviews
      </Link>
    </>
  );
}

export default ReviewsInfo;
