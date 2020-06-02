import React from "react";
import { Link } from "react-router-dom";

function Blog(props) {
  const { id, featuredImage, title, createDay, createMonth, filesource } = props.data;
  const getShortMonth = month => {
    return month.slice(0, 3);
  };
  const getNospaceTitle = filesource => {
    let tempArr = filesource.split('/');
    let fileName = tempArr[tempArr.length - 1];
    let getName = fileName.slice(0, -3);
    return getName;
  };
  return (
    <div className="mi-blog">
      <div className="mi-blog-image">
        <Link to={`blogs/blog-details/${id}/${getNospaceTitle(filesource)}`}>
          <img src={featuredImage} alt={title} />
        </Link>
        <div className="mi-blog-date">
          <span className="date">{createDay}</span>
          <span className="month">{getShortMonth(createMonth)}</span>
        </div>
      </div>
      <div className="mi-blog-content">
        <h5>
          <Link to={`blogs/blog-details/${id}/${getNospaceTitle(filesource)}`}>
            {title}
          </Link>
        </h5>
      </div>
    </div>
  );
}

export default Blog;
