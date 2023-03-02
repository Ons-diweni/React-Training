import {plantList} from '../../data/dataSet'

const flowersList  = [
  'monstera',
  'ficus lyrata',
  'pothos argenté',
  'yucca',
  'palmier',
];



export const FlowersShow = () => { return <ul> {flowersList.map( f => <li> {f} </li>)} </ul>}


export const CategoryList = () => {return <ul> { plantList.map(p => <li> {p.category} </li> ) } </ul>}

