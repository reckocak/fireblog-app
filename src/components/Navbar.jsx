import React, { useContext, useEffect } from "react";
import Fd from "../assets/aboutme.png";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { AuthContext } from "../contexts/AuthContext";
import { toastWarnNotify, toastErrorNotify } from "../utils/toastNotify";
import { logOut } from "../utils/functions";
import { useGetData} from '../utils/functions'
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
  const { show, setShow, currentUser } = useContext(AuthContext);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 4000);

    return () => clearTimeout(timeout);
  }, [show]);
  const navigate = useNavigate();

  //! useContext ile AuthContext de ki currentUser'i yakaliyoruz.
 
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
    <nav
      className="Navbar d-flex justify-content-between align-items-center bg-primary p-2"
      style={{ height: "10vh" }}
    >
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

      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center">
          {currentUser && (
            <h5 className="text-dark d-flex align-items-center m-0">
              {currentUser.displayName}
            </h5>
          )}
        </div>
        <div className="btnDiv d-flex align-items-center justify-content-center px-3">
          <button className="border-0 fs-1 bg-transparent d-flex align-items-center">
            <FaUserCircle
              className="text-primary bg-light rounded-circle "
              onClick={() => setShow(!show)}
            />
          </button>
          {show && <Modal />}
        </div>
      </div>
    </nav>
  );
};
const Modal = () => {
  const { currentUser } = useContext(AuthContext);
  const { blogList } = useGetData();
  return (
    <div className="modalDiv rounded-3 mt-2">
      {currentUser ? (
        <ul className="m-0 d-flex justify-content-center align-items-center flex-column p-2 ">
          <li className="list-unstyled">
            <Link
              to="/profile"
              className="text-dark text-decoration-none fw-bold"
            >
              Profile
            </Link>{" "}
          </li>
          <li className="list-unstyled">
            <Link
              to="/newblog"
              className="text-dark text-decoration-none fw-bold"
            >
              New
            </Link>{" "}
          </li>
          <li className="list-unstyled">
            <Link
              to="/about"
              className="text-dark text-decoration-none fw-bold"
            >
              Owner
            </Link>{" "}
          </li>
          <li className="list-unstyled">
            <Link
              to="/login"
              className="text-dark text-decoration-none fw-bold"
              onClick={() => logOut(blogList)}
            >
              Logout
            </Link>{" "}
          </li>
        </ul>
      ) : (
        <ul className="text-center p-2">
          <li className="list-unstyled">
            <Link
              to="/login"
              className="text-dark text-decoration-none fw-bold"
            >
              Login
            </Link>{" "}
          </li>
          <li className="list-unstyled">
            <Link
              to="/register"
              className="text-dark text-decoration-none fw-bold"
            >
              Register
            </Link>{" "}
          </li>
          <li className="list-unstyled">
            <Link
              to="/about"
              className="text-dark text-decoration-none fw-bold"
            >
              Owner
            </Link>{" "}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
