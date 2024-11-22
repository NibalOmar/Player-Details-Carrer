import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";




function MbappeForme() {
    const navigate = useNavigate();
    return (
        <>
        <form className="container2">
        
            <div className="container2__first">
                <h1 className="container2__title">Kilyan Mbappe</h1>
                <br/>
                <div className="container2__inf">
                    <p><b>Date of Birth :</b> December 20, 1998</p>
                    <br/>
                    <p><b>Place of Birth :</b> Bondy, a suburb of Paris, France</p>
                    <br/>
                    <p><b>Family Background :</b> Mbappé comes from a sporty family footballer.</p>
                    <br/>
                    <p><b>First Club :</b> Kylian Mbappé made his professional debut with AS Monaco in 2015</p> 
                    <br/>
                    <p><b>Breakthrough Season :</b> In the 2016–17 season, with Monaco, He scored 26 goals, 
                    Paris Saint-Germain (PSG) In 2017, Mbappé signed with Paris Saint-Germain (PSG) 
                    initially on loan, which turned into a permanent transfer worth €180 million.</p>
                    <br/>
                    <p><b>Achievements with PSG: </b> Multiple Ligue 1 titles (2018, 2019, 2020, 2022).
                    A crucial player in PSG’s journey to the UEFA Champions League Final in 2020.</p>
                    <br/>
                    <p><b>National Team Debut:</b> Mbappé made his debut for the French national team in 2017 at just 18 years old.
                    </p>
                    <br/>
                    <p><b>2018 FIFA World Cup:</b> He became a global sensation during the World Cup.
                    Scored 4 goals</p>
                </div>
                < div className="container2__btdiv">
                <br/>
            <Link to={'/PlayersStory'}><button className="btn">Go Back</button></Link>
        </div>
            </div>
        </form>
        </>
    )
}

export default MbappeForme;
