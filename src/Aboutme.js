import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const AboutMe = () => {

    return ( 
        <Row>
            <Col></Col>
            <Col sm={12} md={6} lg={6}>
            <div className="aboutme slide-in-bottom">
                <p>
                Experienced front-end developer with a passion for crafting intuitive and visually appealing web applications.
                </p>
            </div>
            </Col>
            <Col></Col>
        </Row>
        
            
        
     );
}
 
export default AboutMe;