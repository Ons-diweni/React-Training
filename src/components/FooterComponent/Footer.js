import { useState } from 'react'
import './Footer.css'

export function Footer() {
const [emailValue, setEmailValue] = useState('Tapez votre email')

    /* function checkEmail (value) {
     (value.includes('@')? setEmailValue(value):alert('mail should contain @'))
     } */
   
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>
                Laissez-nous votre mail : 
                <input value={emailValue} type="text" onChange={(e) => setEmailValue(e.target.value) }/> 
                <button  onClick={() => {(!emailValue.includes('@'))? alert('email non valide '): alert(emailValue)}}>Envoyer </button>
            </div>
		</footer>
	)

   
/* 
    
      const [inputValues, setInputValues] = useState({ input1: '', input2: '' });
    
      function handleInputChange(name, value) {
        setInputValues(prevValues => ({ ...prevValues, [name]: value }));
      }
    
      return (
        <div>
          <input type="text" value={inputValues.input1} onChange={e => handleInputChange('input1', e.target.value)} />
          <input type="text" value={inputValues.input2} onChange={e => handleInputChange('input2', e.target.value)} />
        </div>
      );
    


       const [inputValues, setInputValues] = useState(['', '']);

  function handleInputChange(index, value) {
    setInputValues(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  }

  return (
    <div>
      <input type="text" value={inputValues[0]} onChange={e => handleInputChange(0, e.target.value)} />
      <input type="text" value={inputValues[1]} onChange={e => handleInputChange(1, e.target.value)} />
    </div>
  );

     */


}
