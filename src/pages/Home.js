import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Particle from '../components/Particle';
import Socialicons from '../components/Socialicons';

function Home({ lightMode }) {
  const [information, setInformation] = useState('');

  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Home - Chester React Personal Portfolio Template</title>
        <meta
          name='description'
          content='Chester React Personal Portfolio Template Homepage'
        />
      </Helmet>
      <div className='mi-home-area mi-padding-section'>
        <Particle lightMode={lightMode} />
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10 col-12'>
              <div className='mi-home-content'>
                <h1>
                  Hi, I am{' '}
                  <span className='color-theme'>{information.name}</span>
                </h1>
                <p>{information.aboutContent1}</p>
                <p>{information.aboutContent3}</p>
                <p>{information.aboutContent2}</p>
                <p>{information.aboutContent4}</p>
                <Socialicons bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
