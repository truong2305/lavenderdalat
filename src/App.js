/** @format */

import "./App.scss";
import TheFooter from "./components/footer/TheFooter";
import TheHeader from "./components/header/TheHeader";
import {Routes, Route} from "react-router-dom";
import Home from "./views/home/Home";
import Banner from "./components/banner/Banner";
import AboutUs from "./views/about/AboutUs";

function App() {
  return (
    <div className='App'>
      <TheHeader />
      <main>
      <Banner />
      <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />}/>
      </Routes>
      </main>
      <TheFooter />
    </div>
  );
}

export default App;
