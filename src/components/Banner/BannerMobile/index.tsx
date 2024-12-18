import Image from 'next/image';

export default function BannerMobile() {
  return (
    <div className="w-full aspect-[0.95588] relative xl:hidden block bg-black">
      <Image
        src={'/assets/image/banner/banner.png'}
        fill
        alt="banner"
        className="object-contain"
      />
    </div>
  );
}
