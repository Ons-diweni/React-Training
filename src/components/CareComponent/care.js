export const Care = ({scaleValue, careType}) => {
  
const range = [1, 2, 3];
const guessType = careType === 'light' ? '☀️' : '💧';

return <div>  {range.map(r => scaleValue >= r ? <span> {guessType} </span>  : null)}  </div>


};
