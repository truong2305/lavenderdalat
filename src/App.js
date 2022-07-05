/** @format */

import "./App.scss";
import TheFooter from "./components/footer/TheFooter";
import TheHeader from "./components/header/TheHeader";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";

function App() {
  return (
    <div className='App'>
      <TheHeader />
      <Routes>
        <Route path='/' element={<Home />}>
          {/* <Route index element={<Home />} />
          <Route path='teams' element={<Teams />}>
            <Route path=':teamId' element={<Team />} />
            <Route path='new' element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
      </Routes>
      <TheFooter />
    </div>
  );
}

export default App;
