import React from "react";
import './app.css';
import * as ReactDOM from 'react-dom/client';
import InstanceCreation from "./pages/InstanceCreation/app";
import InstancesList from "./pages/InstancesList/app";
import ManageInstance from "./pages/ManageInstance/app";

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate ,
  } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
/*
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
*/


root.render(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/list" replace />} />
        <Route path="/list" element={<InstancesList />} />
        <Route path="/manage/:id" element={<ManageInstance />} />
        <Route path="/create" element={<InstanceCreation />} />
      </Routes>
    </BrowserRouter>
  );
