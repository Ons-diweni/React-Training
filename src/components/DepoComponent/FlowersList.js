import {plantList} from '../../data/dataSet';

const flowersList = [
  'monstera',
  'ficus lyrata',
  'pothos argenté',
  'yucca',
  'palmier',
];

export const FlowersShow = () => {
  return <ul> {flowersList.map ((f,index) => <li key={`${f}-${index}`}> {f} </li>)} </ul>;
};

export const CategoryList = () => {
    const Categories = plantList.reduce((acc,p) => acc.includes(p.category)? acc : acc.concat(p.category), [])
 //Keys Must Be Unique
  return <ul> {Categories.map ((c,index) => <li  key={c}> {c} </li>)} </ul>;
};


export const IsBestSeller = () => { 
 return <ul> {plantList.map((p,index ) => {return  p.isBestSale ? <li key={`${p}-${index}`}> {p.name} 🔥 </li> : <li> {p.name} 👎 </li> } )} </ul> ;
} ; 


/* export const IsBestSellerr = () => {plantList.map((plant) => (
    <li key={ plant.id }>
        {plant.isBestSale ? <span> {plant} 🔥</span> : <span> {plant} 👎</span>}
    </li>
))} ; */


