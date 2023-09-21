"use client";

import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";

function FavoriteButton() {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <button onClick={() => setIsFavorite((old) => !old)}>
      <span className='sr-only'>Add to favorites</span>
      {isFavorite ? (
        <SolidHeartIcon className='w-10 h-10' />
      ) : (
        <HeartIcon className='w-10 h-10' />
      )}
    </button>
  );
}

export default FavoriteButton;
