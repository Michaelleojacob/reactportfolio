import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BlogsView from "../components/BlogsView";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import Sectiontitle from "../components/Sectiontitle";

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    let mounted = true;
    axios.get("/api/blog").then((response) => {
      if (mounted) {
        setPosts(response.data);
      }
    });
    return () => (mounted = false);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Helmet>
        <title>Blogs - Chester React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template Blogs Page"
        />
      </Helmet>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Recent Blogs" />
          <BlogsView blogs={currentPosts} />
          {!(posts.length > postsPerPage) ? null : (
            <Pagination
              className="mt-50"
              itemsPerPage={postsPerPage}
              totalItems={posts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Blogs;
