import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>*Born in Brazil, living  15 years in Bothell-WA.</p>
            <p> *English,Portuguese, Spanish(conversational)</p>
            <p>* 2+ years experience in Sales and Digital Marketing.</p>
            <p>*Designer + Full Stack Developer Skills</p>
            <p>*HTML, CSS,  Javascript, React, Express.js, MongoDB, Node.js, SQL, </p>
            <p>* Excel, PC skills (Windows, Word, Outlook, PowerPoint)</p>
            </Content>
        </div>
    );

}

export default AboutPage;