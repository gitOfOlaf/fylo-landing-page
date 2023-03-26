import Hero from './Hero';
import logo from '../../images/logo.svg';

export default function Header() {
  return (
    <header className="w-full">
      <nav className="container mx-auto flex items-center justify-between p-6">
        <img src={logo} alt="logo" className="w-[100px]" />

        <ul className="navList--items flex items-center gap-6 text-white">
          <li className="hover:underline hover:font-bold text-sm">
            <a href="#">Features</a>
          </li>
          <li className="hover:underline text-sm hover:font-bold">
            <a href="#">Team</a>
          </li>
          <li className="hover:underline text-sm hover:font-bold">
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>

      <Hero />
    </header>
  );
}
