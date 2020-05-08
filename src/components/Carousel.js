import React from 'react';

import Card from '../components/Card';

import project1 from '../assets/images/project1.JPG';
// import project2 from '../assets/images/help4usprojectsnip.JPG';
import planner from '../assets/images/evverest.png';
import password  from '../assets/images/evverest.png';
// import  from '../assets/images/evverest.png';
// import evverest from '../assets/images/evverest.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Web Development ',
                    subTitle: 'New Years Resolution',
                    imgSrc:project1,
                    link: 'https://xzengeric.github.io/Project1/project1.html',
                    selected: false
                },
                // // {
                //     id: 1,
                //     title: 'Web Development',
                //     subTitle: 'Help 4 us',
                //     imgSrc: project2,
                //     link: 'https://four-us.herokuapp.com/',
                //     selected: false
                // },
                {
                    id: 2,
                    title: 'Web development',
                    subTitle: 'Planner',
                    imgSrc: planner,
                    link: 'https://github.com/fatimaromagnoli/dayplannerhw',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: password,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
                // {
                //     id: 4,
                //     title: 'Evverest',
                //     subTitle: 'A social network for developers',
                //     imgSrc: evverest,
                //     link: 'https://github.com/garrettlove8/evverest',
                //     selected: false
                // },
                // {
                //     id: 5,
                //     title: 'Evverest',
                //     subTitle: 'A social network for developers',
                //     imgSrc: evverest,
                //     link: 'https://github.com/garrettlove8/evverest',
                //     selected: false
                // },
                // {
                //     id: 6,
                //     title: 'Evverest',
                //     subTitle: 'A social network for developers',
                //     imgSrc: evverest,
                //     link: 'https://github.com/garrettlove8/evverest',
                //     selected: false
                // },
                
                
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;