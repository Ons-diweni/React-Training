import { CareScale } from "../CareScaleComponent/careScale";
import './PlantItem.css'


export const PlanItem = ({name, cover, id, light, water }) => {

    function handleClick(e) {
        console.log('✨ Ceci est mon event :', e)
    }


  return (
    <li key={id} className="item" onClick={handleClick()}>
      <div className="care-info">
      <img className="cover" alt="Plante" src={cover} /> 
        <h3 className="">{name} </h3>
        <div className="info-line">
          <span>Niveau de lumière :</span>
          <div><CareScale careType="light" scaleValue={light} /></div>
        </div>
        <div className="info-line">
          <span>Niveau d'arrosage :</span>
          <div><CareScale careType="water" scaleValue={water} /></div>
        </div>
      </div>
    </li>
  );
};
