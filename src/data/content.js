// All site text and links live here so you can edit them in one place.
// Anything in [square brackets] is a placeholder waiting for your real content.

export const profile = {
  firstName: 'Samantha',
  fullName: 'SAMANTHA SUÑGA',
  nickname: 'SAMMI',
  oneLiner: 'Computer Science student and Head Layout Artist of The Forefront.',
  intro:
    "A self-taught designer who somehow ended up leading a team of artists while keeping up with a ComSci degree. No formal training, just years of trial, error, and fixing layouts at 2am until things finally clicked. If you’re looking for a design intern who will care a little too much about your element placement, my contacts are right below.",
  email: 'samanthasunga.work@gmail.com',
  location: 'Olongapo City, Philippines',
  github: 'https://github.com/max-sng',
}

export const aboutCards = [
  {
    title: 'EDUCATION',
    body: "3rd-year BS Computer Science at Gordon College, expected 2028. Dean's Lister, Top 18 on the BSCS Dean's List.",
  },
  {
    title: 'PUBLICATION',
    roles: [
      { role: 'Head Layout Artist', org: 'The Forefront', when: 'Aug 2025 – present' },
      { role: 'Junior Graphic Artist', org: 'The Forefront', when: 'Aug 2024 – Aug 2025' },
    ],
  },
  {
    title: 'CERTIFICATIONS',
    lines: ['TESDA NC III, Visual Graphic Design', 'Cisco: HTML & CSS Essentials · Python Essentials 1 & 2'],
  },
]

export const skillGroups = [
  { title: 'TECHNICAL', color: '#B3121B', items: ['HTML', 'CSS', 'JavaScript', 'Python', 'GitHub', 'VS Code'] },
  { title: 'CREATIVE', color: '#4A8FD8', items: ['Publication layout', 'Editorial design', 'Graphic design', 'Live layout', 'Template systems', 'Figma', 'Canva'] },
  { title: 'LEADERSHIP', color: '#C99A2E', items: ['Team lead', 'Project management', 'Sprint planning', 'Quality assurance', 'Mentoring'] },
]

// Cards in the Home page work strip
export const workStrip = [
  { name: 'The Frontline', kind: 'Development', cover: { color: '#B3121B', accent: '#E4B849', label: '#B3121B', sticker: 'stars3', lines: ['THE FRONTLINE'] }, to: '#development' },
  { name: 'Luto Newsletter', kind: 'Layout', cover: { color: '#E4B849', accent: '#B3121B', label: '#FFF4D6', sticker: 'sun', lines: ['LUTO NEWSLETTER'] }, to: '#luto' },
  { name: 'Kontesera E-Magazine', kind: 'Layout', cover: { color: '#4A8FD8', accent: '#FFF4D6', label: '#1F4E86', sticker: 'cool', labelWidth: 190, lines: ['KONTESERA', 'E-MAGAZINE'] }, to: '#kontesera' },
  { name: 'Templates & Promos', kind: 'Layout', cover: { color: '#FFF4D6', accent: '#1F4E86', label: '#E4B849', sticker: 'greenstar', labelWidth: 190, lines: ['TEMPLATES', '& PROMOS'] }, to: '#templates' },
  { name: 'The Frontline', kind: 'Case study', cover: { color: '#1F4E86', accent: '#B3121B', label: '#E4B849', sticker: 'spiral', lines: ['THE FRONTLINE'] }, to: '#case-study' },
]

// Projects page: the three folders
export const folders = [
  {
    label: 'Layout', title: 'LAYOUT', color: '#B3121B',
    blurb: 'Publication work for The Forefront, grouped by project.',
    skills: ['Publication layout', 'Editorial design', 'Graphic design', 'Live layout', 'Figma', 'Canva'],
    cta: 'Open Layout', to: '#forefront',
    files: [
      { name: 'Luto Newsletter', kind: 'NEWSLETTER', img: '/images/work/luto-cover.webp', to: '#luto' },
      { name: 'Kontesera E-Magazine', kind: 'E-MAGAZINE', img: '/images/work/kontesera-cover.webp', to: '#kontesera' },
      { name: 'Templates & promos', kind: 'TEMPLATES', img: '/images/work/tmpl-news.webp', to: '#templates' },
    ],
  },
  {
    label: 'Development', title: 'DEVELOPMENT', color: '#C8102E',
    blurb: 'The Frontline: a CMS and digital news archive for campus journalism.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'GitHub'],
    cta: null, to: '#development',
    files: [
      { name: 'The Frontline', kind: 'WEB APP', img: '/images/frontline-logo.webp', fit: 'contain', to: '#development' },
      { name: 'Dashboard', kind: 'SCREEN', big: 'DASHBOARD', to: '#development' },
      { name: 'Articles editor', kind: 'SCREEN', big: 'EDITOR', to: '#development' },
      { name: 'Approval Queue', kind: 'SCREEN', big: 'QUEUE', to: '#development' },
    ],
  },
  {
    label: 'Case Study', title: 'CASE STUDY', color: '#4A8FD8',
    blurb: 'How The Frontline went from problem to working build, told as a front page.',
    skills: ['Team lead', 'Project coordination', 'Requirements', 'Documentation', 'User flows'],
    cta: 'Read the full case study', to: '#case-study',
    files: [
      { name: 'Project overview', kind: 'SECTIONS 01–02', big: 'OVERVIEW', to: '#case-study' },
      { name: 'Understanding the user', kind: 'SECTION 03', big: 'USERS', to: '#cs-users' },
      { name: 'Starting the design', kind: 'SECTION 04', big: 'DESIGN', to: '#cs-design' },
      { name: 'Refining the design', kind: 'SECTION 05', big: 'REFINE', to: '#cs-refine' },
      { name: 'Going forward', kind: 'SECTION 06', big: 'NEXT', to: '#cs-forward' },
    ],
  },
]

