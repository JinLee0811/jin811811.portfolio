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
    imageUrl: '/images/ProjectImage/Netflix_Clone.png',
    githubUrl: 'https://github.com/JinLee0811/jin-netflix-clone',
    deployUrl: 'https://jin-netflix-clone.vercel.app/',
    date: '2024-08-11',
    type: 'Single',
    term: 'July 2024 ~ Aug 2024',
    screenshots: [
      {
        imageUrl: '/images/ProjectImage/Netflix_Clone.png',
        caption: 'Main Page',
      },
      {
        imageUrl: '/images/Netfilx/Login.png',
        caption: 'Login Page',
      },
      {
        imageUrl: '/images/Netfilx/User.png',
        caption: 'User Selection Page',
      },
      {
        imageUrl: '/images/Netfilx/VideoList.png',
        caption: 'Video List Page',
      },
      {
        imageUrl: '/images/Netfilx/Modal.png',
        caption: 'Video Information Modal',
      },
      {
        imageUrl: '/images/Netfilx/Video.png',
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
    imageUrl: '/images/ProjectImage/Ai_platform.png',
    githubUrl: 'https://github.com/JinLee0811/Ai-platform-with-Next-js',
    deployUrl: 'https://example2.com',
    date: '2024-08-16',
    type: 'Single',
    term: 'Aug 2024 ~ Present',
    screenshots: [
      {
        imageUrl: '/images/ProjectImage/Ai_platform.png',
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
    imageUrl: '/images/ProjectImage/portfolio.png',
    githubUrl: 'https://github.com/example',
    deployUrl: 'https://example.com',
    date: '2024-08-20',
    type: 'Single',
    term: 'Aug 2024 ~ Present',
    screenshots: [
      {
        imageUrl: '/images/ProjectImage/portfolio.png',
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
    imageUrl: '/images/ProjectImage/AiProject.png',
    githubUrl: 'https://github.com/JinLee0811/AiProject',
    deployUrl: 'https://example.com',
    date: '2023-04',
    type: 'Team',
    term: 'April 2023 ~ June 2023',
    screenshots: [
      {
        imageUrl: '/images/CropProject/2.main.gif',
        caption: 'Main Page',
      },
      {
        imageUrl: '/images/CropProject/1. login.gif',
        caption: 'Login Page',
      },
      {
        imageUrl: '/images/CropProject/3.User.gif',
        caption: 'User Page',
      },
      {
        imageUrl: '/images/CropProject/4.Admin1.gif',
        caption: 'Admin Dashboard Page',
      },
      {
        imageUrl: '/images/CropProject/5.Admin2.gif',
        caption: 'Admin Dashboard Page',
      },
      {
        imageUrl: '/images/CropProject/6.Admin3.gif',
        caption: 'Admin Dashboard Page',
      },
      {
        imageUrl: '/images/CropProject/7.Board.gif',
        caption: 'Discussion Board Page',
      },
      {
        imageUrl: '/images/CropProject/8.Board and Comment.gif',
        caption: 'Likes and Comments Page',
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
    imageUrl: '/images/ProjectImage/DataProject.png',
    githubUrl: 'https://github.com/JinLee0811/Data_Project',
    deployUrl: 'https://example.com',
    date: '2023-03',
    type: 'Team',
    term: 'March 2023 ~ April 2023',
    screenshots: [
      {
        imageUrl: '/images/DataProject/info.gif',
        caption: 'Info Page',
      },
      {
        imageUrl: '/images/DataProject/main.gif',
        caption: 'Main Page',
      },
      {
        imageUrl: '/images/DataProject/mypage.gif',
        caption: 'My Page',
      },
      {
        imageUrl: '/images/DataProject/Admin.gif',
        caption: 'Admin Page',
      },
      {
        imageUrl: '/images/DataProject/search.gif',
        caption: 'Search Page',
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
    imageUrl: '/images/ProjectImage/Shoppingmall.png',
    githubUrl: 'https://github.com/example',
    deployUrl: 'https://example.com',
    date: '2023-01',
    type: 'Team',
    term: 'Jan 2023 ~ Feb 2023',
    screenshots: [
      {
        imageUrl: '/images/Project1/main.gif',
        caption: 'Main Page',
      },
      {
        imageUrl: '/images/Project1/product.gif',
        caption: 'Product Page',
      },
      {
        imageUrl: '/images/Project1/order.gif',
        caption: 'Order Page',
      },
      {
        imageUrl: '/images/Project1/cart.gif',
        caption: 'Cart Page',
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
    imageUrl: '/images/ProjectImage/UniApp.png',
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
    imageUrl: '/images/ProjectImage/Pygame.png',
    githubUrl: 'https://github.com/JinLee0811/python_pygame_pj',
    deployUrl: 'https://example.com',
    date: '2024-04',
    type: 'Single',
    term: 'April 2024 ~ April 2024',
    screenshots: [
      {
        imageUrl: '/images/Poketmon/pocketmon.gif',
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
    imageUrl: '/images/FirstPortfolio/FirstPortfolio.png',
    githubUrl: 'https://github.com/JinLee0811/portfolio',
    deployUrl: 'https://jinlee0811.github.io/portfolio/',
    date: '2023-02',
    type: 'Single',
    term: 'Feb 2023 ~ March 2023',
    screenshots: [
      {
        imageUrl: '/images/FirstPortfolio/FirstPortfolio.png',
        caption: 'Main Screen',
      },
      {
        imageUrl: '/images/FirstPortfolio/SkillList.png',
        caption: 'Skills List Screen',
      },
      {
        imageUrl: '/images/FirstPortfolio/ProjectList.png',
        caption: 'Projects List Screen',
      },
      {
        imageUrl: '/images/FirstPortfolio/Firstportfolio.detail.png',
        caption: 'Project Details Screen',
      },
    ],
  },
];
