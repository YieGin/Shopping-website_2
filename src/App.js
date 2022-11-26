import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Man from "./jsx/Man";
import Women from "./jsx/Women";
import Child from "./jsx/Child";
import Beauty from "./jsx/Beauty";
import Clothes from "./jsx/Clothes";
import ManShoes from "./jsx/ManShoes";
import WomenShoes from "./jsx/WomenShoes";
import MenBags from "./jsx/MenBags";
import MenAccessories from "./jsx/MenAccessories";
import MenWatches from "./jsx/MenWatches";
import WomenSneakers from "./jsx/WomenSneakers";
import WomenAccessories from "./jsx/WomenAccessories";
import ChildAccessories from "./jsx/ChildAccessories";
import WomenWatches from "./jsx/WomenWatches";
import ClothesWomen from "./jsx/ClothesWomen";
import ClothesChild from "./jsx/ClothesChild";
import ChildShoes from "./jsx/ChildShoes";
import Brands from "./jsx/Brands";
import Care from "./jsx/Care";
import Makeup from "./jsx/Makeup";
import Hair from "./jsx/Hair";
import Scent from "./jsx/Scent";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Man />}></Route>
        <Route path="/Women" element={<Women />}></Route>
        <Route path="/Child" element={<Child />}></Route>
        <Route path="/Beauty" element={<Beauty />}></Route>
        <Route path="/Clothes" element={<Clothes />}></Route>
        <Route path="/ClothesWomen" element={<ClothesWomen />}></Route>
        <Route path="/ClothesChild" element={<ClothesChild />}></Route>
        <Route path="/Brands" element={<Brands />}></Route>
        <Route path="/Care" element={<Care />}></Route>
        <Route path="/Makeup" element={<Makeup />}></Route>
        <Route path="/Hair" element={<Hair />}></Route>
        <Route path="/Scent" element={<Scent />}></Route>
        <Route path="/ManShoes" element={<ManShoes />}></Route>
        <Route path="/WomenShoes" element={<WomenShoes />}></Route>
        <Route path="/MenBags" element={<MenBags />}></Route>
        <Route path="/MenAccessories" element={<MenAccessories />}></Route>
        <Route path="/MenWatches" element={<MenWatches />}></Route>
        <Route path="/WomenSneakers" element={<WomenSneakers />}></Route>
        <Route path="/WomenAccessories" element={<WomenAccessories />}></Route>
        <Route path="/ChildAccessories" element={<ChildAccessories />}></Route>
        <Route path="/WomenWatches" element={<WomenWatches />}></Route>
        <Route path="/ChildShoes" element={<ChildShoes />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
