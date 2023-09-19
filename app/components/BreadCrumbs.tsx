import Link from "next/link";

interface BreadCrumbItem {
  name: string;
}

interface BreadCrumbsProps {
  items: BreadCrumbItem[];
  current: BreadCrumbItem;
}

function BreadCrumbs({ items, current }: BreadCrumbsProps) {
  return (
    <ul className='flex items-center gap-1 mb-6 flex-wrap'>
      {items.map((item) => (
        <li key={item.name} className='space-x-1 text-[10px] uppercase'>
          <Link href='/'>{item.name}</Link>
          <span>/</span>
        </li>
      ))}
      <li>
        <Link
          href='/'
          className='space-x-[2px] text-[10px] uppercase font-bold'
        >
          {current.name}
        </Link>
      </li>
    </ul>
  );
}

export default BreadCrumbs;
