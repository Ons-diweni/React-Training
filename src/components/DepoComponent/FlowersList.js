const flowersList  = [
  'monstera',
  'ficus lyrata',
  'pothos argenté',
  'yucca',
  'palmier',
];



function FlowersShow () 
{ return <ul> {flowersList.map( f => <li> {f} </li>)} </ul>}


export default FlowersShow 