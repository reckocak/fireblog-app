import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { DeletedBlog} from "../utils/functions";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";

const Details = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { editBlog } = useContext(BlogContext);
  const { url, title, content, date, id, userName } = state;
  return (
    <div className="bg-light m-auto detailContainer p-5 mt-5 rounded-2">
      <div className="details-imgDiv m-auto">
        <img
          src={url ? url : "https://picsum.photos/1600/900?random=2"}
          alt={title}
        />
      </div>
      <h1 className="text-uppercase text-center p-1">{title}</h1>
      <p className="text-dark fs-4 d-flex justify-content-end">{date}</p>
      <p>{content}</p>
      <div className="d-flex justify-content-between">
        <button
          onClick={() => navigate(-1)}
          className="border-0 fs-1 bg-transparent"
        >
          <TiArrowBack /> <span className="fs-4">Go Back!</span>
        </button>
        {currentUser.displayName === userName && (
          <div className="d-flex align-items-center">
            <button
              onClick={() => {
                DeletedBlog(id);
                navigate("/");
              }}
              className="text-light border-0 fs-5 p-1 btn btn-danger m-2"
            >
              Delete
              <FaTrashAlt/>
            </button>
            <button
              onClick={() => {
                editBlog(state);
                navigate("/updateblog");
              }}
              className="text-light border-0 fs-5 p-1 btn btn-warning"
            >
              Update
              <FaEdit />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
