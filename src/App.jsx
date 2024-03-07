import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { useRef, useState } from 'react'

const MyBox = ({position,size,color,animateStatus}) => {
  const ref = useRef()
  useFrame((state,delta)=>{
    if(animateStatus){
      ref.current.rotation.x+=delta
      ref.current.rotation.y+=delta*1.5
      ref.current.position.z = Math.sin(state.clock.elapsedTime)*1.5
      console.log(state);
    }
  })
  return <mesh position={position} ref={ref} ro>
    <boxGeometry args={size} />
    <meshStandardMaterial color={color}/>
  </mesh>
}

const App = () => {
  const [animate,setAnimate] = useState(false)

  return (
    <>
      <button onClick={()=>{setAnimate(!animate)}}>TOGGLE</button>
      <Canvas>
        <directionalLight position={[0,0,2]}/>
        <ambientLight intensity={0.1}/>
        
        <MyBox position={[1.5,-1,1]} size={[1.5,1.5,1.5]} color={"#555"} animateStatus={animate}/>
        <MyBox position={[-1.5,-1,1]} size={[1.5,1.5,1.5]} color={"#999"} animateStatus={animate}/>
        <MyBox position={[1.5,1,1]} size={[1.5,1.5,1.5]} color={"#ccc"} animateStatus={animate}/>
        <MyBox position={[-1.5,1,1]} size={[1.5,1.5,1.5]} color={"#fff"} animateStatus={animate}/>
      </Canvas>
    </>
  )
}

export default App