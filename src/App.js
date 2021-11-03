import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import DetailTour from "pages/DetailTour";
import Payment from "pages/Payment";
import Profile from "pages/Profile";
import Transaction from "pages/Transaction";
import AddTrip from "pages/AddTrip";
import NotFound from "pages/NotFound";

import PrivateRoute from "components/PrivateRoute";

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={DetailTour} />
          <PrivateRoute path="/payment" component={Payment} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/list-transaction" component={Transaction} />
          <PrivateRoute path="/add-trip" component={AddTrip} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
