// Everything on the site that is words or numbers lives in this file.

export const site = {
  name: 'Max Becker',
  fullName: 'Maxwell R. Becker',
  eyebrow: 'Software sales · Denver, Colorado',
  tagline: 'Sales professional with a builder’s toolkit.',
  intro:
    'Need to sell physical or digital products? I’ve got you, from lead generation to close and all the analytics in between. Seven years selling at Lowe’s and Angi; building software and running the numbers on the side.',
  // One line on what you're after. Shown under the intro and in the footer.
  lookingFor: 'Looking for an account executive or solutions role at a software company. Denver or remote.',
  email: 'maxbecker1023@gmail.com',
  location: 'Denver, Colorado',
  resume: '/Max-Becker-Resume.pdf',
  // The filename people get when they download it.
  resumeFilename: 'Maxwell Becker - Resume.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/maxwell-becker-b29848137',
    github: 'https://github.com/qwewe6',
    youtube: 'https://www.youtube.com/@RCxDco',
  },
  // Replace with a real photo: put it at public/img/max.jpg and set photo to '/img/max.jpg'.
  photo: null as string | null,
};

export type Stat = { figure: string; label: string };

// The row of numbers under the hero. Keep each one defensible in an interview.
export const stats: Stat[] = [
  { figure: '$1.3M', label: 'Annual pro sales book, grown 300%' },
  { figure: '120%', label: 'Of target. President’s Club.' },
  { figure: '#1', label: 'Storewide, credit approvals and loyalty' },
  { figure: '11', label: 'Accounts signed at trade shows, $500–750K in year one' },
  { figure: '150–250', label: 'Cold calls a day, full cycle to close, at Angi' },
];

export type Role = { years: string; title: string; org: string; line: string };

export const experience: Role[] = [
  {
    years: '2025',
    title: 'Department Supervisor',
    org: 'Lowe’s',
    line: 'Ran the building materials and lumber departments. Handled customer escalations, inventory and shrink, and trained associates with measurable gains in credit and loyalty.',
  },
  {
    years: '2022–2025',
    title: 'Pro Sales Specialist',
    org: 'Lowe’s',
    line: 'Grew a trade-account book 300% to $1.3M, 20% over target. Two trade-show accounts grew to managed-account status. Led the district in shingle sales by forecasting demand. Salesforce daily.',
  },
  {
    years: '2019–2022',
    title: 'Admissions QA Representative',
    org: 'Angi (HomeAdvisor)',
    line: 'Onboarded contractor accounts against licensing and legal rules in every state; 25% over productivity targets with QA 10% above standard.',
  },
  {
    years: '2018–2019',
    title: 'Inside Sales Consultant',
    org: 'Angi (HomeAdvisor)',
    line: '150–250 cold calls a day to business owners, selling Angi’s lead-generation SaaS. Owned the full cycle, prospect to close, with the occasional warm lead handed over.',
  },
];

export const education: Role[] = [
  { years: '2025', title: 'Data Analytics Boot Camp', org: 'University of Denver', line: 'Python, SQL, Tableau, machine learning. 494 hours, grade A.' },
  { years: '2016–', title: 'B.S. Applied Mathematics, in progress', org: 'Colorado School of Mines / MSU Denver', line: 'Part time, while working.' },
];

// The About section: a short blurb, then the hobbies list. Placeholder copy; edit freely.
export const about = [
  'I grew up in Colorado and don’t ever want to leave. I spent my twenties in sales, first on the phones and then on a sales floor with contractors. After a data analytics boot camp I started coding things on the side, and finding new ways to put those analytics skills to work in sales.',
  'Outside of work you can find me in the foothills with my RC crawlers, bouldering at the gym, or at the roller hockey rink. The rest of the time, if I’m not hanging out with friends and family, I’m relaxing with an audiobook or a movie on.',
];

// `id` becomes the list item's anchor: /#hobby-<id>
export type Hobby = { id: string; name: string; line: string; href?: string };

export const hobbies: Hobby[] = [
  { id: 'youtube', name: 'RC crawlers and the YouTube channel', line: 'My interest in cinematography, editing and RC cars in one place. Major inspiration for the RCxDrive app, as well as a fun creative outlet, with a great community to boot.', href: 'https://www.youtube.com/@RCxDco' },
  { id: 'hockey', name: 'Roller hockey', line: 'I played roller as a kid and recently picked it back up after a ten-year break (you never really stop playing). I play on two teams and it’s been a blast.' },
  { id: 'climbing', name: 'Climbing', line: 'Indoor bouldering. Trying to get over the V4 hump; outdoor sessions on the horizon.' },
  { id: 'reading', name: 'Reading and audiobooks', line: 'A few favorites: Red Rising (Pierce Brown), The Kingkiller Chronicle (Patrick Rothfuss), Endurance (Alfred Lansing), and Project Hail Mary and The Martian (Andy Weir). I’d especially recommend Endurance if you’re into true accounts of bravery and resilience.' },
];

