import React, {Component} from 'react';
import './AboutMe.css';
class AboutMe extends Component {

    render(){
        return(
            <div className="div">
            <h2 className="head">ABOUT ME</h2>
              <h4 className="h4">
                  <br></br>
                  <br></br>
              <p className="h3">
          I am a Web Developer with a background in Education.  As a teacher for many years, I became interested in using software in the classroom that would make me work smarter, not necessarily harder.
 

        </p>
        <br></br>

        <p className="h3">
          I enjoy helping others through teaching and collaboration, and this is when the world of web development started to become the focus of my next career. My leadership and project management skills are some of the qualities that make me thrilled for this change.


        </p>
<br></br>
        <p className="h3">
          Through the web development bootcamp from the University of Washington, I have been enhancing my knowledge in JavaScript, HTML, CSS, Bootstrap, jQuery, AngularJS, MongoDB, MySQL, Mongoose, React, and MERN. I am eager to keep learning many other programming languages, frameworks, and technical knowledge to help my team and company achieve their goals. </p>
<br></br>
              <hr style={{opacity: '2.5', border: "3px solid red", width: "100%" }}></hr>
             </h4>
             

             

             
            </div>
        )
    }
}

export default AboutMe;

