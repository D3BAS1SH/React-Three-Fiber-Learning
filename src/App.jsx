import { Canvas, useFrame, extend } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { OrbitControls, useHelper} from '@react-three/drei'
import './App.css'
import { DirectionalLightHelper } from 'three'

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

  const [hover,setHover] = useState(false)
  const [isClick,setIsClick] = useState(false)
  const ref = useRef()
  useFrame((state,delta)=>{
    if(animateStatus){
      const speed = hover? 0.5 :1;
      // ref.current.rotation.x+=delta
      ref.current.rotation.y+=delta*speed
      // ref.current.position.z = Math.sin(state.clock.elapsedTime)*1.5
      console.log(state.pointer);
    }
  })
  return <mesh position={position} ref={ref} onPointerEnter={(event)=>{event.stopPropagation(),setHover(true)}} onPointerLeave={()=>{setHover(false)}} onClick={()=>{setIsClick(!isClick)}}>
    <sphereGeometry args={size}/>
    <meshStandardMaterial color={isClick?color : 'skyblue'} wireframe/>
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

const MyTorusKnot = ({position,size,color,animateStatus = false}) => {
  const ref = useRef()
  useFrame((state,delta)=>{
    if(animateStatus){
      // ref.current.rotation.x+=delta
      // ref.current.rotation.y+=delta*1.5
      // ref.current.position.z = Math.sin(state.clock.elapsedTime)*1.5
      console.log(state);
    }
  })
  return <mesh position={position} ref={ref}>
    <torusKnotGeometry args={size}/>
    <meshStandardMaterial color={color} wireframe={true}/>
    {/* <MeshWobbleMaterial wireframe={true} color={color} factor={5} speed={10}/> */}

  </mesh>
}

const Scene=({animate})=>{

  const DirLightRef = useRef()
  useHelper(DirLightRef,DirectionalLightHelper,5,'white')

  return <>
  <directionalLight position={[1,1,-1]} ref={DirLightRef}/>
        <OrbitControls enableZoom={false}/>
        {/* <ambientLight intensity={1}/> */}
        
        {/* <MyBox position={[1.5,-1,1]} size={[1.5,1.5,1.5]} color={"#555"} animateStatus={animate}/>
        <MyBox position={[-1.5,-1,1]} size={[1.5,1.5,1.5]} color={"#999"} animateStatus={animate}/>
        <MyBox position={[1.5,1,1]} size={[1.5,1.5,1.5]} color={"#ccc"} animateStatus={animate}/>
        <MyBox position={[-1.5,1,1]} size={[1.5,1.5,1.5]} color={"#fff"} animateStatus={animate}/> */}

        {/* <MySphere size={[1,100,100]} position={[1.5,0,0]} color={'#bae'}/> */}
        {/* <MySphere size={[1,100/2,100/2]} position={[-1,0,0]} color={'#bac'} animateStatus={animate}/> */}

        {/* <MyTorus size={[1.5,0.4,100,4]} position={[0,0,0]} color={'#d4f'}/>
        <MyTorus size={[1.5,0.4,100,4]} position={[0,0,-5]} color={'#fa8'}/>
        <MyTorus size={[1.5,0.4,100,4]} position={[0,0,2.5]} color={'#f33'}/> */}

        <MyTorusKnot size={[1,0.2,1000,3]} position={[0,0,0]} color={'red'} animateStatus={animate}/>
        {/* <MyTorusKnot size={[1*3,0.5,1000,3]} position={[-5,0,0]} color={'blue'} animateStatus={animate}/> */}
  </>
}

const App = () => {
  const [animate,setAnimate] = useState(false)

  return (
    <>
      <button onClick={()=>{setAnimate(!animate)}}>TOGGLE</button>
      <Canvas>
        <Scene animate={animate}/>
      </Canvas>
    </>
  )
}

export default App