import { createContext, useReducer } from "react";

// this is initial value for global auth state (context)
const initialValue = {
  isLogin: false,
  user: {
    fullname: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
    role: "",
  },
};

// create context
export const AuthContext = createContext();

// reducer use to handle complex logic, use wisely
function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    // case "AUTH_SUCCESS":
    case "LOGIN_SUCCESS":
      // localStorage.setItem("token", payload.token);
      localStorage.setItem("user", JSON.stringify(payload));
      return {
        isLogin: true,
        user: payload,
      };
    // case "AUTH_ERROR":
    case "LOGOUT":
      localStorage.removeItem("user");
      return {
        isLogin: false,
        user: {
          fullname: "",
          email: "",
          gender: "",
          phone: "",
          address: "",
          role: "",
        },
      };
    case "AUTH":
      let loginState = JSON.parse(localStorage.getItem("user"));
      let data = {
        isLogin: true,
        user: loginState,
      };

      if (!loginState) {
        data = {
          isLogin: false,
          user: {
            fullname: "",
            email: "",
            gender: "",
            phone: "",
            address: "",
            role: "",
          },
        };
      }

      // console.log(data);

      return data;
    default:
      throw new Error("type doesn't match cases");
  }
}

/** this is wrapper component that will use to be parent component of children that need to
 * consume the state globally
 * @param {*} children
 * @returns
 **/

const AuthContextProvider = ({ children }) => {
  const [stateAuth, dispatch] = useReducer(reducer, initialValue);

  return (
    <AuthContext.Provider value={{ stateAuth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
