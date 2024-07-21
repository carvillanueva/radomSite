import Image from 'next/image';

export const Header = () => {
  return (
    <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
      <p>Get started for free</p>
      <Image src="/assets/arrow-right.svg" alt="arrow-right" height={16} width={16} className="inline-flex justify-center items-center" />
    </div>
  )
}
