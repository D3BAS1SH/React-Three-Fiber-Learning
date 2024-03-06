import { Canvas } from '@react-three/fiber'
import './App.css'
const App = () => {

  return (
    <>
      <Canvas>
        <mesh>
          <boxGeometry args={[2,2,4]} />
          <meshBasicMaterial color={"#f00"}/>
        </mesh>
      </Canvas>
    </>
  )
}

export default App