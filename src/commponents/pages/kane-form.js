import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";




function KaneFrom() {
    const navigate = useNavigate();
    return (
        <>
        <form className="container2">
            <div className="container2__first">
                <h1 className="container2__title">Harry Kane</h1>
            <br/>
                <p className="container2__inf"><b>Date of Birth: </b>July 28, 1993
                </p>
                <br/>
                <p className="container2__inf"><b>Nationality: </b>English</p>
                <br/>
                <p className="container2__inf"><b>Position: </b>Striker
                </p>
                <br/>
                <p className="container2__inf"><b>Youth Career: </b>Harry Kane started his football journey in the youth academy of Arsenal before joining Tottenham Hotspur’s academy in 2004
                </p>
                <br/>
                <p className="container2__inf"><b>Early Loan Spells (2011–2013): </b> To gain experience, Kane was loaned out to several clubs, including Leyton Orient, Millwall, Norwich City, and Leicester City
                </p>
                <br/>
                <p className="container2__inf"><b>Tottenham Hotspur (2014–2023): </b> Kane broke into Tottenham’s first team during the 2014–2015 season.
                </p>
                <br/>
                <p className="container2__inf"><b>Bayern Munich (2023–Present): </b>In 2023, Kane made a high-profile move to Bayern Munich. He quickly adapted to life in the Bundesliga, continuing to score prolifically and contribute to the team's domestic and European ambitions.
                </p>
                <br/>
                < div className="container2__btdiv">
                <br/>
            <Link to={'/PlayersStory'}><button className="btn">Go Back</button></Link>
        </div>
            </div>
            <div>
                
            </div>
            
        </form>
        </>
    )
}

export default KaneFrom;
