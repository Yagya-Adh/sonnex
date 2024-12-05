"use client";
import ImageCard from "../card/ImageCard";
import CustomLists from "../list/CustomLists";
import blogData from "@/lib/data/blogData.json";
interface IBlogData {
  id: number;
  describe: string;
  blogType: string;

  postDate: string;
  image: string;
}
const data: IBlogData[] = blogData;

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

const BlogSection = () => {
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

export default BlogSection;
