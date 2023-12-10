import React, { useState } from 'react';

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  const redirectToAnotherPage = () => {
    window.location.href = '#'; 
  };

  return (
    <div className='bg-brand-color'>
      <div className='container mx-auto h-24 flex items-center justify-between'>
        <div className="flex-gap text-xl font-semibold">
          <a href="#">MY JEWELRY STORE</a>
        </div>

        <nav className="flex gap-x-8 font-semibold">
          <div className="relative">
            <button onClick={toggleSearch}>
              {!searchActive ? (
                <img src="/img/SVG/1.svg" alt="Search" />
              ) : (
                <input
                  type="text"
                  className="border-b border-black focus:border-transparent focus:border-b focus:outline-none"
                  placeholder="Search..."
                />
              )}
            </button>
          </div>

          <button onClick={redirectToAnotherPage}>
            <img src="/img/SVG/2.svg" alt="Cart" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
