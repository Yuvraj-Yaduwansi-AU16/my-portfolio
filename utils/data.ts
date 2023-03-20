export const skills = [
  { _id: 1, title: 'React Native', image: './rn.png', progress: 70 },
  { _id: 2, title: 'MongoDB', image: './md.png', progress: 90 },

  { _id: 3, title: 'NodeJS', image: './node.png', progress: 85 },

  { _id: 4, title: 'Material UI', image: './mui.png', progress: 90 },

  { _id: 5, title: 'Spring', image: './sp.png', progress: 60 },
  { _id: 6, title: 'Python', image: './py.jpg', progress: 75 },

  { _id: 7, title: 'Oracle', image: './or.png', progress: 70 },
  { _id: 8, title: 'My SQL', image: './sql.png', progress: 70 },
  { _id: 9, title: 'Bootstrap', image: './bt.png', progress: 90 },
  { _id: 10, title: 'Java', image: './java.png', progress: 80 },
  { _id: 11, title: 'Javascript', image: './js.png', progress: 90 },
  { _id: 12, title: 'ReactJS', image: './react.png', progress: 95 },
  { _id: 13, title: 'NextJS', image: './next.png', progress: 90 },
  { _id: 14, title: 'Typescript', image: './ts.png', progress: 90 },
];
export const experience = [
  {
    _id: 1,
    company: 'Pintar',
    companyImage: './pintar.png',
    dateStarted: '01/01/2022',
    dateEnded: '08/30/2022',
    isCurrentlyWorkingHere: false,
    jobTitle: 'Front-end lead',
    points: [
      'Contributed by adding multiple features on the Pintar webapp using JavaScript, React and managed app state with Redux to improve webapp performance and user engagement by 20%',
      `	Recreated several features in the company's legacy code using PHP, Laravel from scratch which improve UX and increase user retention.`,
      '	Integrated Mixpanel, GTM and Facebook Pixel tracking and analytics tools and Sentry error logger on the Pintar webapp to improve bug reporting and management by 15%',
      '	Automated and optimized feedback logic for marketing and sales experiments, including Shaun Eilis and NPS score tests to draw statistics and evaluations for product performance.',
      '	Worked on implementing Program registration flow which included Amazon Video on Demand (VOD) streaming.',
      '	Implemented localization using i18Next so that the website can target a global audience.',
      '	Led a team of 5 people to deliver the tasks as per deadline while discussing design improvements and user flow and keeping scalability in mind.',
      '	Monitored team progress and enforced deadlines.',
      '	Collaborated with management team to implement new work procedures or policies.',
      '	Conducted thorough quality checks to verify conformance to specifications.',
      '	Gathered business requirements from users to convert to technical requirements.',
    ],
    technologies: ['./ts.png', './next.png', './mui.png'],
  },
  {
    _id: 2,
    company: 'I-Stem',
    companyImage: './logo.svg',
    dateStarted: '07/20/2021',
    dateEnded: '01/01/2022',
    isCurrentlyWorkingHere: false,
    jobTitle: 'Full Stack Developer',
    points: [
      'Led the design and development for I-Stem Android app from scratch using React Native and took it to completion and release in 6-months which has over 1K+ downloads on Google Play store.',
      '	Worked on the MERN stack on Typescript.',
      '	Technologies Used: React, Node.js, Next.js, MongoDB, React Native.',
      '	Assisted other developers with coding, troubleshooting, and debugging.',
      '	Produced high-quality code artifacts that conformed to standards and best practices.',
      '	Coordinated system installations, testing and code corrections.',
      '	Developed native app in React Native bare CLI.',
      '	Improved accessibility features for in-accessible users using Screen Reader, Narrator',
      '	Worked on implementing Document Remediation flow on the website.',
      '	Managed both back-end and front-end aspects of development process.',
    ],
    technologies: [
      './md.png',
      './ts.png',
      './next.png',
      './mui.png',
      './node.png',
      './rn.png',
    ],
  },
  {
    _id: 3,
    company: 'Bootlegger',
    companyImage: './bootlegger.png',
    dateStarted: '02/14/2023',
    isCurrentlyWorkingHere: true,
    jobTitle: 'Shift Manager',
    points: [
      '•	Demonstrated exceptional time management skills while merchandising the store inventory efficiently.',
      '	Completed thorough opening, closing and shift change functions to maintain operational standards each day.',
      '	Communicated with other shift managers to facilitate continuum of customer service.',
      '	Upheld company standards and compliance requirements for operations.',
      '	Coached employees on interactions with customers to drive exceptional service.',
    ],
  },
  {
    _id: 4,
    company: 'Rickis',
    companyImage: './ricki.png',
    dateStarted: '01/11/2022',
    dateEnded: '01/31/2023',
    isCurrentlyWorkingHere: false,
    jobTitle: 'Keyholder',
    points: [
      '•	Helped customers find specific products, answered questions and offered product advice.',
      '	Worked with fellow sales team members to achieve group targets.',
      '	Arranged new merchandise with signage and appealing displays to encourage customer sales and move overstock items.',
      '	Built and maintained relationships with peers and upper management to drive team success.',
      '	Used technology resources to assist customers in locating and selecting items.',
    ],
  },
  {
    _id: 5,
    company: 'Navigazione Montanari',
    companyImage: './valsesia.jpg',
    dateStarted: '2020-03-01',
    dateEnded: '2020-10-10',
    isCurrentlyWorkingHere: false,
    jobTitle: 'Junior Engineer',
    points: [
      'Sailed onboard ship Valsesia, in a team of 24 multinational crew members as a Junior Engineer',
      'I took part in operations for managing and refueling inbound oil cargo, to be used as fuel oil, worth over 58.5 million USD.',
    ],
  },
];

