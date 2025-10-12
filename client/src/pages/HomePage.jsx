import React from "react";
import Slider from "../components/Slider";
import SideIcons from "../components/SideIcons";
import WeekTranding from "../utils/weekTranding";
import Quote from "../utils/quote";
import Tech from "../components/Tech";
import Sports from "../components/Sports";
import Fashion from "../components/Fashion";
import Business from "../components/Business";
import Education from "../components/Education";
import ShareMarket from "../components/ShareMarket";
import TrendingTopics from "../components/TrendingTopics";
import NewsletterSignup from "../components/NewsletterSignup";
import QuickStats from "../components/QuickStats";

const HomePage = () => {
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
};

export default HomePage;
