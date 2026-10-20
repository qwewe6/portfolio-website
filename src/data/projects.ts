// The projects. Each one gets a row on the home page and its own page at /work/<slug>.
// To add a project: copy one block, give it a new slug, drop images in public/img/<folder>/.

export type Img = { src: string; alt: string; caption?: string; tall?: boolean; contain?: boolean; bg?: string };

export type Section = {
  heading: string;
  body: string[];
  steps?: { title: string; text: string; href?: string; linkLabel?: string }[];
  images?: Img[];
  quote?: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  color: 'yellow' | 'cyan' | 'violet' | 'green' | 'red';
  role: string;
  status: string;
  year: string;
  stack: string[];
  facts: { figure: string; label: string }[];
  links: { label: string; href: string }[];
  // One line for a hiring manager: what this project demonstrates about how you work. Optional.
  shows?: string;
  cover: Img;
  sections: Section[];
};

export const projects: Project[] = [
  {
    slug: 'rcxdrive',
    name: 'RCxDrive',
    tagline: 'Strava for RC crawlers.',
    summary:
      'A mobile app for the RC crawling community: a map of places to crawl, a garage for your rigs, and lines traced from phone video so you can compare how different trucks took the same rock.',
    color: 'yellow',
    role: 'Co-founder. Product, research and the video pipeline, built with Stephen Marshall.',
    status: 'In development, milestone 3',
    year: '2026',
    stack: [
      'React Native (Expo)',
      'TypeScript',
      'Supabase, Postgres and PostGIS',
      'MapLibre',
      'Python',
      'SAM 2',
      'ARKit and LiDAR',
    ],
    facts: [
      { figure: '81', label: 'crawl spots around Denver seeded into the map' },
      { figure: '46', label: 'product and engineering decisions on record' },
      { figure: '270+', label: 'commits since September' },
    ],
    links: [{ label: 'YouTube channel', href: 'https://www.youtube.com/@RCxDco' }],
    shows:
      'Product research (a teardown of Strava), a written plan with 46 logged decisions, and a video pipeline built with a partner: how I scope and ship something customer-facing.',
    cover: {
      src: '/img/rcx/hero-roots.jpg',
      alt: 'Six coloured lines traced over a tangle of tree roots, each one a different run by an RC truck',
      caption: 'Six runs over the same tree roots, each traced from phone video.',
      tall: true,
    },
    sections: [
      {
        heading: 'On paper first',
        body: [
          'The first sketch is dated New Year’s Day 2026: record part of a session and share it to your profile, or YouTube. The pages after it map everything a run could plug into, from GPS and motor data to a watch and a camera, and end on a note that runs could produce vehicle scores. Eight months later the first commit went in.',
        ],
        images: [
          { src: '/img/notebook/rcxd-app-sketch.jpg', alt: 'Pencil sketch dated 1.1.26: a person filming an RC truck with a phone and sharing the session to a friend', caption: 'RCx App, 1.1.26.', tall: true },
          { src: '/img/notebook/rcxd-hub.jpg', alt: 'Pencil mind map with RC crawler at the centre linked to motor data, a Garmin watch, an Insta360 camera, a GPS box, parts lists and reviews', caption: 'Everything a run touches.', tall: true },
          { src: '/img/rcx/sketch-and-scan.jpg', alt: 'A notebook page sketching the tree roots feature and its lines, propped next to a laptop showing the same feature as a 3D scan', caption: 'Still on paper first: the roots feature, sketched next to its 3D scan, September 2026.', tall: true },
        ],
      },
      {
        heading: 'Starting from Strava',
        body: [
          'Strava works because of four loops: you log what you did, friends give you kudos, segments turn the real world into a leaderboard, and the heatmap gives you somewhere new to go. I took Strava apart loop by loop and asked what each one becomes for someone who spends weekends driving 1/24 scale trucks over rocks.',
          'Most of it carries over. The run becomes the rig’s effort instead of yours. A segment becomes a feature, a specific rock or root system, and a line is one way over it. Two lines on the same rock can be wildly different in difficulty, so the matching has to know which line you took, not just where you were. That one difference shapes most of the back end.',
        ],
        quote: 'If it’s not on xDrive, it didn’t happen.',
      },
      {
        heading: 'It starts with the map',
        body: [
          'The app opens on a map centred on you. Before writing any of it I already had 81 crawling spots pinned in Google Maps from years of driving and from tips my YouTube viewers sent in. Those became the seed data: cleaned into CSV and GeoJSON, given distances from Denver, and loaded into PostGIS.',
          'The rest of the structure came from using it on my own phone and rewriting the plan: three tabs (community on the left, map in the middle, your profile on the right), a garage that lives on your profile so people visit each other’s pages, and a record button wherever you’d reach for it: on the map, your profile and each rig’s page.',
        ],
      },
      {
        heading: 'Tracing a line from video',
        body: [
          'The heart of the app is turning a phone clip of a run into a clean line over the feature. The first version found the truck by its colour, which worked for exactly two trucks and only with the camera perfectly still.',
          'The second version doesn’t care what colour your truck is.',
        ],
        steps: [
          { title: 'You point at your rig', text: 'Draw a box around the truck on the first frame. One tap of human input saves a lot of guessing later.' },
          { title: 'SAM 2 follows it', text: 'Meta’s Segment Anything 2 tracks that mask through the clip at 10 frames a second, in chunks so memory stays flat for any length of run.' },
          { title: 'It checks its own work', text: 'When the mask jumps, shrinks or disappears, the tracker flags that moment and asks for another tap rather than guessing.' },
          { title: 'The camera shake comes out', text: 'A homography back to the first frame cancels camera drift, ignoring the truck itself, then the path is smoothed and fitted to a curve.' },
          { title: 'You get two things back', text: 'A still of the line drawn on the rock, and a share clip where the line grows behind the truck as it drives.' },
        ],
        images: [
          { src: '/img/rcx/feature1.jpg', alt: 'A blue RC truck climbing a tall boulder with three traced lines', caption: 'Feature 1: three lines on a boulder face.', tall: true },
          { src: '/img/rcx/feature2.jpg', alt: 'A blue RC truck on a low slab boulder with two traced lines in yellow and cyan', caption: 'Feature 2: contact lines on a slab.', tall: true },
        ],
      },
      {
        heading: 'Then into 3D',
        body: [
          'Real runs don’t happen with the phone on a tripod. You walk alongside your truck. In 2D, the line smears across the ground as the camera moves. Using the iPhone’s ARKit position data and LiDAR depth, the pipeline lifts the truck into 3D, drops the line onto the terrain underneath it, and keeps it stuck there however the camera moves.',
          'That also gives real numbers for free: length, climb, descent and speed for every run. Six runs over the tree roots below ranged from 0.7 to 1.9 metres, with climbs from 4 to 25 centimetres.',
        ],
        images: [
          { src: '/img/rcx/2d-vs-3d.jpg', alt: 'Before and after frames: the 2D line smears as the camera moves; the 3D line stays on the ground', caption: 'Top: the 2D method, smearing as I walk. Bottom: the 3D line staying on the ground.' },
          { src: '/img/rcx/topdown.jpg', alt: 'Top-down view of a scanned tree root feature with six coloured lines and their lengths and climbs', caption: 'The same six runs from above, gravity-aligned, with a 50 cm scale.', tall: true },
          { src: '/img/rcx/scan-3d.jpg', alt: '3D scan of a tree trunk and roots in a viewer with 3D, Top and Side buttons', caption: 'A reference scan of the feature, built from a 43-second walk around it.', tall: true },
        ],
      },
      {
        heading: 'Your rig, scanned',
        body: [
          'Every truck is different, so the app starts by learning yours. You scan your rig once with the phone and it goes into your garage as a 3D model. From then on the pipeline knows its exact size and where its wheels sit, which is what lets it draw a separate trail for each tyre.',
        ],
        images: [
          { src: '/img/rcx/rig-photo.jpg', alt: 'A yellow 1/24 scale Jeep RC crawler on a wooden table', caption: 'The rig.' },
          { src: '/img/rcx/rig-scan.jpg', alt: 'The same yellow Jeep as a 3D scan in the app viewer, with 3D, Top and Side buttons', caption: 'The rig, scanned into the garage.' },
        ],
      },
      {
        heading: 'Every wheel, every event',
        body: [
          'By the end of September the pipeline was running on real runs recorded in the app. It follows each wheel on its own, so you see where every tyre went, not just the truck. It marks events along the way, like a reverse, a slide or a rollover, and you can replay any run in 3D with a timeline, racing it against another run if you like.',
          'All of it rolls up into your stats, per rig or across the whole garage: time on the road, distance crawled, height climbed, the steepest grade you took on, and how many times you crashed.',
        ],
        images: [
          { src: '/img/rcx/tyre-lines.jpg', alt: 'A yellow RC Jeep on an indoor test course of rocks and books, with a separate coloured trail drawn behind each wheel', caption: 'One trail per wheel, on the indoor test course.' },
          { src: '/img/rcx/reverse-replay.jpg', alt: 'App screen replaying a run in 3D with a timeline marking a reverse at 8.1 seconds, and wheel toggles for front and rear, driver and passenger', caption: 'Replay, with a reverse caught at 8.1 seconds.', tall: true },
          { src: '/img/rcx/stats.jpg', alt: 'App stats screen: 2 min 45 s on the road, 21 ft crawled, 3.1 ft climbed, steepest 52 degrees, 4 steep sections and 5 crashes', caption: 'Stats across the garage.', tall: true },
        ],
      },
      {
        heading: 'What’s next',
        body: [
          'Pairing with Racebox telemetry over Bluetooth, so a run carries speed, tilt and motor data alongside the line. That feeds a crawler score per feature, leaderboards on each line, and the moment the whole thing is built for: a YouTuber crawls a line, and their viewers go out and try to beat it.',
        ],
      },
    ],
  },
  {
    slug: 'rc-crawl-map',
    name: 'RC Crawl Map',
    tagline: 'The first version of the idea.',
    summary:
      'Before RCxDrive had a name, I strapped a Racebox GPS logger to my truck, drove lines at Red Rocks Elementary, and wrote a small Python script and Leaflet map to put those runs on satellite imagery.',
    color: 'cyan',
    role: 'Solo. Built on my own a few months after the boot camp.',
    status: 'Prototype, late 2025',
    year: '2025',
    stack: ['Racebox GPS logger', 'Python and Pandas', 'JavaScript', 'Leaflet', 'Esri satellite tiles', 'CesiumJS'],
    facts: [
      { figure: '6', label: 'lines driven, logged and mapped' },
      { figure: '24', label: 'GPS readings a second from the Racebox' },
      { figure: '26 min', label: 'of recorded driving across both sides of the rocks' },
    ],
    links: [],
    shows:
      'Taking what a course taught and turning it into a working tool within months, then being plain about its limits and what to build next.',
    cover: {
      src: '/img/rcmap/racebox-lines.jpg',
      alt: 'Six small maps of RC truck runs at Red Rocks Elementary drawn from Racebox GPS: Bottom to Top, Hill Climb, White Wedge, Big Red Traverse, Red River and Red Hill, each with start and finish points and driving time',
      caption: 'The six runs, redrawn from the original Racebox files.',
      contain: true,
      bg: '#22302b',
    },
    sections: [
      {
        heading: 'Logging a run',
        body: [
          'A Racebox is a small GPS and motion logger made for real cars. I mounted one on my crawler and recorded runs on the white and red sandstone at Red Rocks Elementary: position, altitude, speed, g-force, lean angle and gyro, 24 times a second. The longest run, Big Red Traverse, is more than ten minutes and 15,000 readings.',
        ],
      },
      {
        heading: 'From spreadsheet to map',
        body: [
          'I built the map in late 2025 with what I’d learned in the boot camp’s mapping module, alongside some plain Python practice to keep my skills sharp.',
        ],
        steps: [
          { title: 'Convert the files', text: 'A Python script reads every exported CSV with Pandas, keeps the latitude and longitude, and writes each run out as a JSON line.' },
          { title: 'Put the spots on a map', text: 'A Leaflet map over Esri satellite imagery, centred on Colorado, with a marker for each crawl spot and a short description of the rock.' },
          { title: 'Click into a spot', text: 'Choosing a spot zooms to its outline and drops a start marker for every line recorded there.' },
          { title: 'Click into a line', text: 'Choosing a line draws the full run with start and finish markers and fits the map to it.' },
          { title: 'Try it in 3D', text: 'A quick CesiumJS test drew the Red Hill line on a 3D globe, to see whether terrain could come next.' },
        ],
      },
      {
        heading: 'What it taught me',
        body: [
          'It worked, and it made the idea feel real. It also showed the limits. GPS wanders by a metre or more, and on a single rock that can be the difference between one line and the next. Every run needed a logger on the truck, and every spot had to be typed into the code by hand.',
          'RCxDrive is my answer to each of those: spots in a real database, lines traced from phone video, and an app instead of a script.',
        ],
      },
    ],
  },
  {
    slug: 'mr-pruner',
    name: 'Mr. Pruner',
    tagline: 'A gardener who keeps records.',
    summary:
      'Monthly yard and plant care where every visit produces a report with photos of each plant, what was found, what was done, and how it compares to last month. The software behind it runs on my phone and Mac.',
    color: 'green',
    role: 'Founder. Designed the service and built the software.',
    status: 'Working end to end on real visits',
    year: '2026',
    stack: [
      'Python',
      'Claude',
      'Whisper (local)',
      'Expo phone app',
      'SQLite',
      'Jinja2 HTML and PDF reports',
      'Three.js',
      'GitHub Actions',
    ],
    facts: [
      { figure: '52%', label: 'of customers who don’t come back were happy with the work' },
      { figure: '~12¢', label: 'AI cost per visit report' },
      { figure: '46', label: 'decisions logged while building it' },
    ],
    links: [],
    shows:
      'Customer retention thought through from the research up: why people leave, and a service, a workflow and monthly reports designed to fix it.',
    cover: {
      src: '/img/pruner/drawing.jpg',
      alt: 'Whiteboard marker drawing of a pitchfork next to a flowering shrub, labelled Mr. Pruner, yard work and weed pulling',
      caption: 'Where it started: a whiteboard drawing that is still the brand mark.',
      contain: true,
    },
    sections: [
      {
        heading: 'The problem is memory',
        body: [
          'Before building anything I looked at why home service customers don’t come back. Only about 38% book a second job, and in more than half of the cases where they don’t, they were satisfied with the work. The top reason is that they forgot the contractor’s information. Customers on maintenance plans stay at 89% against 42%.',
          'Nobody hiring a gardener is asking for AI. They’re asking what was actually done, and whether anyone will remember their yard next month. So the pitch is a gardener who keeps records. The AI is what makes those records affordable, not the product.',
        ],
        quote: 'Churn is a memory problem, not a quality or price problem.',
      },
      {
        heading: 'One visit, start to finish',
        body: [
          'Each month includes a plant check-up, one free plant trade (we dig it up, move it and replant it) and an hour of yard work. The visit runs the same way every time, so the record is comparable month to month.',
        ],
        steps: [
          { title: 'Walk through with the customer', text: 'Press capture and let them talk. A voice memo starts, the camera opens, and one tap files it under the nearest plant using GPS.' },
          { title: 'Do the work', text: 'Capture at each stop, tick tasks off, log materials with a receipt photo, and nudge start time and breaks with big buttons.' },
          { title: 'End walk', text: 'Walk it again with them and hand over a service summary PDF on the spot: hours, cost, what they asked for and what got done.' },
          { title: 'Back at home', text: 'AirDrop the visit to the Mac. Voice memos are transcribed locally with Whisper and every photo is matched to its plant.' },
          { title: 'A person, then the model, then a person', text: 'I look at every photo first. Claude fills a fixed form per plant with its history in view. I review and approve before the customer’s copy exists.' },
          { title: 'Reports go out', text: 'Templates turn the approved findings into a technician report and a customer report, and the customer’s is emailed.' },
        ],
      },
      {
        heading: 'Reports that read the same every month',
        body: [
          'An AI report that changes shape every month is useless as a record. So the model never writes the report. It fills a fixed form, the model version is pinned, prompts are versioned, and templates write the words. When I correct something during review, the correction is tagged so I can see what kinds of mistakes add up over time.',
          'Customer photos never leave the Mac by accident: a pre-commit hook refuses media files, and any customer can be completely forgotten with one command.',
        ],
        images: [
          { src: '/img/pruner/processing-review.jpg', alt: 'Concept screens: process a visit, review the report, ready to share', caption: 'Concept for the processing and review screens.' },
          { src: '/img/pruner/plant-records.jpg', alt: 'Concept mobile screens: your plants, a plant profile for English lavender, and plant history comparing two dates', caption: 'Concept for plant pages: every plant has a history you can scroll back through.' },
        ],
      },
      {
        heading: 'Where it’s going',
        body: [
          'Next is a customer app: your plants, your reports, and a way to ask for help. Further out are the parts of the original plan I’m most excited about: plant trades between neighbours, a garden you can explore as a little world, and smart stakes and drip kits that keep watching between visits.',
          'For now the honest claim is the record itself. You’ll know what your garden looked like every month, and so will we.',
        ],
        images: [
          { src: '/img/pruner/garden-world.jpg', alt: 'Concept art of a customer’s garden as an explorable illustrated world with labelled areas', caption: 'Concept for the garden world view.' },
          { src: '/img/pruner/valley.jpg', alt: 'A 3D rendered stylised garden valley with paths and a pond', caption: 'A first pass at the world in Three.js.' },
        ],
      },
    ],
  },
  {
    slug: 'rockwood-displays',
    name: 'Rockwood Displays',
    tagline: 'Display obstacles worthy of the rig that’s on it.',
    summary:
      'Handmade granite and wood display pieces for 1/24 scale RC crawlers, with lights, sold through a small shop site I built and keep refining.',
    color: 'violet',
    role: 'Maker. Designed and built the displays and the website.',
    status: 'Site live, first piece finished',
    year: '2026',
    stack: ['Granite and wood', 'CR2032 lighting', 'HTML, CSS and JavaScript', 'GitHub Pages'],
    facts: [
      { figure: '60 lb', label: 'of granite hauled home on an RC trailer' },
      { figure: '1/24', label: 'scale: SCX24, FCX24, FCX24m and similar' },
      { figure: '3', label: 'rounds of revisions to the shop site' },
    ],
    links: [{ label: 'Visit the shop', href: 'https://qwewe6.github.io/rockwood-displays/' }],
    shows:
      'Writing and editing customer-facing copy over three rounds, and shipping a small site without fuss.',
    cover: {
      src: '/img/rockwood/aaron-01.jpg',
      alt: 'A yellow RC crawler perched on a pink granite rock wrapped in a handmade wooden frame',
      caption: 'The Aaron, the first Rockwood display.',
      tall: true,
    },
    sections: [
      {
        heading: 'The Rockwood story',
        body: [
          'During my walk in the park with my RC truck and trailer, I ran across some choice pieces of granite. So naturally, I gathered about 60 pounds of the stuff, loaded it onto my RC trailer, strapped it down with a singular bungee cord, and headed home. The haul cost me a trailer tire and a 3S battery, but the rocks were delivered back to home base (Theft? Allegedly?).',
          'I get home, unload the rocks, set the rock pictured in The Aaron display to the side, put my rig on it and sent a picture to Aaron. He liked it, but informed me that his wife doesn’t allow rocks inside the house. Valid. So I set out to make a display that she would allow indoors.',
          'It wasn’t 10 mins later and I had an idea sketched out. Before I knew it the first Rockwood Display Obstacle was born: a one-of-a-kind, handmade display built for mini and micro RC crawlers, a display worthy of the rig that’s on it.',
        ],
        images: [
          { src: '/img/rockwood/rock-text.jpg', alt: 'Phone photo of a yellow RC Jeep on a granite rock, sent as a text captioned Display rock', caption: 'The text that started it.', tall: true },
          { src: '/img/rockwood/sketch.jpg', alt: 'Pencil sketch of the display frame around the rock with notes', caption: 'The sketch, ten minutes later.', tall: true },
          { src: '/img/rockwood/lights.jpg', alt: 'Pencil sketch planning the lighting and coin battery placement', caption: 'Planning the lights.', tall: true },
        ],
      },
      {
        heading: 'Built to be driven on',
        body: [
          'Most people spend a few hundred dollars on a rig and then set it on a stand that was never meant to last. A Rockwood display is a piece you can leave on the shelf, or pull down and crawl across whenever you want. Each one is one of a kind because each rock is.',
        ],
        images: [
          { src: '/img/rockwood/aaron-05.jpg', alt: 'A green RC truck with red wheels climbing the display', tall: true },
          { src: '/img/rockwood/aaron-04.jpg', alt: 'Underside view of a green RC truck on the display', tall: true },
          { src: '/img/rockwood/side.jpg', alt: 'Side view of a yellow RC crawler on the display', tall: true },
        ],
      },
      {
        heading: 'The shop',
        body: [
          'The site is deliberately plain: static HTML, CSS and JavaScript, no framework, the whole catalogue in one file so adding a display is a copy and paste. I wrote the brief, then reviewed it line by line over three rounds: cutting anything that felt like sales filler, rewriting the copy in my own words, fixing contrast and spacing, and planning a works-in-progress page that follows each display from rock to finished piece.',
        ],
      },
    ],
  },
  {
    slug: 'data-analytics-boot-camp',
    name: 'Data Analytics Boot Camp',
    tagline: 'Where the building started.',
    summary:
      'Six months of live, part-time classes at the University of Denver: Excel and VBA, Python and Pandas, SQL and MongoDB, web visualization, Tableau and machine learning, with weekly graded challenges and four team projects.',
    color: 'red',
    role: 'Student. Finished with an A and 494 hours earned.',
    status: 'Completed June 9, 2025',
    year: '2025',
    stack: [
      'Excel and VBA',
      'Python, NumPy and Pandas',
      'Matplotlib',
      'APIs and JSON',
      'SQL, Postgres and SQLAlchemy',
      'MongoDB',
      'HTML, CSS, JavaScript and Leaflet',
      'Tableau',
      'Machine learning',
    ],
    facts: [
      { figure: '494', label: 'hours earned, December 2024 to June 2025' },
      { figure: '24', label: 'weekly modules across six units' },
      { figure: '4', label: 'team projects: energy, crowdfunding, national parks and credit' },
    ],
    links: [{ label: 'Boot camp work on GitHub', href: 'https://github.com/qwewe6?tab=repositories' }],
    shows:
      'Six months of Python, SQL and visualization learned part time while working full time, with four team projects and a final one that taught me when data can’t carry the answer.',
    cover: {
      src: '/img/about/du-certificate.jpg',
      alt: 'University of Denver certificate: Maxwell Becker has successfully completed the Data Analytics Boot Camp, June 9, 2025, 494 hours earned',
      caption: 'Certificate of completion from the University of Denver College of Professional Studies.',
      contain: true,
    },
    sections: [
      {
        heading: 'The course',
        body: [
          'I took the University of Denver’s Data Analytics Boot Camp part time, live online: three three-hour classes a week, office hours around them, and a graded challenge most weeks. Graduating meant finishing every team project and missing no more than four classes.',
          'It was the first time I wrote code every week, and it’s the reason the projects on this site exist. Along the way I also drew the comic below.',
        ],
        images: [
          { src: '/img/notebook/tables-all-the-way-down.jpg', alt: 'Pen comic: a frazzled student in an “I love data science” shirt says to a turtle, “Wait… so you’re telling me it IS tables all the way down?!” The turtle says “…”', caption: 'Tables all the way down.' },
        ],
      },
      {
        heading: 'Six units, in order',
        body: [],
        steps: [
          { title: 'Excel crash course', text: 'Pivot tables, statistical modelling and forecasting, and VBA scripts to automate the repetitive parts.' },
          { title: 'Python data analytics', text: 'Core Python, then NumPy, Pandas and Matplotlib, plus pulling live data from APIs and parsing the JSON.' },
          { title: 'Databases and data ethics', text: 'SQL in Postgres and pgAdmin, advanced queries with SQLAlchemy, NoSQL with MongoDB, and the ethics of using data, including algorithmic bias and privacy.' },
          { title: 'Visualization', text: 'HTML, CSS and JavaScript for interactive charts on the web, and Leaflet for maps.' },
          { title: 'Advanced topics', text: 'Tableau for business dashboards, Hadoop and big data tools, and supervised and unsupervised machine learning through neural networks.' },
          { title: 'Final project', text: 'A data visualization application built with a small team, from idea to finished tool.' },
        ],
      },
      {
        heading: 'The weekly challenges',
        body: [
          'Most weeks ended with a graded individual challenge. They included analysing a company’s financial records and an election’s vote counts in plain Python, a school district’s budget and test results in Pandas, a drug trial’s results with Matplotlib, weather across hundreds of cities pulled live from an API, an employee database designed and queried in SQL, a climate analysis of Hawaii served through a small Flask API, earthquake data mapped with Leaflet, and a neural network in TensorFlow trained to predict which charity applicants would put their funding to good use. Each one is its own repository on my GitHub.',
        ],
      },
      {
        heading: 'Four team projects',
        body: [
          'Every few weeks the class split into small teams to answer a question of our own with the tools from that unit. These are the four I worked on, in order.',
        ],
        steps: [
          {
            title: 'Energy use and emissions',
            text: 'February 2025, team of four. Does how much energy a country uses, and what kind, drive its greenhouse gas emissions? We pulled global energy data, cleaned it in Pandas and ran regressions in SciPy. China led on both energy use and emissions, US emissions were drifting down even as consumption rose, and population alone explained only about a third of the variation in emissions. My part was wind and coal consumption in the US and Canada from 2018 to 2023.',
            href: 'https://github.com/Adrian-W06/Project1_Group4',
            linkLabel: 'Project repository',
          },
          {
            title: 'Crowdfunding ETL pipeline',
            text: 'March 2025, team of four. We took messy Excel exports of crowdfunding campaigns and their contacts and parsed the nested fields with Pandas, JSON and regular expressions. My part was the database: how the data splits into category, subcategory, contact and campaign tables, the keys that tie each campaign to its category and its contact, and the entity relationship diagram the team built the rest around.',
          },
          {
            title: 'National Parks biodiversity database',
            text: 'April 2025, team of four. Species observations, species details and park information from Kaggle, cleaned with Pandas and Polars, joined in SQL and loaded into a PostgreSQL database through psycopg2, so you can ask which parks hold which species and how endangered they are.',
            href: 'https://github.com/mrbowman86/data-engineering-project',
            linkLabel: 'Project repository',
          },
          {
            title: 'Predicting loan types',
            text: 'June 2025, final project, team of four. We trained decision tree and random forest models on 1,000 credit records to predict what kind of loan a person would take, and tuned both with grid search. Neither got past 40% accuracy. Digging into why, we concluded the dataset looked randomly generated, with no real link between the features and the loan type. The takeaway: no model fixes data that doesn’t carry the answer.',
            href: 'https://github.com/qwewe6/Credit_Loan_Analysis',
            linkLabel: 'Project repository',
          },
        ],
      },
      {
        heading: 'Where it shows up now',
        body: [
          'The RCxDrive line pipeline is Python from end to end, and its map runs on Postgres with PostGIS. Mr. Pruner’s analysis pipeline, database and reports are Python and SQLite. The ethics module, and that loan project, made me careful about what data can honestly claim. Mr. Pruner won’t advertise that plants do better under its care until its records can show it.',
        ],
      },
    ],
  },
  {
    slug: 'flot',
    name: 'FLOT',
    tagline: 'A notebook of shapes for thinking.',
    summary:
      'A visual language I’ve been sketching by hand, and the process I wrote to get thirteen pages of pencil notes into a form an AI can read.',
    color: 'yellow',
    role: 'Author.',
    status: 'Ongoing notebook',
    year: '2026',
    stack: ['Pen and paper', 'Scanning at 300–600 DPI', 'ChatGPT and Gemini for transcription', 'JSON'],
    facts: [
      { figure: '13', label: 'handwritten workbook pages' },
      { figure: '4', label: 'primary forms: content, cell, link, frame' },
    ],
    links: [],
    shows:
      'Writing a process other people (and a model) can follow, and documenting it well enough to repeat.',
    cover: {
      src: '/img/notebook/flot-overview-7-steps.jpg',
      alt: 'A page of hand-drawn bubbles laying out FLOT step by step, from dots for things to cells, frames and links',
      caption: 'Seven steps, from the workbook, dated April 23, 2022. More pages are in the notebook.',
      contain: true,
      bg: '#f6f4ed',
    },
    sections: [
      {
        heading: 'The idea',
        body: [
          'FLOT is a way of drawing ideas with a few shapes. Content, which can be anything (a word, a book, a thought, an equation), is a solid dot. A cell is a circle whose only job is to hold content. Links link. Frames hold structures and can be closed, at which point the frame’s contents is its label, or opened back up.',
          'From those pieces you can build lines (A then B then C) and stacks (C holding B holding A), and operators that turn one into the other. The motivation is a simple observation: true ideas can often be expressed in more than one way, and it helps to be able to see both.',
        ],
        images: [
          { src: '/img/notebook/flot-content.jpg', alt: 'Handwritten workbook page defining content as a solid dot, with arrows out to movies, ideas, books, words, symbols and more', caption: 'Content: page one of the workbook.', tall: true },
          { src: '/img/notebook/flot-cells.jpg', alt: 'Handwritten page on the cell: to hold, with boundary, inside and outside, and nested cells of cats and black cats', caption: 'The cell: to hold.', tall: true },
          { src: '/img/notebook/flot-frames-pathway.jpg', alt: 'Hand-drawn sequence of content becoming a closed frame, then an open frame of toaster, oven and fridge labelled Kitchen', caption: 'A frame opening up and getting its label.', tall: true },
        ],
      },
      {
        heading: 'Getting paper into a machine',
        body: [
          'I wanted the workbook digitized. Fed the raw pencil-and-ink scans, ChatGPT returned mostly noise. So I wrote down a process for preparing pages before any model sees them.',
        ],
        steps: [
          { title: 'Clean the page', text: 'Re-ink faint pencil with a fine matte black pen, only where I can’t read it at arm’s length. Cover crossed-out sections with white paper. Let it dry.' },
          { title: 'Scan, then print a working copy', text: 'Scan everything into one document and print it slightly darker. Annotate the copy so the original never degrades.' },
          { title: 'Label it', text: 'Label-maker tags in the margins for titles, page numbers, dates, section changes and figure captions.' },
          { title: 'Scan in colour at 300–600 DPI', text: 'So the model can tell black ink, blue ink and white labels apart.' },
          { title: 'Ask for structure, not prose', text: 'Prompt the model as a data annotator and have it return only JSON: title, metadata, paragraphs and diagram steps.' },
        ],
      },
      {
        heading: 'What changed',
        body: [
          'A later pass with Gemini came back with the workbook’s actual title, its topics, the definitions of each form and step-by-step descriptions of the diagrams. The lesson I took from it: most of the quality is decided before the model ever sees the page.',
        ],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
