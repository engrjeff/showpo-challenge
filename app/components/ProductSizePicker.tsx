"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ProductSizePickerProps {
  options: { label: string; value: string }[];
}

function ProductSizePicker({ options }: ProductSizePickerProps) {
  const [selected, setSelected] = React.useState<string>();

  return (
    <div>
      <div className='flex justify-between items-center'>
        <span className='text-sm text-appGray uppercase font-semibold block mb-4'>
          Select Size: {selected}
        </span>
        <button className='text-sm text-appGray font-semibold underline'>
          Size Guide
        </button>
      </div>
      <div className='flex items-center gap-3 flex-wrap'>
        {options.map((option) => (
          <label
            key={option.value}
            className={cn(
              "w-11 h-11 border border-black rounded-full flex flex-col items-center justify-center transition-colors cursor-pointer",
              selected === option.label
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            )}
          >
            <input
              type='radio'
              name='size'
              hidden
              value={option.label}
              checked={selected === option.label}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className='sr-only'>Size {option.label}</span>
            <span className='leading-none text-xs'>US</span>
            <span className='leading-none text-xs'>
              {option.label.split(" ")[0]}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default ProductSizePicker;
