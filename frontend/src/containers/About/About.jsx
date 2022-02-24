import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';

import './About.scss';
import { AppWrap } from '../../wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type=="abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Development</span>
        <br /> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              whileHover={{ scale: 1.1 }}
              key={about.title + index}>
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <h2 className="bold-text" style={{ marginTop: 10 }}>
                {about.description}
              </h2>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');
