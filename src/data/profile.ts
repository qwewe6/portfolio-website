// Everything about Max that isn't a project lives here.
// Edit this file to change the home page's intro, results, experience and contact links.

export const profile = {
  name: 'Max Becker',
  fullName: 'Maxwell R. Becker',
  location: 'Denver, Colorado',
  email: 'maxbecker1023@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/maxwell-becker-b29848137',
    github: 'https://github.com/qwewe6',
    youtube: 'https://www.youtube.com/@RCxDco',
  },
  // One sentence under the name in the hero.
  statement:
    'Seven years selling to and looking after customers, a data analytics certificate, and a year of building software that turns photos, video and notes into records people actually use.',
  // The line under the statement: what you're looking for, in one breath.
  looking: 'Looking for a customer success, implementation or data role in education technology',
  // A downloadable résumé. Put the PDF in public/ and keep the path here.
  resume: '/Max-Becker-Resume.pdf',
  intro: [
    'I started on the phones at Angi, making 150 to 250 cold calls a day to contractors across the country. From there I moved into compliance, then into pro sales at Lowe’s, where I grew a book of trade accounts to $1.3M a year, and then into running a department.',
    'Alongside that I studied applied mathematics at Colorado School of Mines and MSU Denver, and finished the University of Denver’s Data Analytics Boot Camp in 2025. Since then I’ve been building: an app for the RC crawling community, a plant-care service that keeps a photographic record of every plant, and a small line of handmade displays.',
    'What ties it together is the job I’ve always done. Find out what the customer is really asking for, get the details right, and follow through.',
  ],
};

// Results worth putting a number on. Keep these to things you can back up in an interview.
export const results = [
  { figure: '$1.3M', label: 'Annual pro sales, up 300% and 20% over target', where: 'Lowe’s, President’s Club' },
  { figure: '#1', label: 'Storewide in credit approvals and loyalty enrollments', where: 'Lowe’s' },
  { figure: 'Top 100', label: 'Regional ranking in sales, FY23', where: 'Lowe’s' },
  { figure: '11', label: 'New business accounts from trade shows, $500K–$750K in first-year revenue', where: 'Lowe’s' },
  { figure: '+25%', label: 'Over productivity targets, with QA 10% above department standard', where: 'Angi' },
  { figure: '494 hrs', label: 'Data Analytics Boot Camp: Python, SQL, statistics, visualization', where: 'University of Denver' },
];

export type Role = {
  title: string;
  org: string;
  place: string;
  dates: string;
  summary: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    title: 'Department Supervisor',
    org: 'Lowe’s Home Improvement',
    place: 'Lakewood, CO',
    dates: 'Jul 2025 – Dec 2025',
    summary:
      'Ran department operations: customer experience, inventory control, store standards, opening and closing, cash, escalations and overrides.',
    highlights: [
      'Trained associates in groups and one-on-one on store initiatives, with gains in shrink, attachment, credit and loyalty.',
      'Turned an underperforming associate into a reliable, proactive part of the team.',
      'Tightened inventory accuracy and loss prevention through cycle counts and shrink reduction.',
      'Resolved high-value order problems and kept those customers.',
    ],
  },
  {
    title: 'Pro Sales Specialist',
    org: 'Lowe’s Home Improvement',
    place: 'Littleton, CO',
    dates: 'Feb 2022 – Jan 2025',
    summary:
      'Managed materials procurement across several supply pipelines to keep contractors on schedule and on budget. Ran credit, loyalty and sales through the store, events and online, with every account tracked in Salesforce.',
    highlights: [
      'Grew annual sales 300% to $1.3M, 20% over target, and earned President’s Club.',
      'Ranked #1 storewide in credit approvals and loyalty enrollments; Regional Top 100 in sales for FY23.',
      'Signed 11 new business accounts at trade shows; two grew to managed status and over $1M combined annual spend.',
      'Led the district in pro shingle sales for FY23 by forecasting demand and stocking ahead of it.',
    ],
  },
  {
    title: 'Admissions QA Representative',
    org: 'Angi (HomeAdvisor)',
    place: 'Golden, CO',
    dates: 'Sep 2019 – Feb 2022',
    summary:
      'Vetted new contractor accounts against background and state and local licensing requirements, working with sales and licensing boards across the U.S.',
    highlights: [
      'Updated over 10% of account profiles during the Angi–HomeAdvisor system migration.',
      'Beat productivity KPIs by 25% while holding QA 10% above department targets.',
    ],
  },
  {
    title: 'Inside Sales Consultant',
    org: 'Angi (HomeAdvisor)',
    place: 'Golden, CO',
    dates: 'Oct 2018 – Sep 2019',
    summary:
      'Consulted business owners on online marketing and lead generation: 150 to 250 cold calls and a handful of warm calls every day.',
    highlights: [
      'Built my own prospect lists from social media, websites, databases and licensing boards.',
      'Turned cold prospects into engaged customers through consultative selling, then supported them after approval to keep them.',
    ],
  },
];

