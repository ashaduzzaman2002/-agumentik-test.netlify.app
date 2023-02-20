import React, { useEffect, useState } from 'react';
import './contact.css';
import { BsWhatsapp, BsTelephone } from 'react-icons/bs';
import { TbBrandTelegram } from 'react-icons/tb';
import { CiFacebook } from 'react-icons/ci';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import axios from 'axios'
import { baseUrl } from '../../helper/base';

const Contact = () => {

  const [lead, setLead] = useState('')
  const [social, setSocial] = useState({
    whatsapp: '',
    telegram: '',
    facebook: '',
    instagram: '',
  });

  const handleChange = (e) => {
    setLead(e.target.value)
  }

  const handleClick = async () => {
   const {data} = await axios.post(`${baseUrl}/lead/subcribe`, {email: lead})
   setLead('')
  }

  const getSocial = async () => {
    // const { data } = await axios.get(`${baseUrl}/api/social`);
    // setSocial(data.social[0]);
  };

  useEffect(() => {
    getSocial();
  }, []);
  
  return (
    <div className="contact__page">
      <div className="contact__page-main">
        <div className="contact__page-main-info">
          <img src="https://cartagenadrift.com/img/contact.jpg" alt="" />
          <div className="contact__page-main-info-text">
            <h2>CONTACT</h2>
            <p>
              The Speed Circuit is located in Cartagena, a three-millennium-old
              city located in the southeast of Spain next to the Mediterranean
              Sea, belonging to the Autonomous Community of the Region of
              Murcia.
            </p>
            <p>We work daily from 9 am till 6 pm</p>

            <div className="contact__page-main-info-contact">
              <a>
                <span className="icon">
                  <BsTelephone />
                </span>
                <span>9093482056</span>
              </a>

              <a>
                <span className="icon">
                  <FiMail />
                </span>
                <span>ashadu@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__page-mainmap">
          <div className="contact__page-mainmap-caption">Find us on the map</div>
          <div className="contact__page-mainmap-image">
            <a href="#">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0868774603664!2d88.42608645063494!3d22.575853785108357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f970ae9a2e19b5%3A0x16c43b9069f4b159!2sTechno%20India%20University!5e0!3m2!1sen!2sin!4v1676837391633!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </a>
          </div>
        </div>
      </div>

      <div className="contact__page-social">
        <div className="contact__page-social-cards">
          <div className="contact__page-social-card">
            <a href={social.whatsapp} target='blank'></a>
            <div className="icon">
              <BsWhatsapp />
            </div>
            <h2>WHATSAPP</h2>
          </div>

          <div className="contact__page-social-card">
          <a href={social.telegram} target='blank'></a>
            <div className="icon">
              <TbBrandTelegram />
            </div>
            <h2>TELEGRAM</h2>
          </div>
        </div>

        <div className="contact__page-search">
          <h3>Do you want to receive news about our events?</h3>
          <div className="search-box">
            <input value={lead} onChange={handleChange} type="text" placeholder="Email" name="email" />
            <button onClick={handleClick}>SEND</button>
          </div>
        </div>

        <div className="contact__page-social-cards">
          <div className="contact__page-social-card">
          <a href={social.facebook} target='blank'></a>
            <div className="icon">
              <CiFacebook />
            </div>
            <h2>FACEBOOK</h2>
          </div>

          <div className="contact__page-social-card">
          <a href={social.instagram} target='blank'></a>
            <div className="icon">
              <AiOutlineInstagram />
            </div>
            <h2>INSTAGRAM</h2>
          </div>
        </div>
      </div>

      <div className="contact__page-footer">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
        <p>Design & Develop-Ashadu</p>
        <p>Privacy policy</p>
      </div>
    </div>
  );
};

export default Contact;
