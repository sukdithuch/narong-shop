import React from "react";
import SlideProduct from "../components/SlideProduct";
import Category from "../components/Category";
import ProductShow from "../components/ProductShow";

function Home(props) {

  const { searchText, handleChange, datas, button, filter } = props;
 

  return (
    <div className="Home container-xxl">
      <div className="side">
        <Category searchText={searchText} handleChange={handleChange} button={button} filter={filter}></Category>
      </div>
      <div className="main">
        <SlideProduct />
        <ProductShow datas={datas} ></ProductShow>
      </div>
    </div>
  );
}

export default Home;