export type Img = { src: string; alt: string; caption?: string };

// A project either links out (`external`) or gets its own page at /work/<slug>/
// built from the optional fields below, in the order listed.
export type Project = {
  slug: string;
  year: string;
  name: string;
  indexLabel?: string;
  line: string;
  external?: string;
  summary?: string;
  stats?: Stat[];
  story?: string[];
  bullets?: { heading: string; items: string[] };
  closing?: string[];
  tech?: string;
  images?: Img[];
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    slug: 'rcxdrive',
    year: '2026',
    name: 'RCxDrive',
    line: 'Strava for RC crawlers. Scan in your rig and hit the rocks. A mobile app that shows the lines your rig makes when crawling a feature, and tracks crashes, reverses and stats on your runs. Compare and share your stats, lines and videos with the community.',
    summary:
      'A dense map of over 80 RC crawling locations, down to the exact lines. Make new lines yourself, or drive ones already driven. Compare your runs to others on the same feature. A garage for all of your rigs, complete with 3D point-cloud, photo-wrapped renderings, all under a set of fun, asynchronous RC crawler games to compete in across Colorado. Co-founded with Stephen Marshall; I own product, research and the video pipeline.',
    stats: [
      { figure: '81', label: 'crawl spots on the map' },
      { figure: '4 wks', label: 'from idea to MVP' },
      { figure: '2', label: 'users testing it, expanding gradually' },
    ],
    story: [
      'Months before writing any code, before I adopted Strava as a conceptual parallel, I was simply trying to answer the question: what data could I get from my RC cars? I was already experimenting with slapping GPS units on trucks, fiddling with apps that used my phone’s GPS, trying to get my Garmin smartwatch data to sync up with videos I had taken. This throwing-spaghetti-at-the-wall strategy worked in so much as it got me off the ground, and resulted in some not very good visualizations, but visualizations nonetheless.',
      'GPS worked at its own scale: accurate to about a yard, or down to a foot with a Racebox. Taking my 1/10 scale rigs out on a trail, I could capture a line, so long as it was long enough, and plot it on a map. But it just wasn’t granular enough. You can’t put a GPS unit on a 1/30 scale vehicle. And bigger than the scale of the rigs themselves: while RC enthusiasts care about distance traveled, we obsess over what the rig does, specifically all the angles and the pleasant coalescence of body, suspension, tires and power delivery. GPS just doesn’t care about those things.',
      'About two months ago it came to me to try video processing. People are already taking videos of their rigs; if I could get the tech to work on video, that solves the scale problem in both senses. Around the same time I recalled multiple people describing what I was doing as “Strava for RC crawlers,” and it clicked. I investigated Strava conceptually, its core interaction loops and how it handles its data, and transferred it from the domain of exercise to RC crawling.',
      'With the parallel made, Stephen helped me set up a workflow, and using AI we scoped the project and pressed go. For the next four weeks I did not stop coding, with the goal of delivering an MVP in one $20 billing cycle. Technically it took two, one running a week into the other.',
    ],
    bullets: {
      heading: 'What works today',
      items: [
        'Downloadable app with user profiles and a live backend',
        'Simplified mobile and desktop UI',
        'Scan your rig: good quality, very little surface loss',
        'Garage with rig stats and a spinning showcase display',
        'Scan a feature (the environment) and see every line on it in 3D',
        'Rig line, plus tire lines for up to n tires',
        'Stats, crash detection, reverse detection',
        'Map of 81 locations',
        'Consistent for 1/24 scale rigs and above; a bit less so at 1/30',
      ],
    },
    closing: [
      'What needs attention: the database schema needs a human touch all over, and deletes need verifying. On the product side, the hard problem is getting the racer to portray the rig’s angles as seen in the user’s video. Orientation drifts, so the racer sometimes loses which way is forward, and the gamification on the timeline (medals for things that happened in the run) is only as consistent as that tracking. If the game is inconsistent, it’s unplayable, so that’s the current work.',
    ],
    tech: 'React Native and TypeScript on Supabase, Postgres and PostGIS; a Python pipeline using Meta’s SAM 2 plus the iPhone’s LiDAR and ARKit data to put each line on the terrain in 3D.',
    images: [
      { src: '/img/rcx/jeep-lines.jpg', alt: 'A yellow RC Jeep on a cardboard-and-books test course with colored lines traced behind each tire', caption: 'Tire lines on the living-room test course.' },
      { src: '/img/rcx/test-feature.jpg', alt: 'App screen showing a 3D scan of the test course with many colored runs over it, a playback timeline marking 21 events, and a Record a run here button', caption: 'A scanned feature with every run on it, and a replay timeline of events.' },
      { src: '/img/rcx/hero-roots.jpg', alt: 'Six colored lines traced over tree roots, each one a run by an RC truck', caption: 'Six runs over the same roots.' },
      { src: '/img/rcx/tree-scan.jpg', alt: '3D scan of a tree trunk and its roots on a dark grid', caption: 'The roots feature, scanned.' },
    ],
    link: { label: 'RCxD on YouTube', href: 'https://www.youtube.com/@RCxDco' },
  },
  {
    slug: 'mr-pruner',
    year: '2026',
    name: 'Mr. Pruner',
    line: 'A gardening and yard-care service that pairs hard work with AI analysis to keep your yard clean and healthy, while keeping a photographic record of your plants to track their health over time.',
    summary:
      'This idea came from the intersection of ways to apply an API call for image, voice and text processing and my love of pruning plants. I was also interested in making an app strictly for “internal” use by a small business.',
    stats: [
      { figure: '12¢', label: 'AI cost per visit report' },
      { figure: '2 → 1', label: 'apps, after unifying the phone and desktop versions' },
      { figure: '3', label: 'architectures before the one that works' },
    ],
    story: [
      'The initial approach was just a script: take a folder of photos and notes from a yard job, make an API call to Claude to look at the images and notes, and output a PDF and HTML report to share with the customer and keep for company records. I wanted to keep all the data local, so no database setup was necessary.',
      'This became cumbersome quickly. Selecting photos, making retroactive notes, tossing them into a directory and sending that off had too many points of friction. So I opted for a two-sided approach, a desktop app and a mobile app: an easy UI in the field for voice notes and images, which get shot to my computer, where the desktop version picks up, performs the call, and shoots back the analysis.',
      'Not better, arguably more awful. After a few more iterations along these tail-chasing lines, I realized the two-sided architecture was biting me, and the local-only decision was holding back the entire experience and costing me time after every trip: get home, fuss with the watcher, wait around to make sure it got the right folder from the AirDrop. So I pivoted: unify the two versions, set up the backend on Supabase, and retire the old components of the image/text/voice-to-report pipeline. The new version now needs more testing in the field.',
      'The goal is an app that is easy to use in the field, generates good reports, and is totally optional for actually completing the yard work, yet adds real informational benefit. At about 12 cents per call, it’s worth it, at least at this scale.',
    ],
    bullets: {
      heading: 'What’s next',
      items: [
        'More field testing and UI/UX improvements before anything customer-facing exists',
        'A customer-facing side: see each of your plants, its history and an overall view of plant health; request and pay for services',
        'The final human touch: go back in and de-bloat, rewrite, annotate and humanize the codebase so it’s transferable to another developer',
      ],
    },
    closing: [
      'What I’ve learned so far: the initial framework, scope and choices you make are really quite important. It’s spookily similar to how differential equations are sensitive to initial conditions; a bit out of bounds at the start and the whole thing blows up. If you’re out of scope or lacking background knowledge when prompting a project, your progress gets spaghettified. The fix is to use the frameworks people are already using for AI development (checks, a decision log, a change log), and to use the AI itself to scope the project before building it.',
      'One step further back: if the initial idea isn’t crystalline, the feedback loop you’re about to have with your AI is going to suck. The clarity of the output is proportional to the clarity of the initial thought. What started as “just vibe-code a script that takes this stuff in a folder and shoots back a report” was actually a small-business management app with an AI data-processing component, calling for a database backend. Even that might be too large a scope. It’s tough.',
    ],
    tech: 'Expo (React Native) and Supabase; Python with Claude for the analysis; Whisper for local transcription; HTML and PDF reports from templates.',
    images: [
      { src: '/img/pruner/plant-records.jpg', alt: 'Concept mobile screens: your plants, a plant profile, and a history comparing two dates', caption: 'Every plant has a history you can scroll back through.' },
      { src: '/img/pruner/processing-review.jpg', alt: 'Concept screens: process a visit, review the report, ready to share', caption: 'Review before anything goes to the customer.' },
    ],
  },
  {
    slug: 'rockwood-displays',
    year: '2026',
    name: 'Rockwood Displays',
    indexLabel: 'Rockwood',
    line: 'Handmade granite-and-wood display pieces for mini RC crawlers, sold through a small shop site I built.',
    external: 'https://qwewe6.github.io/rockwood-displays/',
  },
];
