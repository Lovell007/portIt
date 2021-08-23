import React from 'react';
import headShot from '../images/IMG_20210330_210623_569_adobespark.png';

export default function Home() {
  return (
    <div id="About" className="home">
      <img className="headShot" src={headShot} />
      <div className="brandBG">
        <div className="brandStatement">
          A software engineer with a strong passion for personal development and writing the
          cleanest, most readable code possible. I have a prior history in mostly warehouse with
          some retail and restaurant along with 3 years in the National Guard. I'm no stranger to
          long hours in a demanding work environment, that, coupled with my military training
          provide me with both the physical and mental endurance to adapt and overcome the
          challenges regularly faced in the workplace.
        </div>
      </div>
    </div>
  );
}
