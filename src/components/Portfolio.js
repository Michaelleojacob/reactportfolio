import FsLightbox from 'fslightbox-react';
import React, { useState } from 'react';
import * as Icon from 'react-feather';
import ProgressiveImage from 'react-progressive-image';
import LineIcon from 'react-lineicons';
import {
  SiReact,
  SiFirebase,
  SiReactrouter,
  SiWebpack,
  SiRedux,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiJest,
} from 'react-icons/si';

import { DiCss3, DiRuby, DiNpm } from 'react-icons/di';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaNode } from 'react-icons/fa';
import { TiCloudStorage } from 'react-icons/ti';
import { GrStorage } from 'react-icons/gr';

const myIcons = {
  css: DiCss3,
  javascript: SiJavascript,
  react: SiReact,
  html: AiOutlineHtml5,
  firebase: SiFirebase,
  router: SiReactrouter,
  webpack: SiWebpack,
  redux: SiRedux,
  ruby: DiRuby,
  tailwind: SiTailwindcss,
  node: FaNode,
  typescript: SiTypescript,
  npm: DiNpm,
  jest: SiJest,
  localStorage: GrStorage,
  firestore: TiCloudStorage,
};

function Portfolio(props) {
  const [toggler, setToggler] = useState(false);
  const { title, subtitle, imageUrl, largeImageUrl, url, icons, live } =
    props.content;

  const handleToggler = (value) => {
    setToggler(value);
  };

  return (
    <div className='mi-portfolio mi-portfolio-visible'>
      <div className='mi-portfolio-image'>
        <ProgressiveImage
          src={process.env.PUBLIC_URL + imageUrl}
          placeholder='/images/portfolio-image-placeholder.png'>
          {(src) => <img src={src} alt={title} />}
        </ProgressiveImage>
        <ul>
          {!largeImageUrl ? null : (
            <li>
              <button onClick={() => handleToggler(!toggler)}>
                <Icon.ZoomIn />
              </button>
            </li>
          )}
          {url ? (
            <li>
              <a rel='noopener noreferrer' target='_blank' href={url}>
                <Icon.GitHub />
              </a>
            </li>
          ) : null}
          {live ? (
            <li>
              <a rel='noopener noreferrer' target='_blank' href={live}>
                <Icon.Link />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
      {!url ? (
        <h5>{title}</h5>
      ) : (
        <h5>
          <a rel='noopener noreferrer' target='_blank' href={url}>
            {title}
          </a>
        </h5>
      )}
      {subtitle ? <h6>{subtitle}</h6> : null}
      {icons ? (
        <div className='port-icons'>
          {icons.map((eachIcon, index) => {
            const MyIcon = myIcons[eachIcon];
            return (
              <div className='my-icon-holder' key={index}>
                <MyIcon className={`my-${eachIcon}`} />
                <span className='my-tooltip'>{eachIcon}</span>
              </div>
            );
          })}
        </div>
      ) : null}
      {!largeImageUrl ? null : (
        <FsLightbox toggler={toggler} sources={largeImageUrl} />
      )}
    </div>
  );
}

export default Portfolio;
