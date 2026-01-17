import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import StudioLights from './../StudioLights';
import { Sophia } from './../../../public/models/Sophia';


function Human() {
  return (
    <div>
       <Canvas shadows camera={{ position: [0, 1, 4], fov: 50 }}>
               {/* <ambientLight intensity={30} /> */}
           <StudioLights />
               {/* Keep model at origin */}
               <Sophia scale={1} position={[0, 0, 0]} />
       
               <OrbitControls
                 enableZoom={false}
                 enablePan={false}
               />
             </Canvas> 
    </div>
  )
}

export default Human