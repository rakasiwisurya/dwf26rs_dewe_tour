import { createContext, useReducer } from "react";

// this is initial value for global auth state (context)
const initialValue = [];

// create context
export const NotifContext = createContext();

// reducer use to handle complex logic, use wisely
function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_NOTIF":
      return payload;

    default:
      throw new Error("type doesn't match cases");
  }
}

/** this is wrapper component that will use to be parent component of children that need to
 * consume the state globally
 * @param {*} children
 * @returns
 **/

const NotifContextProvider = ({ children }) => {
  const [stateNotif, dispatchNotif] = useReducer(reducer, initialValue);

  return (
    <NotifContext.Provider value={{ stateNotif, dispatchNotif }}>
      {children}
    </NotifContext.Provider>
  );
};

export default NotifContextProvider;
