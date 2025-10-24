import Slider from "../components/Slider";
import SideIcons from "../components/SideIcons";
import WeekTranding from "../components/WeekTranding";
import Quote from "../components/Quote";
import Tech from "../components/Tech";
import Sports from "../components/Sports";
import Fashion from "../components/Fashion";
import Business from "../components/Business";
import Education from "../components/Education";
import ShareMarket from "../components/ShareMarket";
import TrendingTopics from "../components/TrendingTopics";
import NewsletterSignup from "../components/NewsletterSignup";
import QuickStats from "../components/QuickStats";
import {
  sliderData,
  techArticles,
  sportsData,
  fashionData,
  businessData,
  educationData,
  sharemarketData,
  yearPopularData,
  trendingTopics,
  weekTrending,
  quickStats,
  socialLinks,
  quotes,
  newsletterData,
} from "../utils/dummyData";

export const metadata = {
  title: "PramodLabs - Home",
  description:
    "Your premier destination for technology, business, fashion, sports, education, and share market insights.",
};

export default function HomePage() {
  return (
    <div className="w-full">
      <div className="mx-auto flex justify-between">
        <div className="left w-[69%]">
          <Slider />
          <br />
          <Tech />
          <br />
          <Sports />
          <br />
          <Fashion />
          <br />
          <Business />
          <br />
          <Education />
          <br />
          <ShareMarket />
        </div>
        <div className="right w-[27%]">
          <QuickStats />
          <br />
          <SideIcons />
          <br />
          <TrendingTopics />
          <br />
          <NewsletterSignup />
          <br />
          <Quote />
          <br />
          <WeekTranding />
        </div>
      </div>
    </div>
  );
}
