"use client";
import ImageCard from "../card/ImageCard";
import SectionHead from "./SectionHead";

interface IBlogData {
  id: number;
  blogType: string;
  image: string;
}

const data: IBlogData[] = [
  {
    id: 1,
    blogType: "WORKSHOP",
    image: "/assets/service/workshop.webp",
  },
  {
    id: 2,
    blogType: "LEASING",
    image: "/assets/service/leasing.webp",
  },
  {
    id: 3,
    blogType: "TEST RIDES",
    image: "/assets/service/testride.webp",
  },
];

const ServiceSection = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
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

export default ServiceSection;
