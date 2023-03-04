import {plantList} from '../../data/dataSet';
import {CareScale} from '../CareScaleComponent/careScale';
import './FlowersList.css';
import { PlanItem } from '../PlantItem/PlantItem';

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
 
  return (
    <div>
      <div className ="categories">
        <h2>Catégories</h2>
        <ul>
          {Categories.map ((c, index) => <li key={c}> <a> {c} </a> </li>)}
        </ul>
      </div>
      <div className ="flowers">
        <h2>Fleurs disponibles</h2>
        <ul>
          {plantList.map (p => (
             //Keys Must Be Unique
            <li key={p.id}>
             <PlanItem   name={p.name} cover={p.cover} id={p.id}  light={p.light} water={p.water} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};






/* return (
  <div>
    <div className ="categories">
      <h2>Catégories</h2>
      <ul>
        {Categories.map ((c, index) => <li key={c}> <a> {c} </a> </li>)}
      </ul>
    </div>
    <div className ="flowers">
      <h2>Fleurs disponibles</h2>
      <ul>
        {plantList.map (p => (
          <li key={p.id}>
            <div className ="care-info">
              <h3 className ="" >{p.name} {p.isBestSale && <span>🔥</span>}</h3>
              <div className ="info-line">
                <span>Niveau de lumière :</span>
                <div><CareScale careType="light" scaleValue={p.light} /></div>
              </div>
              <div className ="info-line">
                <span>Niveau d'arrosage :</span>
                <div><CareScale careType="water" scaleValue={p.water} /></div>
              </div>
              <div className ="price">Prix : {p.price}€</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
};
 */








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
