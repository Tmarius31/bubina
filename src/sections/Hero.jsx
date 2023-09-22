import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utilits/motions";
import bubina from '../assets/bubina-profilo.jpg'
import blob from '../assets/blob.1.png';
import blob1 from '..//assets/blob-grande.png'

const Hero = () => {
  return (
    <motion.div
        variants={staggerContainer}
        initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25}}
        className="container relative mx-auto p-4  sm:flex my-[50px] sm:mt-[100px]"
    >
        <div className=" flex flex-col items-center justify-center bg-w">
            <motion.h1 variants={textVariant(0.8)} className=" title text-[65px]">Bubina Sbubinonsa</motion.h1>
            <motion.p variants={textVariant(1)} className=" text-[18px] description sm:w-[70%]">
            C era una volta, in un mondo di magia e meraviglie, una creatura speciale chiamata Federica. Ma tra gli abitanti di questo straordinario regno, lei era conosciuta come Bubina buninosa, un nome dolce e affettuoso che rifletteva la sua personalità unica.

            Federica era piccolina piccolosa, ma il suo cuore era grande come il cielo. Amava la vita e ogni giorno portava un sorriso radiante sul suo viso. Era una fonte di gioia per tutti coloro che avevano la fortuna di conoscerla.
            </motion.p>
        </div>
        <div className=" flex justify-center">
            <motion.img variants={fadeIn('up', 'tween', 0.5,1)}
             src={bubina} alt="foto bubina" className="sm:w-[50%] w-[80%] rounded-lg mt-10 mb-[50px] z-10"/>
        </div>
        <div className="absolute bottom-0 right-0 w-[250px]">
            <img src={blob1} alt="decoration"/>
        </div>
        
        <div className="absolute sm:left-10 top-0 right-11">
            <img src={blob} alt="decoration"/>
        </div>

    </motion.div>
  )
}

export default Hero