import './App.css';
import { ScrollControls, Scroll, Environment, SpotLight, Float, Sparkles } from '@react-three/drei';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import {Butterfly} from './models/Butterfly';
import { EffectComposer, Bloom, DepthOfField, Vignette } from '@react-three/postprocessing';

function App() {
  return (
    <>
    
    
        <EffectComposer>
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={480} />
          <Bloom intensity={2} luminanceThreshold={0.1} luminanceSmoothing={0.9} height={1000} />
          <Vignette eskil={false} offset={.1} darkness={1.5} />
        </EffectComposer>

        <color attach='background' args={['#000000']} />
        <ambientLight intensity={0.2} />
        <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
        <Environment preset='warehouse'/>


      <ScrollControls pages={6} damping={0.25}>
        <Scroll>
        {/* top */}
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Butterfly scale={0.05} position={[-10,-3,-6]}  />

          <Butterfly scale={0.05} position={[0,-2.5,0]}  />

          <Butterfly scale={0.05} position={[10,-4,-10]}  />
        </Float>

          {/* middle */}
          <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Butterfly scale={0.05} position={[-1,-12.5,0]}/>
        <Butterfly scale={0.05} position={[12,-14,-10]}/>   
        </Float>        
        {/* middle */}

        {/* middle */}
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Butterfly scale={0.05} position={[-3,-19.5,2]}/>
        <Butterfly scale={0.05} position={[8,-23,-10]}/>
        <Butterfly scale={0.05} position={[4,-24,2]}/>  
        </Float>  
        {/* middle */}   


        {/* sparkles */}
        <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20,100,20]}></Sparkles>
        <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30,100,10]} ></Sparkles>

        </Scroll>

        <Scroll html style={{ width: '100%' }}>
          <Container style={{ position: "relative" }}>
            <Row className='text-center   align-items-center justify-content-center' style={{ position: "absolute", width:"100%", height: "100vh", padding: "0px 30px"  }}>
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px", color:"white" }}>Life can be a struggle</h1>
                </div>
              </Col>
            </Row>

            <Row className='text-center   align-items-center justify-content-center' style={{ position: "absolute", width:"100%", height: "100vh", padding: "0px 30px" , top:"100vh"  }}>
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px", color:"white" }}>Some times can you feel</h1>
                </div>
              </Col>
            </Row>


            <Row className='text-center   align-items-center justify-content-center' style={{ position: "absolute", width:"100%", height: "100vh", padding: "0px 30px" , top:"200vh" }}>
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px", color:"white" }}>Lost</h1>
                  <h1 style={{ marginBottom: "0px", color:"white" }}>Overwhelmed</h1>
                  <h1 style={{ marginBottom: "0px", color:"white" }}>Enpty inside</h1>
                </div>
              </Col>
            </Row>


            <Row className='text-center   align-items-center justify-content-center' style={{ position: "absolute", width:"100%", height: "100vh", padding: "0px 30px" , top:"300vh" }}>
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px", color:"white" }}>Drifting thoung life <br/> Whit no guidance</h1>
                </div>
              </Col>
            </Row>

            <Row className='text-center   align-items-center justify-content-center' style={{ position: "absolute", width:"100%", height: "100vh", padding: "0px 30px" , top:"400vh" }}>
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px", color:"white" }}>But there is hope <br/> and people who can help <br/> Whit no guidance</h1>
                </div>
              </Col>
            </Row>


            <Row className='text-center   align-items-center justify-content-center' style={{ position: "absolute", width:"100%", height: "100vh", padding: "0px 30px" , top:"500vh" }}>
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px", color:"white" }}>It's time to get <br/> the support you need</h1>
                  <h2 style={{ marginBottom: "0px", color:"white", marginTo:"-20px" }}>It's time to get <br/> the support you need</h2>
                    <Button variant='outline-light' size='lg' >Get help now</Button>
                </div>
              </Col>
            </Row>

          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
