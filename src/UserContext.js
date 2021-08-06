import { createContext } from "react";

export const UserContext = createContext({
  uid: "",
  setUid: () => {},
});
