import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent, } from 'react-mdl';
import "./contact.css";

class Contact extends Component {

    render(){
        return(
            <div className="contact-body">
              <Grid className="contact-grid" >
                  <Cell col={12} >
                    <h2 className="h2">Marissol Karczeski</h2> 
                    </Cell>

                  <Cell col={12}><br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  
                    <h2 className="h2">CONTACT ME</h2> 
                    {/* ESTE CONTACT INFO SOH FICA RESPONSIVE SE NAO MUDAR PRO MEIO, SE MUDAR, DEIXA DE SER RESPONSIVE!!!!!!!!!!!!!! */}
                    <hr/>
                    <div className="contact-list">
                       <List>
                            <ListItem>
                                <ListItemContent className="para">
                                    <i className="fa fa-phone-square" area-hidden="true" />
                                          425-457-6040
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent className="para">
                                    <i className="fa fa-envelope" area-hidden="true" />
                                        marfkar@gmail.com
                                </ListItemContent>

                            </ListItem>

                            <ListItem>
                                <ListItemContent className="para">
                                    <i className="fa fa-skype" area-hidden="true" />
                                        MARISSOLKARCZESKICHECKITOUT@live.com
                                </ListItemContent>

                            </ListItem>

                            
                      </List>
                    </div>
                  </Cell>
              </Grid>
            </div>
        )
    }
}

export default Contact;