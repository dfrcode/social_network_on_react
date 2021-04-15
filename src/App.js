import "./App.css";

const App = () => {
  return (
    <div>
      <header className="header">
        <img
          className="img-logo"
          src="http://logok.org/wp-content/uploads/2014/12/Z-logo.png"
        />
      </header>
      <div className="container">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list-item">Profile</li>
            <li className="nav-list-item">Messages</li>
            <li className="nav-list-item">News</li>
            <li className="nav-list-item">Music</li>
            <li className="nav-list-item">Settings</li>
          </ul>
        </nav>
        <div className="content">
          <div className="head-profile">
            <img className="img-head" src="https://d2halst20r4hcy.cloudfront.net/43f/fe8af/35c2/4e49/9883/70db75550371/original/40544.jpg" />
          </div>
          <div className="profile">
            <div className="ava">
              <img className="img-avatar" src="https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/d49a024e7ade40858a10df3b8976625d.png" />
            </div>
            <div className="description">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
