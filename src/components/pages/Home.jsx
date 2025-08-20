import React from "react";
import { Herosection } from '../UI/Herosection'
import { CategoryCard } from '../UI/Categorycard'
import { Products } from '../UI/Products'
import { Featured } from "../UI/Featured";
import { ProductSection } from '../UI/ProductSection'
import { BabyProducts } from "../UI/BabyProducts";
import { Testimonial } from '../UI/Testimonial'
import { Question } from '../UI/Question'
import { Images } from '../UI/Images'
export const Home = () => {
  return (
    <>
      <Herosection />
      <CategoryCard />
      <Products />
      <Featured />
      <ProductSection />
      <BabyProducts />
      <Testimonial />
      <Question />
      <Images />
    </>
  );
};