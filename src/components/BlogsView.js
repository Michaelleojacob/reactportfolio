import React from "react";
import Blog from './Blog';

function BlogsView({blogs}) {
  return (
    <div className="row mt-30-reverse">
      {blogs.map(blog => (
        <div className="col-lg-6 col-md-6 col-12 mt-30" key={blog.id}>
          <Blog data={blog} />
        </div>
      ))}
    </div>
  );
}

export default BlogsView;
