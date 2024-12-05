"use client";
import aboutBannerImage from "../assets/about/about.webp";
import ExploreSectionComponent from "../components/explore/ExploreSectionComponent";
import exploreTextData from "../../explorePageTextData.json";
import MainImageBanner from "../components/banner/MainImageBanner";

const eventPageData = exploreTextData;

const AboutPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <MainImageBanner
        pageName="ABOUT"
        pageSlug="NEXT STEP: ADVENTURE"
        bannerImage={aboutBannerImage}
      />

      {eventPageData?.slice(0, 1).map((eventsData) => (
        <EventPageBody
          title={eventsData.title}
          descrition={eventsData.desctiption}
          descritionOne={eventsData.descriptionOne}
          key={eventsData.id}
        />
      ))}

      {eventPageData?.slice(1, 2).map((eventsData) => (
        <EventPageBody
          title={eventsData.title}
          descrition={eventsData.desctiption}
          descritionOne={eventsData.descriptionOne}
          key={eventsData.id}
        />
      ))}
      <ExploreSectionComponent />

      {eventPageData?.slice(2, 3).map((eventsData) => (
        <EventPageBody
          title={eventsData.title}
          descrition={eventsData.desctiption}
          descritionOne={eventsData.descriptionOne}
          key={eventsData.id}
        />
      ))}
    </div>
  );
};

export default AboutPage;

interface IEventPageBody {
  key: number;
  title: string;
  descrition: string;
  descritionOne: string;
}
const EventPageBody = ({
  key,
  title,
  descrition,
  descritionOne,
}: IEventPageBody) => {
  return (
    <>
      <div className="flex flex-col justify-center items-end" key={key}>
        <div className="py-40 w-2/3 ">
          <h1 className="text-7xl font-sonexFamily font-extrabold">{title}</h1>
          <p className="text-4xl font-snas py-4">{descrition}</p>
          <p className="text-4xl font-snas">{descritionOne}</p>
        </div>
      </div>
    </>
  );
};
