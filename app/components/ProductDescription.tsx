"use client";

import { cn } from "@/lib/utils";
import React from "react";

function ProductDescription() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <div
        className={cn(
          expanded ? "h-auto" : "h-[160px] overflow-hidden mask-image"
        )}
      >
        <h2 className='font-bold uppercase mb-6'>Description</h2>
        <p className='mb-4 font-light'>
          Get ready to turn heads in the Andrina Midi Dress. This stunning
          high-low wrap corset dress in grape is perfect for all your formal
          occasions. With its flattering sweetheart neckline and sleeveless
          design, this dress will make you feel confident and empowered. Whether
          you&apos;re attending a wedding as a guest or heading out for a
          cocktail night with friends, the Andrina Midi Dress is the ultimate
          statement piece. Its elegant midi length adds a touch of
          sophistication while the wrap style accentuates your waistline
          beautifully. Step into any room feeling like an absolute queen with
          this show-stopping purple dress from Showpo.
        </p>
        <h2 className='font-bold uppercase mb-4'>Product Details</h2>
        <ul className='list-disc pl-10 font-light'>
          <li>Sweetheart neckline</li>
          <li>Midi length</li>
          <li>Sleeveless design</li>
          <li>Autumn season</li>
          <li>Wrap dress style</li>
          <li>
            Formal and wedding guest attire Note: Please provide more details on
            the fabric, pattern, style, heel height, material, bag type and
            pants length for a more specific description.
          </li>
        </ul>
      </div>
      <div className='text-center py-4'>
        <button
          className='font-medium text-appGray'
          onClick={() => setExpanded((old) => !old)}
        >
          Read {expanded ? "Less" : "More"}
        </button>
      </div>
    </>
  );
}

export default ProductDescription;
