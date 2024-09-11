import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Contact = () => {
    return ( 
        
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <div className="contact d-flex flex-column align-items-center justify-content-center slide-in-bottom my-5">
                <p>Let's work together.</p>
                <a className="text-decoration-none text-black-50" href="mailto:masoudrezaie1999@gmail.com">Get in touch.</a>
                    </div>
                </Col>
            </Row>
        
     );
}
 
export default Contact;