import Container from 'react-bootstrap/Container';
import AboutMe from './Aboutme';
import Blogs from './Blogs';
import Contact from './Contact';


function Home() {
  const aboutMe = 'Experienced front-end developer with a passion for crafting intuitive and visually appealing web applications.'

  return (
    <Container>

      <AboutMe aboutme={aboutMe} xbold={true}/>

      <Blogs/>

      <Contact/>

    </Container>



        
        
  );
}

export default Home;