import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container1  py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => {
            console.log(product, 'product')
            const { id, title, price, description, category, image } = product;
            return (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full border justify-center  border-opacity-50 cursor-pointer">
                <Link to={`/products/${id}`} className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={title}
                    className="object-contain object-center w-full h-full block"
                    src={image}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {category}
                  </h3>
                  <h2 className="sizings text-gray-900 title-font text-lg font-medium">
                    {title}
                  </h2>
                  <p className="mt-1">${price}</p>
                </div>
              </div>
            );
          })}

  
        </div>
      </div>
    </section>
  );
};

export default Products;
