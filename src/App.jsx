import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import ProjectImg from './assets/youtube.png';

const App = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='app'>
      <motion.div 
        transition={{ layout: { duration: 0.7, type: "spring" } }} 
        layout 
        className='card'
        style={{   borderRadius: "15px", border: '1px solid #07b5e6' }}
        onClick={ () => setOpen(!open) }
      > 
       { !open && <motion.img className='card-img' src={ ProjectImg } />}
        { !open && <motion.h2 layout="position">Motion project</motion.h2>}
          { open && (
              <motion.div
                className='content-div'
                transition={{ duration: 0.6 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Cupiditate repellat, ut commodi doloremque nam debitis 
                  blanditiis esse nihil ratione deserunt.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, magni.
                </p>
              </motion.div>
            )
          }
      </motion.div>
    </div>
  );
};

export default App;
