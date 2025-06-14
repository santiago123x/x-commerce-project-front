"use client"
import React from "react";
import CardSection from "@/components/cardSection/CardSection";
import FooterSection from "@/components/footer/FooterSection";
import BannerCarrousel from '@/components/bannerCarrousel/BannerCarrousel';
import HeaderSection from '@/components/headerSection/HeaderSection';

const Home = () => {

  return (
    <div>
      <HeaderSection />
      <CardSection />
      <BannerCarrousel />
      <FooterSection/>
    </div>
  );
};

export default Home;