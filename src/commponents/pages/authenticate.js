import { useNavigate,navigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Registertype from "../register-form/register-Form";
import LoginForm from "../login-form/login-form";
import { MainContext } from "../../utils/context";
import { useContext } from "react";




function Authenticate() {
    const navigate = useNavigate();
    const {user , loading} = useContext(MainContext);
    
    useEffect(() => {
        ! loading && user && navigate('/playersStory');
    },[user, loading]);
    
    const [RejisterMode , setRegisterMode] = useState(false)
    
    

    return RejisterMode ? (
       <div className="firstErea">
       <div className="authenticate">
            <Registertype/>
            <p className="regist__p">Already have an account ?</p>
            <b onClick={(e) => setRegisterMode(false)} className="regist__b">LogIn</b>
            <Link to={'/PlayersStory'}> <button className="btn">Go Bcak</button> </Link>
       </div>
       </div>

    ) : (
        <div className="secondErea">
        <div className="authenticate">
            <LoginForm/>
            <p className="login__p"> Don't have an account ?</p>
            <b onClick={(e) => setRegisterMode(true)} className="login__b">Register</b>
           <Link to={'/PlayersStory'}> <button className="btn">Go Bcak</button> </Link>
        </div>
        </div>

    )

};

export default Authenticate;
