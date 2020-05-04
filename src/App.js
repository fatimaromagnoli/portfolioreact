import React, { Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
  return (
<div className="demo-big-content">
    <Layout>
    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontSize: '1.8em'}} to="/">My Portfolio</Link>} scroll>
            <Navigation >
                <Link to="/resume" style={{fontSize: '2.3em'}}>Resume</Link>
                <Link to="/about-me"style={{fontSize: '2.3em'}} >About Me</Link>
                <Link to="/projects" style={{fontSize: '2.3em'}}>Projects</Link>
                <Link to="/contact"style={{fontSize: '2.3em'}} >Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">My Portfolio</Link>}scroll>
        <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about-me">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}
}
export default App;
