import { motion } from "framer-motion";
import { slideIn, staggerContainer, } from "../utilits/motions"

import bubinu from '../assets/bubinu1.png';
import bubina from '../assets/bubinu2.png';

const BubiniCard = () => {
  return (
    <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
        className="flex my-[50px]"
    >
        <motion.div
             variants={slideIn('left', 0.3, 0.5)}
        >
            <img src={bubinu} alt="meta foto bubini" />
        </motion.div>
        <motion.div
            variants={slideIn('right', 0.3, 0.5)}
        >
            <img src={bubina} alt="l altra meta foto bubini" />
        </motion.div>
    </motion.div>
  )
}

export default BubiniCard