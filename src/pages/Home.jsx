import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio';

import state from '../store';
import CustomButton from '../components/CustomButton';

import {
    headContainerAnimation,
    headTextAnimation,
    headContentAnimation,
    slideAnimation
} from '../config/motion';

const home = () => {
    const snap = useSnapshot(state);    //called state

  return (
        <AnimatePresence>           
            {snap.intro && (        //*if state.intro is true, then render the following:*/}
            <motion.section className="home" {...slideAnimation('left')}>
                <motion.header {...slideAnimation("down")}>
                    <img
                        src="./threejs.png"
                        alt="logo"
                        className="w-8 h-8 object-contain"
                    />
                </motion.header>

                <motion.div className='home-content' {...
                headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className="head-text">
                            LET'S   <br className='xl:block hidden' /> DO IT!
                        </h1>
                </motion.div>
                    <motion.div
                        {...headContentAnimation}
                        className="flex flex-col gap-5"
                    >
                        <p className='max-w-md font-normal text-gray-600 text-base'>
                            Create your own custom t-shirt with our 3D
                            customizer.
                            <strong>
                                Unleash your creativity and make your own design
                            </strong>{" "}
                            Define your own style.
                        </p>

                        <CustomButton 
                            type="filled"
                            title="Customize Now"
                            handleClick={() => state.intro = false}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
            )}
        </AnimatePresence>
    )
            
}

export default home