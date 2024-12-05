import Image from "next/image";
import BannerFootSection from "./BannerFootSection";
const MainBanner = () => {
  return (
    <section className="relative mx-auto max-w-screen-xl px-4 md:px-0">
      <div className="absolute top-0 left-0 w-full h-full">
        <h1 className="text-white text-9xl font-barlow font-extrabold max-w-screen-sm p-10 z-10">
          RISE WITH THE RIDING&#46;
        </h1>
      </div>
      <Image
        src="/assets/home.webp"
        alt="main_banner_"
        width="500"
        height="500"
        className="z-10 w-full h-full object-cover object-center"
      />
      <BannerFootSection />
    </section>
  );
};

export default MainBanner;
