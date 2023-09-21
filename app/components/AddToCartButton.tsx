"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function AddToCartButton() {
  return (
    <button className='h-12 bg-appGreen text-white font-semibold uppercase flex items-center gap-3 justify-center w-[300px] transition-colors hover:bg-appGreen/60'>
      <ShoppingCartIcon className='w-5 h-5' />
      <span>Add to bag</span>
    </button>
  );
}

export default AddToCartButton;
