import React from 'react';
import { Helmet } from "react-helmet-async";
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";


const Menu = () => {
  const [menu] = useMenu();
  
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover
        img={menuImg}
        title="Our menu"
        description={"Would you like to try a dish?"}
      ></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Don't miss"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title={"dessert"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={dessertImg}
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory
        items={pizzas}
        title={"pizza"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={pizzaImg}
      ></MenuCategory>
      {/* salad menu items */}
      <MenuCategory
        items={salads}
        title={"salad"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={saladImg}
      ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory
        items={soups}
        title={"soup"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;