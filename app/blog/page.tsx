"use client";
import { StaticImageData } from "next/image";
import ImageCard from "../components/card/ImageCard";
import mountaine from "../assets/blog/routes.webp";
import charm from "../assets/blog/specializedS-Work.webp";
import specializeSwork from "../assets/blog/howto_mountain.webp";
import verbier from "../assets/blog/verbier.webp";
import citybike from "../assets/blog/cityBike.webp";
import specialize from "../assets/blog/underStandindTrackCycle.webp";
import undertack from "../assets/blog/underStandingtrack.webp";
import CustomLists from "../components/list/CustomLists";

interface IBlogData {
  id: number;
  describe: string;
  blogType: string;

  postDate: string;
  image: StaticImageData;
}

const data: IBlogData[] = [
  {
    id: 1,
    describe: "How to start mountain biking in 6 steps",
    blogType: "Tips & Advices",
    image: mountaine,
    postDate: "Jun 19, 2024",
  },
  {
    id: 2,
    describe: "The charm of riding through Switzerland",
    blogType: "Routes",
    image: charm,
    postDate: "May 16, 2024",
  },
  {
    id: 3,
    describe: " Review: Specialized S-Works Tarmak SL8",
    blogType: "Reviews",
    image: specializeSwork,
    postDate: "May 7, 2024",
  },
  {
    id: 4,
    describe: "Verbier is about to become the mecca of cycling",
    blogType: "News",
    image: verbier,
    postDate: "Apr 18, 2024",
  },
  {
    id: 5,
    describe: "City bike vs road bike: differences and similarities",
    blogType: "Bike 101",
    image: citybike,
    postDate: "Apr 9, 2024",
  },
  {
    id: 6,
    describe: "Tour de France 2024: route, stages, and TV",
    blogType: "News",
    image: specialize,
    postDate: "Mar 22, 2024",
  },
  {
    id: 7,
    describe: "Understanding track cycling events: an in-depth exploration ",
    blogType: "Bike 101",
    image: undertack,
    postDate: "Mar 4, 2024",
  },

  {
    id: 8,
    describe: "Verbier is about to become the mecca of cycling",
    blogType: "News",
    image: verbier,
    postDate: "Apr 18, 2024",
  },
  {
    id: 9,
    describe: "City bike vs road bike: differences and similarities",
    blogType: "Bike 101",
    image: citybike,
    postDate: "Apr 9, 2024",
  },
  {
    id: 10,
    describe: "Tour de France 2024: route, stages, and TV",
    blogType: "News",
    image: specialize,
    postDate: "Mar 22, 2024",
  },
  {
    id: 11,
    describe: "Understanding track cycling events: an in-depth exploration ",
    blogType: "Bike 101",
    image: undertack,
    postDate: "Mar 4, 2024",
  },
];
interface IfilterRoutes {
  id: number;
  path: string;
  isActive: boolean;
}
const filterRoutes: IfilterRoutes[] = [
  {
    id: 1,
    path: "All",
    isActive: true,
  },
  {
    id: 2,
    path: "Bike 101",
    isActive: false,
  },
  {
    id: 3,
    path: "News",
    isActive: false,
  },
  {
    id: 4,
    path: "Reviews",
    isActive: false,
  },
  {
    id: 5,
    path: "Routes",
    isActive: false,
  },
  {
    id: 6,
    path: "Tips & Advices",
    isActive: false,
  },
];

const BlogPage = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <div className="">
          <h1 className="font-barlow font-extrabold text-9xl py-4">BLOG</h1>
        </div>

        <div className="flex py-4 border-t border-b">
          {filterRoutes?.map((route) => (
            <CustomLists
              key={route.id}
              text={route.path}
              isActive={route.isActive}
              fontSize=""
            />
          ))}
        </div>

        <div className="grid grid-cols-4 gap-y-20 gap-5 py-20">
          {data?.map((blogList) => (
            <div key={blogList.id} className="relative pb-20">
              <ImageCard
                contentName={blogList.blogType}
                cycleImage={blogList.image}
                key={blogList.id}
              />
              <div className="absolute left-2">
                <div className="flex flex-col">
                  <span>{blogList.postDate}</span>
                  <h2 className="text-xl font-barlow font-bold">
                    {blogList.describe}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