export const frontline = {
  tagline: 'For tertiary-level campus journalism. Built by a team of 3.',
  brief:
    'A web-based CMS and digital news archive. Correspondents write, editors review and advisers approve in one workspace; published work appears on a public portal organized by section and stays in the archive.',
  facts: [
    ['MY ROLE', 'Team Lead & Documentation Lead'],
    ['TEAM', 'TriDev, 3 people'],
    ['USERS', 'Correspondents, editorial board, adviser, readers'],
    ['STACK', 'HTML, CSS, JavaScript, Firebase'],
  ],
  // Replace src with your screenshot paths, e.g. '/images/frontline/dashboard.webp'
  screens: [
    { name: 'Login', slug: 'login', src: '/images/frontline/login.webp' },
    { name: 'Dashboard', slug: 'dashboard', src: '/images/frontline/dashboard.webp' },
    { name: 'Articles editor', slug: 'articles', src: '/images/frontline/editor-full.webp' },
    { name: 'Approval Queue', slug: 'approval-queue', src: '/images/frontline/approval-queue.webp' },
    { name: 'Public portal', slug: 'portal', src: '/images/frontline/portal.webp' },
    { name: 'Archive', slug: 'archive', src: '/images/frontline/archive.webp' },
  ],
}

export const forefront = {
  luto: {
    title: 'LUTO NEWSLETTER',
    award: { rank: '8th', text: 'Most Outstanding Newsletter in Luzon · AOCPA 2025' },
    heyzine: 'https://heyzine.com/flip-book/174e9b64fb.html',
  },
  kontesera: {
    title: 'KONTESERA E-MAGAZINE',
    award: { rank: '2nd', text: 'Best News Page in Luzon · YJPFC 2026' },
    heyzine: 'https://heyzine.com/flip-book/f7b85def52.html',
  },
  board: [
    { title: 'News template', src: '/images/work/tmpl-news.webp', ratio: '4 / 5', rot: -3 },
    { title: 'In-depth template', src: '/images/work/tmpl-indepth.webp', ratio: '4 / 5', rot: 2 },
    { title: 'Column template', src: '/images/work/tmpl-column.webp', ratio: '4 / 5', rot: -1 },
    { title: 'Balita template', src: '/images/work/tmpl-balita.webp', ratio: '4 / 5', rot: 3 },
    { title: 'cancelledt era promo', src: '/images/work/promo-cancelledt.webp', ratio: '1 / 1', rot: -2 },
    { title: 'Siklab 2024 promo', src: '/images/work/promo-siklab.webp', ratio: '1 / 1', rot: 2 },
    { title: 'What your favorite coffee says about you', src: '/images/work/pub-coffee.webp', ratio: '4 / 5', rot: -2 },
    { title: 'National Heroes Day', src: '/images/work/pub-heroes-day.webp', ratio: '4 / 5', rot: 3 },
    { title: 'Bonifacio Day', src: '/images/work/pub-bonifacio-day.webp', ratio: '1 / 1', rot: -1 },
    { title: 'Duyog literary folio promo', src: '/images/work/promo-duyog.webp', ratio: '1 / 1', rot: 2 },
    { title: 'GC overpayment news', src: '/images/work/news-overpayment.webp', ratio: '4 / 5', rot: -3 },
    { title: 'Back on Campus news feature', src: '/images/work/feature-backlog.webp', ratio: '3 / 2', rot: 1 },
    { title: 'The Version of Me That Never Was', src: '/images/work/lit-never-was.webp', ratio: '1200 / 1006', rot: -2 },
  ],
}

