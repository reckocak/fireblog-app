import { auth, firebase } from "./firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged
} from "firebase/auth";
import {
  getDatabase,
  set,
  ref,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "./toastNotify";

//new register
export const createUser = async (
  registerEmail,
  registerPassword,
  navigate,
  displayName
) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    
    navigate("/");
    toastSuccessNotify("Registered successfully!");
  } catch (err) {
    toastErrorNotify(err.message);
  }
};

//log in
export const logIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    
    navigate("/");
    toastSuccessNotify("Logged in successfully!");
    
  } catch (err) {
    console.log(err);
    toastErrorNotify(err.message);
  }
};

//ayni adresle kayit engelleme
export const userCurrent = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};


//log out
export const logOut = () => {
  signOut(auth)
    .then((res) => {
      console.log(res);
      toastWarnNotify("Logged out successfully!");
    })
    .catch((error) => {});
};


//google ile giris
export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
      toastSuccessNotify("Logged in successfully!");
    })
    .catch((error) => {
      console.log(error);
      toastErrorNotify(error.message);
    });
};


 export const db = getDatabase(firebase);
//Bilgi ekle
export const addBlog = (blog, currentUser,navigate) => {
 
  const userRef = ref(db, "blog/");
  const newUserRef = push(userRef);
  set(newUserRef, {
    title: blog.title,
    url: blog.url,
    content: blog.content,
    userName: currentUser.displayName,
    like: blog.like,
    date: blog.date,
    usersId: blog.usersId,
    color: blog.color,
  });
  toastSuccessNotify("Added blog Succesfully!");

  navigate("/");
};




//Bilgi Silme
export const DeletedBlog = (id, navigate) => {
  const db = getDatabase(firebase);
  remove(ref(db, "blog/" + id));
  navigate("/");
  toastErrorNotify("Deleted Blog Succefully");
};


//Bilgi Düzenleme
export const updateBlog = (blog) => {
  const db = getDatabase(firebase);
  const updates = {};
  updates["blog/" + blog.id] = blog;
  toastWarnNotify("Updated Blog Succesfully!");

  return update(ref(db), updates);
};
