import React from 'react';
import './Login.css';



function Login(){
    
    const [text, setText]=React.useState();
    const [isVisible, setIsVisible]=React.useState(false);
    const [passStrength,setPassStrength] = React.useState('');


    

    const handleTextChange=(event)=>{
        const textvalue = event.target.value;
        //check code 
        if(textvalue.length <= 5){
            setPassStrength('weak');
        }else if(textvalue.length <= 8 ){
            setPassStrength('medium');
        }else {
            setPassStrength('strong');
        }
        setText(textvalue);
    }


    const passwordVisibility=()=>{
       setIsVisible(!isVisible);
    }

    return (
        <div className="Login">
            <header className="Login-header">
                <div className="container">
                    <div className="flexBox-container flexBox-item1">
                        <div className="x">
                        {
                            passStrength === 'weak' && <div className="image-Container-1"></div>
                            }
                            {
                            passStrength === '' && <div className="image-Container-home"></div>
                            }
                            {
                            passStrength === 'medium' && <div className="image-Container-2"></div>
                            }
                            {
                            passStrength === 'strong' && <div className="image-Container-3"></div>
                        }
                            
                        </div>
                        <h3>{
                            passStrength === '' && 'Hi Phirend !'
                            }
                            {
                            passStrength === 'strong' && 'Amazing Password Dude'
                            }
                            {
                            passStrength === 'medium' && 'Average Password '
                            }
                            {
                            passStrength === 'weak' && 'Weak Password Bro' 
                            }</h3>
                    </div>
                    <div className="flexBox-container flexBox-item2">
                        <div className="box">    
                            <h2>Welcome</h2>                     
                            <input type="text" name="name" placeholder="Enter your password"  required />   
                            <input type={isVisible ? 'text' : 'password'} name="pass" placeholder="Enter your password" id="myInput" onChange={handleTextChange} required/>                      
                            <div className="buttonBox">
                                <button className="buttons " id="button-1" onClick={passwordVisibility}><ion-icon name={isVisible?"eye-outline":"eye-off-outline"}></ion-icon></button>
                                <button className="buttons button-2 buttonLogin" >Signup</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
        
    );
}

export default Login;