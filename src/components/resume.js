import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
// import Education from "./education";
// import Experience from "./experience";
// import './contact.css';
// import "../App.css";
// import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            {/* <div style={{textAlign: 'center'}}>
                     <img src="../assets/dp.png" alt="Avater" style={{height: '200px', borderRadius: '100px'}}/>
                     </div> */}
            <h3 style={{ paddingTop: "3rem", marginBottom: '40px', fontWeight: 'bold' }}>Marissol Karczeski</h3>
            <h4 style={{ fontWeight: "bold", fontSize: "3.0rem", color: "grey" }}>
              Full Stack Web Developer
            </h4>
            <hr style={{ border: "3px solid red", width: "90%" }} />
            <p className="para">
              <br></br>
              Full Stack developer with a background in education and a passion
              for learning. Graduate of the University of Washington Coding
              Bootcamp pursuing opportunities to combine leadership and
              problem-solving skills that deliver significant contributions to
              my team’s goals and customer satisfaction. Trilingual fluency -
              English, Portuguese, and Spanish.
              <br></br>
              <br></br>
            </p>

            <hr style={{ border: "3px solid red", width: "90%" }} />
            <h5 style={{ fontWeight: "bold", fontSize:'2rem' }}>Location</h5>
            <p className="para">Seattle, WA</p>
            <h5 style={{ fontWeight: "bold", fontSize:'2rem'  }}>Phone</h5>
            <p className="para">425-457-6040</p>
            <h5 style={{ fontWeight: "bold", fontSize:'2rem'  }}>E-Mail</h5>
            <p className="para">marfkar@gmail.com</p>
            <h5 style={{ fontWeight: "bold", fontSize:'2rem'  }}>Web Address</h5>
            <p className="para">https://AFTER-DEPLOYMENT!!!!!!!!!!!!!</p>
            <hr style={{ border: "3px solid red", width: "90%" }} />
          </Cell>

          <Cell
            col={8}
            style={{
              backgroundColor: "lightgray",
              border: "8px solid black",
              marginTop: "100px",
              paddingLeft: "30px",
            }}
          >
            <h5 style={{ fontWeight: "bold", fontSize: "3.0rem" }}>
              Technical Skills
            </h5>
            <br></br>
            <p style={{ fontSize: "1.5rem" }}>
              HTML | CSS | Bootstrap | Materialize | JavaScript | Node.js |
              Express.js | Handlebars.js | MySQL | MongoDB | React | React.MDL |
            </p>
            <br></br>
            <h5 style={{ fontWeight: "bold", fontSize: "3.0rem" }}>
              {" "}
              Language Skills
            </h5>
            <br></br>
            <p style={{ fontSize: "1.5rem" }}>
              Portuguese | Spanish | English |{" "}
            </p>
            <br></br>
            <br></br>

            <h5 style={{ fontWeight: "bold", fontSize: "3.0rem" }}>
              Work Experience
            </h5>
            <br></br>
            <p style={{ fontSize: "1.5rem" }}>
              Teacher/Education - Lake Washington and Northshore School
              Districts- 2005-2019
              <br></br>
              <br></br>
              <ul style={{ fontSize: "1.5rem" }}>
                <li>
                  Develop lesson plans, assess students regularly, meet with
                  parents, and grade report cards – long-term
                </li>

                <li>
                  Collaborate with staff to improve ELL and Science programs,
                  translate meetings Spanish/Portuguese{" "}
                </li>

                <li>
                  Grade and assess student’s work based on their language
                  proficiency level
                </li>

                <li>
                  Oversee exited ELLs from other schools of the district and
                  support other ELL teachers
                </li>

                <li>
                  Provide training to Chinese teachers on how to teach English
                  vocabulary-Northwest University
                </li>

                <li>
                  Teach assigned subjects to first grade in both languages:
                  Spanish and English
                </li>

                <li>
                  Develop the Spanish curricula for Preschool and Elementary
                  grades
                </li>
              </ul>
            </p>

            <h5 style={{ fontWeight: "bold", fontSize: "3.0rem" }}>
              Education
            </h5>
            <br></br>
            <p style={{ fontSize: "1.5rem" }}>
              2020 - University of WA - Coding Bootcamp | Northwest University -
              Master's Degree in Education | Universidade Estadual de Maringa -
              Brazil |
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
