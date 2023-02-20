import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../helper/base';
import './social.css';

const Social = () => {
  const [input, setInput] = useState({
    whatsapp: '',
    telegram: '',
    facebook: '',
    instagram: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const submitHandler = async () => {
    // const {data} = await axios.put(`${baseUrl}/api/social/update`, input)
    
  };

  const getSocial = async () => {
    const { data } = await axios.get('https://testing-node-8ci6.onrender.com/');
    console.log(data.social[0]);
    setInput(data.social[0]);
  };

  useEffect(() => {
    getSocial();
  }, []);

  return (
    <div className="social">
      <h2>Update your socail link here</h2>
      <div className="from">
        <div>
          <h3>Whatsapp</h3>
          <input
            type="text"
            name="whatsapp"
            onChange={handleChange}
            value={input.whatsapp}
          />
        </div>

        <div>
          <h3>Telegram</h3>
          <input
            type="text"
            name="telegram"
            onChange={handleChange}
            value={input.telegram}
          />
        </div>

        <div>
          <h3>Facebook</h3>
          <input
            type="text"
            name="facebook"
            onChange={handleChange}
            value={input.facebook}
          />
        </div>

        <div>
          <h3>Instagram</h3>
          <input
            type="text"
            name="instagram"
            onChange={handleChange}
            value={input.instagram}
          />
        </div>

        <div>
          <input
            onClick={submitHandler}
            className="from-btn"
            type="button"
            value={'Save'}
          />
        </div>
      </div>
    </div>
  );
};

export default Social;
