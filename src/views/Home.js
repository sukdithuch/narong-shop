import React from "react";
import SlideProduct from "../components/SlideProduct";
import Category from "../components/Category";
import ProductShow from "../components/ProductShow";

function Home(props) {

  const { searchText, handleChange, datas, button, filter } = props;
 

  return (
    <div>
      <h1>Home</h1>
      <div>
        <SlideProduct />
      </div>
      <div>
        <Category searchText={searchText} handleChange={handleChange} button={button} filter={filter}></Category>
      </div>
      <div>
        <ProductShow datas={datas} ></ProductShow>
      </div>
    </div>
  );
}

export default Home;

