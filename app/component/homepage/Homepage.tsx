import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import GlbModel from '../../../public/models/Macbook-14.jsx'
import StudioLights from '../../component/StudioLights.jsx'
import { Speaking } from './../../../public/models/Abc';

const Homepage = () => {
  return (
    <div className="h-full">
      <Canvas shadows camera={{ position: [0, 3, 4], fov: 50 }}>
     
    <StudioLights />

        <Speaking scale={1} position={[0, 0, 0]} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  )
}

export default Homepage
