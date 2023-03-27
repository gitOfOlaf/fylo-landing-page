import { useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import Hero from './Hero';
import logo from '../../images/logo.svg';

export default function Header() {
  // false = hidden, true = open
  const [navState, setNavState] = useState({
    navBarOpen: false,
    toggleContainerOpen: false,
  });
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  const toggleMenu = function () {
    setNavState((previousValue) => ({
      navBarOpen: !previousValue.navBarOpen,
      toggleContainerOpen: !previousValue.toggleContainerOpen,
    }));
  };

  return (
    <header className="w-full">
      <nav className="container mx-auto flex items-center justify-between p-6 relative">
        <img src={logo} alt="logo" className="w-[100px]" />

        <ul
          className={`navList--items items-center gap-6 text-white bg-darkBlueMainBG flex-col md:flex-row w-full absolute rounded-lg p-6 top-[60px] left-0 flex h-[200px] md:relative md:top-0 md:h-auto md:bg-transparent md:p-0 md:w-auto ${
            isSmallScreen && (navState.navBarOpen ? 'translate-x-[0%]' : 'translate-x-[120%]')
          }`}
        >
          <li className="hover:underline hover:font-bold text-lg">
            <a href="#">Features</a>
          </li>
          <li className="hover:underline text-lg hover:font-bold">
            <a href="#">Team</a>
          </li>
          <li className="hover:underline text-lg hover:font-bold">
            <a href="#">Sign In</a>
          </li>
        </ul>

        <div className="toggleContainer cursor-pointer block md:hidden" onClick={toggleMenu}>
          <div className={`line1 ${isSmallScreen && navState.toggleContainerOpen && 'open'}`}></div>
          <div className={`line2 ${isSmallScreen && navState.toggleContainerOpen && 'open'}`}></div>
          <div className={`line3 ${isSmallScreen && navState.toggleContainerOpen && 'open'}`}></div>
        </div>
      </nav>

      <Hero />
    </header>
  );
}
