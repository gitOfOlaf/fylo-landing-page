# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [click here](https://your-solution-url.com)
- Live Site URL: [click here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [TailwindCSS]() - CSS Framework
- [React](https://reactjs.org/) - JS library

### What I learned

I had to practice what I've been learning on react, and I implemented input validation in this challenge, the code snippet is below.

```js
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
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Font Awesome](https://fontawesome.com/) - The Icons used in the footer section of this page was gotten from fontawesome.

## Author

- Website - [Abdullah Ayoola](https://github.com/abdullah43577)
- Frontend Mentor - [@abdullah43577](https://www.frontendmentor.io/profile/abdullah43577)
- Twitter - [@officialayo540](https://twitter.com/officialayo540)
