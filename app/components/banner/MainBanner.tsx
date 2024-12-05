import Image from "next/image";
import BannerFootSection from "./BannerFootSection";
const MainBanner = () => {
  return (
    <section className="relative mx-auto max-w-screen-2xl px-4 md:px-0">
      <div className="absolute top-0 left-0">
        <h1 className="text-white text-8xl font-extrabold max-w-screen-sm font-barlow p-10">
          RISE WITH THE RIDING &#46;
        </h1>
      </div>
      {
        <Image
          src="/assets/home.webp"
          alt="main_banner_"
          width="500"
          height="500"
          className="z-10 w-full h-full object-cover object-center"
        />
      }
      <BannerFootSection />
    </section>
  );
};

export default MainBanner;
