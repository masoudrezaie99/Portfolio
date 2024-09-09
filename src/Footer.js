import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";


const Footer = () => {
    return ( 
<Container>
            <Row>
                {/* <Col sm={12} md={12} lg={12}></Col> */}
                <Col sm={12} md={12} lg={12}>
                    <footer>
                    <h1>this is Footer</h1>
                    </footer>
                
                </Col>
                {/* <Col sm={12} md={6} lg={6}></Col> */}
            </Row>
        </Container>
     );
}
 
export default Footer;