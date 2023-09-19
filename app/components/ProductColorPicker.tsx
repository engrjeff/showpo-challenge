"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface ProductColorPickerProps {
  options: { name: string; value: number }[];
}

function ProductColorPicker({ options }: ProductColorPickerProps) {
  const [selected, setSelected] = React.useState<string>();

  const selectedLabel = options.find(
    (i) => i.value.toString() === selected
  )?.name;

  return (
    <div>
      <span className='text-sm text-appGray uppercase font-semibold block mb-4'>
        Color: {selectedLabel}
      </span>
      <div className='space-x-3'>
        {options.map((option) => (
          <label
            key={option.value}
            className={cn(
              "w-[60px] h-[90px] inline-block bg-no-repeat bg-cover",
              option.value.toString() === selected ? "ring-2 ring-appGray" : ""
            )}
            style={{
              backgroundImage: `url('/assets/color-${option.value}.jpg')`,
            }}
          >
            <input
              type='radio'
              name='color'
              hidden
              value={option.value}
              checked={selected === option.value.toString()}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className='sr-only'>{option.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default ProductColorPicker;
