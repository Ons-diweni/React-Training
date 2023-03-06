import { useState } from "react"
import './Cart.css'

export const  Cart = ({cart , updateCart}) => {



const [isOpen, setIsOpen] = useState(false);

const Total = cart.reduce((acc , plant)=> acc + plant.amount*plant.price , 0)

return isOpen? 

(<div>

<button  className="button-closed" onClick={() => setIsOpen(false)} > Fermer </button>
<div className="Cart">
 <h1> Panier : </h1>
{/*  Monstera : {monsteraPrice}€ */}
 
{cart.map(({namee , price , amount} , index) => (<div> {namee } {price} * {amount} </div>) ) }
 <h3> Totale : {Total} </h3>
</div> 
<button onClick={() => updateCart(0)} > Vider le panier </button>

</div>) : (<div> <button className="toggle-button" onClick={() => setIsOpen(true)}  > Ouvrir </button> </div>)


}




/* 
export const  Cart = () => {

    const monsteraPrice = 8
    const [cart, updateCart] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    
    return isOpen? 
    
    (<div>
    <button  className="button-closed" onClick={() => setIsOpen(false)} > Fermer </button>
    <div className="Cart">
     <h1> Panier : </h1>
     Monstera : {monsteraPrice}€
     <button className="add-button"  onClick={() => updateCart(cart+1)} >  add to cart </button>
     <h3> Totale : {cart*monsteraPrice} </h3>
    </div> 
    <button onClick={() => updateCart(0)} > Vider le panier </button>
    
    </div>) : (<div> <button className="toggle-button" onClick={() => setIsOpen(true)}  > Ouvrir </button> </div>)
    
    }
     */
    