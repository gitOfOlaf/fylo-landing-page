import logo from '../../images/logo.svg';
import iconLocation from '../../images/icon-location.svg';
import iconPhone from '../../images/icon-phone.svg';
import iconEmail from '../../images/icon-email.svg';

export default function FooterContent() {
  return (
    <div className="info container mx-auto pt-[20rem] md:pt-[10rem] md:pb-[5rem]">
      <img src={logo} alt="logo" className="w-[50%] my-10 md:w-auto md:my-0" />

      <div className="info--footer py-4 lg:flex justify-between items-start gap-[3rem]">
        <div className="location flex items-start">
          <img src={iconLocation} alt="location icon" />
          <p className="ml-5 text-white text-base md:text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur culpa quibusdam delectus, distinctio itaque magni modi fuga accusantium expedita nesciunt, ipsam ducimus in earum dolore, vero autem iusto fugiat temporibus?
          </p>
        </div>

        <div className="info-ext py-4 lg:py-0">
          <div className="phone flex items-start">
            <img src={iconPhone} alt="phone icon" />
            <p className="ml-5 text-white text-base md:text-sm">+1-543-123-4567</p>
          </div>

          <div className="email flex items-start my-4">
            <img src={iconEmail} alt="email icon" />
            <p className="ml-5 text-white text-base md:text-sm">example@fylo.com</p>
          </div>
        </div>

        <div className="footer--links max-w-[100px] lg:max-w-full lg:flex gap-[3rem]">
          <ul className="list1">
            <li className="text-white text-base py-1 hover:font-bold md:text-sm">
              <a href="#">About Us</a>
            </li>
            <li className="text-white text-base py-1 hover:font-bold md:text-sm">
              <a href="#">Jobs</a>
            </li>
            <li className="text-white text-base py-1 hover:font-bold md:text-sm">
              <a href="#">Press</a>
            </li>
            <li className="text-white text-base py-1 hover:font-bold md:text-sm">
              <a href="#">Blog</a>
            </li>
          </ul>

          <ul className="list2 mt-6 lg:mt-0">
            <li className="text-white text-base py-1 hover:font-bold md:text-sm">
              <a href="#">Contact Us</a>
            </li>
            <li className="text-white text-base py-1 hover:font-bold md:text-sm">
              <a href="#">Terms</a>
            </li>
            <li className="text-white text-base py-1 hover:font-bold md:text-sm">
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>

        <div className="social--icons flex items-center justify-center w-full gap-4 py-8 md:py-0">
          <figure className="w-[30px] h-[30px] border border-white rounded-full cursor-pointer flex items-center justify-center">
            <i className="fa-brands fa-facebook-f text-white"></i>
          </figure>
          <figure className="w-[30px] h-[30px] border border-white rounded-full cursor-pointer flex items-center justify-center">
            <i className="fa-brands fa-twitter text-white"></i>
          </figure>
          <figure className="w-[30px] h-[30px] border border-white rounded-full cursor-pointer flex items-center justify-center">
            <i className="fa-brands fa-instagram text-white"></i>
          </figure>
        </div>
      </div>
    </div>
  );
}
