import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";


const Footer = () => {
    return ( 
<Container>
            <Row>
                {/* <Col sm={12} md={12} lg={12}></Col> */}
                <Col sm={12} md={12} lg={12}>
                    <footer className='d-flex flex-row justify-content-between align-items-center p-4'>
                        <a className='text-decoration-none text-black-50' href="https://masoudrezaie.ir" target="_blank" rel="noopener noreferrer">© Masoud Rezaie 2024</a>

                        <div className='d-flex flex-row justify-content-between'>
                            <a className='text-decoration-none text-black-50' href="https://github.com/masoudrezaie99" target="_blank" rel="noopener noreferrer">Github</a>
                            <a className='text-decoration-none text-black-50 mx-4' href="https://www.linkedin.com/in/masoud-rezaie-71a76a216/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                            <a className='text-decoration-none text-black-50' href="mailto:masoudrezaie1999@gmail.com" target="_blank" rel="noopener noreferrer">mail</a>




                        </div>
                    </footer>
                
                </Col>
                {/* <Col sm={12} md={6} lg={6}></Col> */}
            </Row>
        </Container>
     );
}
 
export default Footer;