import { Canvas } from '@react-three/fiber'
import './App.css'
const App = () => {

  return (
    <>
      <Canvas>
        <directionalLight position={[0,0,2]}/>
        <mesh position={[1.2,0,0]}>
          <boxGeometry args={[2,2,2]} />
          <meshStandardMaterial color={"#f00"}/>
        </mesh>
      </Canvas>
    </>
  )
}

export default App