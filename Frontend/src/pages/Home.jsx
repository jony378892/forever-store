import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import ReactLoading from "react-loading";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurPolicy />
      <LatestCollection />
      <BestSeller />
      <NewsletterBox />
    </div>
  );
};

export default Home;
