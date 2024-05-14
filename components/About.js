import Pic from "./pic"
import DividerDots from "./dividerDots"

const About = () => {

    return (
        
            <>
            <div className='about'>
                <div className='left'>
                    <DividerDots/>
                    <h1>The RELLIS Starlab Facility</h1>
                    The Starlab engineering complex hosts a 1600 square foot VICON stage with 44 cameras, and two modular Optitrack systems with 16 cameras combined. Additionally, we have a suite of VR and AR hardware, and LiDAR scanners. Starlab works across disciplines including Art and Design, Virtual Production, Mechanical Engineering and Autonomous Vehicle Platforms and Digital Doubles. 
                </div>
                <div className='right'>
                    <Pic src="/images/Starlab-33-of-35-1024x628.jpg"/>
                    <Pic src="/images/StarlabInterior.jpg"/>
                </div>
            </div>
            </>
        
    )
}

export default About
