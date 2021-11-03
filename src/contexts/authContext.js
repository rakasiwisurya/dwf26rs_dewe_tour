import { createContext, useReducer } from "react";

// this is initial value for global auth state (context)
const initialValue = {
  isLogin: false,
  user: {
    id: "",
    fullname: "",
    email: "",
    password: "",
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
    case "LOGIN":
      localStorage.setItem(
        "userLogin",
        JSON.stringify({
          isLogin: true,
          user: payload,
        })
      );
      return {
        isLogin: true,
        user: payload,
      };
    case "LOGOUT":
      localStorage.removeItem("userLogin");
      return {
        isLogin: false,
        user: {
          id: "",
          fullname: "",
          email: "",
          password: "",
          phone: "",
          address: "",
          role: "",
        },
      };
    case "AUTH":
      const loginState = JSON.parse(localStorage.getItem("userLogin"));

      return loginState
        ? loginState
        : {
            isLogin: false,
            user: {
              id: "",
              fullname: "",
              email: "",
              password: "",
              phone: "",
              address: "",
              role: "",
            },
          };
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
