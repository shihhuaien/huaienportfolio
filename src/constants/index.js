import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: '概述',
  },
  {
    id: 'projects',
    title: '作品集',
  },
  {
    id: 'contact',
    title: '聯絡我',
  },
];

const services = [
  {
    title: '初階前端工程師',
    icon: frontend,
  },
  {
    title: '初階全端工程師',
    icon: backend,
  },
  {
    title: '資深專案經理',
    icon: ux,
  },
  {
    title: '資深產品經理',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },

  {
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },

  {
    name: 'graphql',
    icon: graphql,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },

];

const experiences = [
  {
    title: '研發專案助理',
    company_name: '旅安資訊     飯店管理系統saas',
    icon: coverhunt,
    iconBg: '#333333',
    date: '八月 2015 - 六月 2017',
  },
  {
    title: '專案經理',
    company_name: '旅安資訊     自助入住櫃檯',
    icon: microverse,
    iconBg: '#333333',
    date: ' 六月 2017 - 六月 2022',
  },
  {
    title: '產品經理',
    company_name: '統一集團 PRESCO     超商貨運系統',
    icon: kelhel,
    iconBg: '#333333',
    date: '六月 2022 - 在職',
  },
  {
    title: '初階前端工程師',
    company_name: '求職中',
    icon: dcc,
    iconBg: '#333333',
    date: '四月 2023 - 現在',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Shalom PMS',
    description: '專案管理：saas 模式飯店營運管理系統(PMS)',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://www.shalom.com.tw/',
    demo: 'https://www.shalom.com.tw/',
  },
  {
    id: 'project-2',
    name: 'CampTw',
    description:
      '全端開發：台灣露營地評論網站-包含會員登入、營地資料上傳、營地評論、api串接、資料驗證、基本安全防護等功能。',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shihhuaien/CampTW',
    demo: 'https://camptw.onrender.com',
  },
  {
    id: 'project-3',
    name: 'Todo List',
    description: '前端開發：用react實作的todo list，實用的小工具',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shihhuaien/todoList',
    demo: 'https://huaientodo.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'portfolio',
    description: `前端開發：使用並改寫template，適應各種技術，作為個人作品集使用`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://huaiensportfolio.netlify.app/',
    demo: 'https://huaienportfolio.netlify.app/',
  },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
