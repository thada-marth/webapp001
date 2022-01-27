import React from 'react';
import Typical from 'react-typical'

export default function Profile() {
  return <div className='profile-container'>
      <div className='profile-parent'>
          <div className='profile-details'>
                <div className='colz'>
                    <a href='#'>
                        <i className='fa fa-facebook-square' aria-hidden="true"></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-twitter'></i>
                    </a>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello , I'M <span className='hilighted-text'>Marth</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary Text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Junior Programmer",1000,
                                "Gamer",1000,
                                "Professional Care Taker",1000,
                                "Car Lover",1000,
                            ]}
                            />
                        </h1>
                    </span>
                </div>
          </div>
      </div>
  </div>;
}
