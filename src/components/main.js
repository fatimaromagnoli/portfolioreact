import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from "./landing-page";
import AboutMe from './about-Me';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (  
<Switch>
<Route exact path="/" component={LandingPage} />
    <Route path="/about-me" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />

</Switch>


)

export default Main;