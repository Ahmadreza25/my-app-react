import AboutUsSection from "./SectionsPageLearnMore/AboutUsSection";
import BannerLearnMore from "./SectionsPageLearnMore/BannerLearnMore";
import HeaderLesrnMore from "./SectionsPageLearnMore/HeaderLesrnMore";
import StickyWrapper from "./StyledPageLearnMore/StickyWrapper";
const PageLearnMore = () => {
  return (
    <div>
      <div>
        <StickyWrapper>
          <HeaderLesrnMore />
        </StickyWrapper>
        <div className="flex items-center justify-center">
          <BannerLearnMore />
        </div>
        <div>
          <AboutUsSection />
        </div>
      </div>
    </div>
  );
};

export default PageLearnMore;
