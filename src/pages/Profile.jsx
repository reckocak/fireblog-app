import React from "react";
import profile from "../assets/aboutme.png";
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const Profile = () => {
  const {currentUser}=useContext(AuthContext);
  
  return (
    <>
      <div className="text-center">
        <img src={profile} alt="" />
      </div>
      <div className="bg-light table-div m-auto table">
        <table className="table table-striped table-bordered border-dark">
          <tbody>
            <tr className="table-primary table-bordered border-dark">
              <th>Name</th>
              <td>{currentUser?.displayName}</td>
            </tr>
            <tr className="table-primary table-bordered border-dark">
              <th>Email Address</th>
              <td>{currentUser.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}



export default Profile;
