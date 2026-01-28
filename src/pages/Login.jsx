import React, {useState} from 'react';

import logo from '../assets/logo.png';

const Login = () => {
  const [signState, setSignState] = useState ('Sign In');

  return (
    <div className="h-screen bg-[url('/background_banner.jpg')] bg-gradient-to-r from-black/80 to-transparent py-5 px-24">
      <img src={logo} alt="logo" className="w-[150px]" />
      <div className="w-full max-w-[450px] bg-black/80 rounded p-16 m-auto">
        <h1 className="font-bold text-3xl mb-7">{signState}</h1>
        <form>
          {signState === 'Sign Up'
            ? <input
                type="text"
                placeholder="Your name"
                className="w-full h-12 bg-[#333] text-white my-4 border-0 outline-none rounded px-5 py-4 text-base"
              />
            : <div />}

          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 bg-[#333] text-white my-4 border-0 outline-none rounded px-5 py-4 text-base"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 bg-[#333] text-white my-4 border-0 outline-none rounded px-5 py-4 text-base"
          />
          <button className="border-0 w-full outline-none bg-[#e50914] text-white rounded text-base font-semibold mt-3 cursor-pointer p-4">
            {signState}
          </button>
          <div className="flex items-center justify-between text-[#b3b3b3] text-sm mt-2">
            <div className="flex items-center gap-1">
              <input type="checkbox" className="w-4 h-4" />
              <label htmlFor="">Remember Me</label>
            </div>

            <p>Need Help?</p>
          </div>
        </form>

        <div className="mt-10 text-[#737373]">
          {signState === 'Sign In'
            ? <p>
                New to Netflix?

                <span
                  className="ml-1.5 text-white font-semibold cursor-pointer"
                  onClick={() => {
                    setSignState ('Sign Up');
                  }}
                >
                  Sign Up Now
                </span>
              </p>
            : <p>
                Already have account?

                <span
                  className="ml-1.5 text-white font-semibold cursor-pointer"
                  onClick={() => {
                    setSignState ('Sign In');
                  }}
                >
                  Sign In Now
                </span>
              </p>}

        </div>
      </div>
    </div>
  );
};

export default Login;
