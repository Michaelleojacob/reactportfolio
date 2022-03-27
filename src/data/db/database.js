import Mock from '../mock';

const database = {
  information: {
    name: 'Michael Jacob',
    aboutContentMain: 'Software Developer',
    aboutContentSub: 'I create and solve problems in the virtual space',
    aboutContentSubTwo: 'But I mostly just click buttons.',
    age: 29,
    phone: '619-871-1891',
    nationality: 'American',
    language: 'English',
    email: 'michaelleojacob@gmail.com',
    address: 'San Diego, CA, 92117',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/michael-jacob-a3a90187/',
      dribbble: '',
      github: 'https://github.com/Michaelleojacob',
    },
    brandImage: './images/brand-image.jpg',
    aboutImage: './images/about-image.jpg',
    aboutImageLg: './images/about-image.jpg',
    cvfile: './files/empty.pdf',
  },
  services: [
    {
      title: 'Web Design',
      icon: 'color-pallet',
      details:
        'Pixel perfect design. User friendly interface design. Clean, sleek, and visually pleasing',
    },
    {
      title: 'Web Development',
      icon: 'code',
      details:
        'User first. Making sure the user can interact with the website or app easily is my top priority.',
    },
    {
      title: 'Mobile Applications',
      icon: 'mobile',
      details:
        'Strong belief all websites and apps should be built with mobile access first.',
    },
  ],
  // reviews: [
  //   {
  //     id: 1,
  //     content:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
  //     author: {
  //       name: "Burdette Turner",
  //       designation: "Web Developer, Abc Company",
  //     },
  //   },
  //   {
  //     id: 2,
  //     content:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
  //     author: {
  //       name: "Susan Yost",
  //       designation: "Client",
  //     },
  //   },
  //   {
  //     id: 3,
  //     content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  //     author: {
  //       name: "Irving Feeney",
  //       designation: "Fiverr Client",
  //     },
  //   },
  // ],
  skills: [
    {
      title: 'HTML',
      value: 95,
    },
    {
      title: 'CSS',
      value: 65,
    },
    {
      title: 'Javascript',
      value: 80,
    },
    {
      title: 'jQuery',
      value: 85,
    },
    {
      title: 'ReactJS',
      value: 80,
    },
    {
      title: 'Express',
      value: 75,
    },
    {
      title: 'Bootstrap',
      value: 90,
    },
    {
      title: 'Git&Github',
      value: 100,
    },
    {
      title: 'MongoDB',
      value: 95,
    },
    {
      title: 'MySQL_DB',
      value: 95,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: 'Memory Game',
      description: 'About: Game to test your wits',
      subtitle: 'Used: HTML5, CSS3, Javascript, JQuery, Use of third-party api',
      imageUrl: './images/portfolio-image-1.jpg',
      largeImageUrl: ['./images/portfolio-image-1-lg.jpg'],
      url: 'https://michaelleojacob.github.io/Memory-Game/',
      repo: 'https://github.com/Michaelleojacob/Memory-Game',
    },
    {
      id: 2,
      title: 'Pawpals',
      description: 'About: Social media platform for dogs and dog lovers',
      subtitle:
        'Used: HTML5, CSS3, Javascript, MongoDB, Express, ReactJS, Material-UI, Redux, Mongoose, Node.js.',
      imageUrl: './images/portfolio-image-4.jpg',
      largeImageUrl: ['./images/portfolio-image-4-lg.jpg'],
      url: 'https://pawpals-social-network.herokuapp.com/',
      repo: 'https://github.com/ac0712148/pawpals',
    },
    {
      id: 3,
      title: 'QuaranScreen',
      description: 'About: movie tracking app.',
      subtitle:
        'Used: HTML5, CSS3, Javascript, MySQL, Express, Handlebars.js, Sequelize, Passport.',
      imageUrl: './images/portfolio-image-2.jpg',
      largeImageUrl: ['./images/portfolio-image-2-lg.jpg'],
      url: 'https://quaranscreen.herokuapp.com/',
      repo: 'https://github.com/keatonsmith5/watchList',
    },
    {
      id: 4,
      title: 'User Directory',
      description: 'About: Search through a list of users.',
      subtitle: 'Used: HTML5, CSS3, Javascript, ReactJS, Redux, Node.js',
      imageUrl: './images/portfolio-image-3.jpg',
      largeImageUrl: ['./images/portfolio-image-3-lg.jpg'],
      url: 'https://michaelleojacob.github.io/userdirectory/',
      repo: 'https://github.com/Michaelleojacob/userdirectory',
    },
    {
      id: 5,
      title: 'Stopwatch2',
      description: 'About: Stopwatch with an animated border',
      subtitle: 'Used: HTML5, CSS3, Javascript, Font-Awesome',
      imageUrl: './images/portfolio-image-5.jpg',
      largeImageUrl: ['./images/portfolio-image-5-lg.jpg'],
      url: ['https://michaelleojacob.github.io/stopwatch2/'],
      repo: ['https://github.com/Michaelleojacob/stopwatch2'],
    },
    {
      id: 6,
      title: 'Movie Fight',
      description: 'About: App that allows a user to compare two movies.',
      subtitle: 'used: HTML5, CSS3, Javascript, Bulma framework.',
      imageUrl: './images/portfolio-image-6.jpg',
      largeImageUrl: ['./images/portfolio-image-6-lg.jpg'],
      url: ['https://michaelleojacob.github.io/moviefight/'],
      repo: ['https://github.com/Michaelleojacob/moviefight'],
    },
    // {
    //   id: 7,
    //   title: "Beautiful Pendrive",
    //   subtitle: "Pendrive with great design & flexible.",
    //   imageUrl: "./images/portfolio-image-7.jpg",
    //   largeImageUrl: ["./images/portfolio-image-7-lg.jpg"],
    //   url: "https://twitter.com",
    // },
    // {
    //   id: 8,
    //   title: "Sticker",
    //   subtitle: "Clip sticker mockup design.",
    //   imageUrl: "./images/portfolio-image-8.jpg",
    //   largeImageUrl: ["./images/portfolio-image-8-lg.jpg"],
    // },
    // {
    //   id: 9,
    //   title: "Packet",
    //   subtitle: "Beautiful packet & product design.",
    //   imageUrl: "./images/portfolio-image-9.jpg",
    //   largeImageUrl: ["./images/portfolio-image-9-lg.jpg"],
    // },
    // {
    //   id: 10,
    //   title: "Pen Holder",
    //   subtitle: "A pen holder with beautiful design.",
    //   imageUrl: "./images/portfolio-image-3.jpg",
    //   largeImageUrl: ["./images/portfolio-image-3-lg.jpg"],
    //   url: "#",
    // },
    // {
    //   id: 11,
    //   title: "Coffee Mug",
    //   subtitle: "Awesome coffee mug design.",
    //   imageUrl: "./images/portfolio-image-4.jpg",
    //   largeImageUrl: [
    //     "./images/portfolio-image-4-lg.jpg",
    //     "./images/portfolio-image-4-lg2.jpg",
    //   ],
    //   url: "https://facebook.com",
    // },
    // {
    //   id: 12,
    //   title: "Tea & Coffee Mug",
    //   subtitle: "Beautiful mug with logo.",
    //   imageUrl: "./images/portfolio-image-2.jpg",
    //   url: "https://pinterest.com",
    // },
    // {
    //   id: 13,
    //   title: "T-shirt Mockup",
    //   subtitle: "A beautiful t-shirt mockup.",
    //   imageUrl: "./images/portfolio-image-1.jpg",
    //   largeImageUrl: ["./images/portfolio-image-1-lg.jpg"],
    //   url: "https://dribbble.com",
    // },
    // {
    //   id: 14,
    //   title: "Mug",
    //   subtitle: "Mug with awesome style",
    //   imageUrl: "./images/portfolio-image-5.jpg",
    //   largeImageUrl: ["./images/portfolio-image-5-lg.jpg"],
    // },
    // {
    //   id: 15,
    //   title: "Pendrive",
    //   subtitle: "Free pendrive mockup design.",
    //   imageUrl: "./images/portfolio-image-6.jpg",
    //   largeImageUrl: ["./images/portfolio-image-6-lg.jpg"],
    // },
    // {
    //   id: 16,
    //   title: "Beautiful Pendrive",
    //   subtitle: "Pendrive with great design & flexible.",
    //   imageUrl: "./images/portfolio-image-7.jpg",
    //   largeImageUrl: ["./images/portfolio-image-7-lg.jpg"],
    //   url: "https://twitter.com",
    // },
    // {
    //   id: 17,
    //   title: "Sticker",
    //   subtitle: "Clip sticker mockup design.",
    //   imageUrl: "./images/portfolio-image-8.jpg",
    //   largeImageUrl: ["./images/portfolio-image-8-lg.jpg"],
    // },
    // {
    //   id: 18,
    //   title: "Packet",
    //   subtitle: "Beautiful packet & product design.",
    //   imageUrl: "./images/portfolio-image-9.jpg",
    //   largeImageUrl: ["./images/portfolio-image-9-lg.jpg"],
    // },
    // {
    //   id: 19,
    //   title: "T-shirt Mockup",
    //   subtitle: "A beautiful t-shirt mockup.",
    //   imageUrl: "./images/portfolio-image-1.jpg",
    //   largeImageUrl: ["./images/portfolio-image-1-lg.jpg"],
    //   url: "https://dribbble.com",
    // },
    // {
    //   id: 20,
    //   title: "Coffee Mug",
    //   subtitle: "Awesome coffee mug design.",
    //   imageUrl: "./images/portfolio-image-4.jpg",
    //   largeImageUrl: [
    //     "./images/portfolio-image-4-lg.jpg",
    //     "./images/portfolio-image-4-lg2.jpg",
    //   ],
    //   url: "https://facebook.com",
    // },
    // {
    //   id: 21,
    //   title: "Tea & Coffee Mug",
    //   subtitle: "Beautiful mug with logo.",
    //   imageUrl: "./images/portfolio-image-2.jpg",
    //   url: "https://pinterest.com",
    // },
    // {
    //   id: 22,
    //   title: "Pen Holder",
    //   subtitle: "A pen holder with beautiful design.",
    //   imageUrl: "./images/portfolio-image-3.jpg",
    //   largeImageUrl: ["./images/portfolio-image-3-lg.jpg"],
    //   url: "#",
    // },
    // {
    //   id: 23,
    //   title: "Mug",
    //   subtitle: "Mug with awesome style",
    //   imageUrl: "./images/portfolio-image-5.jpg",
    //   largeImageUrl: ["./images/portfolio-image-5-lg.jpg"],
    // },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: '2011 - Present',
        position: 'Lab Technician',
        company: 'Team Braces',
        details:
          'Tailor made Models, Essex and Wire-retainers to each individual patient. My role was important for the beginning and ending of treatment. I crafted a working model to study from, and to ensure any progress the patient made from their treatment was kept long term. I’m proud to have helped so many people find confidence and a smile they would be happy with.',
      },
      {
        id: 2,
        year: '2012-2018',
        position: 'Security guard',
        company: 'Elite Security',
        details:
          'This job taught me to be polite and approachable at all times, flexible and responsible approach to the job. The ability to be patient regardless of the situation. Good verbal and written communication skills. But most importantly it was expected to be a trustworthy character.',
      },
      {
        id: 3,
        year: '2013 - 2017',
        position: 'Ramp Supervisor',
        company: 'Delta Airlines',
        details:
          'Led a team of 10 people to carry out the tasks of each  day. My job was to ensure we worked together efficiently and effectively to ensure every flight went smoothly and on time.',
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: '2019 - 2022',
        graduation: 'The Odin Project',
        university: '',
        details:
          'Constant and consistent practice to further hone programming and problem solving abilities. The best frontend education a person can have outside of work experience',
      },
      {
        id: 2,
        year: '2019 - 2020',
        graduation: 'UCSD',
        university: '',
        details:
          'UCSD full stack programming bootcamp. Focused on learning modern web development',
      },
      {
        id: 3,
        year: '2018',
        graduation: 'Discovered my passion for software',
        university: '',
        details: '',
      },
      {
        id: 4,
        year: '2016-2018',
        graduation: 'Made the switch to IT related work.',
        university: '',
        details: '',
      },
      {
        id: 5,
        year: '2011-2016',
        graduation: 'General work experience',
        university: '',
        details: 'see work experience below',
      },
      {
        id: 6,
        year: '2011',
        graduation: 'Graduated Bonita Vista High School',
        university: '',
        details: '',
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: './images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: './images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: './images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: './images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: './images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: './images/blog-image-6.jpg',
      filesource:
        '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: './images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: './images/blog-image-8.jpg',
      filesource:
        '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: './images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: './images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: './images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: './images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: './images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: './images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: './images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
  ],
  contactInfo: {
    phoneNumbers: ['619-871-1891', ''],
    emailAddress: ['michaelleojacob@gmail.com', ''],
    address: 'San Diego, CA, 92111',
  },
};

Mock.onGet('/api/information').reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet('/api/services').reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet('/api/reviews').reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet('/api/skills').reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet('/api/portfolios').reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet('/api/experience').reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet('/api/blog').reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet('/api/contactinfo').reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
