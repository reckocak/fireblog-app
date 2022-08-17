import React from "react";
import BlogCard from "../components/BlogCard";

const Dashboard = ({ isLogged, setisLogged, currentUser, setCurrentUser }) => {
  const myHeader = {
    header: { color: "#09779E", fontSize: "50px ", fontWeight: "bold", fontFamily: 'Girassol' },
  };
  return (
    <div>
      <h1 style={myHeader.header} className="text-center  h1 dashboard mt-3">
        ──── Dashboard ────
      </h1>
      <div>
        <BlogCard />
      </div>
    </div>
  );
};

export default Dashboard;
