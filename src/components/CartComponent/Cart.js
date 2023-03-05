import { useState } from "react"
import './Cart.css'

export const  Cart = () => {

const monsteraPrice = 8
const [cart, updateCart] = useState(0);
const [isOpen, setIsOpen] = useState(false);

return isOpen? 

(<div>
<button onClick={() => setIsOpen(false)} > Fermer </button>
<div className="Cart">
 <h1> Panier : </h1>
 Monstera : {monsteraPrice}€
 <button  onClick={() => updateCart(cart+1)} >  add to cart </button>
 <h3> Totale : {cart*monsteraPrice} </h3>

</div> </div>) : (<div> <button onClick={() => setIsOpen(true)}  > Ouvrir </button> </div>)

}

