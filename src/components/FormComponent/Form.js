import { useState } from "react";

export const FormQuestion = () => {
  
  /*   function handleSubmit (e) {
    e.preventDefault ();
    alert (e.target['Myinput'].value);
  } */

  //Le hook useState renvoie un tableau contenant deux éléments :
  // la valeur actuelle de l'état et une fonction permettant de mettre à jour cette valeur
  const [inputValue, setInputValue] = useState('Posez votre question ici')
  return (
   
    /*  <form  onSubmit={handleSubmit}>
      <input type={Text} name="Myinput" defaultValue="Tapez votre texte"/>
      <button type="text"> Submit </button>
    </form> */


    <div>
    <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
    />
      <button onClick={() => alert(inputValue)}> Alertez moi 🚨</button>
</div>
  );

};
