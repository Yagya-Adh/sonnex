import SectionHead from "./components/section/SectionHead";
import PriceCard from "./components/card/PriceCard";
import MainBanner from "./components/banner/MainBanner";
import ExploreSectionComponent from "./components/explore/ExploreSectionComponent";
import homePageData from "@/lib/data/homePageData.json";

interface IHomeInterface {
  id: number;
  title: string;
  type: string;
  price: string;
  actualPrice?: string;
  new: string;
  sale: string;
  image: string;
}

const data: IHomeInterface[] = homePageData;

export default function Home() {
  return (
    <main>
      <MainBanner />
      <SectionHead
        sectionName="NEW ARRIVALS"
        linkName="Shop all"
        linkTextColor=" text-sonex-prime"
      />
      <div className="max-w-screen-xl mx-auto px-4 lg:p-0">
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full">
          {data?.map((sonnex) => (
            <div key={sonnex.id}>
              <PriceCard
                width={sonnex.title}
                backgroundColor={sonnex.title}
                cycle={sonnex?.image}
                typeCycle={sonnex.type}
                title={sonnex.title}
                price={sonnex.price}
                actualPrice={sonnex.actualPrice}
                New={sonnex.new}
                Sale={sonnex.sale}
              />
            </div>
          ))}
        </div>
      </div>
      <ExploreSectionComponent />
    </main>
  );
}
