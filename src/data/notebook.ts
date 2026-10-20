// The notebook, written in FLOT's own terms so it can move to the FLOT site later unchanged.
//
//   cell   = one scanned page (holds content)
//   frame  = one folder of pages. Closed, it shows its cover cell. Open, it shows every cell.
//   links  = which frames lead to which, and which project a frame became.
//
// Blurbs marked `draft: true` were written by Claude from the images alone. Replace them with your own words
// and delete the flag. Only put a date on a cell if it's written on the page or you know it.

export type Cell = {
  id: string;
  img: string; // /img/notebook/<file>.jpg
  title: string;
  alt: string;
  date?: string; // as written on the page
  lines?: string[]; // transcribed lines from the page, word for word
};

export type Frame = {
  id: string;
  label: string;
  group: 'FLOT' | 'RCxDrive' | 'Boot camp';
  cover: string; // cell id shown when the frame is closed
  blurb: string;
  draft?: boolean;
  cells: Cell[];
  links?: string[]; // ids of frames this one leads to
  project?: { slug: string; name: string }; // where the idea went
};

export const frames: Frame[] = [
  {
    id: 'flot-examples',
    label: 'Examples',
    group: 'FLOT',
    cover: 'linguistics',
    draft: true,
    blurb:
      'Testing FLOT on other people’s ideas. A grammar diagram of “The man will hit the ball” from a Britannica entry on linguistics becomes nested frames: sentence, phrase, word. The oldest dated page here, from June 2020, does the same with a passage on critical thinking.',
    cells: [
      {
        id: 'linguistics',
        img: '/img/notebook/flot-linguistics.jpg',
        title: 'A sentence, in frames',
        alt: 'Hand-drawn nested frames breaking the sentence “The man will hit the ball” into noun phrase, verb phrase and individual words, beside a small sketch of the original grammar tree',
        lines: ['Britannica, #23, pg. 60, “linguistics” from:', 'Sentence', 'Noun Phrase · Verb Phrase · Noun Phrase', 'The · man · will · hit · the · ball'],
      },
      {
        id: 'critical-thinking',
        img: '/img/notebook/flot-critical-thinking.jpg',
        title: 'Critical thinking, translated',
        alt: 'Hand-drawn diagram: frames nested inside each other holding factual information, new learning and prior knowledge, linked out to a cell about supplying evidence',
        date: '6.10.2020',
        lines: ['Translation of “4. Critical Thinking”, pg 22', 'Use to creatively solve problems, invent new products, processes and ideas', 'Prior knowledge · New learning · Factual information', '“Draw out”', 'At the conceptual level'],
      },
    ],
    links: ['flot-overview'],
  },
  {
    id: 'flot-overview',
    label: 'Overview',
    group: 'FLOT',
    cover: 'seven-steps',
    draft: true,
    blurb:
      'The whole language on one page, in seven steps from simple to complex: things, containers for things, relations among things, then cells, frames and links built out of them. The second page is everything at once.',
    cells: [
      {
        id: 'seven-steps',
        img: '/img/notebook/flot-overview-7-steps.jpg',
        title: 'Seven steps',
        alt: 'A page of hand-drawn bubbles laying out FLOT step by step: dots for things, cells and squares as containers, lines as relations, then groupings of cells, frames and links',
        date: '4/23/22',
        lines: ['7 Steps', 'Simple → complex', 'thing · things · containers for things · relations among things', 'organize, name, identify, collect, hold, blend', 'show progression, change, relation, causation, affect', 'these are related'],
      },
      {
        id: 'visualizer',
        img: '/img/notebook/flot-overview-visualizer.jpg',
        title: 'The FLOT visualizer',
        alt: 'A dense hand-drawn field of dots, cells, frames, grids and links spreading out across the page, with arrows pointing to labelled examples',
        lines: ['things · containers for things · relations among things', 'cells and content', 'cells, frames, links', 'FLOT visualizer'],
      },
    ],
    links: ['flot-content', 'flot-cells', 'flot-frames', 'flot-links'],
    project: { slug: 'flot', name: 'FLOT' },
  },
  {
    id: 'flot-content',
    label: 'Content and medium',
    group: 'FLOT',
    cover: 'content',
    draft: true,
    blurb:
      'Page one of the workbook. Content gets the simplest mark there is, a solid dot, because content can be just about anything. Then the dot moves from “FLOT space” onto a medium, like a page or a screen.',
    cells: [
      {
        id: 'content',
        img: '/img/notebook/flot-content.jpg',
        title: 'What is content?',
        alt: 'Handwritten page: a single dot labelled content, then a dot with arrows radiating out to movies, ideas, books, words, objects, symbols, thoughts, images, equations, tweets, websites and sentences',
        lines: [
          'What is content? In FLOT the word content (not to be confused with contents) is represented by a solid dot.',
          'This is because “content” can be just about anything…',
        ],
      },
      {
        id: 'space-medium',
        img: '/img/notebook/flot-space-medium.jpg',
        title: 'FLOT space to medium',
        alt: 'Four rows of drawings: a blob labelled FLOT space with an arrow to a rectangle labelled medium, first empty, then holding a cell, a cell with a link, and two linked cells',
        lines: ['“FLOT space” → Medium'],
      },
    ],
    links: ['flot-cells'],
  },
  {
    id: 'flot-cells',
    label: 'Cells',
    group: 'FLOT',
    cover: 'cell',
    draft: true,
    blurb:
      'The cell has one job: to hold. A boundary, an inside and an outside, and cells can sit inside cells. Black cats inside cats, dogs inside animals.',
    cells: [
      {
        id: 'cell',
        img: '/img/notebook/flot-cells.jpg',
        title: 'The cell',
        alt: 'Handwritten page: a circle labelled “to hold”, a cell with boundary, inside and outside marked, a cell holding the word “words”, and nested cells of cats holding black cats and animals holding dogs',
        lines: ['The cell: to hold', 'Anatomy of a cell: boundary, inside, (outside)', 'What do cells hold? They hold things', 'Can we put a cell into another cell? Yes!', 'grouping of nested cells'],
      },
    ],
    links: ['flot-frames'],
  },
  {
    id: 'flot-frames',
    label: 'Frames',
    group: 'FLOT',
    cover: 'pathway',
    draft: true,
    blurb:
      'Frames start closed. Open one and the toaster, oven and fridge inside get a label: kitchen. This is the rule the notebook page you’re reading is built on.',
    cells: [
      {
        id: 'pathway',
        img: '/img/notebook/flot-frames-pathway.jpg',
        title: 'Let’s explore the pathway',
        alt: 'Hand-drawn sequence: content becomes a closed form, then an expanded frame holding toaster, oven and fridge cells, then a frame labelled Kitchen',
        lines: ['Let’s explore the pathway!', 'content → closed form → expanded form', 'what goes here?… label', 'Kitchen: toaster, oven, fridge'],
      },
      {
        id: 'frames-closed',
        img: '/img/notebook/flot-frames.jpg',
        title: 'Frames start closed',
        alt: 'Handwritten page: a small closed frame holding a dot, then a closed frame expanding into three larger frames',
        lines: ['Frames start closed', 'content of a closed frame', 'Closed frames can be expanded…'],
      },
    ],
    links: ['flot-links'],
  },
  {
    id: 'flot-links',
    label: 'Links',
    group: 'FLOT',
    cover: 'links',
    draft: true,
    blurb: 'Links, drawn loose and fast in marker. Dots and lines everywhere, one cell trying to hold a crowd of them.',
    cells: [
      {
        id: 'links',
        img: '/img/notebook/flot-links.jpg',
        title: 'Links',
        alt: 'Marker drawing of many dots joined by lines, scattered in and around one large loose cell, with a branching shape at the lower left',
      },
    ],
  },
  {
    id: 'rcxd-sketches',
    label: 'Early sketches',
    group: 'RCxDrive',
    cover: 'app-sketch',
    draft: true,
    blurb:
      'New Year’s Day 2026, eight months before the first line of RCxDrive code: record part of a session and share it to your profile, or YouTube. The pages after it map everything a run could connect to, from GPS and motor data to cameras, parts lists and reviews, and the first note that runs could produce vehicle scores.',
    cells: [
      {
        id: 'app-sketch',
        img: '/img/notebook/rcxd-app-sketch.jpg',
        title: 'RCx app',
        alt: 'Pencil sketch: a person with a phone filming an RC truck, the phone showing a live view, a save step for video, data and both, and a shared session appearing on another person’s screen',
        date: '1.1.26',
        lines: ['RCx App', 'Record part of a session and share it (link to profile, or YouTube?)', 'Record a part of a live session and send it to a friend', 'Save file: video (iPhone) · video + data (HUD) · both', 'Share session'],
      },
      {
        id: 'activity',
        img: '/img/notebook/rcxd-activity.jpg',
        title: 'Start activity, save activity',
        alt: 'Pencil sketch of an RC truck on a platform with notes: start activity, save activity, stores GPS path data, terrain knowledge, gear knowledge, skill expression',
        lines: ['Start activity → save activity (stores GPS path data)', 'terrain knowledge · gear knowledge · skill expression', '…difficulty or ease …what rigs work best on what routes', 'Can generate vehicle scores!'],
      },
      {
        id: 'hub',
        img: '/img/notebook/rcxd-hub.jpg',
        title: 'Everything a run touches',
        alt: 'Pencil mind map with RC crawler at the centre, linked to a Fury Tek motor system and app, Garmin watch, Insta360 camera and app, GPS box and app, transmitter, parts list, reviews, questions, age and price',
        lines: ['vehicles · terrain · drivers · results', 'RC crawler', 'Fury Tek brushless sensored system → energy usage data: voltage, current draw, RPM', 'Garmin watch · Insta360 camera · GPS box', 'record GPS activity: speed, duration, altitude, slope, wind, vert speed', 'also real time in video (overlay)'],
      },
      {
        id: 'info-structure',
        img: '/img/notebook/rcxd-info-structure.jpg',
        title: 'RCxD info structure',
        alt: 'Two notebook pages of pencil notes branching into trails, courses, roots, rocks, routes and lines, with notes on difficulty, popularity, rigs and community content',
        lines: ['RCxD info structure', 'trails · courses · roots · rocks · routes · lines', 'difficulty · number of visits (popularity)', 'tips + tricks · race results'],
      },
    ],
    links: ['rcxd-logo'],
    project: { slug: 'rcxdrive', name: 'RCxDrive' },
  },
  {
    id: 'rcxd-logo',
    label: 'Logo',
    group: 'RCxDrive',
    cover: 'logo',
    draft: true,
    blurb: 'A first pass at a mark: an R, and a C that’s grinning with one eye knocked out. About how a rig looks after a bad rollover.',
    cells: [
      {
        id: 'logo',
        img: '/img/notebook/rcxd-logo.jpg',
        title: 'RC',
        alt: 'Marker drawing of the letters R and C, where the C is a grinning face with an X for one eye',
      },
    ],
    project: { slug: 'rcxdrive', name: 'RCxDrive' },
  },
];

// Appended frames
frames.push({
  id: 'bootcamp-comic',
  label: 'Margins',
  group: 'Boot camp',
  cover: 'tables',
  draft: true,
  blurb:
    'Drawn during the data analytics boot camp. The turtle has heard this one before.',
  cells: [
    {
      id: 'tables',
      img: '/img/notebook/tables-all-the-way-down.jpg',
      title: 'Tables all the way down',
      alt: 'Pen comic: a frazzled student in an “I love data science” shirt says to a turtle, “Wait… so you’re telling me it IS tables all the way down?!” The turtle says “…”',
      lines: ['Wait… so you’re telling me it IS tables all the way down?!', 'I ♥ data science', '…'],
    },
  ],
  project: { slug: 'data-analytics-boot-camp', name: 'the boot camp' },
});

export const getCover = (f: Frame) => f.cells.find((c) => c.id === f.cover) ?? f.cells[0];
export const frameLabel = (id: string) => frames.find((f) => f.id === id)?.label ?? id;
