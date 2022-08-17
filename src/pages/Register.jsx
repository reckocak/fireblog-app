import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/blok.png";
import googleimg from "../assets/google.png";
import { createUser, signUpProvider } from "../utils/functions";



const Register = () => {
  const [registerEmail, setRegisterEmail] = useState();
  const [registerPassword, setRegisterPassword] = useState();
  const [firstName, setFirstName] = useState();
  const navigate = useNavigate();
  
  const handleRegister = (e) => {
    e.preventDefault(e);
    const displayName = `${firstName}`;
    createUser(registerEmail, registerPassword, navigate, displayName);
    
  };

  const handleGoogleSignIn = () => {
    signUpProvider(navigate);
    
  };

  return (
    <div className="register m-auto mt-5 bg-light p-5">
      <div className="container text-center">
        <div className="imgdiv">
          <img src={img} alt="" width={"250px"} />
        </div>

        <div>
          <h4 className="text-login text-dark">Register</h4>
        </div>

        <div>
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label fw-bold">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </div>

            <div className="mt-3 mb-3">
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>
            
                <div>
                  <button type="submit" className="text-dark  btn btn-warning button1">
                    REGISTER
                  </button>
                </div>

                <div className="mt-3 mb-5">
                  <button
                    className="button2"
                    onClick={handleGoogleSignIn}
                    type="submit"
                  >
                    With {" "}
                    <span>
                      <img src={googleimg} width={"80px"} alt="" />
                    </span>
                  </button>
                </div>
             
            );
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
