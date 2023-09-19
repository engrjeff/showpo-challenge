import React from "react";

import { ShareIcon } from "@heroicons/react/24/outline";

function ShareButton() {
  return (
    <div className='py-6 text-center'>
      <button className='inline-flex items-center gap-3 font-medium uppercase text-xs'>
        <ShareIcon className='w-5 h-5' /> Share this item
      </button>
    </div>
  );
}

export default ShareButton;
