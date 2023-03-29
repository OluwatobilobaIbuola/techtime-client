import AllCategories from "../CourseCategories/AllCategories";
import CategoryNavigator from "../Navigator/CategoryNavigator";
import DesignCategory from "../CourseCategories/DesignCategory";
import DevelopmentCategory from "../CourseCategories/DevelopmentCategory";
import MarketingCategory from "../CourseCategories/MarketingCategory";
import { useState } from "react";
import Button from "../Button/index";
const initialState: Record<string, boolean> = {
  com1: true,
  com2: false,
  com3: false,
  com4: false,
};
export default function CoursesByCategory() {
  const [showNext, setShowNext] =
    useState<Record<string, boolean>>(initialState);
  return (
    <section className={`bg-bgNeutral px-4 sm:px-28 py-10 sm:py-20`}>
      <div className="">
        <h1
          className={`relative font-clashDisplay mb-2 leading-[36px] sm:leading-[50px] xl:leading-[70px]
           xl:text-[56px] sm:text-[32px] text-[24px] font-[700] text-center sm:text-left text-textBlack`}
        >
          Browse our popular courses
        </h1>
        <p className="text-center font-[500] leading-[28px] text-[12px] sm:text-[16px] text-neutralTwo md:px-32">
          High-defination video is video of higher resolution and quality than
          standard definition. while there's no standard meaning for high
          definition, generally any standard video image
        </p>
      </div>
      <CategoryNavigator
        showNext={showNext}
        initialState={initialState}
        setShowNext={setShowNext}
      />
      {showNext.com1 ? <AllCategories /> : null}
      {showNext.com2 ? <DesignCategory categoryType={"Design"} /> : null}
      {showNext.com3 ? (
        <DevelopmentCategory categoryType={"Development"} />
      ) : null}
      {showNext.com4 ? <MarketingCategory categoryType={"Marketing"} /> : null}
      <div className="flex justify-center mt-10">
        <Button
          active={"Explore All Courses"}
          wrap="whitespace-nowrap"
          width="max-w-[209px]"
          text="Explore All Courses"
          border="border-[1px]"
          bgColor="bg-primary"
          textColor="text-white"
        />
      </div>
    </section>
  );
}
