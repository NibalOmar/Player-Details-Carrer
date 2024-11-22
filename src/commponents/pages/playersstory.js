import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../utils/context";
import { useNavigate } from "react-router-dom";

function PlayersStory () {
    const navigate = useNavigate()
    const {user, loading} = useContext(MainContext)

    /* Notice: if there's user button be SignOut and let see everything, 
    if no user button be LogInToSeePlayerStory, Work on button and images*/

    return (
        <>
        <div className="container1">
           
            <div className="container1__items">
                <h1 className="container1__h1">
                        Here you can choose your favorite players
                </h1>
                    < div className="container1__para">
                        <p>choose your favorite player by clicking on the players's picture.<b> BETA</b>
                        </p>
                    <div/>
                        <div className="container1__images">

                            <div className="images2">   
                                 { user ? ( <img onClick={() => navigate('/MbappeForme')} className="images__img1" src={ require ('../images/Mbappe.png')}/>)  : <img onClick={() => navigate('/Authenticate')} className="images__img1" src={ require ('../images/Mbappe.png')}/> };
                                 { user ? ( <img onClick={() => navigate('/KaneFrom')} className="images__img1" src={ require ('../images/Kane.png')}/>)  : <img onClick={() => navigate('/Authenticate')} className="images__img1" src={ require ('../images/Liwa.png')}/> };
                                 { user ? ( <img onClick={() => navigate('/ViniForm')} className="images__img1" src={ require ('../images/Vini.png')}/>)  : <img onClick={() => navigate('/Authenticate')} className="images__img1" src={ require ('../images/Vini.png')}/> };
                                 { user ? ( <img onClick={() => navigate('/LiwaForm')} className="images__img1" src={ require ('../images/Liwa.png')}/>)  : <img onClick={() => navigate('/Authenticate')} className="images__img1" src={ require ('../images/Kane.png')}/> };      
                            </div>                                                 
                        </div>
                        <div className="container__btnarea">
                            <div>
                               { user ? ( <button className="btn" onClick={() => navigate('/')}> Go back to signOut </button>) : 
                               ( <button onClick={() => navigate('/authenticate')} className=" btn">logIn To see Players details</button> ) }
                            </div>
                        </div>  
            </div>
        </div> 
        </div>     
        </>
    );
}

export default PlayersStory;
