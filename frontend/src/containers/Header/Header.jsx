import { motion } from 'framer-motion';

import './Header.scss';
import { profile, circle, react, redux, sass } from '../../constants/images';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opcity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <section id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opcity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">NgTuanLoc</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opcity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img">
        <img src={profile} alt="profile bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={circle}
          alt="profile circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles">
        {[react, redux, sass].map((circle, index) => {
          return (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Header;
