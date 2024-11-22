
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFrontendErrorMessage, signInUser } from "../../utils/firebasefunctions";



function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error,setError] = useState(null);
    
    const handleLogin = async (e) => {
        e.preventDefault()
        const res = await signInUser(email, password);
        if (
           res.success
        ) { navigate("/PlayersStory")}
         else {
            setError(getFrontendErrorMessage(res.error)); 
         }
    };

    return (
        <>
         <form onSubmit={handleLogin} className="form">
            <div className="form__fisrt">
                <h1 className="form__title">Login your account to see players carrer</h1>
                
                <div className="form__second"> 
                    <label className="form__label">
                        Email:
                    </label>
                    
                    <input onChange={(e) => setEmail(e.target.value)}
                    className="form__input" 
                    type="text" 
                    id="email" 
                    placeholder="Enter your Email"
                    value={email}
                    required/>
                    
                    
                    <label 
                    className="form__label">Password:
                    </label>
                    { error && <div className="form__error">{error}</div>}
                    
                    <input 
                    onChange={(e) => setPassword(e.target.value)}
                    className="form__input" 
                    type="password" 
                    id="password" 
                    placeholder=" please Enter your Password"
                    value={password}
                    required/>                                         
                  

                    <div className="form__third">
                    <button className="form__btn" 
                    type="buttun">LogIn
                    </button>
                    </div>

                </div>
            </div>
         </form>
        </>
    )
}

export default LoginForm;