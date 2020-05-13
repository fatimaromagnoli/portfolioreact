

import React from 'react'

// import { makeStyles } from "@material-ui/styles";

import { Typography, Box } from "@material-ui/core";

// import Navbar from "./Navbar";



const Resume = () => {

    return (

        <>

            <Navbar />

            <Box component='header'>

                <Typography variant='h4' align='center'>

                    RESUME!!!

                </Typography>

            </Box>

        </>

    )

}



export default Resume;

// / import React from 'react';

// import Card from '../components/Card';

// import resume from '../assets/images/Fatinha resume.pdf';


// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// class ResumePage extends React.Component {
  

//         constructor(props) {
//             super(props);
//             this.state = {
//                 items: [
//                     {
//                         id: 0,
//                         title: 'Web Development ',
//                         subTitle: 'Resume',
//                         imgSrc: project1,
//                         // link: 'https://xzengeric.github.io/Project1/project1.html',
//                         selected: false
//                     },]


//                     handleCardClick = (id, card) => {

//                         let items = [...this.state.items];
                
//                         items[id].selected = items[id].selected ? false : true;
                
//                         items.forEach(item => {
//                             if(item.id !== id) {
//                                 item.selected = false;
//                             }
//                         });
                
//                         this.setState({
//                             items
//                         });
//                     }
                
                
//                     makeItems = (items) => {
//                         return items.map(item => {
//                             return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
//                         })
//                     }
                
                
//                     render() {
//                         return(
//                             <Container fluid={true}>
//                                 <Row className="justify-content-around">
//                                     {this.makeItems(this.state.items)}
//                                 </Row>
//                             </Container>
//                         );
//                     }
                
//                 }
   

// export default ResumePage;