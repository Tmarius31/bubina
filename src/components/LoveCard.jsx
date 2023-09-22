import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "../utilits/motions";

import love from '../assets/love.png'

const LoveCard = () => {
  return (
    <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
        className="container mx-auto"
    >
        <motion.div
            variants={zoomIn(1,2)}
        >
        <img src={love} alt="ti amo amoreee" />
        </motion.div>
    </motion.div>
  )
}

export default LoveCard