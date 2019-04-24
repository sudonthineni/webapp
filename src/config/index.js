module.exports = {
  siteTitle: 'Sudheshna Donthineni | Software Developer',
  siteUrl: 'https://krrupa.com',
  siteDescription: 'I love to turn ideas into reality!',
  siteLanguage: 'en_US',
  /*googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',*/
  name: 'Sudheshna Donthineni',  
  location: 'Santa Clara, CA',
  email: 'sudonthineni@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/sudheshna-donthineni24',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sudonthineni/',
    },
    
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_sudheshna/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sudonthineni',
    },
  ],


  twitterHandle: '@sudonthineni',
  

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
