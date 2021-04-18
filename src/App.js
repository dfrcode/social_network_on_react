import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import "./App.css";

const profileComponent = () => {
  return <Profile />;
};

const dialogsComponent = () => {
  return <Dialogs />;
};

const newsComponent = () => {
  return <News />;
};

const musicComponent = () => {
  return <Music />;
};

const settingsComponent = () => {
  return <Settings />;
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <Navbar />
          <div className="content">
            <Route path="/profile" render={profileComponent} />
            <Route path="/dialogs" render={dialogsComponent} />
            <Route path="/news" render={newsComponent} />
            <Route path="/musics" render={musicComponent} />
            <Route path="/settings" render={settingsComponent} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
