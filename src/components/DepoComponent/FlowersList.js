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




  return <ul> {Categories.map ((c,index) => <li  key={`${c}-${index}`}> {c} </li>)} </ul>;
};
