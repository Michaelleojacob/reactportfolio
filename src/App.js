import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Resumes from "../src/pages/Resumes";
import Portfolios from "../src/pages/Portfolios";
import Blogs from "../src/pages/Blogs";
import Contact from "../src/pages/Contact";
import BlogDetails from "../src/pages/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resumes} />
        <Route path="/portfolios" component={Portfolios} />
        <Route path="/blogs" exact component={Blogs} />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
