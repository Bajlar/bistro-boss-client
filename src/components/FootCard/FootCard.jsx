import React from 'react';

const FootCard = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <p className="absolute right-0 mt-5 mr-5 py-3 px-6 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="text-center">
          <button className="btn btn-outline bg-slate-100 border-orange-400 capitalize border-0 border-b-4 text-orange-400">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FootCard;