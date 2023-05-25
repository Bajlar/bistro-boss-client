import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img, description }) => {
  return (
    <div className="pt-8 mb-5">
      {title && (
        <Cover img={img} title={title} description={description}></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-16 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center -mt-12">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline capitalize border-0 border-b-4 mt-6">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;