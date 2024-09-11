import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { Link } from 'react-router-dom';
import * as React from 'react';
import { useLocation } from 'react-router-dom';



const NavbarBs = () => {
    let location = useLocation();

    React.useEffect(() => {
    }, [location]);


    return ( 
        
            <Row className='my-lg-18 my-md-14 my-sm-10 my-5'>
                <Col className='d-flex justify-content-center align-items-center'>
                    
                <nav className='d-flex flex-row'>
                    <Link className={location.pathname==='/' && 'activelink'} to="/">Home</Link>
                    <Link className={location.pathname==='/skills' && 'activelink'} to="/skills">Skills</Link>
                    <Link className={location.pathname==='/contact' && 'activelink'} to="/contact">Contact</Link>
                </nav>
                
                </Col>
            </Row>
        
     );
}
 
export default NavbarBs;