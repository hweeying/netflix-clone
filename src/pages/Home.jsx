import React from 'react';
import Navbar from '../components/Navbar';

import heroBanner from '../assets/hero_banner.jpg';
import heroTitle from '../assets/hero_title.png';
import playIcon from '../assets/play_icon.png';
import infoIcon from '../assets/info_icon.png';
import TitleCards from '../components/TitleCards';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="relative">
        <img
          src={heroBanner}
          alt="Hero Banner"
          className="w-full [mask-image:linear-gradient(to_right,transparent,black_75%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_75%)]"
        />
        <div className="absolute w-full pl-24 bottom-0">
          <img
            src={heroTitle}
            alt="Caption Image"
            className="w-[90%] mb-7 max-w-[420px]"
          />
          <p className="max-w-[700px] text-md mb-5">
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
          </p>

          <div className="flex gap-2 mb-12">
            <button className="inline-flex items-center gap-2 text-sm font-semibold rounded border-0 outline-none px-4 py-2 bg-white cursor-pointer text-black hover:bg-gray-300">
              <img src={playIcon} alt="Play Icon" className="w-6" /> Play
            </button>
            <button className="inline-flex items-center gap-2 text-sm font-semibold rounded border-0 outline-none px-4 py-2 bg-[#6d6d6eb3] cursor-pointer text-white hover:bg-[#6d6d6e66] transition">
              <img src={infoIcon} alt="Info Icon" className="w-6 " /> More Info
            </button>
          </div>
          <TitleCards category={'now_playing'} />
        </div>
      </div>

      <div className="pl-24">

        <TitleCards title={'Blockbuster Movies'} category={'top_rated'} />
        <TitleCards title={'Only on Netflix'} category={'popular'} />
        <TitleCards title={'Upcoming'} category={'upcoming'} />
        <TitleCards title={'Top Pics for You'} category={'now_playing'} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
