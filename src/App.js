import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

import "./App.css";

const App = (props) => {
  let { newPost, changeValue } = props;
  let { postsData, textValue } = props.state.profilePage;
  let { dialogsData, messagesData } = props.state.messagesPage;

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <Navbar />
          <div className="content">
            <Route
              path="/profile"
              render={() => (
                <Profile
                  postsData={postsData}
                  newPost={newPost}
                  textValue={textValue}
                  changeValue={changeValue}
                />
              )}
            />
            <Route
              path="/dialogs"
              render={() => (
                <Dialogs
                  dialogsData={dialogsData}
                  messagesData={messagesData}
                />
              )}
            />
            <Route path="/news" render={() => <News />} />
            <Route path="/musics" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/friends" render={() => <Friends />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
