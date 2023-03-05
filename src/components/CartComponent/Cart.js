import { useState } from "react"
import './Cart.css'

export const  Cart = () => {

const monsteraPrice = 8
const [cart, updateCart] = useState(0);

return (<div className="Cart">
 <h1> Panier : </h1>
 Monstera : {monsteraPrice}€
 <button  onClick={() => updateCart(cart+1)} >  add to cart </button>
 <h3> Totale : {cart*monsteraPrice} </h3>

</div>)

}

