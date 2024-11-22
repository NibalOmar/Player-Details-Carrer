import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";




function ViniForm() {
    const navigate = useNavigate();
    return (
        <>
        <form className="container2">
        <div className="container2__first">
                <h1 className="container2__title">Junior Vinisios</h1>
                <br/>
                <div className="container2__inf">
                    <p><b>Date of Birth :</b> July 12, 2000</p>
                    <br/>
                    <p><b>Place of Birth :</b> Brazilian </p>
                    <br/>
                    <p><b>Family Background :</b> Mbappé comes from a sporty family footballer.</p>
                    <br/>
                    <p><b>Club Career:</b> Flamengo (2017–2018) Vinícius Júnior began his professional career with Flamengo, making his debut at just 16 years old.</p> 
                    <br/>
                    <p><b>Real Madrid (2018–Present):</b> Vinícius was signed by Real Madrid in 2017 for a record €45 million transfer fee for a player under 18. </p>
                    <br/>
                    <p><b>International Career: </b> Vinícius Júnior made his debut for the Brazil national team in 2019. By 2021, he established himself as a key player, representing Brazil in major tournaments like the FIFA World Cup 2022 </p>
                    <br/>
                    <p><b>Achievements and Honors:</b> UEFA Champions League (2021–2022)_FIFA Club World Cup (2018, 2022)-La Liga (2019–2020, 2021–2022)-Copa del Rey (2022–2023)-Supercopa de España (2021–2022)
                    </p>
                    <br/>
                    <p><b>Individual Awards:</b> UEFA Champions League Team of the Season (2021–2022) La Liga Player of the Month (multiple times) Samba Gold Award (2022, recognizing the best Brazilian player in Europe) </p>
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

export default ViniForm;
