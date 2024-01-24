import React from 'react';
import BestDeal from './component/BestDeal';
import Footer from './component/Footer';
import Home from './component/Home';
import NewReleased from './component/NewReleased';
import Product from './component/Product';
import Slider from './component/Slider';
import SpecialOffer from './component/SpecialOffer';

function App() {
  return (
    <div className="App text-[#4A5568] overflow-x-hiden">
        <Home/>
        <div className='px-32 max-sm:px-5 gap-5 mx-auto'>
        <BestDeal/>
        <SpecialOffer/>
        <NewReleased/>
        <Slider/>
        <Product/>
        <Footer/>
        </div>
    </div>
  );
}

export default App;
