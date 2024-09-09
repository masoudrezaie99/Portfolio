import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import AboutMe from './Aboutme';
import { useState } from 'react';
import vueLogo from './pics/vue.jpg'
import jqueryLogo from './pics/jQuery.png'
import reactLogo from './pics/react.png' 


function Home() {
  const [techs] = useState([
    {title:'VueJs',
     image:vueLogo,
     body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {title:'ReactJs',
     image:reactLogo,
     body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {title:'Jquery',
     image:jqueryLogo,
     body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {title:'VanillaJs',
     image:vueLogo,
     body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ])
  return (
    <Container>
      <AboutMe/>

    <Row>
    {techs.map((tech) => (

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

    </Container>



        
        
  );
}

export default Home;