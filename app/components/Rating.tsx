import { StarIcon } from "@heroicons/react/20/solid";

function Rating({ rating }: { rating: number }) {
  return (
    <>
      <span className='flex items-center gap-1'>
        {Array.from(Array(rating).keys()).map((n) => (
          <StarIcon key={n} className='h-4 w-4 text-yellow-500' />
        ))}
      </span>
      <span className='text-xs font-semibold'>{rating.toFixed(1)}</span>
    </>
  );
}

export default Rating;
