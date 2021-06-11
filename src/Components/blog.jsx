import React from "react";
import "./ComponentsStyles/blog.css";
const Blog = () => {
  const img = [
    {
      id: "img-1",
      img:
        "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "img-2",
      img:
        "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },

    {
      id: "img-3",
      img:
        "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];
  return (
    <div className="container blog">
      <h1>Blog</h1>
      <div className="grid-system">
        {img.map((item) => (
          <img key={item.id} className={item.id} src={item.img} alt={item.id} />
        ))}
      </div>
    </div>
  );
};
export default Blog;
