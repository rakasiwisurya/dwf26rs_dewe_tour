import Home from "pages/Home";
import DetailTour from "pages/DetailTour";
import Payment from "pages/Payment";
import Profile from "pages/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AuthContextProvider from "contexts/AuthContext";

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:id" component={DetailTour} />
            <Route exact path="/payment/:id" component={Payment} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
