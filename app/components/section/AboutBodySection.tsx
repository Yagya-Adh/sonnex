import exploreTextData from "@/lib/data/explorePageTextData.json";
import ExploreSectionComponent from "../explore/ExploreSectionComponent";
import EventPageBody from "./EventPageBody";
import VideoComponent from "../video/VideoComponent";
const eventPageData = exploreTextData;

const AboutBodySection = () => {
  return (
    <>
      {eventPageData?.slice(0, 1).map((eventsData) => (
        <EventPageBody
          title={eventsData.title}
          descrition={eventsData.desctiption}
          descritionOne={eventsData.descriptionOne}
          key={eventsData.id}
        />
      ))}

      <div className="relative" style={{ paddingTop: "52.25%" }}>
        <VideoComponent
          src="https://www.youtube-nocookie.com/embed/PH-kqdzTgqE?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
          title="Great St Bernard Pass (Swiss side) - Switzerland raw runs [#2]"
        />
      </div>
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
    </>
  );
};

export default AboutBodySection;
