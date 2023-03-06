import Banner from '../BannerComponent/Banner';
import { FlowersList } from '../DepoComponent/FlowersList';
//import { FormQuestion } from '../FormComponent/Form';
import { Footer } from '../FooterComponent/Footer';
import {Cart} from '../CartComponent/Cart';
import './App.css'
import { useState } from 'react';

function App() {

  const [cart, updateCart] = useState([]);


  return (
   <div> <Banner/> 
   
   <div className='body'>  <FlowersList  cart={cart} updateCart={updateCart} />  <Cart cart={cart} updateCart={updateCart}  /> </div> <Footer/> </div> 
/*   <div> <FormQuestion/>  </div>*/
  ); 
}

export default App;
