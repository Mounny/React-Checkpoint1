import React from 'react';
import './App.css';
import { Nav, Navbar, Container, Carousel } from "react-bootstrap"




function App() {
  return (
    <div className="App">
      <Navbar className='navbar' bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MOUNIR'S TRAVEL AGENCY</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">BOOK A FLIGHT</Nav.Link>
            <Nav.Link href="#pricing">CAR RENTAL</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <h1>Welcome to my website!</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero dicta nihil! Aliquam placeat ipsa facilis, perspiciatis
       velit voluptatibus, natus cupiditate doloribus optio est maxime, dolore odit? Obcaecati, neque itaque.</p>

       <Carousel>
      <Carousel.Item>
        <img
          className="images"
          src="https://th.bing.com/th/id/R.b2795516c69883868f60369de6cb27a7?rik=%2fHK%2boWW%2bFD1X0g&pid=ImgRaw&r=0}"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="images"
          src="https://i.pinimg.com/originals/ff/86/ef/ff86ef1bd21675e089251261371bc0d0.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="images"
          src="https://th.bing.com/th/id/OIP.hZUcfjhGFCnHdDIjJOqGLQHaE7?pid=ImgDet&w=520&h=346&rs=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <footer>Copyright reserved 2022</footer>
   
      
   </div>
  );
}

export default App;
