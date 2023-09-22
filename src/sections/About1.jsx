import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utilits/motions";

import dottori from '../assets/dottori.png'


const About1 = () => {
  return (
    <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25}}
            className="container mx-auto p-4">
       <div className="">
            <motion.p
              variants={textVariant(0.6)}
              className=" description text-center text-[18px]">2. Il percorso</motion.p>
            <motion.h2
                variants={textVariant(0.8)}
               className="title text-center text-[45px]">Il sogno della Bubina.</motion.h2>
            <motion.p
                variants={textVariant(1.1)}
                className=" description text-center text-[18px]">Mentre il tempo passava nel loro incantato regno, la Bubina buninosa, cominciò a nutrire un grande sogno: diventare una dottoressa. Aveva un cuore compassionevole e voleva aiutare gli altri con la sua conoscenza e il suo amore per la cura. Ma sapeva che il cammino verso il suo sogno sarebbe stato impegnativo e richiedeva molto impegno. Federica si immersa nei libri di medicina, imparando ogni giorno qualcosa di nuovo. Studiava con dedizione, ma a volte si sentiva sopraffatta dalla complessità del materiale. Era in quei momenti che il suo fidanzato, il Bubino, entrava in scena.</motion.p>
            <motion.p
                variants={textVariant(1.3)}
                className=" description text-center text-[18px]">Il Bubino, con il suo spirito gentile e il suo sostegno incondizionato, si assicurava di essere sempre al fianco di Federica. La incoraggiava nei momenti di dubbio, la aiutava a risolvere problemi complicati e le ricordava costantemente quanto fosse brillante e capace.
                </motion.p>
        </div>
        <motion.div
        variants={fadeIn('up', 'tween', 1,1)}
        className=" flex">
            <img src={dottori} alt="foto doc" width={500}/>
            
        </motion.div>
    </motion.div>
  )
}

export default About1