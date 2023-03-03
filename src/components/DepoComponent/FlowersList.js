import {plantList} from '../../data/dataSet';
import { Care } from '../CareComponent/care';

/* const flowersList = [
  'monstera',
  'ficus lyrata',
  'pothos argenté',
  'yucca',
  'palmier',
];
 */

export const FlowersList = () => {
  const Categories = plantList.reduce (
    (acc, p) => (acc.includes (p.category) ? acc : acc.concat (p.category)),
    []
  );
  //Keys Must Be Unique
  return (
    <div>
      <ul>
        {Categories.map ((c, index) => <li key={c}> {c} </li>)}
      </ul>
      <ul>
        {plantList.map (p => <li key={p.id}> {p.name}  {p.isBestSale && <span>🔥</span>} 
        {<Care careType='light' scaleValue={p.light} />} 
        {<Care careType='water' scaleValue={p.water} />} </li>)}
      </ul>
    </div>
  );
};

/* export const FlowersShow = () => {
  return <ul> {flowersList.map ((f,index) => <li key={`${f}-${index}`}> {f} </li>)} </ul>;
};

export const CategoryList = () => {
    const Categories = plantList.reduce((acc,p) => acc.includes(p.category)? acc : acc.concat(p.category), [])
 //Keys Must Be Unique
  return <ul> {Categories.map ((c,index) => <li  key={c}> {c} </li>)} </ul>;
};


export const IsBestSeller = () => { 
    return <ul> {plantList.map((p,index ) => { return p.isBestSale && <li key={`${p}-${index}`}> {p.name} 🔥 </li> } )} </ul> ;
   } ;  */

/* export const IsBestSeller = () => { 
 return <ul> {plantList.map((p,index ) => {return  p.isBestSale ? <li key={`${p}-${index}`}> {p.name} 🔥 </li> : <li> {p.name} 👎 </li> } )} </ul> ;
} ;  */
