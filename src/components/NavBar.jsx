import logo from '../assets/bubina.logo (1).png';
import menu from '../assets/hamburgerMenu.png';
import { motion } from 'framer-motion';
import { navVariants } from '../utilits/motions';

const NavBar = () => {
  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className=' p-2'>
      <nav className='container  mx-auto flex justify-between'>
        <img src={logo} alt="logo" width={150} height={100}/>
        <img src={menu} alt="logo" width={70} height={70}/>
      </nav>
    </motion.header>
  )
}

export default NavBar