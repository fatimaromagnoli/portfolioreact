import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import '../App.css';

class Experience extends Component {
    render(){
        return(
           <div>

                <Grid>
                    <Cell col={6}>
                        <h4 className="h44">Mar 2017 - Current (Infosys, Bangalore)</h4>
                    </Cell>

                    <Cell col={6}>  
                        <h5 className="h5">
                        Working as a React developer to develop an Infosys eStore portal using ReactJS, Redux
                        Material-UI, Bootstrap, HTML, CSS3 </h5>
                    </Cell>
                    </Grid>



               <Grid>
                  <Cell col={6}>
                     <h4 className="h44">July 2016 - Feb 2017 (Infosys, Hyderabad)</h4>
                  </Cell>
                  <Cell col={6}>  
                     <h5 className="h5">
                     Worked as a application fraud analyst in financial services domain </h5>
                  </Cell>
               </Grid>
              {/* <hr style={{borderTop: '3px solid red'}}/> */}


               <Grid className="education-grid">
                  <Cell col={6}>
                     <h4 className="h44">Feb 2016 - Jun 2016 (Infosys, Mysore)</h4>
                  </Cell>

                  <Cell col={6}>  
                     <h5 className="h5">
                     I have gone through in-depth training at Infosys Mysore in several technical areas which inclues
                     Javascript, OOPs, HTML, CSS, Dot Net, Python, C# etc..</h5>
                  </Cell>
               </Grid>
               
                
           </div>
        )
    }
}

export default Experience;