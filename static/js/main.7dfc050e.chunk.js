(this.webpackJsonpreactportfolio=this.webpackJsonpreactportfolio||[]).push([[0],{40:function(e,a,t){e.exports=t(87)},48:function(e,a,t){},49:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(36),i=t.n(r),o=(t(45),t(46),t(47),t(48),t(10)),c=t(11),m=(t(49),t(2)),s=t(4),u=t.n(s),d=t(37),g=t.n(d),p=t(5),b=t.n(p);var f=function(e){var a=Object(n.useState)({}),t=Object(m.a)(a,2),r=t[0],i=t[1];return Object(n.useEffect)((function(){u.a.get("/api/information").then((function(e){i(e.data.socialLinks)}))}),[]),l.a.createElement("ul",{className:e.bordered?"mi-socialicons mi-socialicons-bordered":"mi-socialicons"},r.facebook?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.facebook},l.a.createElement(b.a,{name:"facebook"}))):null,r.twitter?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.twitter},l.a.createElement(b.a,{name:"twitter"}))):null,r.pinterest?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.pinterest},l.a.createElement(b.a,{name:"pinterest"}))):null,r.behance?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.behance},l.a.createElement(b.a,{name:"behance"}))):null,r.linkedin?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.linkedin},l.a.createElement(b.a,{name:"linkedin"}))):null,r.dribbble?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.dribbble},l.a.createElement(b.a,{name:"dribbble"}))):null,r.github?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.github},l.a.createElement(b.a,{name:"github"}))):null)};var E=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(!1),c=Object(m.a)(i,2),s=c[0],d=c[1];return Object(n.useEffect)((function(){u.a.get("/api/information").then((function(e){r(e.data)}))}),[]),l.a.createElement("nav",{className:s?"mi-header is-visible":"mi-header"},l.a.createElement("button",{onClick:function(){d(!s)},className:"mi-header-toggler"},s?l.a.createElement(b.a,{name:"close"}):l.a.createElement(b.a,{name:"menu"})),l.a.createElement("div",{className:"mi-header-inner"},l.a.createElement("div",{className:"mi-header-image"},l.a.createElement(o.b,{to:"/reactportfolio/"},l.a.createElement("img",{src:t.brandImage,alt:"brandimage"}))),l.a.createElement("ul",{className:"mi-header-menu"},l.a.createElement("li",null,l.a.createElement(o.c,{exact:!0,to:"/reactportfolio/"},l.a.createElement("span",null,"Home"))),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/reactportfolio/about"},l.a.createElement("span",null,"About"))),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/reactportfolio/resume"},l.a.createElement("span",null,"Resume"))),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/reactportfolio/portfolios"},l.a.createElement("span",null,"portfolios"))),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/reactportfolio/contact"},l.a.createElement("span",null,"Contact")))),l.a.createElement("p",{className:"mi-header-copyright"},"\xa9 ",(new Date).getFullYear()," ",l.a.createElement("b",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Michaelleojacob/reactportfolio"},"michaelleojacob")))))};var h=function(e){return l.a.createElement("div",{className:"mi-bglines"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))};var v=function(e){return l.a.createElement("div",{className:"mi-wrapper"},l.a.createElement(h,null),l.a.createElement(E,null),e.children)};var y=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){u.a.get("/api/information").then((function(e){r(e.data)}))}),[]),l.a.createElement(v,null,l.a.createElement("div",{className:"mi-home-area mi-padding-section"},l.a.createElement(g.a,{className:"mi-home-particle",params:{particles:{number:{value:160,density:{enable:!1}},color:{value:"#ffffff"},opacity:{value:.1},size:{value:5,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}}}}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-10 col-12"},l.a.createElement("div",{className:"mi-home-content"},l.a.createElement("h1",null,"Hi, I am ",l.a.createElement("span",{className:"color-theme"},t.name)),l.a.createElement("p",null,t.aboutContent),l.a.createElement(f,{bordered:!0})))))))},k=t(13),w=t.n(k),j=t(88);var N=function(e){return l.a.createElement("div",{className:"mi-sectiontitle"},l.a.createElement("h2",null,e.title),l.a.createElement("span",null,e.title))};var S=function(e){return l.a.createElement("div",{className:"mi-service"},l.a.createElement("span",{className:"mi-service-icon"},l.a.createElement(b.a,{name:e.content.icon})),l.a.createElement("h5",null,e.content.title),l.a.createElement("p",null,e.content.details))};var I=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(""),o=Object(m.a)(i,2),c=o[0],s=o[1],d=Object(n.useState)([]),g=Object(m.a)(d,2),p=g[0],b=g[1];return Object(n.useEffect)((function(){u.a.get("/api/information").then((function(e){s(e.data)})),u.a.get("/api/services").then((function(e){b(e.data)}))}),[]),l.a.createElement(v,null,l.a.createElement("div",{className:"mi-about-area mi-section mi-padding-top"},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"About Me"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"mi-about-image"},l.a.createElement("img",{src:c.aboutImage,alt:"about",onClick:function(){r({toggler:!t})}}),l.a.createElement("span",{className:"mi-about-image-icon"},l.a.createElement(j.a,null)),l.a.createElement(w.a,{toggler:t,sources:[c.aboutImageLg]}))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"mi-about-content"},l.a.createElement("h3",null,"I am ",l.a.createElement("span",{className:"color-theme"},c.name)),l.a.createElement("p",null,"Born and raised in California. I am a dedicated and determined full stack web developer. Works well with others, with a background in customer service, leadership, and detail oriented work."),l.a.createElement("ul",null,c.name?l.a.createElement("li",null,l.a.createElement("b",null,"Full Name")," ",c.name):null,c.age?l.a.createElement("li",null,l.a.createElement("b",null,"Age")," ",c.age," Years"):null,c.phone?l.a.createElement("li",null,l.a.createElement("b",null,"Phone")," ",c.phone):null,c.nationality?l.a.createElement("li",null,l.a.createElement("b",null,"Nationality")," ",c.nationality):null,c.language?l.a.createElement("li",null,l.a.createElement("b",null,"Languages")," ",c.language):null,c.email?l.a.createElement("li",null,l.a.createElement("b",null,"Email")," ",c.email):null,c.address?l.a.createElement("li",null,l.a.createElement("b",null,"Address")," ",c.address):null,c.freelanceStatus?l.a.createElement("li",null,l.a.createElement("b",null,"Freelance")," ",c.freelanceStatus):null),l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://docs.google.com/document/d/1IKuZGnUDewQtMgQoVU7V7UU_KB_3J8hG9FaaDlPm4oY/edit",className:"mi-button"},"resume Link")))))),l.a.createElement("div",{className:"mi-service-area mi-section mi-padding-top"},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"Services"}),l.a.createElement("div",{className:"mi-service-wrapper"},l.a.createElement("div",{className:"row mt-30-reverse"},p.map((function(e){return l.a.createElement("div",{className:"col-lg-4 col-md-6 col-12 mt-30",key:e.title},l.a.createElement(S,{content:e}))})))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},O=t(14),M=t.n(O);var D=function(e){return l.a.createElement("div",{className:"mi-smalltitle"},l.a.createElement("span",{className:"mi-smalltitle-icon"},l.a.createElement(b.a,{name:e.icon})),l.a.createElement("h4",null,e.title))};var x=function(e){return l.a.createElement("div",{className:"mi-progress"},l.a.createElement("h6",{className:"mi-progress-title"},e.title),l.a.createElement("div",{className:"mi-progress-inner"},l.a.createElement("div",{className:"mi-progress-percentage"},"".concat(e.percentage,"%")),l.a.createElement("div",{className:"mi-progress-container"},l.a.createElement("span",{className:"mi-progress-active",style:e.isVisible?{width:"".concat(e.percentage,"%")}:{width:0}}))))};var C=function(e){var a=e.resumeData,t=a.year,n=a.position,r=a.graduation,i=a.university,o=a.company,c=a.details;return l.a.createElement("div",{className:"mi-resume mt-30"},l.a.createElement("div",{className:"mi-resume-summary"},l.a.createElement("h6",{className:"mi-resume-year"},t)),l.a.createElement("div",{className:"mi-resume-details"},l.a.createElement("h5",null,n||r),l.a.createElement("h6",{className:"mi-resume-company"},o||i),l.a.createElement("p",null,c)))};var U=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)([]),o=Object(m.a)(i,2),c=o[0],s=o[1],d=Object(n.useState)([]),g=Object(m.a)(d,2),p=g[0],b=g[1];return Object(n.useEffect)((function(){u.a.get("/api/skills").then((function(e){r(e.data)})),u.a.get("/api/experience").then((function(e){s(e.data.workingExperience),b(e.data.educationExperience)}))}),[]),l.a.createElement(v,null,l.a.createElement("div",{className:"mi-skills-area mi-section mi-padding-top"},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"My Skills"}),l.a.createElement("div",{className:"mi-skills"},l.a.createElement("div",{className:"row mt-30-reverse"},t.map((function(e){return l.a.createElement(M.a,{once:!0,className:"col-lg-6 mt-30",key:e.title},l.a.createElement(x,{title:e.title,percentage:e.value}))})))))),l.a.createElement("div",{className:"mi-resume-area mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"Resume"}),l.a.createElement(D,{title:"Working Experience",icon:"briefcase"}),l.a.createElement("div",{className:"mi-resume-wrapper"},c.map((function(e){return l.a.createElement(C,{key:e.id,resumeData:e})}))),l.a.createElement("div",{className:"mt-30"}),l.a.createElement(D,{title:"Educational Qualifications",icon:"book"}),l.a.createElement("div",{className:"mi-resume-wrapper"},p.map((function(e){return l.a.createElement(C,{key:e.id,resumeData:e})}))))))};var A=function(e){for(var a=e.itemsPerPage,t=e.totalItems,n=e.paginate,r=e.currentPage,i=e.className,o=[],c=1;c<=Math.ceil(t/a);c++)o.push(c);return l.a.createElement("div",{className:i?"mi-pagination "+i:"mi-pagination"},l.a.createElement("ul",null,1===r?null:l.a.createElement("li",null,l.a.createElement("a",{onClick:function(e){return n(e,r-1)},href:"!#"},l.a.createElement(b.a,{name:"chevron-left"}))),o.map((function(e){return l.a.createElement("li",{key:e,className:r===e?"is-active":null},l.a.createElement("a",{onClick:function(a){return n(a,e)},href:"!#"},e))})),r===o[o.length-1]?null:l.a.createElement("li",null,l.a.createElement("a",{onClick:function(e){return n(e,r+1)},href:"!#"},l.a.createElement(b.a,{name:"chevron-right"})))))},F=t(89);var G=function(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),r=t[0],i=t[1],o=e.content,c=o.title,s=o.subtitle,u=o.imageUrl,d=o.largeImageUrl,g=o.url;return l.a.createElement("div",{className:e.isVisible?"mi-portfolio mi-portfolio-visible":"mi-portfolio"},l.a.createElement("div",{className:"mi-portfolio-image"},l.a.createElement("img",{src:u,alt:c}),l.a.createElement("ul",null,d?l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){i(!r)}},l.a.createElement(j.a,null))):null,g?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:g},l.a.createElement(F.a,null))):null)),g?l.a.createElement("h5",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:g},c)):l.a.createElement("h5",null,c),s?l.a.createElement("h6",null,s):null,d?l.a.createElement(w.a,{toggler:r,sources:d}):null)};var W=function(e){var a=e.portfolios;return l.a.createElement("div",{className:"row mt-30-reverse"},a.map((function(e){return l.a.createElement(M.a,{once:!0,offset:200,className:"col-lg-4 col-md-6 col-12 mt-30",key:e.id},l.a.createElement(G,{content:e}))})))};var Y=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(1),o=Object(m.a)(i,2),c=o[0],s=o[1],d=Object(n.useState)(9),g=Object(m.a)(d,1)[0];Object(n.useEffect)((function(){u.a.get("/api/portfolios").then((function(e){r(e.data)}))}),[t]);var p=c*g,b=p-g,f=t.slice(b,p);return l.a.createElement(v,null,l.a.createElement("div",{className:"mi-about mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"Portfolios"}),l.a.createElement(W,{portfolios:f}),t.length>g?l.a.createElement(A,{className:"mt-50",itemsPerPage:g,totalItems:t.length,paginate:function(e,a){e.preventDefault(),s(a)},currentPage:c}):null)))},_=t(90),P=t(91),L=t(92);var B=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)([]),o=Object(m.a)(i,2),c=o[0],s=o[1],d=Object(n.useState)([]),g=Object(m.a)(d,2),p=g[0],b=g[1];return Object(n.useEffect)((function(){u.a.get("/api/contactinfo").then((function(e){r(e.data.phoneNumbers),s(e.data.emailAddress),b(e.data.address)}))}),[]),l.a.createElement(v,null,l.a.createElement("div",{className:"mi-contact-area mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"Contact Me"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"mi-contact-info"},t?l.a.createElement("div",{className:"mi-contact-infoblock"},l.a.createElement("span",{className:"mi-contact-infoblock-icon"},l.a.createElement(_.a,null)),l.a.createElement("div",{className:"mi-contact-infoblock-content"},l.a.createElement("h6",null,"Phone"),t.map((function(e){return l.a.createElement("p",{key:e},l.a.createElement("p",null,e))})))):null,c?l.a.createElement("div",{className:"mi-contact-infoblock"},l.a.createElement("span",{className:"mi-contact-infoblock-icon"},l.a.createElement(P.a,null)),l.a.createElement("div",{className:"mi-contact-infoblock-content"},l.a.createElement("h6",null,"Email"),c.map((function(e){return l.a.createElement("p",{key:e},l.a.createElement("p",null,e))})))):null,t?l.a.createElement("div",{className:"mi-contact-infoblock"},l.a.createElement("span",{className:"mi-contact-infoblock-icon"},l.a.createElement(L.a,null)),l.a.createElement("div",{className:"mi-contact-infoblock-content"},l.a.createElement("h6",null,"Address"),l.a.createElement("p",null,p))):null))))))};var J=function(){return l.a.createElement(o.a,null,l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/reactportfolio/",exact:!0,component:y}),l.a.createElement(c.a,{path:"/reactportfolio/about",component:I}),l.a.createElement(c.a,{path:"/reactportfolio/resume",component:U}),l.a.createElement(c.a,{path:"/reactportfolio/portfolios",component:Y}),l.a.createElement(c.a,{path:"/reactportfolio/contact",component:B})))},T=new(t(74))(t(4)),H={information:{name:"Michael Jacob",aboutContent:"Born and raised in California. I am a dedicated and determined full stack web developer. Works well with others, with a background in customer service, leadership, and detail oriented work.",age:27,phone:"619-871-1891",nationality:"American",language:"English",email:"michaelleojacob@gmail.com",address:"2013 Woodland gln, CA, 92027",freelanceStatus:"Available",socialLinks:{facebook:"",twitter:"",pinterest:"",behance:"",linkedin:"https://www.linkedin.com/in/michael-jacob-a3a90187/",dribbble:"",github:"https://github.com/Michaelleojacob"},brandImage:"./images/brand-image.jpg",aboutImage:"./images/about-image.jpg",aboutImageLg:"./images/about-image.jpg",cvfile:"./files/empty.pdf"},services:[{title:"Web Design",icon:"color-pallet",details:"Pixel perfect design. User friendly focused interface design. Clean, sleek, and visually pleasing"},{title:"Web Development",icon:"code",details:"User first approached logic. Making sure the user can interact with the website or app easily is the goal."},{title:"Mobile Applications",icon:"mobile",details:"Strong belief all websites and apps should be built with mobile access first."}],skills:[{title:"HTML",value:95},{title:"CSS",value:65},{title:"Javascript",value:80},{title:"jQuery",value:85},{title:"ReactJS",value:80},{title:"Express",value:75},{title:"Bootstrap",value:90},{title:"Git&Github",value:100},{title:"MongoDB",value:95},{title:"MySQL_DB",value:95}],portfolios:[{id:1,title:"Memory Game",subtitle:"Game built entirely with javascript, css, and html.",imageUrl:"./images/portfolio-image-1.jpg",largeImageUrl:["./images/portfolio-image-1-lg.jpg"],url:"https://michaelleojacob.github.io/Memory-Game/"},{id:2,title:"Pawpals",subtitle:"Social Media platform for dogs and dog lovers.",imageUrl:"./images/portfolio-image-4.jpg",largeImageUrl:["./images/portfolio-image-4-lg.jpg"],url:"https://pawpals-social-network.herokuapp.com/"},{id:3,title:"QuaranScreen",subtitle:"A movie app to keep track of movies the user wants to watch and has watched.",imageUrl:"./images/portfolio-image-2.jpg",largeImageUrl:["./images/portfolio-image-2-lg.jpg"],url:"https://quaranscreen.herokuapp.com/"},{id:4,title:"User Directory",subtitle:"React\xa0app\xa0that\xa0allows\xa0a\xa0user\xa0to\xa0sort\xa0through    \xa0a    \xa0list\xa0   of individuals. Was a good exercise is react, using an API, and making a search field.",imageUrl:"./images/portfolio-image-3.jpg",largeImageUrl:["./images/portfolio-image-3-lg.jpg"],url:"#"},{id:5,title:"More deployed apps coming soon!",subtitle:"Coming soon!",imageUrl:"./images/portfolio-image-5.jpg",largeImageUrl:["./images/portfolio-image-5-lg.jpg"]}],experience:{workingExperience:[{id:1,year:"2011 - 2019",position:"Lab Technician",company:"Team Braces",details:"Handled making dental appliances. Essex and wire retainers tailored to each individual patient. Worked mostly independently, but the team also constantly worked together to ensure the patient get the best possible treatment. Taught me valuable customer service skills, and sharpen my attention to every last detail. "},{id:2,year:"2012-2018",position:"Security guard",company:"Elite Security",details:"Worked as a security guard, flexible hours so I could continue to work as a lab tech. I handled and contained massive crowds. Worked to maintain the peace. This job took incredible decision making and cooperative skills."},{id:3,year:"2013 - 2017",position:"Ramp Supervisor",company:"Delta Airlines",details:"Lead a team of 10 or less people to carry out the tasks of each  day. We made sure every bag was accounted for, every crew member had a role and could carry out their part of the operation. We worked as a team to ensure every flight went smoothly. "}],educationExperience:[{id:1,year:"2019 - present",graduation:"Computer Science Student",university:"Udemy, Leetcode, and CodeCademy",details:"Constant and consistent practice to further hone and practice programming and problem solving."},{id:2,year:"2019 - 2020",graduation:"Student, full stack web developer",university:"UCSD extention full stack web developer bootcamp",details:"Rigorous and intense. UCSD's full time bootcamp program teaches an immense amount of skills, libraries, tools, critical thinking and problem solving. This course covered HTML, CSS, Javascript, Express, MySQL, MongoDB, and ReactJS. Overall I'm very proud of the work and skilled gained from this class."},{id:3,year:"2011",graduation:"Higher Schoold Graduation",university:"Bonita Vista High School",details:"Some college. I went on to get real world work experience. I then decided to get a security license. While also working towards obtaining compTIA A+ certifications in order to work towards becoming a sys admin. I found this was not my path. And went on to pursue other adventures and skills."}]},blogs:[{id:1,title:"Markdown & Html supported blog.",featuredImage:"./images/blog-image-1.jpg",filesource:"../../blog/markdown-html-supported-blog.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:2,title:"Installing NodeJS on your device.",featuredImage:"./images/blog-image-2.jpg",filesource:"../../blog/installing-nodejs-on-your-device.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:3,title:"UI/UX design starter with Adobe XD.",featuredImage:"./images/blog-image-3.jpg",filesource:"../../blog/uiux-design-starter-with-adobe-xd.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:4,title:"Boost your post for increasing sales.",featuredImage:"./images/blog-image-4.jpg",filesource:"../../blog/boost-your-post-for-increasing-sales.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:5,title:"Difference between GatsbyJS & NextJS.",featuredImage:"./images/blog-image-5.jpg",filesource:"../../blog/difference-between-gatsbyjs-and-nextjs.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:6,title:"How to choose javascript framework for project.",featuredImage:"./images/blog-image-6.jpg",filesource:"../../blog/how-to-choose-javascript-framework-for-project.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:7,title:"Web automation with python language.",featuredImage:"./images/blog-image-7.jpg",filesource:"../../blog/web-automation-with-python-language.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:8,title:"Time to use latest technology for creating a website.",featuredImage:"./images/blog-image-8.jpg",filesource:"../../blog/time-to-use-latest-technology-for-creating-a-website.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:9,title:"Think out of the box.",featuredImage:"./images/blog-image-9.jpg",filesource:"../../blog/think-out-of-the-box.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:10,title:"Trending designs in 2020.",featuredImage:"./images/blog-image-1.jpg",filesource:"../../blog/trending-designs-in-2020.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:11,title:"How to get 10k instagram followers?",featuredImage:"./images/blog-image-2.jpg",filesource:"../../blog/how-to-get-10k-instagram-followers.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:12,title:"What NodeJS can do?",featuredImage:"./images/blog-image-3.jpg",filesource:"../../blog/what-nodejs-can-do.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:13,title:"Futures of javascript.",featuredImage:"./images/blog-image-4.jpg",filesource:"../../blog/future-of-javascript.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:14,title:"Popular javascript library in 2020.",featuredImage:"./images/blog-image-5.jpg",filesource:"../../blog/popular-javascript-library-in-2020.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:15,title:"Promrammers must read books.",featuredImage:"./images/blog-image-6.jpg",filesource:"../../blog/programmers-must-read-books.md",createDay:"20",createMonth:"February",createYear:"2020"}],contactInfo:{phoneNumbers:["619-871-1891",""],emailAddress:["michaelleojacob@gmail.com",""],address:"2013 Woodland Gln, Escondido, CA, 92027"}};T.onGet("/api/information").reply((function(e){return[200,H.information]})),T.onGet("/api/services").reply((function(e){return[200,H.services]})),T.onGet("/api/reviews").reply((function(e){return[200,H.reviews]})),T.onGet("/api/skills").reply((function(e){return[200,H.skills]})),T.onGet("/api/portfolios").reply((function(e){return[200,H.portfolios]})),T.onGet("/api/experience").reply((function(e){return[200,H.experience]})),T.onGet("/api/blog").reply((function(e){return[200,H.blogs]})),T.onGet("/api/contactinfo").reply((function(e){return[200,H.contactInfo]})),T.onAny().passThrough();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.7dfc050e.chunk.js.map