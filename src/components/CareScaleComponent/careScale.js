export const CareScale = ({scaleValue, careType}) => {
  


const quantityLabel = {
        1: 'peu',
        2: 'modérément',
        3: 'beaucoup'
    }
const range = [1, 2, 3];
const guessType = careType === 'light' ? '☀️' : '💧';

return ( <div onClick={() => alert( `Cette plante requiert ${quantityLabel[scaleValue]} 
${ careType === 'light' ? 'de lumière' : "d'arrosage" }`)}>
{range.map(r => scaleValue >= r ? <span> {guessType} </span>  : null)}  </div> )

};
