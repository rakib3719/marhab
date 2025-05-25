import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/Hooks";
import ProductsSlider from "../components/ProductsSlider";

export const Home = () => {
  const { user } = useUser();

  return (
    <div className=" mt-20">
  <div>
<ProductsSlider/>
  </div>
    </div>
  );
};

export default Home;
