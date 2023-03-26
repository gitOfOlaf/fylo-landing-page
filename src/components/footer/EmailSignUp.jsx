import { useState } from 'react';

export default function EmailSignUp() {
  const validateEmail = function (email) {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email);
  };

  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState({
    errorMsg: '',
    valid: false,
  });

  const handleInput = function (e) {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = function () {
    if (validateEmail(inputValue)) {
      setMessage({ errorMsg: 'Email Submitted', valid: true });

      setTimeout(() => setMessage((prevValue) => ({ ...prevValue, errorMsg: '' })), 2000);
      return;
    }
    setMessage({ errorMsg: 'Please enter a valid email address', valid: false });

    setTimeout(() => setMessage((prevValue) => ({ ...prevValue, errorMsg: '' })), 2000);
  };

  return (
    <section id="emailsignup" className="bg-darkBlueIntroEmail px-6 py-8 text-center mx-8 rounded translate-y-[-200px] absolute top-0 md:max-w-[650px] lg:max-w-[750px] md:mx-auto lg:max-h-[280px]">
      <h3 className="text-white font-bold text-xl">Get early access today</h3>
      <p className="text-white text-base my-3">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>

      <div className="signupcontainer my-6 md:flex">
        <div className="input--container w-full md:w-[60%]">
          <input type="text" placeholder="email@example.com" className="py-4 w-full rounded-full border-none outline-none px-8 text-sm" onChange={handleInput} />
          <p className={`errorMSG ${message.valid ? 'text-green-500' : 'text-red-700'} text-xs mt-1`}>{message.errorMsg}</p>
        </div>
        <button className="py-4 w-full md:w-[40%] text-white font-bold bg-blueInsideCTA hover:bg-cyanInsideCTA rounded-full border-none lg:ml-4 max-h-[56px]" onClick={handleFormSubmit}>
          Get Started For Free
        </button>
      </div>
    </section>
  );
}