export const education = [
  {
    school: 'University of Denver',
    detail: 'Professional Certificate, Data Analytics Boot Camp',
    dates: 'Completed June 2025, 494 hours, grade A',
    note: 'Data management, statistical modeling and visualization with Python and SQL.',
  },
  {
    school: 'Colorado School of Mines and MSU Denver',
    detail: 'B.S. Applied Mathematics, in progress',
    dates: '2016 – present',
    note: 'Coursework in statistics and materials science at Mines.',
  },
];

export const skills = {
  'Customers and accounts': [
    'B2B and trade account management',
    'Consultative selling and renewals',
    'Onboarding and retention',
    'Salesforce',
    'Credit and loyalty programs',
    'Escalations and high-value orders',
  ],
  'Training and operations': [
    'Group and one-on-one training',
    'Process documentation',
    'QA and licensing compliance',
    'Procurement across supply pipelines',
    'Demand forecasting',
    'Inventory, shrink and loss prevention',
  ],
  'Data and software': [
    'Python and Pandas',
    'SQL, Postgres and PostGIS',
    'Tableau and Matplotlib',
    'JavaScript and TypeScript',
    'React Native (Expo)',
    'OpenCV and SAM 2',
    'Working with Claude and other LLMs',
  ],
};

// The "Where I fit" section: the kinds of roles you're after, and the proof on this site for each.
// `href` points at the page that backs it up; leave it out if there isn't one.
export type Fit = { role: string; proof: string; href?: string; linkLabel?: string };

export const fit: Fit[] = [
  {
    role: 'Customer success and account management',
    proof:
      'Seven years keeping customers: a $1.3M book of trade accounts at Lowe’s, #1 storewide in credit and loyalty, and President’s Club. Mr. Pruner is a service designed around why customers leave (they forget you) and built to send them a record every month.',
    href: '/work/mr-pruner/',
    linkLabel: 'How Mr. Pruner handles retention',
  },
  {
    role: 'Implementation and onboarding',
    proof:
      'At Lowe’s I coordinated procurement across several supply pipelines so contractors’ projects stayed on schedule. At Angi I onboarded new accounts against licensing rules in every state. Mr. Pruner’s visit runs the same way every time, from intake to report, so each one is comparable with the last.',
    href: '/work/mr-pruner/',
    linkLabel: 'One visit, start to finish',
  },
  {
    role: 'Training and enablement',
    proof:
      'I trained associates in groups and one-on-one on store initiatives, with measurable gains in shrink, attachment, credit and loyalty, and turned an underperforming associate into a reliable one. I write processes other people can follow: every project keeps a plan, a decision log and a changelog.',
    href: '/work/flot/',
    linkLabel: 'A process written down, step by step',
  },
  {
    role: 'Data and analytics',
    proof:
      '494 hours at the University of Denver’s Data Analytics Boot Camp, grade A, and Python and SQL in daily use since: RCxDrive’s map runs on PostGIS, Mr. Pruner’s reports come out of a SQLite pipeline, and a final project taught me to say when the data can’t answer the question.',
    href: '/work/data-analytics-boot-camp/',
    linkLabel: 'What the boot camp covered',
  },
  {
    role: 'And the learner’s side of the table',
    proof:
      'I finished a part-time boot camp while working full time, and I’m finishing a maths degree the same way. I know what it’s like to be the working adult on the other side of an education product, and what makes someone stick with it.',
  },
];
