import './Banner.css';
import logo from '../../assets/logo.png';
import {Recommendation} from '../RecommendComponent/Recommendation';

function Banner () {
  const title = 'Bienvenue chez le fleuriste des amoureux';
  return (
    <div className="style-banner">
      <div>
        <img src={logo} alt="le logo du site" className="style-logo" />
        <h1 className="style-title"> {title} </h1>{' '}
      </div>
      <div> <Recommendation /> </div>{' '}
    </div>
  );
}

export default Banner;