export const projects = [
  {
    _id: 1,
    title: 'Post Graduate Certificate',
    subtitle: 'Conestoga College',
    image: './Conestoga.png',
    summary: [
      '3.79 GPA',
      '	Major in Data Visualization, Security and Reporting',
      '	Non- relational Databases, Object-oriented Programming and Relational Databases',
    ],
    technologies: ['./md.png', './node.png'],
  },
  {
    _id: 2,
    title: 'Bachelors of Technology',
    subtitle: 'Birla Institute of technology & Science',
    image: './BITS.png',
    summary: [
      'Received merit-based scholarship of 35,000 INR for academic excellence in the first semester.',
      '	Major in Marine Engineering',
    ],
    technologies: ['./md.png', './node.png'],
  },
];
export const pageInfo = {
  address: '162 Cedarwoods Crescent, Kitchener, ON, N2c 2J8',
  bgInfo:
    'Full-stack Developer with a demonstrated history of working in the information technology and services industry. Strong engineering professional skilled in React, Node JS, JavaScript, TypeScript, Next.Js, Python, HTML, CSS , MongoDB ,Redis, Docker. I have worked with React Native to develop a mobile application for I-Stem, currently available on Play Store as a beta release.',
  email: 'yuvraj.mark3@gmail.com',
  role: 'Full Stack Developer',
  heroImage: './me.jpeg',
  name: 'Yuvraj Singh',
  phoneNo: '(249)-733-5515',
  profilePic: './me2.jpeg',
};
export const socials = [
  {
    _id: 1,
    title: 'GitHub',
    url: 'https://github.com/Yuvraj-Yaduwansi-AU16',
  },
  {
    _id: 2,
    title: 'Instagram',
    url: 'https://www.instagram.com/yuvr4j.s1ngh/',
  },
  {
    _id: 3,
    title: 'Facebook',
    url: 'https://www.facebook.com/yuvi.r.singh/',
  },
  {
    _id: 4,
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yuvraj-singh-yaduwansi/',
  },
];
