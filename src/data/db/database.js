import Mock from "../mock";

const database = {
  information: {
    name: "Michael Jacob",
    aboutContent:
      "Born and raised in California. I am a dedicated and determined full stack web developer. ",
    age: 27,
    phone: "619-871-1891",
    nationality: "American",
    language: "English",
    email: "michaelleojacob@gmail.com",
    address: "Escondido, CA, 92027",
    freelanceStatus: "Available",
    socialLinks: {
      facebook: "",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/michael-jacob-a3a90187/",
      dribbble: "",
      github: "https://github.com/Michaelleojacob",
    },
    brandImage: "./images/brand-image.jpg",
    aboutImage: "./images/about-image.jpg",
    aboutImageLg: "./images/about-image.jpg",
    cvfile: "./files/empty.pdf",
  },
  services: [
    {
      title: "Web Design",
      icon: "color-pallet",
      details:
        "Pixel perfect design. User friendly interface design. Clean, sleek, and visually pleasing",
    },
    {
      title: "Web Development",
      icon: "code",
      details:
        "User first. Making sure the user can interact with the website or app easily is my top priority.",
    },
    {
      title: "Mobile Applications",
      icon: "mobile",
      details:
        "Strong belief all websites and apps should be built with mobile access first.",
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
      title: "HTML",
      value: 95,
    },
    {
      title: "CSS",
      value: 65,
    },
    {
      title: "Javascript",
      value: 80,
    },
    {
      title: "jQuery",
      value: 85,
    },
    {
      title: "ReactJS",
      value: 80,
    },
    {
      title: "Express",
      value: 75,
    },
    {
      title: "Bootstrap",
      value: 90,
    },
    {
      title: "Git&Github",
      value: 100,
    },
    {
      title: "MongoDB",
      value: 95,
    },
    {
      title: "MySQL_DB",
      value: 95,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "Memory Game",
      subtitle: "Game built entirely with javascript, css, and html.",
      imageUrl: "./images/portfolio-image-1.jpg",
      largeImageUrl: ["./images/portfolio-image-1-lg.jpg"],
      url: "https://michaelleojacob.github.io/Memory-Game/",
    },
    {
      id: 2,
      title: "Pawpals",
      subtitle: "Social Media platform for dogs and dog lovers.",
      imageUrl: "./images/portfolio-image-4.jpg",
      largeImageUrl: ["./images/portfolio-image-4-lg.jpg"],
      url: "https://pawpals-social-network.herokuapp.com/",
    },
    {
      id: 3,
      title: "QuaranScreen",
      subtitle:
        "A movie app to keep track of movies the user wants to watch and has watched.",
      imageUrl: "./images/portfolio-image-2.jpg",
      largeImageUrl: ["./images/portfolio-image-2-lg.jpg"],
      url: "https://quaranscreen.herokuapp.com/",
    },
    {
      id: 4,
      title: "User Directory",
      subtitle:
        "React app that allows a user to sort through a list of individuals. Was a good exercise is react, using an API, and making a search field.",
      imageUrl: "./images/portfolio-image-3.jpg",
      largeImageUrl: ["./images/portfolio-image-3-lg.jpg"],
      url: "#",
    },
    {
      id: 5,
      title: "More deployed apps coming soon!",
      subtitle: "Coming soon!",
      imageUrl: "./images/portfolio-image-5.jpg",
      largeImageUrl: ["./images/portfolio-image-5-lg.jpg"],
    },
    // {
    //   id: 6,
    //   title: "Pendrive",
    //   subtitle: "Free pendrive mockup design.",
    //   imageUrl: "./images/portfolio-image-6.jpg",
    //   largeImageUrl: ["./images/portfolio-image-6-lg.jpg"],
    // },
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
        year: "2011 - 2019",
        position: "Lab Technician",
        company: "Team Braces",
        details:
          "Handled making dental appliances. Essex and wire retainers tailored to each individual patient. Worked mostly independently, but as a team we worked together to ensure the patient got the best possible treatment.",
      },
      {
        id: 2,
        year: "2012-2018",
        position: "Security guard",
        company: "Elite Security",
        details:
          "This job taught me to be polite and approachable at all times, flexible and responsible approach to the job. The ability to be patient regardless of the situation. Good verbal and written communication skills. But most importantly it was expected to be a trustworthy character",
      },
      {
        id: 3,
        year: "2013 - 2017",
        position: "Ramp Supervisor",
        company: "Delta Airlines",
        details:
          "Led a team of 10 people to carry out the tasks of each  day. My job was to ensure we worked together efficiently and effectively to ensure every flight went smoothly and on time.",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 - present",
        graduation: "Computer Science Student",
        university: "Udemy, Leetcode, and CodeCademy",
        details:
          "Constant and consistent practice to further hone programming and problem solving abilities.",
      },
      {
        id: 2,
        year: "2019 - 2020",
        graduation: "Student, full stack web developer",
        university: "UCSD extention full stack web developer bootcamp",
        details:
          "Rigorous and intense. UCSD's full time bootcamp program teaches an immense amount of skills, libraries, tools, critical thinking and problem solving. This course covered HTML, CSS, Javascript, Express, MySQL, MongoDB, and ReactJS. Overall I'm proud of the work and skills gained from this class.",
      },
      {
        id: 3,
        year: "2011",
        graduation: "High School",
        university: "Bonita Vista High School",
        details: "",
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: "Markdown & Html supported blog.",
      featuredImage: "./images/blog-image-1.jpg",
      filesource: "../../blog/markdown-html-supported-blog.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 2,
      title: "Installing NodeJS on your device.",
      featuredImage: "./images/blog-image-2.jpg",
      filesource: "../../blog/installing-nodejs-on-your-device.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 3,
      title: "UI/UX design starter with Adobe XD.",
      featuredImage: "./images/blog-image-3.jpg",
      filesource: "../../blog/uiux-design-starter-with-adobe-xd.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 4,
      title: "Boost your post for increasing sales.",
      featuredImage: "./images/blog-image-4.jpg",
      filesource: "../../blog/boost-your-post-for-increasing-sales.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 5,
      title: "Difference between GatsbyJS & NextJS.",
      featuredImage: "./images/blog-image-5.jpg",
      filesource: "../../blog/difference-between-gatsbyjs-and-nextjs.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 6,
      title: "How to choose javascript framework for project.",
      featuredImage: "./images/blog-image-6.jpg",
      filesource:
        "../../blog/how-to-choose-javascript-framework-for-project.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 7,
      title: "Web automation with python language.",
      featuredImage: "./images/blog-image-7.jpg",
      filesource: "../../blog/web-automation-with-python-language.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 8,
      title: "Time to use latest technology for creating a website.",
      featuredImage: "./images/blog-image-8.jpg",
      filesource:
        "../../blog/time-to-use-latest-technology-for-creating-a-website.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 9,
      title: "Think out of the box.",
      featuredImage: "./images/blog-image-9.jpg",
      filesource: "../../blog/think-out-of-the-box.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 10,
      title: "Trending designs in 2020.",
      featuredImage: "./images/blog-image-1.jpg",
      filesource: "../../blog/trending-designs-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 11,
      title: "How to get 10k instagram followers?",
      featuredImage: "./images/blog-image-2.jpg",
      filesource: "../../blog/how-to-get-10k-instagram-followers.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 12,
      title: "What NodeJS can do?",
      featuredImage: "./images/blog-image-3.jpg",
      filesource: "../../blog/what-nodejs-can-do.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 13,
      title: "Futures of javascript.",
      featuredImage: "./images/blog-image-4.jpg",
      filesource: "../../blog/future-of-javascript.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 14,
      title: "Popular javascript library in 2020.",
      featuredImage: "./images/blog-image-5.jpg",
      filesource: "../../blog/popular-javascript-library-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 15,
      title: "Promrammers must read books.",
      featuredImage: "./images/blog-image-6.jpg",
      filesource: "../../blog/programmers-must-read-books.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
  ],
  contactInfo: {
    phoneNumbers: ["619-871-1891", ""],
    emailAddress: ["michaelleojacob@gmail.com", ""],
    address: "Escondido, CA, 92027",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
