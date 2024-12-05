"use client";
import { StaticImageData } from "next/image";
import ImageCard from "../components/card/ImageCard";
import SectionHead from "../components/section/SectionHead";
import workShopImage from "../assets/service/workshop.webp";
import leaseImage from "../assets/service/leasing.webp";
import testRideImage from "../assets/service/testride.webp";
interface IBlogData {
  id: number;

  blogType: string;
  image: StaticImageData;
}

const data: IBlogData[] = [
  {
    id: 1,
    blogType: "WORKSHOP",
    image: workShopImage,
  },
  {
    id: 2,
    blogType: "LEASING",
    image: leaseImage,
  },
  {
    id: 3,
    blogType: "TEST RIDES",
    image: testRideImage,
  },
];

const ServicesPage = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <SectionHead
          sectionName="SERVICES"
          sideDescription="Find out about our services and how we can help you improve your cycling experience."
        />
        <div className="grid grid-cols-3 gap-y-20 gap-5 py-20">
          {data?.map((blogList) => (
            <div key={blogList.id} className="relative pb-20">
              <ImageCard
                contentName={blogList.blogType}
                cycleImage={blogList.image}
                key={blogList.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
