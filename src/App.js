import './App.css';
import { ScrollControls, Scroll } from '@react-three/drei';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

function App() {
  return (
    <>
    <color attach='background' args={['#000000']} />

  <ScrollControls pages={6} damping={0.25} >
      <Scroll>

      </Scroll>

      <Scroll html style={{width:'100%'}}>
        
      </Scroll>
      
  </ScrollControls>
    </>
  );
}

export default App;



 
