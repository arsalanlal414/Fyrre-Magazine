// data.js

import cardImg1 from '../../assets/card_img1.png';
import cardImg2 from '../../assets/card_img2.png';
import cardImg3 from '../../assets/card_img3.png';
import cardImg4 from '../../assets/card_img4.png';
import cardImg5 from '../../assets/card_img5.png';
import cardImg6 from '../../assets/card_img6.png';

import cover1 from '../../assets/podcast-cover1.png';
import cover2 from '../../assets/podcast-cover2.png';
import cover3 from '../../assets/podcast-cover3.png';
import cover4 from '../../assets/podcast-cover4.png';
import cover5 from '../../assets/podcast-cover5.png';

import author1 from '../../assets/author1.png';
import author2 from '../../assets/author2.png';
import author3 from '../../assets/author3.png';
import author4 from '../../assets/author4.png';
import author5 from '../../assets/author5.png';
import author6 from '../../assets/author6.png';

const data = [
  {
    name: 'Jakob Grønberg',
    imgUrl: author1,
    title: 'Artist',
    city: 'Berlin',
    magazines: [
      {
        imgUrl: cardImg1,
        title: 'Hope dies last',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Velit esse cillum dolore eu fugiat nulla pariatur.',
        duration: '1 Min ', 
        date: '16. March 2022',
        cta: 'Art',
      },
      {
        imgUrl: cardImg2,
        title: 'The best art museums',
        para: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        duration: '10 Min',
        date: '16. Feb 2024',
        cta: 'Sculptures',
      },
    ],
    podcasts: [
      {
        name: 'The Problem of today’s cultural development',
        imgUrl: cover1,
        date: '16.01.2022',
        duration: '1h 20 Min',
      },
      {
        name: 'The hidden messages of Jack Nielson',
        imgUrl: cover2,
        date: '16.01.2022',
        duration: '60 Min',
      },
    ],
  },
  {
    name: 'Louise Jensen',
    imgUrl: author2,
    title: 'Artist',
    city: 'Stockholm',
    magazines: [
      {
        imgUrl: cardImg3,
        title: 'The devil is the details',
        para: 'Consectetur adipiscing elit, sed do eiusmod tempor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        duration: '10 Min',
        date: '16. March 2022',
        cta: 'Art',
      },
    ],
    podcasts: [
      {
        name: 'Behind the scenes of the street art culture',
        imgUrl: cover3,
        date: '16.01.2022',
        duration: '2h 10 Min',
      },
    ],
  },
  {
    name: 'Emma Svendsen',
    imgUrl: author3,
    title: 'Photographer',
    city: 'Oslo',
    magazines: [
      {
        imgUrl: cardImg4,
        title: 'Exploring minimalist photography',
        para: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        duration: '2 Min',
        date: '10. April 2022',
        cta: 'Photography',
      },
      {
        imgUrl: cardImg5,
        title: 'Capturing the essence of winter',
        para: 'Duis aute irure dolor in reprehenderit in voluptate velit esse. Duis aute irure dolor in reprehenderit in voluptate velit esse. Duis aute irure dolor in reprehenderit in voluptate velit esse. Duis aute irure dolor in reprehenderit in voluptate velit esse. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        duration: '3 Min',
        date: '05. February 2022',
        cta: 'Nature',
      },
    ],
    podcasts: [
      {
        name: 'The art of capturing moments',
        imgUrl: cover4,
        date: '20.02.2022',
        duration: '1h 15 Min',
      },
    ],
  },
  {
    name: 'Noah Lindberg',
    imgUrl: author4,
    title: 'Sculptor',
    city: 'Copenhagen',
    magazines: [
      {
        imgUrl: cardImg6,
        title: 'Modern sculpture: A new perspective',
        para: 'Velit esse cillum dolore eu fugiat nulla pariatur. Velit esse cillum dolore eu fugiat nulla pariatur. Velit esse cillum dolore eu fugiat nulla pariatur.Velit esse cillum dolore eu fugiat nulla pariatur.Velit esse cillum dolore eu fugiat nulla pariatur.',
        duration: '1 Min',
        date: '22. January 2022',
        cta: 'Sculptures',
      },
    ],
    podcasts: [
      {
        name: 'The evolution of modern sculpture',
        imgUrl: cover5,
        date: '12.03.2022',
        duration: '50 Min',
      },
      {
        name: 'Innovative materials in sculpture',
        imgUrl: cover1,
        date: '15.03.2022',
        duration: '1h 5 Min',
      },
    ],
  },
  {
    name: 'Sophia Müller',
    imgUrl: author5,
    title: 'Painter',
    city: 'Vienna',
    magazines: [
      {
        imgUrl: cardImg2,
        title: 'Abstract art and its impact',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
        duration: '4 Min',
        date: '18. March 2022',
        cta: 'Abstract',
      },
    ],
    podcasts: [
      {
        name: 'The colors of imagination',
        imgUrl: cover2,
        date: '01.04.2022',
        duration: '1h 10 Min',
      },
    ],
  },
  {
    name: 'Jakob Grønberg',
    imgUrl: author1,
    title: 'Artist',
    city: 'Berlin',
    magazines: [
      {
        imgUrl: cardImg1,
        title: 'Hope dies last',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Velit esse cillum dolore eu fugiat nulla pariatur.',
        duration: '1 Min ', 
        date: '16. March 2022',
        cta: 'Art',
      },
      {
        imgUrl: cardImg2,
        title: 'The best art museums',
        para: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        duration: '1 Min',
        date: '16. March 2022',
        cta: 'Sculptures',
      },
    ],
    podcasts: [
      {
        name: 'The Problem of today’s cultural development',
        imgUrl: cover1,
        date: '16.01.2022',
        duration: '1h 20 Min',
      },
      {
        name: 'The hidden messages of Jack Nielson',
        imgUrl: cover2,
        date: '16.01.2022',
        duration: '60 Min',
      },
    ],
  },
  {
    name: 'Louise Jensen',
    imgUrl: author2,
    title: 'Artist',
    city: 'Stockholm',
    magazines: [
      {
        imgUrl: cardImg3,
        title: 'The devil is the details',
        para: 'Consectetur adipiscing elit, sed do eiusmod tempor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        duration: '1 Min',
        date: '16. March 2022',
        cta: 'Art',
      },
    ],
    podcasts: [
      {
        name: 'Behind the scenes of the street art culture',
        imgUrl: cover3,
        date: '16.01.2022',
        duration: '2h 10 Min',
      },
    ],
  },
  {
    name: 'Emma Svendsen',
    imgUrl: author3,
    title: 'Photographer',
    city: 'Oslo',
    magazines: [
      {
        imgUrl: cardImg4,
        title: 'Exploring minimalist photography',
        para: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        duration: '2 Min',
        date: '10. April 2022',
        cta: 'Photography',
      },
      {
        imgUrl: cardImg5,
        title: 'Capturing the essence of winter',
        para: 'Duis aute irure dolor in reprehenderit in voluptate velit esse. Duis aute irure dolor in reprehenderit in voluptate velit esse. Duis aute irure dolor in reprehenderit in voluptate velit esse. Duis aute irure dolor in reprehenderit in voluptate velit esse. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        duration: '3 Min',
        date: '05. February 2022',
        cta: 'Nature',
      },
    ],
    podcasts: [
      {
        name: 'The art of capturing moments',
        imgUrl: cover4,
        date: '20.02.2022',
        duration: '1h 15 Min',
      },
    ],
  },
  {
    name: 'Noah Lindberg',
    imgUrl: author4,
    title: 'Sculptor',
    city: 'Copenhagen',
    magazines: [
      {
        imgUrl: cardImg6,
        title: 'Modern sculpture: A new perspective',
        para: 'Velit esse cillum dolore eu fugiat nulla pariatur. Velit esse cillum dolore eu fugiat nulla pariatur. Velit esse cillum dolore eu fugiat nulla pariatur.Velit esse cillum dolore eu fugiat nulla pariatur.Velit esse cillum dolore eu fugiat nulla pariatur.',
        duration: '1 Min',
        date: '22. January 2022',
        cta: 'Sculptures',
      },
    ],
    podcasts: [
      {
        name: 'The evolution of modern sculpture',
        imgUrl: cover5,
        date: '12.03.2022',
        duration: '50 Min',
      },
      {
        name: 'Innovative materials in sculpture',
        imgUrl: cover1,
        date: '15.03.2022',
        duration: '1h 5 Min',
      },
    ],
  },
  {
    name: 'Sophia Müller',
    imgUrl: author5,
    title: 'Painter',
    city: 'Vienna',
    magazines: [
      {
        imgUrl: cardImg2,
        title: 'Abstract art and its impact',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
        duration: '4 Min',
        date: '18. March 2022',
        cta: 'Abstract',
      },
    ],
    podcasts: [
      {
        name: 'The colors of imagination',
        imgUrl: cover2,
        date: '01.04.2022',
        duration: '1h 10 Min',
      },
    ],
  },
];

export default data;
