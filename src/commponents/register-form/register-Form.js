import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../utils/firebasefunctions";
import { getFrontendErrorMessage } from "../../utils/firebasefunctions";

function Registertype() {
    const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "", 
   });
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const InputsChange = (e) => {
        const {name,value} = e.target;
        setInputs({...inputs, [name]: value});
       };
    const moveRegister = async (e) => {
        e.preventDefault();
        const res = await registerUser(inputs.username, inputs.email, inputs.password);
        if (res.success) {
            navigate("/PlayersStory")} 
        else {setError(getFrontendErrorMessage(res.error))} 
    };
    return (
        <>
        <form className="form" onSubmit={moveRegister}>
                <div>
                    <h1 className="form__title">Create an Account to see players carrer</h1>
                    <div className="form__second"> 
                        <label className="form__lable">Username:</label>                       
                        <input onChange={InputsChange} 
                        value={inputs.username} 
                        name="username"
                        classsName="form__input" 
                        type="username" 
                        placeholder="Enter your Username" 
                        required
                        />
                        

                        <label className="form__lable">Email:</label>
                        <input onChange={InputsChange} value={inputs.email} name="email" className="form__input" type="email" placeholder="Enter your Email " required/>
                        <label className="form__lable">Password:</label>
                        { error&&<div className="form__error">{error}</div>}
                        <input onChange={InputsChange} value={inputs.password} name="password" className="form__input" type="password" placeholder="Enter your password" required/>
                        
                        <div className="form__third">
                            <button className="form__btn">Register</button>
                        </div>                
                    </div>
                </div>
        </form>
        
        </>
        
    )
}


    export default Registertype;




