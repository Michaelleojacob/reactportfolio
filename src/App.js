import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Resumes from './pages/Resumes';
import Portfolios from './pages/Portfolios';
import Contact from './pages/Contact';
// import Blogs from "./pages/Blogs";
// import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/reactportfolio/" exact component={Home} />
        <Route path="/reactportfolio/about" component={About} />
        <Route path="/reactportfolio/resume" component={Resumes} />
        <Route path="/reactportfolio/portfolios" component={Portfolios} />
        {/* <Route path="/reactportfolio/blogs" exact component={Blogs} />
        <Route
          path="/reactportfolio/react/blog-details/:id/:title"
          component={BlogDetails}
        /> */}
        <Route path="/reactportfolio/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
