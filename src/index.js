import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/AppComponent/App';
/* import Banner from './components/BannerComponent/Banner'
import Cart from './components/CartComponent/Cart';
import { Prop } from './components/testProps.js/prop';
import { Recommendation } from './components/RecommendComponent/Recommendation';
import { CategoryList , IsBestSeller } from './components/DepoComponent/FlowersList'; */
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
    {/*   <Prop  name = "Ons" prenom = "Diweni"/> */}
  </React.StrictMode>
);













// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
