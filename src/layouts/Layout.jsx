import React from 'react';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import resumeImg from '../images/Mediamodifier-Design-Template.png';

export default function Layout(props) {
  return (
    <div>
      <div className="navBar">
        <div className="leftBar">
          <a href="/#About">
            <p className="leftLinks">About</p>
          </a>
          <a href="/#Mission">
            <p className="leftLinks">Mission</p>
          </a>
          <a href="/#Projects">
            <p className="leftLinks">Projects</p>
          </a>
          <a href="/#Contact">
            <p className="leftLinks">Contact Me</p>
          </a>
        </div>
        <div className="name">James Lovell</div>
        <div className="rightBar">
          <p className="rightLinks">
            <AiFillLinkedin
              className="lIcons"
              onClick={() => window.open('https://www.linkedin.com/in/james-lovell007/', '_blank')}
            />
          </p>
          <p className="rightLinks">
            <AiOutlineGithub
              className="gIcons"
              onClick={() => window.open('https://github.com/Lovell007', '_blank')}
            />
          </p>
          <p className="rightLinks">
            <img
              alt=""
              className="resumeImg"
              onClick={() =>
                window.open(
                  'https://docs.google.com/document/d/1EhSUERxfZYZvDlBdOA3uGm8zc_ilVKjCjuC5CR_cMTM/edit?usp=sharing',
                  '_blank'
                )
              }
              src={resumeImg}
            />
          </p>
        </div>
      </div>
      {props.children}
    </div>
  );
}
