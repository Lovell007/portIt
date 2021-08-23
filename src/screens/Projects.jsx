import React from 'react';
import afts from '../images/Screen Shot 2021-08-12 at 12.08.21 PM.png';
import mspc from '../images/Screen Shot 2021-08-12 at 12.10.09 PM.png';
import pcCulture from '../images/Screen Shot 2021-08-12 at 12.11.57 PM.png';
import { AiOutlineGithub } from 'react-icons/ai';

export default function Projects() {
  return (
    <div id="Projects">
      <div className="projects">
        <div>
          <a href="https://stoic-bartik-d5dba2.netlify.app/">
            <img className="projImg" src={afts} alt="" />
          </a>
          <div className="projDesc">
            A proof of concept project, allowing users to create a 3d planet using custom texture
            maps.
            <a href="https://github.com/Lovell007/aimingforthestars">
              {' '}
              <AiOutlineGithub />
            </a>
          </div>
        </div>
        <div>
          <a href="https://modest-perlman-36e441.netlify.app/">
            <img className="projImg" src={mspc} alt="" />
          </a>
          <div className="projDesc">
            A work in progress. Users can create playlists, play music, and find local singles with
            similar musical taste (future feature){' '}
            <a href="https://github.com/Lovell007/rythimic_connections">
              {' '}
              <AiOutlineGithub />
            </a>
          </div>
        </div>
        <div>
          <a href="https://pc-culture.netlify.app/">
            <img className="projImg" src={pcCulture} alt="" />
          </a>
          <div className="projDesc">
            Find your parts and build the ultimate gaming computer at PC Culture{' '}
            <a href="https://github.com/spencerpete/PC-Culture">
              {' '}
              <AiOutlineGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
