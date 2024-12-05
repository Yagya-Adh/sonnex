import MainImageBanner from "../components/banner/MainImageBanner";
import CustomLists from "../components/list/CustomLists";
const ServicesPage = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <MainImageBanner
          bannerImage="/assets/event/eventsimage.webp"
          pageName="EVENTS"
          pageSlug="IMMERSE YOURSELF IN THE WORLD OF CYCLING!"
        />
      </div>
      <EventCardLists />
    </>
  );
};
export default ServicesPage;

const data = [
  {
    id: 1,
    columnFirst: [
      {
        id: 1,
        date: "Jul 25 - Jul 28, 2024",
        location: "Reeth",
        address: "DL11 6SZ Richmond",
        country: "United Kingdon",
      },
    ],
    eventTitle: "Passo Coppi: Ard Rock",
    columnSecond: ["9:00am - 3:00pm", "Enduro", "Road"],
  },

  {
    id: 2,
    columnFirst: [
      {
        id: 1,
        date: "Jul 30, 2024",
        location: "Kingdom Park, 80",
        address: "4910 Lenzerheide",
        country: "Switzerland",
      },
    ],
    eventTitle: "Sonnex Test Ride // Gravel",
    columnSecond: ["9:00am - 4:00pm", "Gravel"],
  },
  {
    id: 3,
    columnFirst: [
      {
        id: 1,
        date: "Aug 15 - Aug 17, 2024",
        location: "Missano World Circuit",
        address: "47843 Missano Adriatico",
        country: "Italy",
      },
    ],
    eventTitle: "Italian Bike Festival",
    columnSecond: ["10:00am - 7:00pm", "Experience"],
  },
];

const EventCardLists = () => {
  return (
    <>
      {data?.map((listEvent) => (
        <div
          className=" mx-auto max-w-screen-2xl bg-white border-b"
          key={listEvent.id}
        >
          <div className="flex flex-col ">
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center py-5">
                {listEvent.columnFirst?.map((firstColum) => (
                  <ul
                    className="text-sonex-mutedtText font-inter"
                    key={firstColum.id}
                  >
                    <li>{firstColum.date}</li>
                    <li>{firstColum.location}</li>
                    <li>{firstColum.address}</li>
                    <li>{firstColum.country}</li>
                  </ul>
                ))}
                <div className="flex flex-col justify-center p-5">
                  <h1 className="text-4xl font-bold py-4">
                    {listEvent.eventTitle}
                  </h1>
                  <div className="flex">
                    {listEvent.columnSecond?.map((secondColumn, index) => (
                      <CustomLists text={secondColumn} key={index} />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <CustomButton />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const CustomButton = () => {
  return (
    <button className="text-rose-500 text-3xl underline">
      {"See details"}
    </button>
  );
};
