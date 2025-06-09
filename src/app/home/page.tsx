"use client"
import React from "react";
import CardSection from "@/components/cardSection/CardSection";
import FooterSection from "@/components/footer/FooterSection";
import BannerCarrousel from '@/components/bannerCarrousel/BannerCarrousel';
const Home = () => {

  return (
    <div>
      <CardSection />
      <BannerCarrousel />
      <FooterSection/>
    </div>
  );
};

export default Home;