import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions,Button, CardMenu, IconButton} from 'react-mdl';
import "../App.css";

class Projects extends Component {
    constructor(){
        super();
        this.state = {
            activeTab: 0
        }
    }


    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className="projects-grid">
{/* PROJETO #1 FOI MODIFICADO COM MINHA FOTO, MAS NAO TA RESPONSIVE COMO O DA COPIA - VERIFICAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                  {/*Project #1*/}   
                <Grid>  
                    <Cell col={4}>         

                            <Card shadow={0} className="card">
                                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(/images/recipe-search.png'}} >Project #1</CardTitle>
                                    <CardText>
                                    This was our first group project at UW coding bootcamp.<br></br> An app to search for recipes based on ingredients that the user may have at home.
                                    
                                    </CardText>
                                    <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Heroku</Button>
              <Button colored>Live Demo</Button>
            </CardActions>

                                    <CardMenu style={{color: '#fff'}}>
                                        <IconButton name="share" />
                                    </CardMenu>
                            </Card>

                  </Cell>

                  <Cell col={4}>         

                            <Card shadow={0} className="card">
                                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>Infosys eStore</CardTitle>
                                    <CardText>
                                      This is my portfolio portal developed on ReactJS, React-MDL and CSS3.    
                                    </CardText>
                                    <CardActions border>
                                        <Button href="https://github.com/121371/MyPortfolio" target="_blank" colored>GitHub</Button>
                                    </CardActions>
                                    <CardMenu style={{color: '#fff'}}>
                                        <IconButton name="share" />
                                    </CardMenu>
                            </Card>

                  </Cell>

                  {/*Project #2*/}
                  <Cell col={4}>

                        <Card shadow={0} className="card">
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>BurgerBuilder</CardTitle>
                                <CardText>
                                This is a user interactive application based on ReactJS where users can order a order online.
                                In this application users can add or remove the burder ingredients as per their chice.
                                </CardText>
                                <CardActions border>
                        <Button href="https://github.com/121371/BurgerBuilder" target="_blank" colored>GitHub</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                        </Card>
                  </Cell>
                  

                  {/*Project #3*/}

                  <Cell col={4}>           
                        <Card shadow={0} className="card">
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>To Do App</CardTitle>
                                <CardText>
                                This is a user interactive Todo App developed on ReactJS and Redux in which you can add or delete your todo's.
                                You can also check wheich tasks you have completed earlier.
                                </CardText>
                                <CardActions border>
                                    <Button href="https://github.com/121371/ToDoAPP" target="_blank" colored>GitHub</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                         </Card>
                    </Cell>
                  </Grid>           

                </div>
                )
        }

        else if(this.state.activeTab===1){
            return(
                <div>
                <Grid>  
                 <Cell col={12} style={{justifyContent: 'center', display: 'flex'}}>
                    <Card shadow={0} className="card">
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ne-8im66o0UppT9cV3jAiCjkPSLPfi98IF-N7cxw_jz4sja8Og) center / cover'}}>EasyShopping</CardTitle>
                        <CardText>
                        This is a eCommerce application developed on Node.js and MongoDB. 
                        Users can purchase products and facility to pay online.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/121371/NodeJS---Easy-Shopping" target="_blank" colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                 </Cell>  
                </Grid>
              </div>
                )
            
        }

        else if(this.state.activeTab===2){
            return(
                <div>
                        <Grid>  
                            <Cell col={12} style={{justifyContent: 'center', display: 'flex'}}> 
                                    <Card shadow={0} className="card">
                                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://techbeacon.scdn7.secure.raxcdn.com/sites/default/files/styles/article_hero_image/public/field/image/ultimate-android-guide.jpg?itok=WBKMaRoD) center / cover'}}>NoBorrowConflict</CardTitle>
                                        <CardText>
                                        This is android application developed in Java. This application keeps track your lending
                                        and borrowing money efficiently.
                                        </CardText>
                                        <CardActions border>
                                            <Button href="https://github.com/121371/NoBorrowConflict" target="_blank" colored>GitHub</Button>
                                        </CardActions>
                                        <CardMenu style={{color: '#fff'}}>
                                            <IconButton name="share" />
                                        </CardMenu>
                                    </Card>
                            </Cell>
                        </Grid>
                </div>
            )
            
        }
    }

    render(){
        return(
            <div className="category-Tabs">
            <Grid>
                <Cell col={12} style={{margin: 'auto'}}>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab style={{fontSize: '14px', fontWeight: 'bold'}}>ReactJS</Tab>
                    <Tab style={{fontSize: '14px', fontWeight: 'bold'}}>NodeJS</Tab>
                    <Tab style={{fontSize: '14px', fontWeight: 'bold'}}>Android</Tab>                  
                </Tabs> 
                </Cell>
            </Grid>
              
              <section>
                <Grid>
                    <Cell col={12}>
                       <div>{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
              </section>

            </div>
        )
    }
}

export default Projects;