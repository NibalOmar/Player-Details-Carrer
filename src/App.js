import "./commponents/navbar/navbar.scss";
import "./App.scss";
import { MainContext } from "./utils/context";
import Navbar from "./commponents/navbar/navbar";
import PlayersStory from "./commponents/pages/playersstory";
import Authenticate from "./commponents/pages/authenticate";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "./utils/firebaseconfig";
import { Route, Routes, Router } from "react-router-dom";
import MbappeForme from "./commponents/pages/mbappe-form";
import LiwaForm from "./commponents/pages/liwa-form";
import ViniForm from "./commponents/pages/vini-form";
import KaneFrom from "./commponents/pages/kane-form";
import { useEffect } from "react";
import { pullUserDatta } from "./utils/firebasefunctions";





function App() {
  const [user, loading] = useAuthState(auth);
  
  const infuser = async () => {
  const res = await pullUserDatta(user);
  
    if (
      res.success
    )
    {console.log(res.data)};
  }

  useEffect(() => {
    user && infuser();
  }, [user] );
  
  
  return (
    <>

    <MainContext.Provider value={{user, loading}}>
    <Routes>
      <Route path="/" element={<Navbar/>}></Route>
      <Route path="/PlayersStory" element={<PlayersStory/>}></Route>
      <Route path="/Authenticate" element={<Authenticate/>}></Route>
      <Route path="/MbappeForme" element={<MbappeForme/>}></Route>
      <Route path="/LiwaForm" element={<LiwaForm/>}></Route>
      <Route path="/ViniForm" element={<ViniForm/>}></Route>
      <Route path="/KaneFrom" element={<KaneFrom/>}></Route>
    </Routes>
    </MainContext.Provider>

     </>
  );
  
}

export default App;
