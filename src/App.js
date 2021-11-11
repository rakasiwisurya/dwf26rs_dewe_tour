import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { API, setAuthToken } from "config/api";
import { AuthContext } from "contexts/AuthContext";

import Home from "pages/Home";
import DetailTour from "pages/DetailTour";
import Payment from "pages/Payment";
import Profile from "pages/Profile";
import Transaction from "pages/Transaction";
import AddTrip from "pages/AddTrip";
import NotFound from "pages/NotFound";
import PrivateRoute from "components/PrivateRoute";

import "assets/scss/style.scss";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const { stateAuth, dispatch } = useContext(AuthContext);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      if (response.status !== 200) {
        dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data.user;
      payload.token = localStorage.token;
      dispatch({
        type: "AUTH_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "AUTH_ERROR",
      });
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          {stateAuth.isLoading ? (
            <div className="container">
              <div className="d-flex justify-content-center align-items-center fs-4 vh-100">
                Loading...
              </div>
            </div>
          ) : (
            <>
              <Route exact path="/" component={Home} />
              <Route path="/detail/:id" component={DetailTour} />
              <PrivateRoute path="/payment" component={Payment} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/list-transaction" component={Transaction} />
              <PrivateRoute path="/add-trip" component={AddTrip} />
            </>
          )}
          <Route component={NotFound} />
        </Switch>
      </Router>
      <NotificationContainer />
    </div>
  );
}

export default App;
