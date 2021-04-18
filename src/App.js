import React, { useState } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Cart from "./views/Cart";
import ProductDetail from "./views/ProductDetail";
import data from "./data";

function App() {

    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const { products } = data;

  const [searchText, setSearchText] = useState("");
  const [datas, setDatas] = useState(products);

  // exclude column list from filter
  const excludeColumns = ["id", "img_url"];

  // handle change event of search input
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setDatas(products);
    else {
      const filteredData = products.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setDatas(filteredData);
    }
  }

  const allCategories = ["ทั้งหมด", ...new Set(products.map(item => item.category))];

  console.log(allCategories);

  // const [menuItem, setMenuItem] = useState(items);
  const [buttons] = useState(allCategories);

  //Filter Function
  const filterCategory = (button) =>{

    if(button === 'ทั้งหมด'){
      setDatas(products);
      return;
    }

    const filteredCategory = products.filter(item => item.category ===  button);
    setDatas(filteredCategory)
  }

  
  return (
    <div className="App">
    <BrowserRouter>
      <Header countCartItems={cartItems.length} searchText={searchText} handleChange={handleChange}></Header>
      <Switch>
        <Route exact path="/">
          <Home searchText={searchText} handleChange={handleChange} datas={datas} button={buttons} filter={filterCategory} ></Home>
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/cart">
          <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Cart>
        </Route>
        <Route path="/product/:id">
          <ProductDetail onAdd={onAdd}></ProductDetail>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
