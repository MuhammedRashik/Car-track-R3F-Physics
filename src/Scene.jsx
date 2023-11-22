import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'

import { Suspense, useState} from 'react'
import Track from './Track'
import Ground from './Ground'
import {Car} from './Car'


const Scene=()=>{


    const [thirdPerson,setThirdPerson]=useState(true);
    const [camaraPosition,setCamaraPosition]=useState([-6,3.9,6.21]);
    return(

        <Suspense fallback={null}>
<Environment
files={process.env.PUBLIC_URL + "/textures/envmap.hdr"}
background={"both"}
/>
{/* <ambientLight intensity={5}  /> */}
<directionalLight intensity={0.1}/>

<PerspectiveCamera makeDefault position={camaraPosition} fov={40}/>
{!thirdPerson && (
<OrbitControls target0={[-2.64,-0.71,0.03]}/>
    
)}
<Track/>
<Ground/>
<Car thirdPerson={thirdPerson}/>
        </Suspense>
    )
}

export default Scene