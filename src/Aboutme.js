import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";


const AboutMe = (props) => {
    const aboutme = props.aboutme
    const xbold = props.xbold
    return ( 
        <Row className="d-flex justify-content-center">
            
            {xbold && <Col sm={12} md={6} lg={6}>
            <div className="aboutme slide-in-bottom">
                <p style={{ fontSize: '3rem', fontWeight : 700}}>
                    {aboutme}
                </p>
            </div>
            </Col>}


            {!xbold && <Col sm={12} md={12} lg={12}>
            <div className="aboutme slide-in-bottom">
                <p style={{ fontSize: '2rem', fontWeight : 500}}>
                    {aboutme}
                </p>
            </div>
            </Col>}
            
        </Row>
        
            
        
     );
}
 
export default AboutMe;