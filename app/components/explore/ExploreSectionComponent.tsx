"use client";
import SectionHead from "../section/SectionHead";
import ImageCard from "../card/ImageCard";

const exploreData = [
  { id: 1, exploreImage: "/assets/explore/downhill.webp", name: "BIKE" },
  { id: 2, exploreImage: "/assets/explore/brakepart.webp", name: "PARKS" },
  { id: 3, exploreImage: "/assets/explore/gear.webp", name: "GEAR" },
  { id: 4, exploreImage: "/assets/explore/outlet.webp", name: "OUTLET" },
  { id: 5, exploreImage: "/assets/explore/services.webp", name: "SERVICES" },
  { id: 6, exploreImage: "/assets/explore/blog.webp", name: "BLOG" },
  { id: 7, exploreImage: "/assets/explore/events.webp", name: "EVENTS" },
];
const ExploreSectionComponent = () => {
  return (
    <section className="py-10">
      <SectionHead sectionName="EXPLORE" />
      <div className="max-w-screen-2xl mx-auto mb-5 px-4 lg:p-0">
        <div className="grid gird-cols-1 md:grid-cols-4 gap-4">
          {exploreData?.slice(0, 4).map((sonnex) => (
            <div key={sonnex.id}>
              <ImageCard
                contentName={sonnex.name}
                cycleImage={sonnex.exploreImage}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="grid gird-cols-1 md:grid-cols-3 gap-4">
          {exploreData?.slice(4, 8).map((sonnex) => (
            <div key={sonnex.id}>
              <ImageCard
                contentName={sonnex.name}
                cycleImage={sonnex.exploreImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSectionComponent;
