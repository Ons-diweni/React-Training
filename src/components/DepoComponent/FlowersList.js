import {plantList} from '../../data/dataSet';
import {Care} from '../CareComponent/care';
import './FlowersList.css';

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
      <div class="categories">
        <h2>Catégories</h2>
        <ul>
          {Categories.map ((c, index) => (
            <li key={c}> <a href="#"> {c} </a> </li>
          ))}
        </ul>
      </div>
      <div class="flowers">
  <h2>Fleurs disponibles</h2>
  <ul>
    {plantList.map (p => (
    <li key={p.id}>
      <div class="care-info">
      <h3>{p.name} <h5> {p.isBestSale && <span>🔥</span>} </h5> </h3>
        <p>
          <strong>Niveau de lumière :</strong>
          {<Care careType="light" scaleValue={p.light} />}
        </p>
        <p>
          <strong>Niveau d'arrosage :</strong>
          {<Care careType="water" scaleValue={p.water} />}
        </p>
        <p class="price">Prix : {p.price}€</p>
      </div>
    </li>
    ))}
  </ul>
</div>

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
