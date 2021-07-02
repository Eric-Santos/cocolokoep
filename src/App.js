import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./components/Home.js"));
const Menu = lazy(() => import("./components/Menu.js"));
const Specials = lazy(() => import("./components/Specials.js"));
const About = lazy(() => import("./components/About.js"));
const Contact = lazy(() => import("./components/Contact.js"));
const Careers = lazy(() => import("./components/Careers.js"));
const Sitemap = lazy(() => import("./components/sitemap.xml"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/specials" component={Specials} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/sitemap" component={Sitemap} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
