"use client";
import React from "react";
import CardSection from "@/components/cardSection/CardSection";
import BannerCarrousel from "@/components/bannerCarrousel/BannerCarrousel";
import SectionCategory from "@/components/sectionCategory/SectionCategory";
import { gymCategories, techCategories } from "@/mocks/categories";

const Home = () => {

  return (
    <div>
      <CardSection />
      <BannerCarrousel />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-4 my-6">
        <SectionCategory 
          title="Equipate para ir al Gym"
          categories={gymCategories}
          backgroundColor="#f9f9f9"
        />
        <SectionCategory 
          title="Lo mejor en Tecnología"
          categories={techCategories}
          backgroundColor="#f9f9f9"
        />
      </div>
    </div>
  );
};

export default Home;
