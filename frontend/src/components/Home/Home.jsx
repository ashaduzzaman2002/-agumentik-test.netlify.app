import React from 'react';
import './home.css';
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div style={{ display: 'flex', padding: 0 }}>
      <motion.div className="side-info">
        <h1 className="side__info-title">
          Cartagena <br /> drift <br /> school
        </h1>
        <div className="side__info-text">
          <p>The first profeshional drifting school in Spain.</p>
          <p>
            We have everything to teach you and do everything to give you a
            taste of drifting.
          </p>

          <p>Cartagena's unique track combines all these possibilities.</p>
        </div>

        <div className="side__info-cards">
          <div className="side__info-card">
            <h2>100+</h2>
            <p>Broken engines</p>
          </div>

          <div className="side__info-card">
            <h2>2500+</h2>
            <p>Burnt Wheels</p>
          </div>

          <div className="side__info-card">
            <h2>{'>200'}</h2>
            <p>Took the podium</p>
          </div>

          <div className="side__info-card">
            <h2>100%</h2>
            <p>Satisfied customers</p>
          </div>
        </div>

        <div className="side__btn">
          <button>Submit your application</button>
        </div>
      </motion.div>

      <motion.div  className="main__container">
        <div className="main__landing-video" style={{ color: 'red' }}>
          <img
            style={{ width: '100%' }}
            src="https://cartagenadrift.com/img/main.jpg"
            alt=""
          />

          <div className='main__landing-video-bg'></div>
        </div>

        <div className="main__landing-cards">
          <div className="main__langing-card">
            <img src="https://cartagenadrift.com/img/main_sm.jpg" alt="" />
            <div className="main__langing-card-text">
              <h2>ONE OF THE BEST TRACKS</h2>
            </div>
          </div>

          <div className="main__langing-card">
            <img src="https://cartagenadrift.com/img/seasons.jpg" alt="" />
            <div className="main__langing-card-text">
              <h2>TRAINNIG ALL YEAR ROUND</h2>
            </div>
          </div>

          <div className="main__langing-card">
            <img src="https://cartagenadrift.com/img/e46.jpg" alt="" />
            <div className="main__langing-card-text">
              <h2>POWERFUL CARS</h2>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
