import Banner from '../BannerComponent/Banner';
import { FlowersList } from '../DepoComponent/FlowersList';
//import { FormQuestion } from '../FormComponent/Form';
import { Footer } from '../FooterComponent/Footer';
import {Cart} from '../CartComponent/Cart';

function App() {
  return (
   <div> <Banner/> <FlowersList/>  <Cart/> <Footer/> </div> 
/*   <div> <FormQuestion/>  </div>*/
  ); 
}

export default App;
