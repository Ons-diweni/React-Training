import { CareScale } from "../CareScaleComponent/careScale";
import './PlantItem.css'


export const PlanItem = ({name, cover, id, light, water }) => {
  return (
    <div key={id} className="item">

      <div className="care-info">
      <div className="cover">  <img alt="Plante" src={cover} /> </div> 
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
    </div>
  );
};
