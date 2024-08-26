export interface Project {
  id: number;
  name: string;
  subject: string;
  skills?: string[];
  imageUrl: string;
  description: string;
  category?: string[];
  features?: string[];
  tag?: string[];
  contributions?: string[];
  githubUrl: string;
  deployUrl?: string;
  date: string;
  type: string;
  term: string;
  issues: string[];
  screenshots?: { imageUrl: string; caption: string }[]; // New field added
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Netflix Clone',
    skills: ['React', 'Typescript', 'Tailwind CSS', 'Next.JS', 'Prisma'],
    subject: 'Full Stack Netflix Clone in React',
    tag: ['Tailwind CSS', 'Next.JS', 'Prisma'],
    description:
      'This project is a full-stack Netflix clone built with Next.js, Tailwind CSS, and Prisma. It features a responsive design, fast loading times, and mobile optimization.',
    features: [
      'User registration and login (OAuth with GitHub and Google)',
      'Responsive web design',
      'Add to wishlist, remove, and play movies',
    ],
    issues: [
      'Issues with deprecated code due to the latest Next.js update',
      'API connection problems with video URLs',
      'Security concerns with API keys in ENV during deployment',
    ],
    category: ['Web Development', 'Clone Project'],
    contributions: [
      'Frontend development',
      'Backend development',
      'Integration with MongoDB',
      'API integration',
    ],
    imageUrl:
      'https://github.com/user-attachments/assets/e0127a29-0f66-4afd-bbd5-05926a581177',
    githubUrl: 'https://github.com/JinLee0811/jin-netflix-clone',
    deployUrl: 'https://jin-netflix-clone.vercel.app/',
    date: '2024-08-11',
    type: 'Single',
    term: 'July 2024 ~ Aug 2024',
    screenshots: [
      {
        imageUrl:
          'https://github.com/user-attachments/assets/e0127a29-0f66-4afd-bbd5-05926a581177',
        caption: 'Main Page',
      },
      {
        imageUrl:
          'https://github.com/user-attachments/assets/bb621d11-45c4-4478-a8fd-080e4ab5977f',
        caption: 'Login Page',
      },
      {
        imageUrl:
          'https://github.com/user-attachments/assets/d6122f4a-0622-49ff-8b8a-565aaa3d702b',
        caption: 'User Selection Page',
      },
      {
        imageUrl:
          'https://github.com/user-attachments/assets/9d3a6586-cc93-4aed-9d84-fc02f8af6ede',
        caption: 'Video List Page',
      },
      {
        imageUrl:
          'https://github.com/user-attachments/assets/65a9af34-4b01-4347-83ce-7d256e9f3987',
        caption: 'Video Information Modal',
      },
      {
        imageUrl:
          'https://github.com/user-attachments/assets/59e3503e-feda-4af9-9db3-fc79001b7f8e',
        caption: 'Video Player Page',
      },
    ],
  },
  {
    id: 2,
    name: 'AI Platform',
    skills: ['React', 'Typescript', 'Tailwind CSS', 'Next.JS', 'Prisma'],
    subject: 'Building a SaaS AI Platform',
    tag: ['Next.JS', 'Prisma', 'Stripe'],
    description:
      'A project focused on developing a SaaS platform with AI integrations.',
    features: [
      'Subscription management',
      'AI model integration',
      'Payment system integration',
    ],
    issues: ['Currently in progress'],
    category: ['AI Development', 'Web Development'],
    contributions: [
      'Frontend development',
      'Backend development',
      'AI model integration',
    ],
    imageUrl:
      'https://github.com/user-attachments/assets/dd20bd18-acb9-45a0-8941-4af360bcf073',
    githubUrl: 'https://github.com/JinLee0811/Ai-platform-with-Next-js',
    deployUrl: 'https://example2.com',
    date: '2024-08-16',
    type: 'Single',
    term: 'Aug 2024 ~ Present',
    screenshots: [
      {
        imageUrl:
          'https://github.com/user-attachments/assets/dd20bd18-acb9-45a0-8941-4af360bcf073',
        caption: 'Dashboard Page',
      },
    ],
  },
  {
    id: 3,
    name: 'Jin.Dev Portfolio',
    skills: ['React', 'Typescript', 'Tailwind CSS', 'Next.JS', 'Prisma'],
    subject: 'Building a Portfolio Website with TypeScript',
    tag: ['TS', 'Tailwind CSS', 'React'],
    description:
      'This is the portfolio website you are currently viewing, developed using TypeScript, React, and Tailwind CSS.',
    features: [
      'Built with TypeScript',
      'Responsive design',
      'Tailwind CSS styling',
    ],
    issues: [
      'Layout issues on various screen sizes due to monitor resolution differences',
      'Challenges in managing TypeScript types and error correction',
      'Customization difficulties with Tailwind CSS',
      'Completed the website within a short timeframe',
    ],
    category: ['Web Development', 'Portfolio'],
    contributions: ['Frontend development', 'Design and styling'],
    imageUrl:
      'https://github.com/user-attachments/assets/b3fa343a-7032-45c4-94e2-6de01bc6c3ac',
    githubUrl: 'https://github.com/example',
    deployUrl: 'https://example.com',
    date: '2024-08-20',
    type: 'Single',
    term: 'Aug 2024 ~ Present',
    screenshots: [
      {
        imageUrl:
          'https://github.com/user-attachments/assets/b3fa343a-7032-45c4-94e2-6de01bc6c3ac',
        caption: 'Main Page',
      },
    ],
  },
  {
    id: 4,
    name: 'AI Crop Diagnosis Service',
    skills: ['React', 'Typescript', 'Tailwind CSS', 'Next.JS', 'Prisma'],
    subject: 'AI-based Plant Classification Web Service',
    tag: ['JS', 'Styled-Components', 'React Query'],
    description:
      'An AI-based plant classification web service featuring a trained AI model. This project covers data selection, classification, and model training.',
    features: [
      'AI model training and deployment',
      'Plant disease diagnosis and solutions through image analysis',
      'Analysis and utilization of public plant data from South Korea',
    ],
    issues: [
      'Extended training time due to large image datasets',
      'Challenges in improving model performance through data preprocessing and training methods',
      'API communication issues between the backend server and AI model',
    ],
    category: ['AI Deep Learning', 'Web Development'],
    contributions: [
      'Model development',
      'Frontend development',
      'Data analysis',
    ],
    imageUrl:
      'https://github.com/user-attachments/assets/a7dc333c-4004-467b-b781-672206dfcbcf',
    githubUrl: 'https://github.com/JinLee0811/AiProject',
    deployUrl: 'https://example.com',
    date: '2023-04',
    type: 'Team',
    term: 'April 2023 ~ June 2023',
    screenshots: [
      {
        imageUrl:
          'https://github.com/JinLee0811/JinLee_Portfolio/blob/main/src/assets/Images/CropProject/2.main.gif?raw=true',
        caption: 'Main Page',
      },
      {
        imageUrl:
          'https://github.com/JinLee0811/JinLee_Portfolio/blob/main/src/assets/Images/CropProject/1.%20login.gif?raw=true',
        caption: 'Login Page',
      },
      {
        imageUrl:
          'https://github.com/JinLee0811/JinLee_Portfolio/blob/main/src/assets/Images/CropProject/3.User.gif?raw=true',
        caption: 'User Page',
      },
      {
        imageUrl:
          'https://github.com/JinLee0811/JinLee_Portfolio/blob/main/src/assets/Images/CropProject/4.Admin1.gif?raw=true',
        caption: 'Admin Dashboard Page',
      },
      {
        imageUrl:
          'https://github.com/JinLee0811/JinLee_Portfolio/blob/main/src/assets/Images/CropProject/5.Admin2.gif?raw=true',
        caption: 'Admin Dashboard Page',
      },
      {
        imageUrl:
          'https://github.com/JinLee0811/JinLee_Portfolio/blob/main/src/assets/Images/CropProject/6.Admin3.gif?raw=true',
        caption: 'Admin Dashboard Page',
      },
      {
        imageUrl:
          'https://github.com/JinLee0811/JinLee_Portfolio/blob/main/src/assets/Images/CropProject/7.Board.gif?raw=true',
        caption: 'Discussion Board Page',
      },
      {
        imageUrl:
          'https://github.com/JinLee0811/JinLee_Portfolio/blob/main/src/assets/Images/CropProject/8.Board%20and%20Comment.gif?raw=true',
        caption: 'Likes and Comments Page',
      },
      {
        imageUrl:
          'https://github.com/JinLee0811/JinLee_Portfolio/blob/main/src/assets/Images/CropProject/9.Likes%20and%20Write.gif?raw=true',
        caption: 'Upload Page',
      },
    ],
  },
  {
    id: 5,
    name: 'Data Analysis Web Service',
    skills: [
      'React',
      'Javascript',
      'Styled-components',
      'Node.JS',
      'Prisma',
      'AWS',
      'Python',
    ],
    subject: 'Data Analysis Web Service for Subway Travel Time Estimation',
    tag: ['JS', 'AWS', 'Node.JS', 'Prisma'],
    description:
      'This project utilized public data from South Korea to calculate perceived travel times on the subway and created a web service based on the analysis.',
    features: [
      'Data analysis and processing',
      'AWS deployment',
      'Built with Node.js',
      'Integration with various APIs (Maps, Login, etc.)',
    ],
    issues: [
      'Extended time required to calculate perceived travel times using subway data',
      'Rendering and performance issues related to Map API usage',
      'Had to switch to open-source APIs due to the discontinuation of Naver Map API',
      'Server and database services are currently inactive',
    ],
    category: ['Data Science', 'Web Development', 'API'],
    contributions: [
      'Led the team, managed project timelines, and coordinated frontend and backend efforts',
      'Developed the frontend, implemented various APIs, and handled the design',
      'Applied data analysis and processing techniques to enhance the service',
    ],
    imageUrl:
      'https://github.com/user-attachments/assets/8fd84916-4ca3-4025-a6b6-c7fadf03265b',
    githubUrl: 'https://github.com/JinLee0811/Data_Project',
    deployUrl: 'https://example.com',
    date: '2023-03',
    type: 'Team',
    term: 'March 2023 ~ April 2023',
    screenshots: [
      {
        imageUrl:
          'https://github.com/JinLee0811/JinLee_Portfolio/blob/main/src/assets/Images/DataProject/info.gif?raw=true',
        caption: 'Info Page',
      },
      {
        imageUrl:
          'https://github.com/JinLee0811/JinLee_Portfolio/blob/main/src/assets/Images/DataProject/main.gif?raw=true',
        caption: 'Main Page',
      },
      {
        imageUrl:
          'https://github.com/JinLee0811/JinLee_Portfolio/blob/main/src/assets/Images/DataProject/mypage.gif?raw=true',
        caption: 'My Page',
      },
      {
        imageUrl:
          'https://github.com/JinLee0811/JinLee_Portfolio/blob/main/src/assets/Images/DataProject/Admin.gif?raw=true',
        caption: 'Admin Page',
      },
      {
        imageUrl:
          'https://github.com/JinLee0811/JinLee_Portfolio/blob/main/src/assets/Images/DataProject/search.gif?raw=true',
        caption: 'Search Page',
      },
      {
        imageUrl:
          'https://github.com/JinLee0811/JinLee_Portfolio/blob/main/src/assets/Images/DataProject/prize.png?raw=true',
        caption: 'Award',
      },
    ],
  },
  {
    id: 6,
    name: 'Shopping Website',
    skills: ['React', 'Typescript', 'Tailwind CSS', 'Next.JS', 'Prisma'],
    subject: 'Building a Shopping Website with React',
    tag: ['JS', 'Bootstrap', 'MongoDB', 'Node.JS'],
    description:
      'This is my first team project where we built an e-commerce website using MongoDB and Node.js, with a responsive design.',
    features: ['Built with MongoDB', 'Node.js backend', 'Responsive design'],
    issues: [
      'Limited understanding of React',
      'Struggled with JavaScript and CSS',
      'Challenges in communication between frontend and backend, and API integration',
    ],
    category: ['E-Commerce', 'Web Development'],
    contributions: ['Frontend development', 'Backend development'],
    imageUrl:
      'https://github.com/user-attachments/assets/3bd5e343-de39-4d0c-9326-f527eef0d6c4',
    githubUrl: 'https://github.com/example',
    deployUrl: 'https://example.com',
    date: '2023-01',
    type: 'Team',
    term: 'Jan 2023 ~ Feb 2023',
    screenshots: [
      {
        imageUrl:
          'https://github.com/JinLee0811/JinLee_Portfolio/blob/main/src/assets/Images/Project1/cart.gif?raw=true',
        caption: 'Main Page',
      },
    ],
  },
  {
    id: 7,
    name: 'Simple University App with Python',
    skills: ['Python', 'Git', 'CLI', 'GUI'],
    subject: 'Simple University Application Built with Python',
    tag: ['Python', 'Git'],
    description:
      'This project involved creating a simple command-line interface (CLI) application for university management using Python, which was later extended to include a graphical user interface (GUI).',
    features: ['Built with Python', 'Version control with Git', 'CLI-based'],
    issues: [
      'Errors due to Python path settings',
      'Struggled with environment variable configuration and related errors',
      'Data consistency issues between CLI and GUI databases',
    ],
    category: ['Software Development'],
    contributions: [
      'Led the team to successfully complete the project',
      'Handled overall code development and error fixing',
      'Managed the Git repository and oversaw project deployment',
    ],
    imageUrl:
      'https://github.com/user-attachments/assets/b47a7f43-787e-4e8e-9806-009d8a37f2d1',
    githubUrl:
      'https://github.com/JinLee0811/UTS_TeamProject_CLIUniApp-and-GUIUniApp_by_Python',
    deployUrl: 'https://example.com',
    date: '2024-03',
    type: 'Team',
    term: 'March 2024 ~ June 2024',
    screenshots: [],
  },
  {
    id: 8,
    name: 'Pokémon Volleyball Mini Game',
    skills: ['React', 'Typescript', 'Tailwind CSS', 'Next.JS', 'Prisma'],
    subject: 'Mini Game Developed with Pygame',
    tag: ['Python', 'Pygame'],
    description:
      'A simple Pokémon-themed volleyball mini-game developed with Pygame and Python.',
    features: ['Developed with Pygame', 'Python-based game', '2D graphics'],
    issues: [
      'Image size adjustment issues',
      'Limited understanding of the Pygame library',
      'Challenges with Python version management and environment configuration',
    ],
    category: ['Game Development', 'Python'],
    contributions: ['Game development', 'Python scripting'],
    imageUrl:
      'https://github.com/user-attachments/assets/99af349b-5f44-4c01-abf4-47f947e24381',
    githubUrl: 'https://github.com/JinLee0811/python_pygame_pj',
    deployUrl: 'https://example.com',
    date: '2024-04',
    type: 'Single',
    term: 'April 2024 ~ April 2024',
    screenshots: [
      {
        imageUrl:
          'https://github.com/JinLee0811/JinLee_Portfolio/blob/main/src/assets/Images/Poketmon/pocketmon.gif?raw=true',
        caption: 'Game Screen',
      },
    ],
  },
  {
    id: 9,
    name: 'First Portfolio with React',
    skills: ['React', 'Styled-components'],
    subject: 'First Portfolio Built with React',
    tag: ['React', 'Styled-components'],
    description:
      'This is my first portfolio website built using React and JavaScript.',
    features: ['Built with React', 'Styled with Styled-components'],
    issues: [
      'Design lacked simplicity, making it hard to convey information at a glance',
      'Difficult to manage types without using TypeScript',
      'The project and tech stack were not easy to navigate',
    ],
    category: ['Portfolio', 'React'],
    contributions: [
      'React development',
      'Design and styling',
      'State management',
    ],
    imageUrl:
      'https://github.com/user-attachments/assets/42e5f8d1-6bbb-47a8-a949-154c5467da1a',
    githubUrl: 'https://github.com/JinLee0811/portfolio',
    deployUrl: 'https://jinlee0811.github.io/portfolio/',
    date: '2023-02',
    type: 'Single',
    term: 'Feb 2023 ~ March 2023',
    screenshots: [
      {
        imageUrl:
          'https://github.com/user-attachments/assets/42e5f8d1-6bbb-47a8-a949-154c5467da1a',
        caption: 'Main Screen',
      },
      {
        imageUrl:
          'https://github.com/user-attachments/assets/e5a42ab8-5cfc-4e28-b65f-7802ccbc00e6',
        caption: 'Skills List Screen',
      },
      {
        imageUrl:
          'https://github.com/user-attachments/assets/b9981f2c-a085-4537-853c-363db5a3df3f',
        caption: 'Projects List Screen',
      },
      {
        imageUrl:
          'https://github.com/user-attachments/assets/9610c14e-f8c6-4992-95a6-54623eb74fa7',
        caption: 'Project Details Screen',
      },
    ],
  },
];