// Case study copy, structured after the UX case study template.
// Evidence tags: 'built' (in the repo), 'designed' (SE documents only),
// 'proposed' (not built yet). Personas and pain points are assumption-based.
export const caseStudy = {
  title: 'The Frontline: A CMS and Digital News Archive for Campus Journalism',
  team: 'Team TriDev · Samantha A. Suñga, Maegan Elaine S. Mañez, Renz Mark D. Sabeniano',

  // 01 · Project overview
  product:
    'A web-based CMS and news archive for campus journalism. Correspondents write, editors review and advisers approve in one workspace. Published stories go live on a public portal and stay in the archive.',
  users: [
    { t: 'CORRESPONDENTS', d: 'Writers, artists and photojournalists.' },
    { t: 'EDITORIAL BOARD', d: 'Student editors who review and forward stories.' },
    { t: 'ADVISER', d: 'Faculty who give final approval and manage users.' },
    { t: 'READERS', d: 'Students and staff reading the portal.' },
  ],
  duration: 'May 2025 – present',
  problem:
    'Drafts, reviews and approvals are scattered across files and chats, and past stories are hard to find.',
  goal:
    'One place to take a story from draft to publication, with every published piece easy to find by section.',

  // 02 · My role
  role: 'TEAM LEAD · PROJECT MANAGEMENT · TESTING & QA',
  roleSummary:
    'I coordinated our tasks, led team meetings and was the team’s main contact with our beneficiary. I also managed planning and documentation, including the Mini Project Brief and the Requirements & Analysis Package, and tested the system for bugs, defects and security vulnerabilities.',
  teamRoles: [
    { name: 'Samantha Suñga', role: 'Team lead, project management, documentation & QA' },
    { name: 'Maegan Mañez', role: 'Design, architecture & implementation' },
    { name: 'Renz Sabeniano', role: 'Testing & quality' },
  ],

  // 03 · Understanding the user
  research:
    'This was a software engineering project, not a research study. We based our users on the publication’s real editorial chain and our requirements work, not formal interviews.',
  painPoints: [
    { t: 'Unknown story status', d: 'Writers can’t see where a story stands.', fix: 'Status badges and notifications.' },
    { t: 'Scattered feedback', d: 'Feedback is spread across chats and files.', fix: 'Comments attached to each article.' },
    { t: 'Unclear approval', d: 'No one clearly owns the final go-ahead.', fix: 'One Approval Queue with adviser sign-off.' },
    { t: 'Lost back issues', d: 'Old stories are hard to retrieve.', fix: 'Section pages and an archive sorted by year.' },
  ],
  personas: [
    {
      role: 'THE CORRESPONDENT',
      who: 'Student writer, artist or photojournalist',
      goals: 'Submit stories and know when they’re accepted or need changes.',
      frustrations: 'Unclear review status and lost feedback.',
      statement: 'A busy student writer needs a clear submit-and-track flow, because not knowing a story’s status delays publication.',
    },
    {
      role: 'THE EDITOR',
      who: 'Editorial board member',
      goals: 'Review and forward stories on time.',
      frustrations: 'Stories arrive through many channels.',
      statement: 'A student editor needs one review queue, because scattered submissions slow the editorial cycle.',
    },
    {
      role: 'THE ADVISER',
      who: 'Faculty adviser',
      goals: 'Give final approval and manage users.',
      frustrations: 'Little time; only wants to see work that’s ready.',
      statement: 'A busy faculty adviser needs to see only stories awaiting approval, because sorting through everything wastes time.',
    },
  ],
  journey: [
    { stage: 'Register', thought: 'Can I start right away?', pain: 'Role choice may confuse', fix: 'Plain role cards' },
    { stage: 'Draft', thought: 'Is my work saved?', pain: 'Fear of losing work', fix: 'Automatic draft saving' },
    { stage: 'Submit', thought: 'Did it go through?', pain: 'No confirmation', fix: 'Status change and notification' },
    { stage: 'Revise', thought: 'What should I fix?', pain: 'Vague comments', fix: 'Feedback tied to the article' },
    { stage: 'Published', thought: 'Can others find it?', pain: 'Hard to find later', fix: 'Section pages and archive' },
  ],

  // 04 · Starting the design
  wireframeNote:
    'Our design package has wireframes for 12 screens. These two carry the core idea: write a story once, review it in one place.',
  wireframes: [
    {
      screen: 'Articles editor',
      img: '/images/frontline/wf-editor.webp', // SE package Fig. 8
      source: 'WIREFRAME · FIG. 8',
      elements: [
        { el: 'Section tags with suggestions', why: 'Stories land in the right section.' },
        { el: 'Cover photo and cutline fields', why: 'Stories arrive complete with captions and credits.' },
        { el: 'Preview modal', why: 'Writers see what readers will see.' },
      ],
    },
    {
      screen: 'Approval Queue',
      img: '/images/frontline/approval-queue.webp', // no wireframe exists; final screen with a sample entry
      source: 'FINAL UI',
      elements: [
        { el: 'Queue list with search', why: 'One place to work instead of many channels.' },
        { el: 'Status badges', why: 'Everyone sees where a story stands.' },
        { el: 'Adviser sign-off step', why: 'Clear authority to publish.' },
      ],
    },
  ],
  flow: [
    { who: 'CORRESPONDENT', what: 'Drafts & submits' },
    { who: 'EDITORIAL BOARD', what: 'Reviews & forwards' },
    { who: 'ADVISER', what: 'Approves' },
    { who: 'PUBLISHED', what: 'Live on the portal', hot: true },
    { who: 'ARCHIVE', what: 'Kept by year' },
  ],
  testPlan: {
    intro:
      'We haven’t run usability sessions yet. The plan: moderated, task-based sessions with every role, tracking task success, errors and time on task.',
    tasks: [
      { task: 'Register and submit a story', measure: 'Completed without help', watch: 'Role selection; section tags' },
      { task: 'Review and forward a story', measure: 'Completed in the Approval Queue', watch: 'Finding the right item; feedback entry' },
      { task: 'Approve and publish', measure: 'Adviser sign-off completed', watch: 'Understanding status labels' },
      { task: 'Find a published article', measure: 'Found by section or search', watch: 'Section names; search wording' },
    ],
  },

  // 05 · Refining the design (design revisions, not usability-test results)
  revisions: [
    {
      t: 'Articles editor',
      before: 'Basic metadata fields.',
      after: 'Tag suggestions, font size control, a fixed cutline field and Preview.',
      beforeImg: '/images/frontline/wf-editor.webp', afterImg: '/images/frontline/editor-full.webp',
    },
    {
      t: 'Approval flow',
      before: 'The editorial board publishes.',
      after: 'The adviser gives final approval.',
      beforeSteps: ['Correspondent', 'Editorial board', 'Published'],
      afterSteps: ['Correspondent', 'Editorial board', 'Adviser', 'Published'],
      newStep: 'Adviser',
    },
  ],
  screens: [
    { name: 'Login', cap: 'One sign-in for every role', img: '/images/frontline/login.webp' },
    { name: 'Public portal', cap: 'Published work by section', img: '/images/frontline/portal.webp' },
    { name: 'Dashboard', cap: 'Overview for staff', img: '/images/frontline/dashboard.webp' },
    { name: 'Articles editor', cap: 'Write, tag, preview', img: '/images/frontline/editor.webp' },
    { name: 'Approval Queue', cap: 'One place for review (sample entry)', img: '/images/frontline/approval-queue.webp' },
  ],
  prototype: {
    text: 'The prototype is the working web app, built with HTML, CSS, JavaScript and Firebase.',
    url: null, // set to the deployed Vercel URL to show the button
    pending: 'Live link coming soon. The site is under maintenance.',
  },
  accessibility: [
    { t: 'Readable type and color', d: 'DM Sans and Lora on maroon and charcoal. Maroon on white is about 15:1 contrast.' },
    { t: 'Clear feedback', d: 'Toasts confirm actions, and deletes ask for confirmation.' },
    { t: 'Labels and reduced motion', d: 'ARIA labels on key controls; animations respect reduced motion. Coverage is still partial.' },
  ],

  // 06 · Going forward
  impact:
    'One workspace for a story’s whole journey, with published work easy to find. We expect clearer status and less lost feedback, but haven’t measured it yet.',
  learned:
    'A workflow tool works when every role can see where work stands. Leading requirements and documentation showed me how early decisions, like adding the adviser role, shape the interface, and why docs and code need to stay in sync.',
  challenges: [
    'Uploads stalled with no storage service set up, so we added timeouts and clear error messages.',
    'Fixed a sideways-scrolling layout bug and a broken profile link.',
  ],
  nextSteps: [
    { t: 'Run real usability tests', d: 'With every role, using the plan above. Our design decisions are still untested.' },
    { t: 'Finish the archive', d: 'Set up image storage, open profiles to visitors, and organize by volume, issue and school year, including PDF e-magazines.' },
    { t: 'Audit accessibility', d: 'Check contrast, keyboard use, alt text and phone layouts on every page.' },
  ],
}
