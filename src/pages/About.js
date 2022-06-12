import axios from 'axios';
import FsLightbox from 'fslightbox-react';
import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { Helmet } from 'react-helmet';
import ProgressiveImage from 'react-progressive-image';
import Slider from 'react-slick';
import Layout from '../components/Layout';
import Sectiontitle from '../components/Sectiontitle';
import Service from '../components/Service';
import Testimonial from '../components/Testimonial';

function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState('');
  const [services, setServices] = useState([]);
  // const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleToggler = (event) => {
    setToggler(!toggler);
  };

  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setInformation(response.data);
    });
    axios.get('/api/services').then((response) => {
      setServices(response.data);
    });
    // axios.get('/api/reviews').then((response) => {
    //   setReviews(response.data);
    // });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Michael Jacob - About</title>
        <meta name='About' content='About' />
      </Helmet>
      <div className='mi-about-area mi-section mi-padding-top'>
        <div className='container'>
          <Sectiontitle title='About Me' />
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='mi-about-image'>
                <ProgressiveImage
                  src={process.env.PUBLIC_URL + information.aboutImage}
                  placeholder='/images/about-image-placeholder.png'>
                  {(src) => (
                    <img
                      src={src}
                      alt='aboutimage'
                      onClick={() => handleToggler(!toggler)}
                    />
                  )}
                </ProgressiveImage>
                <span className='mi-about-image-icon'>
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='mi-about-content'>
                <h3>
                  I am <span className='color-theme'>{information.name}</span>
                </h3>
                <p>
                  Currently seeking Software and Web Development roles that
                  allow me to practice, improve and expand my knowledge of code
                  and my ability to use code effectively.
                </p>
                <p></p>
                <ul>
                  {!information.name ? null : (
                    <li>
                      <b>Full Name</b> {information.name}
                    </li>
                  )}
                  {!information.age ? null : (
                    <li>
                      <b>Age</b> {information.age} Years
                    </li>
                  )}
                  {!information.phone ? null : (
                    <li>
                      <b>Phone</b> {information.phone}
                    </li>
                  )}
                  {!information.nationality ? null : (
                    <li>
                      <b>Nationality</b> {information.nationality}
                    </li>
                  )}
                  {!information.language ? null : (
                    <li>
                      <b>Languages</b> {information.language}
                    </li>
                  )}
                  {!information.email ? null : (
                    <li>
                      <b>Email</b> {information.email}
                    </li>
                  )}
                  {!information.address ? null : (
                    <li>
                      <b>Address</b> {information.address}
                    </li>
                  )}
                  {/* {!information.freelanceStatus ? null : (
                    <li>
                      <b>Freelance</b> {information.freelanceStatus}
                    </li>
                  )} */}
                </ul>
                <a
                  href={information.cvfile}
                  target='blank'
                  className='mi-button'>
                  my resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mi-service-area mi-section mi-padding-top'>
        <div className='container'>
          <Sectiontitle title='Services' />
          <div className='mi-service-wrapper'>
            <div className='row mt-30-reverse'>
              {services.map((service) => (
                <div
                  className='col-lg-4 col-md-6 col-12 mt-30'
                  key={service.title}>
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className='mi-review-area mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Sectiontitle title='Reviews' />
          <div className='row justify-content-center'>
            <div className='col-12'>
              <Slider className='mi-testimonial-slider' {...sliderSettings}>
                {reviews.map((review) => (
                  <Testimonial key={review.id} content={review} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}

export default About;
