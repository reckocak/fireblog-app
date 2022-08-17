import { useState, useEffect } from "react";
import { createContext } from "react";
import { userCurrent } from "../utils/functions";
import {
  getDatabase,
  set,
  ref,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import firebase from "../utils/firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [blog, setBlog] = useState();

  useEffect(() => {
    const db = getDatabase(firebase);
      const blogRef = ref(db, "blog/");
      onValue(blogRef, (snapshot) => {
        const data = snapshot.val();
        const blogArray = [];

        for (let id in data) blogArray.push({ id, ...data[id] });
        setBlog(blogArray);
      });
   
    userCurrent(setCurrentUser);
    
  }, []);
 

  return (
    <AuthContext.Provider value={{ blog, currentUser, setShow, show }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider
