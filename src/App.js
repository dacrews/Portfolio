import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import About from '././components/about'
import Contact from '././components/contact'
import Header from '././components/header'
import Navbar from '././components/nav'
import Projects from '././components/projects'
import '././static/styles.css'

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Header />
        <Navbar />
        <About />
        <Projects />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
