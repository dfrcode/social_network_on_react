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

const newsComponent = () => {
  return <News />;
};

const musicComponent = () => {
  return <Music />;
};

const settingsComponent = () => {
  return <Settings />;
};

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <Navbar />
          <div className="content">
            <Route
              path="/profile"
              render={() => <Profile postsData={props.postsData} />}
            />
            <Route
              path="/dialogs"
              render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />}
            />
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
