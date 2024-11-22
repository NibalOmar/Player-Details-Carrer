import { useContext } from 'react';
import { Link, Navigate } from "react-router-dom";
import { MainContext } from '../../utils/context';
import { useNavigate } from 'react-router-dom';
import { signOutUser } from '../../utils/firebasefunctions';





function Navbar () {
    const navigate = useNavigate()
    const {user, loading} = useContext(MainContext)

    
    return (
        <>
        <div className='App'>
            <main>
                <section className='welcome-section'>
                    <h1>Hello & welocme to Stories Players
                    </h1>
                        <p>This Platform creating to upgrade your knowledge about FOOTBALL
                         and make sure that  you have long expirience, from now you can use this simple platform
                         to know more information about your favorite players like " RONALO & MESSI " 
                        </p>
                       { user ? ( <button onClick={() => signOutUser()} type='button' className='btn'>sign Out</button> ) : ( <button onClick={() => navigate('/PlayersStory')} className='btn'> Try Now !</button>)};
                       <Link to={'/PlayersStory'}><button className='btn'>see again</button></Link>
                </section>
            </main>
        </div>              
        </>   
    )   

}
export default Navbar;
