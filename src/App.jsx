import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { useRef } from 'react'

const MyBox = ({position,size,color}) => {
  const ref = useRef()
  useFrame((state,delta)=>{
    ref.current.rotation.x+=delta
    ref.current.rotation.y+=delta*1.5
  })
  return <mesh position={position} ref={ref}>
    <boxGeometry args={size} />
    <meshStandardMaterial color={color}/>
  </mesh>
}

const App = () => {

  return (
    <>
      <Canvas>
        <directionalLight position={[0,0,2]}/>
        
        <MyBox position={[1.5,-1,1]} size={[1.5,1.5,1.5]} color={"#555"}/>
        <MyBox position={[-1.5,-1,1]} size={[1.5,1.5,1.5]} color={"#999"}/>
        <MyBox position={[1.5,1,1]} size={[1.5,1.5,1.5]} color={"#ccc"}/>
        <MyBox position={[-1.5,1,1]} size={[1.5,1.5,1.5]} color={"#fff"}/>
      </Canvas>
    </>
  )
}

export default App