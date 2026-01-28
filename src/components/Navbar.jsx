import React, {useEffect, useRef, useState} from 'react';

import logo from '../assets/logo.png';
import searchIcon from '../assets/search_icon.svg';
import bellIcon from '../assets/bell_icon.svg';
import profileIcon from '../assets/profile_img.png';
import caretIcon from '../assets/caret_icon.svg';

const Navbar = () => {
  const navRef = useRef ();
  const [isDropdownOpen, setIsDropdownOpen] = useState (false);

  function toggleDropdown () {
    setIsDropdownOpen (prev => !prev);
  }

  useEffect (() => {
    window.addEventListener ('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add ('bg-black');
      } else {
        navRef.current.classList.remove ('bg-black');
      }
    });
  }, []);
  return (
    <div
      ref={navRef}
      className="fixed top-0 left-0 w-full flex justify-between align-center px-24 py-5 text-sm text-[#e5e5e5] bg-gradient-to-b from-black/70 to-transparent z-100"
    >
      <div className="flex items-center gap-10">
        <img src={logo} alt="logo" className="w-24" />
        <ul className="flex gap-5 cursor-pointer">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <img
          src={searchIcon}
          alt="search icon"
          className="w-4 cursor-pointer"
        />
        <p>Kids</p>
        <img src={bellIcon} alt="bell icon" className="w-4 cursor-pointer" />
        <div
          className="flex items-center gap-2 relative cursor-pointer"
          onMouseEnter={() => toggleDropdown ()}
          onMouseLeave={() => toggleDropdown ()}
        >
          <img
            src={profileIcon}
            alt="profile icon"
            className="profile rounded w-8"
          />
          <img src={caretIcon} alt="caret icon" className="cursor-pointer" />
          {isDropdownOpen &&
            <div className="absolute top-full right-0 w-max bg-[#191919] px-5 py-4 rounded-sm z-10">
              <p className="text-sm cursor-pointer">Sign out of Netflix</p>
            </div>}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
