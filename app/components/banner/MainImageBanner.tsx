"use client";
import Image from "next/image";

interface IMainImageBanner {
  pageName: string;
  pageSlug: string;
  bannerImage: string;
}

const MainImageBanner = ({
  pageName,
  pageSlug,
  bannerImage,
}: IMainImageBanner) => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-4 left-4">
          <h1 className="text-8xl text-white font-extrabold max-w-screen-2xl font-barlow">
            {pageName}{" "}
          </h1>
        </div>
        <Image
          src={bannerImage}
          className="h-full w-full object-center object-cover"
          width={400}
          height={400}
          alt="banner_"
        />
        <div className="absolute bottom-4 right-4">
          <h2 className="text-3xl text-white font-extrabold font-sans">
            {pageSlug}{" "}
          </h2>
        </div>
      </div>
    </>
  );
};
export default MainImageBanner;
