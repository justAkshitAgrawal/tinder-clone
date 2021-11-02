import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import TinderCards from "./Cards/TinderCards";
import SwipeButtons from "./Components/SwipeButtons";
import Chats from "./Chats/Chats";
import ChatScreen from "./Chats/ChatScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/chats/:person">
            <Header backButton="/chats" />
            <ChatScreen />
          </Route> */}

          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
