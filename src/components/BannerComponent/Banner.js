import './Banner.css'
import logo from '../../assets/logo.png'


function Banner () {
    const title = "Bienvenue chez le fleuriste des amoureux"
    return  <div className='style-banner'> 
        <img src={logo} alt='le logo du site' className="style-logo" />
    <h1 className="style-title"> {title} </h1> </div>
}

export default Banner