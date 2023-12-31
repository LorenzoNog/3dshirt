import {motion, AnimatePresence} from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import {
    headContainerAnimation,
    headTextAnimation,
    headContentAnimation,
    slideAnimation
} from '../config/motion'
import CustomButton from '../components/customButton'

const Home = () => {
    const snap = useSnapshot(state)
    return(
        <AnimatePresence>
            {
                snap.intro && (
                    <motion.section className='home' {...slideAnimation('left')}>
                        <motion.header {...slideAnimation("down")}>
                            <img
                                src='./threejs.png'
                                alt='img'
                                className='w-8 h-8 object-contain'
                            />
                        </motion.header>

                        <motion.div className='home-content' {...headContainerAnimation}>
                            <motion.div {...headTextAnimation}>
                                <h1 className='head-text'>
                                    LET'S <br className='xl:block hidden'/> DO IT.
                                </h1>
                            </motion.div>
                        </motion.div>
                        <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                            <p className='max-w-md font-normal text-gray-600 text-base'>
                                Create your unique and exclusive shirt with our brand-new 3D customization tool. 
                                <strong>Unleash your imagination</strong> and define your own style.
                            </p>
                        </motion.div>
                        <CustomButton
                            type = "filled"
                            title = 'Customize It'
                            handleClick = {() => state.intro = false}
                            customsStyles = 'w-fit font-bold text-sm'
                        />
                    </motion.section>
                )
            }
        </AnimatePresence>
    )
}

export default Home