import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utilits/motions";

import BubiniCard from "../components/BubiniCard";

const About = () => {
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
              className=" description text-center text-[18px]">1. La storia dei bubini</motion.p>
            <motion.h2
                variants={textVariant(0.8)}
               className="title text-center text-[45px]">Come tutto è iniziato.</motion.h2>
            <motion.p
                variants={textVariant(1.1)}
                className=" description text-center text-[18px]">Per comprendere appieno la loro essenza e il modo in cui tutto ebbe inizio, dobbiamo fare un viaggio nel tempo, tornando indietro di circa 14 mesi, quando i bubini ebbero il loro primo incontro.Il loro primo incontro avvenne in una calda giornata d'estate, quando il sole splendeva alto nel cielo. Bubina stava passeggiando lungo un sentiero coperto di petali di fiori mentre i grilli cantavano una melodia incantevole. Sotto l'ombra di un grande albero, Bubino si trovava intento a osservare il ruscello che scorreva dolcemente. I loro sguardi si incrociarono, e in quell'istante, il mondo sembrò fermarsi. Da quel momento in poi, la loro vita avrebbe preso una svolta magica, trasformandosi in una straordinaria storia di amore.</motion.p>
        </div>
        <BubiniCard />
    </motion.div>
  )
}

export default About