import Image from "next/image";

function Header() {
  return (
    <header className='h-[100px] py-4 sticky top-0 border-b z-20 bg-white'>
      <div className='h-full flex justify-center items-center'>
        <Image src='/assets/logo.svg' alt='Showpo' width={115} height={27} />
      </div>
    </header>
  );
}

export default Header;
