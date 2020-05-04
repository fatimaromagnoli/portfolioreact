import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import "./contact.css";
import '../App.css';


class Education extends Component {
    render(){
        return(
           <div>
               <Grid>
                  <Cell col={6}>
                     <h4 className="h44">2012 - 2016</h4>
                  </Cell>

                  <Cell col={6}>  
                     <h5 className="h5">
                     B.Tech<br/>Jaypee University of Engineering & Technology, Guna(MP)<br/>
                     Computer Science<br/>
                     71%</h5>
                  </Cell>
               </Grid>
               <hr style={{borderTop: '3px solid red'}}/>
               
                
           </div>
        )
    }
}

export default Education;