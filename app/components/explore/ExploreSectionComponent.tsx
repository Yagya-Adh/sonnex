"use client";
import SectionHead from "../section/SectionHead";
import ImageCard from "../card/ImageCard";
import downHill from "../../assets/explore/downhill.webp";
import brakeParts from "../../assets/explore/brakepart.webp";
import gearImage from "../../assets/explore/gear.webp";
import outLetImage from "../../assets/explore/outlet.webp";
import serveiceImage from "../../assets/explore/services.webp";
import blogImage from "../../assets/explore/blog.webp";
import eventImage from "../../assets/explore/events.webp";

const exploreData = [
  { id: 1, exploreImage: downHill, name: "BIKE" },
  { id: 2, exploreImage: brakeParts, name: "PARKS" },
  { id: 3, exploreImage: gearImage, name: "GEAR" },
  { id: 4, exploreImage: outLetImage, name: "OUTLET" },
  { id: 5, exploreImage: serveiceImage, name: "SERVICES" },
  { id: 6, exploreImage: blogImage, name: "BLOG" },
  { id: 7, exploreImage: eventImage, name: "EVENTS" },
];
const ExploreSectionComponent = () => {
  return (
    <section className="py-10">
      <SectionHead sectionName="EXPLORE" />
      <div className="max-w-screen-2xl mx-auto mb-5 px-4">
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
