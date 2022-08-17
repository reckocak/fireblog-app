
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";

const BlogForm = ({item}) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { increaseLike } = useContext(BlogContext);
  const { title, url, content, userName, date, like, color, usersId } = item;
 

  return (
    <div className="col col-md-5 single">
      <div className="bg-light p-2 card">
        <div
          className="pe-auto"
          onClick={() => navigate("/details", { state: item, replace: false })}
        >
          <div className="img-div">
            <img
              src={url ? url : "https://picsum.photos/1600/900?random=2"}
              alt={title}
            />
          </div>
          <h1
            className="text-dark header text-center text-capitalize title mt-1"
            style={{ fontFamily: "Girassol" }}
          >
            {title.length > 15 ? title.slice(0, 14) + "..." : title}
          </h1>
          <p className="text-dark fs-5 text-end" style={{ fontFamily: "Girassol" }}>
            {date}
          </p>
        </div>
        <p className="text-dark content-div">{content.slice(0, 100)}...</p>

        <div className="d-flex justify-content-between align-items-center pt-3">
          <h5 className="text-dark pt-3">@{userName}</h5>
          <div>
            <span
              className={`${
                !color
                  ? usersId.includes(currentUser.email)
                    ? "text-danger"
                    : "text-secondary"
                  : "text-danger"
              } fs-4`}
              style={{ cursor: "pointer" }}
              onClick={() => increaseLike(item)}
            >
              <AiFillHeart />
            </span>
            <span className="text-dark fs-5"> {like}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
