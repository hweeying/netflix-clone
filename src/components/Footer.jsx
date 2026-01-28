import React from 'react';

import youtubeIcon from '../assets/youtube_icon.png';
import twitterIcon from '../assets/twitter_icon.png';
import instagramIcon from '../assets/instagram_icon.png';
import facebookIcon from '../assets/facebook_icon.png';

const Footer = () => {
  return (
    <div className="px-7 py-16 my-12 mx-auto max-w-[1000px]">

      <div className="flex gap-5 mb-10">
        <img src={youtubeIcon} alt="facebook" className="w-7 cursor-pointer" />
        <img
          src={instagramIcon}
          alt="instagram"
          className="w-7 cursor-pointer"
        />
        <img src={twitterIcon} alt="twitter" className="w-7 cursor-pointer" />
        <img src={facebookIcon} alt="facebook" className="w-7 cursor-pointer" />
      </div>

      <ul className="grid grid-cols-4 gap-4 mb-7 cursor-pointer">
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Cooporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className="text-sm text-gray-500">&copy; 1997-2026 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
