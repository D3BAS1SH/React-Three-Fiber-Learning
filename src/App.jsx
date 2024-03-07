import { Canvas, useFrame, extend } from '@react-three/fiber'
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
const MySphere = ({position,size,color,animateStatus = false}) => {
  const ref = useRef()
  useFrame((state,delta)=>{
    if(animateStatus){
      ref.current.rotation.x+=delta
      ref.current.rotation.y+=delta*1.5
      ref.current.position.z = Math.sin(state.clock.elapsedTime)*1.5
      console.log(state);
    }
  })
  return <mesh position={position} ref={ref}>
    <sphereGeometry args={size}/>
    <meshStandardMaterial color={color}/>
  </mesh>
}

const MyTorus = ({position,size,color,animateStatus = false}) => {
  const ref = useRef()
  useFrame((state,delta)=>{
    if(animateStatus){
      ref.current.rotation.x+=delta
      ref.current.rotation.y+=delta*1.5
      ref.current.position.z = Math.sin(state.clock.elapsedTime)*1.5
      console.log(state);
    }
  })
  return <mesh position={position} ref={ref}>
    <torusGeometry args={size}/>
    <meshStandardMaterial color={color} wireframe={!true}/>
  </mesh>
}

const App = () => {
  const [animate,setAnimate] = useState(false)

  return (
    <>
      <button onClick={()=>{setAnimate(!animate)}}>TOGGLE</button>
      <Canvas>
        <directionalLight position={[2,2,2]}/>
        {/* <ambientLight intensity={1}/> */}
        
        {/* <MyBox position={[1.5,-1,1]} size={[1.5,1.5,1.5]} color={"#555"} animateStatus={animate}/>
        <MyBox position={[-1.5,-1,1]} size={[1.5,1.5,1.5]} color={"#999"} animateStatus={animate}/>
        <MyBox position={[1.5,1,1]} size={[1.5,1.5,1.5]} color={"#ccc"} animateStatus={animate}/>
        <MyBox position={[-1.5,1,1]} size={[1.5,1.5,1.5]} color={"#fff"} animateStatus={animate}/> */}

        {/* <MySphere size={[1,100,100]} position={[1.5,0,0]} color={'#bae'}/>
        <MySphere size={[1,100,100]} position={[-1.5,0,0]} color={'#bae'}/> */}

        {/* <MyTorus size={[1.5,0.4,100,4]} position={[0,0,0]} color={'#d4f'}/>
        <MyTorus size={[1.5,0.4,100,4]} position={[0,0,-5]} color={'#fa8'}/>
        <MyTorus size={[1.5,0.4,100,4]} position={[0,0,2.5]} color={'#f33'}/> */}
      </Canvas>
    </>
  )
}

export default App