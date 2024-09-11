import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import './App.css';
import NotFound from './NotFound';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';

import Contact from './Contact';
import Skills from './Skills';
function App() {
  return (
    <Router>
    <div className="App">
      <Container>
      <Navbar/>

      <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/skills" element={<Skills />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<NotFound/>} />

      </Routes>
      
      
      </Container>
      <Footer/>
    </div>
    </Router>



    
  );
}

export default App;
