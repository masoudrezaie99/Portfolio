import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import AboutMe from "./Aboutme";
import { useState } from 'react';

import pic2 from './pics/dev.jpg'
import pic1 from './pics/mypic2.jpeg'

const Skills = () => {
    const about = `My name is Masoud Rezaie, and I was born in the vibrant city of Tehran. I am a passionate and self-taught front-end developer with a special focus on Vue.js. Over the years, I've dedicated myself to mastering the art of creating seamless and intuitive user interfaces that enhance the overall user experience.`

    const [aboutpics] = useState([
        {title:'Masoud Rezaie',
         image:pic1,
         body:'Experienced front-end developer'
        },
        {title:'Front-end',
         image:pic2,
         body:''
        },
        
        
      ])
    return ( 
        <div>

            <Row>
                <Col className="d-flex justify-content-center align-items-center slide-in-bottom" style={{height:'70vh'}}>
                <h1>Hey 👋🏼 I'm Masoud </h1>
                </Col>
            </Row>
        
        <Row>
        {aboutpics.map((tech) => (
    
    <Col sm={12} md={6} lg={6}>
      <div className="techbox slide-in-bottom">
        <img src={tech.image} alt={tech.title} />
    
        <div>
          <h2>{tech.title}</h2>
          <p>{tech.body}</p>
        </div>
      </div>
    </Col>
    
         ))}
          
        </Row>


        
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <AboutMe aboutme={about} xbold={false}/>
                </Col>
            </Row>

            
            </div>
        
     );
}
 
export default Skills;