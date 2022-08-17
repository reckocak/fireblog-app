import React from "react";
import { AuthContext } from "../contexts/AuthContext";

import Blog from "./BlogForm";

const BlogCard = () => {
  const { blog } = React.useContext(AuthContext);
  console.log(blog);

  return (
    <div className="d-flex justify-content-center  mt-4 gap-4 flex-wrap">
      {blog?.map((item) => {
        return <Blog key={item.id} item={item} />;
      })}
    </div>
  );
};

export default BlogCard;
