import React, { useContext } from "react";

import Fd from "../assets/aboutme.png";

import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { AuthContext } from "../contexts/AuthContext";
import { toastWarnNotify, toastErrorNotify } from "../utils/toastNotify";

const Navbar = () => {
  const navigate = useNavigate();

  //! useContext ile AuthContext de ki currentUser'i yakaliyoruz.
  const { currentUser } = useContext(AuthContext);
  //  const currentUser = { displayName: "recep" };
  // const currentUser = false;

  //! Logout

  const logOut = () => {
    try {
      signOut(auth).then((res) => {
        console.log(res);
        toastWarnNotify("Logged out successfully!");
      });
      navigate("/");
    } catch (err) {
      toastErrorNotify("Error!");
      console.log(err.message);
    }
  };

  return (
    <nav className="Navbar d-flex justify-content-between align-items-center bg-primary p-2" style={{height:'10vh'}}>
      <a href="https://www.clarusway.com" target="_blank">
        <img
          style={{ boxShadow: "0px 0px 10px 2px red" }}  
          src={Fd}
          alt=""
          width="105px"
          className="rounded-circle"
        />
      </a>
      <div>
        <Link to="/" className="text-decoration-none text-white">
          <h2>
            <i
              style={{
                fontFamily: "Girassol",
                textShadow: "2px 20px 20px red",
              }}
            >
              {"──── Recep's Blog ────"}
            </i>
          </h2>
        </Link>
      </div>

      <div>
        {currentUser ? (
          <>
            <button
              type="button"
              class="btn btn-warning me-1"
              onClick={() => {
                navigate("/Profile");
              }}
            >
              Profile
            </button>
            <button
              type="button"
              class="btn btn-info me-1"
              onClick={() => {
                navigate("/NewBlog");
              }}
            >
              New
            </button>
            <button type="button" class="btn btn-danger" onClick={logOut}>
              Logout
            </button>
          </>
        ) : (
          <>
          <button
              type="button"
              class="btn btn-danger me-1"
              variant="contained"
              sx={{ mr: 1 }}
              onClick={() => {
                navigate("/About");
              }}
            >
              About
            </button>
            <button
              type="button"
              class="btn btn-danger me-1"
              variant="contained"
              sx={{ mr: 1 }}
              onClick={() => {
                navigate("/Login");
              }}
            >
              Login
            </button>
            <button
              type="button"
              class="btn btn-danger"
              variant="contained"
              onClick={() => {
                navigate("/Register");
              }}
            >
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
