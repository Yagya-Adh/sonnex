import MainImageBanner from "../components/banner/MainImageBanner";
import AboutBodySection from "../components/section/AboutBodySection";

const AboutPage = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-4 lg:p-0">
      <MainImageBanner
        pageName="ABOUT"
        pageSlug="NEXT STEP: ADVENTURE"
        bannerImage="/assets/about/about.webp"
      />
      <AboutBodySection />
    </main>
  );
};

export default AboutPage;
