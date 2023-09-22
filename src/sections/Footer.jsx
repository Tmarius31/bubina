import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utilits/motions";
import LoveCard from "../components/LoveCard";
const Footer = () => {
  return (
    <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
        className="container mx-auto p-4"
    >
        <div>
        <motion.p
              variants={textVariant(0.6)}
              className=" description text-center text-[18px]">3. Novita' </motion.p>
            <motion.h2
                variants={textVariant(0.8)}
               className="title text-center text-[45px]">Una nuova esperienza.</motion.h2>
            <motion.p
                variants={textVariant(1.1)}
                className=" description text-center text-[18px]">Dopo aver raggiunto i loro sogni e condiviso così tante avventure straordinarie, il giorno tanto atteso arrivò per la Bubina buninosa, e il Bubino. Decisero di iniziare una nuova fase della loro vita, una fase in cui avrebbero convissuto insieme, costruendo un rifugio speciale per loro due nel cuore del bosco incantato. Il loro nido d'amore era un luogo accogliente, circondato da fiori in fiore e da alberi amici. Era il rifugio perfetto per i Bubini, dove avrebbero continuato a condividere risate, sogni e segreti. La loro casa rifletteva la loro storia d'amore, piena di piccoli dettagli che ricordavano le loro avventure passate. Ma la loro storia non finì qui. Il futuro conteneva ancora tante avventure da scoprire e nuovi sogni da perseguire insieme</motion.p>
                <motion.h3
                    variants={fadeIn('up', 'tween', 2,1)}
                    className="title text-[30px] text-center my-[50px]"
                >Fine.</motion.h3>
        </div>
        <LoveCard />
        <div>
            <p className="text-[13px] text-center">Disgned & Builded by Turcanu Marius Ionut 'Il bubinu' with love ♥</p>
        </div>
    </motion.div>
  )
}

export default Footer