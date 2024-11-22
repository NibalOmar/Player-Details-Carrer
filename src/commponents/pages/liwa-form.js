import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";




function LiwaForm() {
    const navigate = useNavigate();
    return (
        <>
        <form className="container2">

            <div className="container2__first">
                <h1 className="container2__title">Robert Liwandowski</h1>
                <br/>
                <p className="container2__inf"><b>Date of Birth: </b>August 21, 1988
                </p>
                <br/>
                <p className="container2__inf"><b>Nationality: </b>Polish
                </p>
                <br/>
                <p className="container2__inf"><b>Position: </b>Striker
                </p>
                <br/>
                <p className="container2__inf"><b>Znicz Pruszków (2006–2008): </b>Lewandowski started his professional career at Znicz Pruszków in Poland.
                </p>
                <br/>
                <p className="container2__inf"><b>Lech Poznań (2008–2010): </b>After joining Lech Poznań, Lewandowski showcased his talent by scoring 41 goals in 82 appearances
                </p>
                <br/>
                <p className="container2__inf"><b>Borussia Dortmund (2010–2014): </b>Lewandowski moved to Germany and signed with Borussia Dortmund.
                </p>
                <br/>
                <p className="container2__inf"><b>Bayern Munich (2014–2022): </b>Lewandowski joined Bayern Munich on a free transfer in 2014. At Bayern, he became one of the most prolific strikers in football history, winning eight consecutive Bundesliga titles and the UEFA Champions League in the 2019–2020 season.
                </p>
                <br/>
                <p className="container2__inf"><b>FC Barcelona (2022–Present): </b>In 2022, Lewandowski signed with FC Barcelona, continuing to demonstrate his exceptional goal-scoring ability and contributing to the team's success in La Liga.
                </p>
                <br/>
                <p className="container2__inf"><b>Fun Fact: </b>Lewandowski is known for his incredible scoring consistency and fitness.
                </p>
                < div className="container2__btdiv">
                <br/>
            <Link to={'/PlayersStory'}><button className="btn">Go Back</button></Link>
        </div>
            </div>
        </form>
        </>
    )
}

export default LiwaForm;
