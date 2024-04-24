import React , {Suspense} from 'react'
import { Canvas } from 'react-three-fiber'
import { Model } from './SpaceshipTwo'
import { motion } from 'framer-motion'


const SpaceShipCanvas = ()=>{
    return(
        <>
            <motion.div className=' aspect-square' initial={{ x : 50 , y : 50, opacity : 0}} animate={{ x : 0 , y : 0, opacity : 1 }} transition={{ duration : 1 , delay: 2 }}>
                <Canvas frameloop='always' camera={{position : [10, 10, -15] , fov: 22}} >
                    <pointLight intensity={2} />
                    <pointLight intensity={2} position={[10, 10, -15]} />
                    <Suspense fallback={null}>
                        <Model />
                    </Suspense>
                </Canvas>
            </motion.div>
        </>
    )
}

export default SpaceShipCanvas