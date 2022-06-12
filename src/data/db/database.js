import Mock from '../mock';

const database = {
  information: {
    name: 'Michael Jacob',
    aboutContent1: 'Full Stack Engineer | Frontend Dev | Backend Dev',
    aboutContent2:
      'I solve difficult problems with elegant but effective solutions',
    aboutContent3:
      'Known for being a team player, independent worker, goofball, pressing buttons on a keyboard, and solving problems.',
    age: 29,
    phone: '619-871-1891',
    nationality: 'American',
    language: 'English',
    email: 'michaelleojacob@gmail.com',
    address: 'San Diego, CA',
    freelanceStatus: '',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/michael-leo-jacob/',
      dribbble: '',
      github: 'https://github.com/Michaelleojacob',
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/michaeljacobresume.pdf',
  },
  services: [
    {
      title: 'Front-end Dev',
      icon: 'react',
      details:
        'Extensive knowledge and practice with using React. Creating pixel perfect UIs. Able to create awesome visuals using Javascript, HTML, and css',
    },
    {
      title: 'Back-end Dev',
      icon: 'code',
      details:
        'Able to create-read-update-delete from a database. Use and write custom APIs to accomplish goals. Structure and plan out database architecture',
    },
    {
      title: 'Mobile Application',
      icon: 'mobile',
      details:
        'Able to create apps and websites that look appealing on mobile interfaces. Through the use of @media and React Native, I am able to make Mobile look simple, intuivite and easy to understand.',
    },
    {
      title: 'Problem Solving',
      icon: 'bulb',
      details:
        'I enjoy taking on new challenges. I have yet to meet a problem I cannot solve. Using syntax and programming languages as my tools, I believe anything is possible.',
    },
    {
      title: 'Team Player',
      icon: 'sun',
      details:
        'Goofball, friendly and fun to be around. I thrive both when working with others and independently. I think being a team player and working together to peer code, review and submit changes is extremely powerful.',
    },
  ],
  // reviews: [
  //   {
  //     id: 1,
  //     content:
  //       'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.',
  //     author: {
  //       name: 'Burdette Turner',
  //       designation: 'Web Developer, Abc Company',
  //     },
  //   },
  //   {
  //     id: 2,
  //     content:
  //       'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.',
  //     author: {
  //       name: 'Susan Yost',
  //       designation: 'Client',
  //     },
  //   },
  //   {
  //     id: 3,
  //     content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  //     author: {
  //       name: 'Irving Feeney',
  //       designation: 'Fiverr Client',
  //     },
  //   },
  // ],
  // skills: [
  //   {
  //     title: 'HTML5',
  //     value: 95,
  //   },
  //   {
  //     title: 'CSS3',
  //     value: 90,
  //   },
  //   {
  //     title: 'Javascript',
  //     value: 70,
  //   },
  //   {
  //     title: 'jQuery',
  //     value: 85,
  //   },
  //   {
  //     title: 'ReactJS',
  //     value: 80,
  //   },
  //   {
  //     title: 'Photoshop',
  //     value: 65,
  //   },
  // ],
  portfolios: [
    {
      id: 1,
      title: 'T-shirt Mockup',
      subtitle: 'A beautiful t-shirt mockup.',
      imageUrl: '/images/portfolio-image-1.jpg',
      largeImageUrl: ['/images/portfolio-image-1-lg.jpg'],
      url: 'https://dribbble.com',
      icons: ['react', 'code', 'javascript', 'html5'],
    },
    {
      id: 2,
      title: 'Coffee Mug',
      subtitle: 'Awesome coffee mug design.',
      imageUrl: '/images/portfolio-image-4.jpg',
      largeImageUrl: [
        '/images/portfolio-image-4-lg.jpg',
        '/images/portfolio-image-4-lg2.jpg',
      ],
      url: 'https://facebook.com',
      icons: [''],
    },
    {
      id: 3,
      title: 'Tea & Coffee Mug',
      subtitle: 'Beautiful mug with logo.',
      imageUrl: '/images/portfolio-image-2.jpg',
      url: 'https://pinterest.com',
      icons: [''],
    },
    {
      id: 4,
      title: 'Pen Holder',
      subtitle: 'A pen holder with beautiful design.',
      imageUrl: '/images/portfolio-image-3.jpg',
      largeImageUrl: ['/images/portfolio-image-3-lg.jpg'],
      url: '#',
      icons: [''],
    },
    {
      id: 5,
      title: 'Mug',
      subtitle: 'Mug with awesome style',
      imageUrl: '/images/portfolio-image-5.jpg',
      largeImageUrl: ['/images/portfolio-image-5-lg.jpg'],
      icons: [''],
    },
    {
      id: 6,
      title: 'Pendrive',
      subtitle: 'Free pendrive mockup design.',
      imageUrl: '/images/portfolio-image-6.jpg',
      largeImageUrl: ['/images/portfolio-image-6-lg.jpg'],
      icons: [''],
    },
    {
      id: 7,
      title: 'Beautiful Pendrive',
      subtitle: 'Pendrive with great design & flexible.',
      imageUrl: '/images/portfolio-image-7.jpg',
      largeImageUrl: ['/images/portfolio-image-7-lg.jpg'],
      url: 'https://twitter.com',
      icons: [''],
    },
    {
      id: 8,
      title: 'Sticker',
      subtitle: 'Clip sticker mockup design.',
      imageUrl: '/images/portfolio-image-8.jpg',
      largeImageUrl: ['/images/portfolio-image-8-lg.jpg'],
      icons: [''],
    },
    {
      id: 9,
      title: 'Packet',
      subtitle: 'Beautiful packet & product design.',
      imageUrl: '/images/portfolio-image-9.jpg',
      largeImageUrl: ['/images/portfolio-image-9-lg.jpg'],
      icons: [''],
    },
    {
      id: 10,
      title: 'Pen Holder',
      subtitle: 'A pen holder with beautiful design.',
      imageUrl: '/images/portfolio-image-3.jpg',
      largeImageUrl: ['/images/portfolio-image-3-lg.jpg'],
      url: '#',
      icons: [''],
    },
    {
      id: 11,
      title: 'Coffee Mug',
      subtitle: 'Awesome coffee mug design.',
      imageUrl: '/images/portfolio-image-4.jpg',
      largeImageUrl: [
        '/images/portfolio-image-4-lg.jpg',
        '/images/portfolio-image-4-lg2.jpg',
      ],
      url: 'https://facebook.com',
      icons: [''],
    },
    {
      id: 12,
      title: 'Tea & Coffee Mug',
      subtitle: 'Beautiful mug with logo.',
      imageUrl: '/images/portfolio-image-2.jpg',
      url: 'https://pinterest.com',
      icons: [''],
    },
    {
      id: 13,
      title: 'T-shirt Mockup',
      subtitle: 'A beautiful t-shirt mockup.',
      imageUrl: '/images/portfolio-image-1.jpg',
      largeImageUrl: ['/images/portfolio-image-1-lg.jpg'],
      url: 'https://dribbble.com',
      icons: [''],
    },
    {
      id: 14,
      title: 'Mug',
      subtitle: 'Mug with awesome style',
      imageUrl: '/images/portfolio-image-5.jpg',
      largeImageUrl: ['/images/portfolio-image-5-lg.jpg'],
      icons: [''],
    },
    {
      id: 15,
      title: 'Pendrive',
      subtitle: 'Free pendrive mockup design.',
      imageUrl: '/images/portfolio-image-6.jpg',
      largeImageUrl: ['/images/portfolio-image-6-lg.jpg'],
      icons: [''],
    },
    {
      id: 16,
      title: 'Beautiful Pendrive',
      subtitle: 'Pendrive with great design & flexible.',
      imageUrl: '/images/portfolio-image-7.jpg',
      largeImageUrl: ['/images/portfolio-image-7-lg.jpg'],
      url: 'https://twitter.com',
      icons: [''],
    },
    {
      id: 17,
      title: 'Sticker',
      subtitle: 'Clip sticker mockup design.',
      imageUrl: '/images/portfolio-image-8.jpg',
      largeImageUrl: ['/images/portfolio-image-8-lg.jpg'],
      icons: [''],
    },
    {
      id: 18,
      title: 'Packet',
      subtitle: 'Beautiful packet & product design.',
      imageUrl: '/images/portfolio-image-9.jpg',
      largeImageUrl: ['/images/portfolio-image-9-lg.jpg'],
      icons: [''],
    },
    {
      id: 19,
      title: 'T-shirt Mockup',
      subtitle: 'A beautiful t-shirt mockup.',
      imageUrl: '/images/portfolio-image-1.jpg',
      largeImageUrl: ['/images/portfolio-image-1-lg.jpg'],
      url: 'https://dribbble.com',
      icons: [''],
    },
    {
      id: 20,
      title: 'Coffee Mug',
      subtitle: 'Awesome coffee mug design.',
      imageUrl: '/images/portfolio-image-4.jpg',
      largeImageUrl: [
        '/images/portfolio-image-4-lg.jpg',
        '/images/portfolio-image-4-lg2.jpg',
      ],
      url: 'https://facebook.com',
      icons: [''],
    },
    {
      id: 21,
      title: 'Tea & Coffee Mug',
      subtitle: 'Beautiful mug with logo.',
      imageUrl: '/images/portfolio-image-2.jpg',
      url: 'https://pinterest.com',
      icons: [''],
    },
    {
      id: 22,
      title: 'Pen Holder',
      subtitle: 'A pen holder with beautiful design.',
      imageUrl: '/images/portfolio-image-3.jpg',
      largeImageUrl: ['/images/portfolio-image-3-lg.jpg'],
      url: '#',
      icons: [''],
    },
    {
      id: 23,
      title: 'Mug',
      subtitle: 'Mug with awesome style',
      imageUrl: '/images/portfolio-image-5.jpg',
      largeImageUrl: ['/images/portfolio-image-5-lg.jpg'],
      icons: [''],
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: '2019 - Present',
        position: 'Web Developer',
        company: 'The Odin Project',
        details:
          'Contribute to open source projects. So far I have made significant contributions to The Odin Project and written lessons and site updates.',
      },
      {
        id: 2,
        year: '2011 - present',
        position: 'Lab Tech',
        company: 'Team Braces',
        details:
          'I work with a small treatment team to assist patients in accomplishing their goals. At Team Braces I actively take part in assisting over 40 patients a week in their treatment journey. I make essex and wired retainers for our patients. I also make models that the surgeons and doctors need in order to plan the best treatment for each individual.',
      },
      {
        id: 3,
        year: '2013 - 2017',
        position: 'Ramp Supervisor',
        company: 'Delta Airlines',
        details:
          'Led a team of 10 people to carry out the tasks of each day, and work together efficiently so every flight went smoothly and on time.',
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: '2019 - 2022',
        graduation: 'Self Taught Programmer',
        university: 'The Odin Project',
        details:
          'Discovered my passion for software in 2019 when exploring different career paths. I initially attended a programming bootcamp and decided to follow it up with supplimental learning material. After doing some research about the best paths for self study I often saw TOP (The Odin Project) recommended. I started TOP, joined the community in 2019 then proceeded to fall in love with software and the community. The curriculum has 10,000 daily active users on discord. The community itself is wholesome, helpful and welcoming. TOP has become a second home and family to me as we TOP members actively help, push and encourage each other to succeed on our paths as developers.',
      },
      {
        id: 2,
        year: '2019 - 2020',
        graduation: 'Programming bootcamp',
        university: 'UCSD',
        details:
          'Attended a programming bootcamp with ZERO prior programming experience. This was my intro to software. I learned a lot through creating projects while working on teams, or independently. I really enjoyed the work, created some really cool projects and got to meet some awesome people.',
      },
      {
        id: 3,
        year: '2011-2019',
        graduation: 'Life experience (life after Highschool)',
        university: 'Worked and explored different career options',
        details:
          'After graduating Highschool, I landed a job as a Lab Tech. Got to be involved in patient treatment and progress which I found very fulfilling. The team was kind to me, and allowed for schedule flexibility so I could pursue other career opportunities. I found work at the airport for a number of years and became a supervisor. Went on to attended Border Patrol academy, only to discover that path was not the best fit for me. Eventually I discovered a passion for hardware, computers, and tech. After working as a computer tech briefly, I attempted some software challenges and really enjoyed them. It was at this point I decided to commit and immerse myself in learning software.',
      },
    ],
  },
  // blogs: [
  //   {
  //     id: 1,
  //     title: 'Markdown & Html supported blog.',
  //     featuredImage: '/images/blog-image-1.jpg',
  //     filesource: '../../blog/markdown-html-supported-blog.md',
  //     createDay: '20',
  //     createMonth: 'February',
  //     createYear: '2020',
  //   },
  //   {
  //     id: 2,
  //     title: 'Installing NodeJS on your device.',
  //     featuredImage: '/images/blog-image-2.jpg',
  //     filesource: '../../blog/installing-nodejs-on-your-device.md',
  //     createDay: '20',
  //     createMonth: 'February',
  //     createYear: '2020',
  //   },
  //   {
  //     id: 3,
  //     title: 'UI/UX design starter with Adobe XD.',
  //     featuredImage: '/images/blog-image-3.jpg',
  //     filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
  //     createDay: '20',
  //     createMonth: 'February',
  //     createYear: '2020',
  //   },
  //   {
  //     id: 4,
  //     title: 'Boost your post for increasing sales.',
  //     featuredImage: '/images/blog-image-4.jpg',
  //     filesource: '../../blog/boost-your-post-for-increasing-sales.md',
  //     createDay: '20',
  //     createMonth: 'February',
  //     createYear: '2020',
  //   },
  //   {
  //     id: 5,
  //     title: 'Difference between GatsbyJS & NextJS.',
  //     featuredImage: '/images/blog-image-5.jpg',
  //     filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
  //     createDay: '20',
  //     createMonth: 'February',
  //     createYear: '2020',
  //   },
  //   {
  //     id: 6,
  //     title: 'How to choose javascript framework for project.',
  //     featuredImage: '/images/blog-image-6.jpg',
  //     filesource:
  //       '../../blog/how-to-choose-javascript-framework-for-project.md',
  //     createDay: '20',
  //     createMonth: 'February',
  //     createYear: '2020',
  //   },
  //   {
  //     id: 7,
  //     title: 'Web automation with python language.',
  //     featuredImage: '/images/blog-image-7.jpg',
  //     filesource: '../../blog/web-automation-with-python-language.md',
  //     createDay: '20',
  //     createMonth: 'February',
  //     createYear: '2020',
  //   },
  //   {
  //     id: 8,
  //     title: 'Time to use latest technology for creating a website.',
  //     featuredImage: '/images/blog-image-8.jpg',
  //     filesource:
  //       '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
  //     createDay: '20',
  //     createMonth: 'February',
  //     createYear: '2020',
  //   },
  //   {
  //     id: 9,
  //     title: 'Think out of the box.',
  //     featuredImage: '/images/blog-image-9.jpg',
  //     filesource: '../../blog/think-out-of-the-box.md',
  //     createDay: '20',
  //     createMonth: 'February',
  //     createYear: '2020',
  //   },
  //   {
  //     id: 10,
  //     title: 'Trending designs in 2020.',
  //     featuredImage: '/images/blog-image-1.jpg',
  //     filesource: '../../blog/trending-designs-in-2020.md',
  //     createDay: '20',
  //     createMonth: 'February',
  //     createYear: '2020',
  //   },
  //   {
  //     id: 11,
  //     title: 'How to get 10k instagram followers?',
  //     featuredImage: '/images/blog-image-2.jpg',
  //     filesource: '../../blog/how-to-get-10k-instagram-followers.md',
  //     createDay: '20',
  //     createMonth: 'February',
  //     createYear: '2020',
  //   },
  //   {
  //     id: 12,
  //     title: 'What NodeJS can do?',
  //     featuredImage: '/images/blog-image-3.jpg',
  //     filesource: '../../blog/what-nodejs-can-do.md',
  //     createDay: '20',
  //     createMonth: 'February',
  //     createYear: '2020',
  //   },
  //   {
  //     id: 13,
  //     title: 'Futures of javascript.',
  //     featuredImage: '/images/blog-image-4.jpg',
  //     filesource: '../../blog/future-of-javascript.md',
  //     createDay: '20',
  //     createMonth: 'February',
  //     createYear: '2020',
  //   },
  //   {
  //     id: 14,
  //     title: 'Popular javascript library in 2020.',
  //     featuredImage: '/images/blog-image-5.jpg',
  //     filesource: '../../blog/popular-javascript-library-in-2020.md',
  //     createDay: '20',
  //     createMonth: 'February',
  //     createYear: '2020',
  //   },
  //   {
  //     id: 15,
  //     title: 'Promrammers must read books.',
  //     featuredImage: '/images/blog-image-6.jpg',
  //     filesource: '../../blog/programmers-must-read-books.md',
  //     createDay: '20',
  //     createMonth: 'February',
  //     createYear: '2020',
  //   },
  // ],
  contactInfo: {
    phoneNumbers: ['619-871-1891'],
    emailAddress: ['michaelleojacob@gmail.com'],
    address: 'San Diego, California',
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
