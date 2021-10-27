import { Redirect, Route } from "react-router";

export default function PrivateRoute({ component: Component, ...rest }) {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));

  return (
    <Route
      {...rest}
      render={(props) =>
        userLogin.isLogin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
