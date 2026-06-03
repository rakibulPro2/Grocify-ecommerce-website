import React, { useState } from "react";
import HeadinLine from "../HeadinLine/HeadinLine";
import productsData from "../../assets/ProductsData/ProductsData";
import Product from "../Product/Product";

const Products = () => {
    const [activeTab, setActiveTab] = useState('All')
  const TabCategories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const renderProducts = productsData.map((product) => {
    return(
        <div>
            <Product name = {product.name} image = {product.image} price = {product.price} />
        </div>
    )
  })

  return (
    <section>
      <div className="max-w-[1300px] px-10 py-20">
        <HeadinLine highlight="Our" heading="Products" />

        {/* tab */}
       
        <div className="md:max-w-1/2 mx-auto flex md:flex-nowrap flex-wrap justify-center gap-3">
          {TabCategories.map((category, i) => {
            return <button key={i} className={`md:flex-1 px-5 py-2 text-md font-semibold rounded-sm ${activeTab === category ? 'bg-orange-500 text-white' : 'bg-zinc-200'}`} onClick={()=>setActiveTab(category)}>{category}</button>;
          })}
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-9 mt-15">
            {renderProducts}
        </div>
      </div>
    </section>
  );
};

export default Products;



