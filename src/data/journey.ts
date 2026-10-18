export type JourneyIcon = 'script' | 'workshop' | 'laptop' | 'award' | 'globe' | 'sparkle' | 'mic' | 'book';

const svg = (paths: string) =>
  `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" aria-hidden="true">${paths}</svg>`;

export const journeyIcons: Record<JourneyIcon, string> = {
  script: svg('<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>'),
  workshop: svg('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 0 0 7.75"/>'),
  laptop: svg('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>'),
  award: svg('<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>'),
  globe: svg('<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'),
  sparkle: svg('<path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z"/>'),
  mic: svg('<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>'),
  book: svg('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'),
};

export type JourneyKind = 'workshop' | 'calligraphy' | 'talk' | 'launch';

export type JourneyChip = {
  icon: JourneyIcon;
  label: string;
};

export type JourneyStop = {
  label: string;
};

export type JourneyLink = {
  href: string;
  label: string;
};

export type JourneyEvent = {
  id: string;
  year: number;
  bsYear: string;
  monthShort: string;
  dateFormatted: string;
  nepaliDate: string;
  title: string;
  summary: string;
  details: string;
  location: string;
  kinds: JourneyKind[];
  stops?: JourneyStop[];
  links?: JourneyLink[];
  chips: JourneyChip[];
};

export const journeyKindFilters: { id: 'all' | JourneyKind; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'workshop', label: 'Workshop' },
  { id: 'calligraphy', label: 'Live calligraphy' },
  { id: 'talk', label: 'Talk' },
  { id: 'launch', label: 'Launch' },
];

export const journeyHighlights = [
  { year: '2018', label: 'First workshop at Itumbahal' },
  { year: '2019', label: 'ATypI Tokyo and Lipijatra' },
  { year: '2021', label: '50th workshop and teacher training' },
  { year: '2024', label: 'Foundation and Nithya Ranjana' },
  { year: '2026', label: 'Nepalakshara and keyboard launch' },
];

export const journeyEvents: JourneyEvent[] = [
  {
    id: 'cj-2018-04',
    year: 2018,
    bsYear: '2075 BS',
    monthShort: 'Apr',
    dateFormatted: 'April 14, 2018',
    nepaliDate: '1 Baisakh 2075 BS',
    title: '1st Callijatra Workshop at Itumbahal & Early Valley Series',
    summary:
      'Inaugurated the Callijatra public workshop movement on Nepali New Year 2075 BS at historic Itumbahal, quickly expanding to Swoyambhu, Miss Newa, Ason, Janabahal, and Banepa.',
    details:
      'Starting on 1st Baisakh 2075 (14 April 2018) at Itumbahal, Kathmandu, Callijatra launched hands-on community workshops teaching Ranjana Lipi and Nepal Lipi in public courtyards (bahas). Following the inaugural event, the team conducted consecutive sessions at Swoyambhu, Miss Newa KTM, Ason, Janabahal, and Banepa (Kavre).',
    location: 'Itumbahal, Kathmandu & Kavre',
    kinds: ['workshop'],
    stops: [
      { label: 'Itumbahal — 14 Apr 2018' },
      { label: 'Swoyambhu' },
      { label: 'Miss Newa, Kathmandu' },
      { label: 'Ason' },
      { label: 'Janabahal' },
      { label: 'Banepa, Kavre' },
    ],
    chips: [
      { icon: 'script', label: '1st Workshop' },
      { icon: 'workshop', label: '6 Heritage Sites' },
      { icon: 'sparkle', label: '1 Baisakh 2075' },
    ],
  },
  {
    id: 'cj-2018-05',
    year: 2018,
    bsYear: '2075 BS',
    monthShort: 'May',
    dateFormatted: 'May 19, 2018',
    nepaliDate: '5 Jestha 2075 BS',
    title: 'Madhyapur Thimi Heritage Workshop',
    summary:
      'Brought the Callijatra Ranjana Lipi learning campaign to the historic artisan town of Thimi, Bhaktapur, engaging local youth and heritage enthusiasts.',
    details:
      'Held on May 19, 2018 in Thimi, Bhaktapur, this workshop connected local students and traditional craftspeople with the calligraphic structure of Ranjana Lipi and Nepal Lipi.',
    location: 'Thimi, Bhaktapur',
    kinds: ['workshop'],
    stops: [
      { label: 'Thimi, Bhaktapur — 19 May 2018' },
    ],
    chips: [
      { icon: 'workshop', label: 'Community Session' },
      { icon: 'script', label: 'Ranjana Lipi' },
    ],
  },
  {
    id: 'cj-2018-08',
    year: 2018,
    bsYear: '2075 BS',
    monthShort: 'Aug',
    dateFormatted: 'August 4–25, 2018',
    nepaliDate: 'Shrawan–Bhadra 2075 BS',
    title: 'Mangalbazar Patan & Bhaktapur Dattatreya Sessions',
    summary:
      'Conducted back-to-back public square calligraphy workshops at Patan Durbar Square (Aug 4) and Dattatreya Square in Bhaktapur (Aug 25).',
    details:
      'Throughout August 2018, Callijatra activated major Durbar Squares across the Kathmandu Valley, hosting open-air workshops at Mangalbazar, Patan on August 4 and Dattatreya, Bhaktapur on August 25.',
    location: 'Patan & Bhaktapur',
    kinds: ['workshop', 'calligraphy'],
    stops: [
      { label: 'Mangalbazar, Patan — 4 Aug' },
      { label: 'Dattatreya, Bhaktapur — 25 Aug' },
    ],
    chips: [
      { icon: 'script', label: 'Durbar Squares' },
      { icon: 'workshop', label: 'Public Courtyards' },
    ],
  },
  {
    id: 'cj-2018-09',
    year: 2018,
    bsYear: '2075 BS',
    monthShort: 'Sep',
    dateFormatted: 'September 15–29, 2018',
    nepaliDate: 'Bhadra–Ashwin 2075 BS',
    title: 'Panga (Kirtipur), Tokha & Out-of-Valley Expansion (13th–22nd)',
    summary:
      'Expanded to Panga Kirtipur (Sep 15) and Tokha (Sep 29), followed by workshops in Khokana, Besisahar (Lamjung), Pokhara, Echoes in the Valley Bhotahity, and Panauti.',
    details:
      'Between September 2018 and early 2019, completing the first 22 workshops of 2075 BS, Callijatra reached Panga Kirtipur, Tokha, Saubaha Lalitpur, Khona (13th), Miss Little Newa (14th), Besisahar Lamjung (15th), a children\'s workshop (16th), CPC Engineers Workshop (17th), Pokhara (18th), Sattya (19th), Bhotahity Echoes in the Valley (20th), Maitidevi (21st), and Panauti Kavre (22nd).',
    location: 'Kathmandu Valley, Lamjung & Pokhara',
    kinds: ['workshop'],
    stops: [
      { label: 'Panga, Kirtipur — 15 Sep' },
      { label: 'Tokha — 29 Sep' },
      { label: 'Saubaha, Lalitpur' },
      { label: 'Khona, Lalitpur (13th)' },
      { label: 'Miss Little Newa (14th)' },
      { label: 'Besisahar, Lamjung (15th)' },
      { label: 'Children\'s workshop (16th)' },
      { label: 'CPC engineers workshop (17th)' },
      { label: 'Pokhara (18th)' },
      { label: 'Sattya (19th)' },
      { label: 'Bhotahity, Echoes in the Valley (20th)' },
      { label: 'Maitidevi (21st)' },
      { label: 'Panauti, Kavre (22nd)' },
    ],
    chips: [
      { icon: 'workshop', label: 'Workshops #13–#22' },
      { icon: 'globe', label: 'Lamjung & Pokhara' },
      { icon: 'sparkle', label: 'Echoes in the Valley' },
    ],
  },
  {
    id: 'cj-2019-04',
    year: 2019,
    bsYear: '2076 BS',
    monthShort: 'Apr',
    dateFormatted: 'April 20, 2019',
    nepaliDate: '7 Baisakh 2076 BS',
    title: '23rd Callijatra at Kisipidi, Balambu & Southern Valley Tour',
    summary:
      'Opened the 2076 BS chapter at Kisipidi, Balambu (Baisakh 7, 2076), followed by community workshops in Thecho (Yala), Pharping, and Dhulikhel.',
    details:
      'Marking the 23rd official workshop on 7 Baisakh 2076 BS at Kisipidi, Balambu, the team continued directly into the 24th workshop at Thecho (Lalitpur), 25th at Pharping, and 26th at Dhulikhel.',
    location: 'Balambu, Thecho, Pharping & Dhulikhel',
    kinds: ['workshop'],
    stops: [
      { label: 'Kisipidi, Balambu — 7 Baisakh 2076 (23rd)' },
      { label: 'Thecho, Yala (24th)' },
      { label: 'Pharping (25th)' },
      { label: 'Dhulikhel (26th)' },
    ],
    chips: [
      { icon: 'script', label: '23rd–26th Workshops' },
      { icon: 'workshop', label: '7 Baisakh 2076' },
    ],
  },
  {
    id: 'cj-2019-06',
    year: 2019,
    bsYear: '2076 BS',
    monthShort: 'Jun',
    dateFormatted: 'June 1, 2019',
    nepaliDate: '18 Jestha 2076 BS · NS 1139',
    title: '27th Workshop at Miss Newa 1139 & Jawalakhel Session',
    summary:
      'Trained Miss Newa 1139 participants in indigenous scripts on June 1, followed by the 28th workshop at Jawalakhel (Tamakya) and Kirtipur Bal Sahitya Festival.',
    details:
      'The 27th workshop trained contestants of Miss Newa 1139 in Ranjana and Nepal Lipi. During this period, the team also hosted live calligraphy at Swoyambhu, Janabahal, and the Kirtipur Children\'s Literature (Bal Sahitya) Festival.',
    location: 'Kathmandu, Lalitpur & Kirtipur',
    kinds: ['workshop', 'calligraphy'],
    stops: [
      { label: 'Miss Newa 1139 — 1 Jun (27th)' },
      { label: 'Jawalakhel, Tamakya (28th)' },
      { label: 'Swoyambhu live calligraphy' },
      { label: 'Janabahal' },
      { label: 'Kirtipur Bal Sahitya Festival' },
    ],
    chips: [
      { icon: 'sparkle', label: 'Miss Newa 1139' },
      { icon: 'book', label: 'Bal Sahitya Festival' },
    ],
  },
  {
    id: 'cj-2019-07',
    year: 2019,
    bsYear: '2076 BS',
    monthShort: 'Jul',
    dateFormatted: 'July 13, 2019',
    nepaliDate: '28 Ashadh 2076 BS',
    title: 'Madhyapur Thimi Digutole Lipijatra Live Calligraphy',
    summary:
      'Hosted dedicated live calligraphy (Lipijatra) sessions at Digutole, Madhyapur Thimi and Echoes in the Valley, Ason.',
    details:
      'Moving beyond classroom workshops into festive street engagement, the Lipijatra live calligraphy initiative brought live name-writing and script exhibitions to Digutole, Madhyapur Thimi on July 13, 2019, and to Echoes in the Valley at Ason.',
    location: 'Madhyapur Thimi & Ason',
    kinds: ['calligraphy'],
    stops: [
      { label: 'Digutole, Madhyapur Thimi — 13 Jul' },
      { label: 'Echoes in the Valley, Ason' },
    ],
    chips: [
      { icon: 'script', label: 'Lipijatra Live' },
      { icon: 'sparkle', label: 'Digutole Thimi' },
    ],
  },
  {
    id: 'cj-2019-08',
    year: 2019,
    bsYear: '2076 BS',
    monthShort: 'Aug',
    dateFormatted: 'August 13–24, 2019',
    nepaliDate: 'Shrawan–Bhadra 2076 BS',
    title: 'Ilam Expansion, Thimi Gaijatra, Book Exhibition 1139 & Gunla',
    summary:
      'Reached eastern Nepal with the 29th workshop in Ilam (Aug 13), BlueBird College (Aug 22), Thimi Gaijatra (Aug 16), and Bode Laachi and Swoyambhu Gunla (Aug 24).',
    details:
      'August 2019 was one of Callijatra\'s busiest months: the 29th workshop in Ilam on Aug 13, Thimi Gaijatra Lipijatra on Aug 16, the 30th workshop at BlueBird College, Kumaripati on Aug 22, Ranjana Lipi calligraphy at Book Exhibition 1139, and dual live calligraphy stalls at Bode Laachi Thimi and Swoyambhu Gunla on Aug 24. Chapacho, Madhyapur Thimi also hosted a Lipijatra session that month.',
    location: 'Ilam, Lalitpur, Thimi & Swoyambhu',
    kinds: ['workshop', 'calligraphy'],
    stops: [
      { label: 'Ilam — 13 Aug (29th)' },
      { label: 'Thimi Gaijatra — 16 Aug' },
      { label: 'BlueBird College, Kumaripati — 22 Aug (30th)' },
      { label: 'Book Exhibition 1139' },
      { label: 'Chapacho, Madhyapur Thimi' },
      { label: 'Bode Laachi, Thimi — 24 Aug' },
      { label: 'Swoyambhu Gunla — 24 Aug' },
    ],
    chips: [
      { icon: 'globe', label: 'Ilam (29th)' },
      { icon: 'sparkle', label: 'Gaijatra & Gunla' },
      { icon: 'book', label: 'Book Expo 1139' },
    ],
  },
  {
    id: 'cj-2019-09',
    year: 2019,
    bsYear: '2076 BS',
    monthShort: 'Sep',
    dateFormatted: 'September 6, 2019',
    nepaliDate: '20 Bhadra 2076 BS',
    title: 'ATypI Tokyo 2019 & Live Calligraphy in Japan (31st)',
    summary:
      'Presented Nepal\'s indigenous scripts on the global typography stage at ATypI Tokyo 2019, alongside a live Ranjana calligraphy showcase in Tokyo on September 6.',
    details:
      'Marking its 31st milestone, Callijatra traveled to Tokyo, Japan for the Association Typographique Internationale (ATypI) 2019 conference and conducted live Ranjana calligraphy demonstrations for international typographers and visitors.',
    location: 'Tokyo, Japan',
    kinds: ['talk', 'calligraphy'],
    stops: [
      { label: 'ATypI Tokyo 2019 (31st)' },
      { label: 'Live calligraphy in Tokyo — 6 Sep' },
    ],
    chips: [
      { icon: 'globe', label: 'ATypI Tokyo 2019' },
      { icon: 'script', label: 'Tokyo Live Calligraphy' },
    ],
  },
  {
    id: 'cj-2019-11',
    year: 2019,
    bsYear: '2076 BS',
    monthShort: 'Nov',
    dateFormatted: 'November 16, 2019',
    nepaliDate: '30 Kartik 2076 BS',
    title: 'Pokhara Bhimsen Tole (33rd) & Wondey KTM (34th)',
    summary:
      'Following the 32nd workshop at Bhairav Mandir, Pokhara, Callijatra hosted two parallel workshops on Nov 16 in Pokhara Bhimsen Tole and Wondey, Kathmandu.',
    details:
      'Callijatra organized its 32nd session at Bhairav Mandir, Pokhara, and on November 16, 2019 held both the 33rd workshop at Bhimsen Tole, Pokhara and the 34th workshop at Wondey, Kathmandu.',
    location: 'Pokhara & Kathmandu',
    kinds: ['workshop'],
    stops: [
      { label: 'Bhairav Mandir, Pokhara (32nd)' },
      { label: 'Bhimsen Tole, Pokhara — 16 Nov (33rd)' },
      { label: 'Wondey, Kathmandu — 16 Nov (34th)' },
    ],
    chips: [
      { icon: 'workshop', label: '32nd–34th Workshops' },
      { icon: 'globe', label: 'Pokhara Chapter' },
    ],
  },
  {
    id: 'cj-2019-12',
    year: 2019,
    bsYear: '2076 BS',
    monthShort: 'Dec',
    dateFormatted: 'December 14–21, 2019',
    nepaliDate: 'Mangsir–Poush 2076 BS',
    title: 'Basantapur (35th) & Ramechhap Outreach (36th)',
    summary:
      'Closed out 2019 with heritage workshops at Basantapur Durbar Square on December 14 and outreach in Ramechhap on December 21.',
    details:
      'The 35th workshop took place in Basantapur on Dec 14, followed a week later by the 36th workshop in Ramechhap on Dec 21.',
    location: 'Basantapur & Ramechhap',
    kinds: ['workshop'],
    stops: [
      { label: 'Basantapur — 14 Dec (35th)' },
      { label: 'Ramechhap — 21 Dec (36th)' },
    ],
    chips: [
      { icon: 'workshop', label: '35th & 36th Sessions' },
      { icon: 'globe', label: 'Ramechhap Outreach' },
    ],
  },
  {
    id: 'cj-2020-01',
    year: 2020,
    bsYear: '2076 BS',
    monthShort: 'Jan',
    dateFormatted: 'January 4–25, 2020',
    nepaliDate: 'Poush–Magh 2076 BS',
    title: 'Haugabaha (37th) & Yala Dhwalkha (38th) in Lalitpur',
    summary:
      'Began 2020 in Patan\'s historic courtyards with the 37th workshop at Haugabaha on January 4 and the 38th workshop at Yala Dhwalkha on January 25.',
    details:
      'Focusing on Lalitpur (Yala) communities in January 2020, Callijatra hosted the 37th workshop at Houga Baha (Jan 4) and the 38th at Yala Dhwalkha (Jan 25).',
    location: 'Lalitpur (Yala)',
    kinds: ['workshop'],
    stops: [
      { label: 'Houga Baha, Yala — 4 Jan (37th)' },
      { label: 'Yala Dhwalkha — 25 Jan (38th)' },
    ],
    chips: [
      { icon: 'script', label: 'Yala Courtyards' },
      { icon: 'workshop', label: '37th & 38th Workshops' },
    ],
  },
  {
    id: 'cj-2020-02',
    year: 2020,
    bsYear: '2076 BS',
    monthShort: 'Feb',
    dateFormatted: 'February 8, 2020',
    nepaliDate: '25 Magh 2076 BS',
    title: '39th Workshop in Nuwakot & 40th at Aeloi',
    summary:
      'Traveled to Nuwakot on February 8 for the 39th workshop, followed by the 40th session at Sonika Office (Aeloi).',
    details:
      'Before pandemic lockdowns began, Callijatra completed its 39th in-person workshop in Nuwakot on February 8, 2020 and its 40th session with the Aeloi team at Sonika Office.',
    location: 'Nuwakot & Kathmandu',
    kinds: ['workshop'],
    stops: [
      { label: 'Nuwakot — 8 Feb (39th)' },
      { label: 'Sonika Office, Aeloi (40th)' },
    ],
    chips: [
      { icon: 'globe', label: 'Nuwakot (39th)' },
      { icon: 'workshop', label: 'Aeloi Session (40th)' },
    ],
  },
  {
    id: 'cj-2020-09',
    year: 2020,
    bsYear: '2077 BS',
    monthShort: 'Sep',
    dateFormatted: 'September 25, 2020',
    nepaliDate: '9 Ashwin 2077 BS',
    title: 'ATypI All Over Online (42nd) & Rotaract Madhyapur Virtual (43rd)',
    summary:
      'Pivoted to digital workshops during 2020, presenting twice at the global ATypI 2020 All Over online conference and hosting an online session with Rotaract Madhyapur.',
    details:
      'Adapting to global lockdowns, Callijatra brought Ranjana Lipi online — conducting two global sessions at ATypI 2020 All Over (42nd) and collaborating with Rotaract Madhyapur on September 25, 2020 (43rd).',
    location: 'Online / Global',
    kinds: ['talk', 'workshop'],
    stops: [
      { label: 'ATypI 2020 All Over, two online sessions (42nd)' },
      { label: 'Rotaract Madhyapur — 25 Sep (43rd)' },
    ],
    chips: [
      { icon: 'laptop', label: 'ATypI 2020 (2× Online)' },
      { icon: 'globe', label: 'Rotaract Virtual' },
    ],
  },
  {
    id: 'cj-2020-12',
    year: 2020,
    bsYear: '2077 BS',
    monthShort: 'Dec',
    dateFormatted: 'December 19, 2020',
    nepaliDate: '4 Poush 2077 BS',
    title: '41st Callijatra Workshop in Pokhara',
    summary:
      'Returned to Pokhara on December 19, 2020 for the 41st workshop, re-engaging western Nepal\'s script learners and artists.',
    details:
      'Held on December 19, 2020, the 41st Callijatra session resumed physical script workshops in Pokhara.',
    location: 'Pokhara',
    kinds: ['workshop'],
    stops: [
      { label: 'Pokhara — 19 Dec 2020 (41st)' },
    ],
    chips: [
      { icon: 'workshop', label: '41st Workshop' },
      { icon: 'script', label: 'Pokhara Return' },
    ],
  },
  {
    id: 'cj-2021-01',
    year: 2021,
    bsYear: '2077 BS',
    monthShort: 'Jan',
    dateFormatted: 'January 9, 2021',
    nepaliDate: '25 Poush 2077 BS · NS 1141',
    title: '44th Workshop at Miss Newa 1141',
    summary:
      'Continued the tradition of training Miss Newa 1141 finalists in Nepal Lipi and Ranjana calligraphy on January 9, 2021.',
    details:
      'The 44th Callijatra workshop oriented Miss Newa 1141 participants on indigenous script literacy and cultural representation.',
    location: 'Kathmandu',
    kinds: ['workshop'],
    stops: [
      { label: 'Miss Newa 1141 — 9 Jan (44th)' },
    ],
    chips: [
      { icon: 'sparkle', label: 'Miss Newa 1141' },
      { icon: 'script', label: '44th Workshop' },
    ],
  },
  {
    id: 'cj-2021-03',
    year: 2021,
    bsYear: '2077 BS',
    monthShort: 'Mar',
    dateFormatted: 'March 22–27, 2021',
    nepaliDate: 'Chaitra 2077 BS',
    title: 'Glocal After School Online (45th) & Teachers\' ToT Launch (46th–47th)',
    summary:
      'Led Glocal After School\'s online session (Mar 22) and launched Training of Trainers for school teachers on Nepal Lipi and Ranjana at Shiksha Bibhag (Mar 27).',
    details:
      'To prepare for local curriculum implementation in schools, Callijatra began Training of Trainers (ToT) — the 45th session with Glocal After School online on March 22, the 46th ToT for teachers, and the 47th ToT for private schools at Shiksha Bibhag on March 27, 2021.',
    location: 'Shiksha Bibhag, Kathmandu & Online',
    kinds: ['workshop', 'talk'],
    stops: [
      { label: 'Glocal After School, online — 22 Mar (45th)' },
      { label: 'Teachers\' ToT (46th)' },
      { label: 'Shiksha Bibhag — 27 Mar (47th)' },
    ],
    chips: [
      { icon: 'book', label: 'Teachers ToT (#46–47)' },
      { icon: 'laptop', label: 'Glocal Online (#45)' },
    ],
  },
  {
    id: 'cj-2021-04',
    year: 2021,
    bsYear: '2077 BS',
    monthShort: 'Apr',
    dateFormatted: 'April 3, 2021',
    nepaliDate: '21 Chaitra 2077 BS',
    title: 'Private Schools ToT at Paropakar (48th) & Janaprabhat (49th)',
    summary:
      'Trained educators in Nepal Lipi and Ranjana script at Paropakar and Janaprabhat School, Kalimati on April 3.',
    details:
      'Callijatra held the 48th ToT at Paropakar and the 49th ToT at Janaprabhat, Kalimati on the same day, April 3, 2021.',
    location: 'Paropakar & Kalimati, Kathmandu',
    kinds: ['workshop'],
    stops: [
      { label: 'Paropakar — 3 Apr (48th)' },
      { label: 'Janaprabhat, Kalimati — 3 Apr (49th)' },
    ],
    chips: [
      { icon: 'workshop', label: '48th & 49th ToT' },
      { icon: 'book', label: 'School Curriculum' },
    ],
  },
  {
    id: 'cj-2021-07',
    year: 2021,
    bsYear: '2078 BS',
    monthShort: 'Jul',
    dateFormatted: 'July 10 – August 2021',
    nepaliDate: '26 Ashadh – Bhadra 2078 BS',
    title: '50th Milestone ToT at Jagatsundar & 51st at Paropakar',
    summary:
      'Celebrated the 50th Callijatra milestone with a teachers\' ToT at Jagatsundar on July 10, followed by the 51st ToT at Paropakar in August 2021.',
    details:
      'The 50th documented workshop was held at Jagatsundar on July 10, 2021, and the 51st at Paropakar in August. Together they strengthened teaching of Nepalbhasa and indigenous scripts in valley classrooms.',
    location: 'Jagatsundar & Paropakar, Kathmandu',
    kinds: ['workshop'],
    stops: [
      { label: 'Jagatsundar — 10 Jul (50th)' },
      { label: 'Paropakar — August (51st)' },
    ],
    chips: [
      { icon: 'award', label: '50th Workshop Milestone' },
      { icon: 'book', label: '51st Teachers ToT' },
    ],
  },
  {
    id: 'cj-2021-09',
    year: 2021,
    bsYear: '2078 BS',
    monthShort: 'Sep',
    dateFormatted: 'September 18, 2021',
    nepaliDate: '2 Ashwin 2078 BS',
    title: 'Sri Lanka Akurucon (52nd), Nepa Lipi Guthi (53rd) & Basantapur (54th)',
    summary:
      'Featured at Sri Lanka\'s Akurucon typography conference, collaborated with Nepa Lipi Pasa Puchah Guthi, and held the 54th session at Basantapur.',
    details:
      'Callijatra joined Akurucon in Sri Lanka in September 2021 (52nd), worked with Nepa Lipi Pasa Puchah Guthi (53rd), and held the 54th workshop at Basantapur on September 18, 2021. After that session, workshops multiplied so quickly across communities that public numbering paused until Callijatra Foundation was registered in 2024.',
    location: 'Sri Lanka & Basantapur',
    kinds: ['talk', 'workshop'],
    stops: [
      { label: 'Akurucon, Sri Lanka (52nd)' },
      { label: 'Nepa Lipi Pasa Puchah Guthi (53rd)' },
      { label: 'Basantapur — 18 Sep (54th)' },
    ],
    chips: [
      { icon: 'globe', label: 'Akurucon Sri Lanka' },
      { icon: 'script', label: '54th at Basantapur' },
    ],
  },
  {
    id: 'cj-2024-03',
    year: 2024,
    bsYear: '2080 BS',
    monthShort: 'Mar',
    dateFormatted: 'March 16–30, 2024',
    nepaliDate: 'Chaitra 2080 BS',
    title: 'Callijatra Foundation Registered & Nithya Ranjana Font Launch',
    summary:
      'Callijatra Foundation was registered in March 2024. The Nithya Ranjana Unicode font, Lipi Talk, and mobile app launched on March 16, followed by Itumbahal (Mar 23) and World Newah Day at Janabahal (Mar 30).',
    details:
      'Callijatra Foundation was formally registered in March 2024. On March 16, the team launched the Nithya Ranjana Unicode font — developed with Ek Type — alongside an exhibition, Lipi Talk, and app launch. Echoes in the Valley followed at Itumbahal on March 23, and World Newah Day at Janabahal on March 30.',
    location: 'Kathmandu (Itumbahal & Janabahal)',
    kinds: ['launch', 'talk', 'calligraphy'],
    stops: [
      { label: 'Foundation registered — March 2024' },
      { label: 'Nithya Ranjana font, Lipi Talk, and app — 16 Mar' },
      { label: 'Echoes in the Valley, Itumbahal — 23 Mar' },
      { label: 'World Newah Day, Janabahal — 30 Mar' },
    ],
    links: [
      { href: '/tools/webfont', label: 'Nithya Ranjana webfont' },
      { href: '/resources#newa-fonts', label: 'Nithya Ranjana on Resources' },
      { href: '/resources#apps', label: 'Lipi apps' },
    ],
    chips: [
      { icon: 'award', label: 'Nithya Ranjana Font' },
      { icon: 'laptop', label: 'App Launch' },
      { icon: 'sparkle', label: 'Foundation Registered' },
    ],
  },
  {
    id: 'cj-2024-04',
    year: 2024,
    bsYear: '2081 BS',
    monthShort: 'Apr',
    dateFormatted: 'April 20 – May 11, 2024',
    nepaliDate: 'Baisakh 2081 BS',
    title: 'Makkuse Ranjana Workshop Series, Marriott & Maru Hiti',
    summary:
      'Hosted a three-part Ranjana workshop series at Makkuse, Thamel (Apr 20, Apr 27, May 4), live calligraphy for BYD at Marriott Kathmandu (May 5), and Khadgi Samaj at Maru Hiti (May 11).',
    details:
      'Callijatra led three consecutive weekend workshops at Makkuse in Thamel, performed live calligraphy at Kathmandu Marriott Hotel on May 5, and joined Khadgi Samaj at Maru Hiti on May 11.',
    location: 'Thamel, Naxal & Maru Hiti, Kathmandu',
    kinds: ['workshop', 'calligraphy'],
    stops: [
      { label: 'Makkuse series 1, Thamel — 20 Apr' },
      { label: 'Makkuse series 2, Thamel — 27 Apr' },
      { label: 'Makkuse series 3, Thamel — 4 May' },
      { label: 'BYD live calligraphy, Marriott — 5 May' },
      { label: 'Khadgi Samaj, Maru Hiti — 11 May' },
    ],
    chips: [
      { icon: 'workshop', label: 'Makkuse 3-Part Series' },
      { icon: 'script', label: 'Marriott & Maru Hiti' },
    ],
  },
  {
    id: 'cj-2024-06',
    year: 2024,
    bsYear: '2081 BS',
    monthShort: 'Jun',
    dateFormatted: 'June 29, 2024',
    nepaliDate: '15 Ashadh 2081 BS',
    title: 'UNESCO Presentation on Ranjana Script & Nepalbhasa',
    summary:
      'Neetu Dangol presented Callijatra\'s digital preservation work for Ranjana script and Nepalbhasa at UNESCO on June 29, followed by the Edtraa workshop series in Thamel (July 13).',
    details:
      'On June 29, 2024, Neetu Dangol represented Callijatra at UNESCO with "Bridging the Digital Divide for Ranjana Script and Nepalbhasa Language." The Edtraa series 1 workshop followed in Thamel on July 13.',
    location: 'UNESCO & Thamel, Kathmandu',
    kinds: ['talk', 'workshop'],
    stops: [
      { label: 'UNESCO presentation — 29 Jun' },
      { label: 'Edtraa series 1, Thamel — 13 Jul' },
    ],
    chips: [
      { icon: 'globe', label: 'UNESCO Talk' },
      { icon: 'laptop', label: 'Digital Divide' },
    ],
  },
  {
    id: 'cj-2024-08',
    year: 2024,
    bsYear: '2081 BS',
    monthShort: 'Aug',
    dateFormatted: 'August 16 – September 1, 2024',
    nepaliDate: '1–16 Bhadra 2081 BS',
    title: 'Nepalakshara 2024, World Calligraphy Day & APAN 58',
    summary:
      'Nepalakshara — Nepal Calligraphy Festival 2024 and the 1st Ranjana Kutakshar workshop at Nepal Art Council (Aug 31–Sep 1), with World Calligraphy Day at Lohan Chowk (Aug 16) and APAN 58 (Aug 29).',
    details:
      'August 2024 included World Calligraphy Day with London Lakhey at Lohan Chowk (Aug 16), The Bazaar Market live calligraphy at Heritage Palace, Radhe Radhe, Bhaktapur (Aug 17), Neetu Dangol\'s presentation at the 58th Asia Pacific Advanced Network (APAN) meeting (Aug 29), and Nepalakshara 2024 at Nepal Art Council (Aug 31–Sep 1), including the 1st Ranjana Kutakshar workshop.',
    location: 'Nepal Art Council, Kathmandu & APAN',
    kinds: ['calligraphy', 'workshop', 'talk'],
    stops: [
      { label: 'World Calligraphy Day, Lohan Chowk — 16 Aug' },
      { label: 'The Bazaar Market, Radhe Radhe — 17 Aug' },
      { label: 'APAN 58 — 29 Aug' },
      { label: 'Nepalakshara 2024, Nepal Art Council — 31 Aug–1 Sep' },
      { label: '1st Ranjana Kutakshar workshop — 31 Aug' },
    ],
    chips: [
      { icon: 'sparkle', label: 'Nepalakshara Festival' },
      { icon: 'script', label: '1st Kutakshar Workshop' },
      { icon: 'globe', label: 'APAN 58' },
    ],
  },
  {
    id: 'cj-2024-09',
    year: 2024,
    bsYear: '2081 BS',
    monthShort: 'Sep',
    dateFormatted: 'September 6–28, 2024',
    nepaliDate: 'Bhadra–Ashwin 2081 BS',
    title: 'British Council Conference, Bangkok, KU Dhulikhel & Pokhara',
    summary:
      'CIMEX charity calligraphy at Marriott (Sep 6), indigenous-rights and Bangkok workshops (Sep 13–14), Pokhara (Sep 14), British Council South Asia (Sep 15), Kathmandu University (Sep 21), and Let\'s Read Translation (Sep 28).',
    details:
      'In September 2024, Lumu Shrestha joined a feminist solidarity workshop in Bangkok (Sep 13–14) and the British Council "Language in Education Conference: South Asia" (Sep 15). Neetu presented during Training for Newa Youth on the Rights of Indigenous Peoples (Sep 13–14). Bikash and Rajani led a Pokhara Ranjana workshop (Sep 14). The team collaborated with EDTRAA at Infinity@KU, Kathmandu University, Dhulikhel (Sep 21), and joined the Let\'s Read Translation event (Sep 28).',
    location: 'Bangkok, Pokhara, Dhulikhel & Kathmandu',
    kinds: ['talk', 'workshop', 'calligraphy'],
    stops: [
      { label: 'CIMEX charity, Marriott — 6 Sep' },
      { label: 'Pokhara workshop — 14 Sep' },
      { label: 'Indigenous youth rights presentation — 13–14 Sep' },
      { label: 'Feminist solidarity workshop, Bangkok — 13–14 Sep' },
      { label: 'British Council, Language in Education — 15 Sep' },
      { label: 'Kathmandu University with EDTRAA — 21 Sep' },
      { label: 'Let\'s Read translation — 28 Sep' },
    ],
    chips: [
      { icon: 'mic', label: 'British Council' },
      { icon: 'workshop', label: 'Kathmandu University' },
      { icon: 'book', label: 'Let\'s Read Translation' },
    ],
  },
  {
    id: 'cj-2024-10',
    year: 2024,
    bsYear: '2081 BS',
    monthShort: 'Oct',
    dateFormatted: 'October 5 – November 24, 2024',
    nepaliDate: 'Ashwin–Mangsir 2081 BS',
    title: 'World Tourism Day, Taragaon Next, Kirtipur & WOW Festival',
    summary:
      'Chobhar kite festival and Nhoodaya Bhintuna (Oct 5), Heritage in Motion at Pulchowk (Oct 15), World Tourism Day at Basantapur (Oct 19), Taragaon Next, Kirtipur, and WOW Festival (Nov 23–24).',
    details:
      'Autumn 2024 brought live calligraphy to Bhutmalai Changa Chet at Chobhar and Nhoodaya Bhintuna (Oct 5), Heritage in Motion with Western Union at Pulchowk (Oct 15), and World Tourism Day at Basantapur (Oct 19). Taragaon Next hosted a two-day Ranjana workshop and live calligraphy. Kirtipur Callijatra followed with the Kipu team, then WOW Festival days 1 and 2 (Nov 23–24) with live calligraphy and a calligraphy shop stall, and Sasatwa Ranjana live calligraphy with Adclub.',
    location: 'Basantapur, Taragaon, Pulchowk, Chobhar & Kirtipur',
    kinds: ['calligraphy', 'workshop'],
    stops: [
      { label: 'Chobhar kite festival and Nhoodaya Bhintuna — 5 Oct' },
      { label: 'Heritage in Motion, Pulchowk — 15 Oct' },
      { label: 'World Tourism Day, Basantapur — 19 Oct' },
      { label: 'Taragaon Next, day 1' },
      { label: 'Taragaon Next, day 2' },
      { label: 'Kirtipur Callijatra' },
      { label: 'WOW Festival day 1 — 23 Nov' },
      { label: 'WOW Festival day 2 — 24 Nov' },
      { label: 'Adclub Sasatwa live calligraphy' },
    ],
    chips: [
      { icon: 'sparkle', label: 'WOW Festival (Nov 23–24)' },
      { icon: 'script', label: 'Taragaon Next (2 Days)' },
    ],
  },
  {
    id: 'cj-2025-11',
    year: 2025,
    bsYear: '2082 BS',
    monthShort: 'Nov',
    dateFormatted: 'November 22, 2025',
    nepaliDate: '6 Mangsir 2082 BS',
    title: '1st Newa Transcribathon & Newa Kids Workshop',
    summary:
      'Supported Archive Nepal\'s 1st Newa Transcribathon at Yalamaya Kendra, Patandhoka, and hosted a Ranjana Lipi workshop for Newa Maicha Baucha kids at Nepa Dance Academy.',
    details:
      'On November 22, 2025, Callijatra worked in two places: a Ranjana Lipi workshop for Newa Maicha Baucha kids at Nepa Dance Academy, in collaboration with Kalash Events, and manuscript transcription support at the 1st Newa Transcribathon organized by Archive Nepal at Yalamaya Kendra, Patandhoka, Lalitpur.',
    location: 'Patandhoka, Lalitpur & Kathmandu',
    kinds: ['workshop'],
    stops: [
      { label: 'Ranjana workshop, Nepa Dance Academy — 22 Nov' },
      { label: '1st Newa Transcribathon, Yalamaya Kendra — 22 Nov' },
    ],
    chips: [
      { icon: 'book', label: '1st Newa Transcribathon' },
      { icon: 'workshop', label: 'Maicha Baucha Kids' },
    ],
  },
  {
    id: 'cj-2025-12',
    year: 2025,
    bsYear: '2082 BS',
    monthShort: 'Dec',
    dateFormatted: 'December 14, 2025',
    nepaliDate: '29 Mangsir 2082 BS',
    title: 'Digital Newa Workshop for Newar Journalists',
    summary:
      'A digital skills workshop on typing Ranjana, Nepal Lipi Unicode, and AI tools, in collaboration with Newa Patrakar Rastriya Daboo, Khwopa branch.',
    details:
      'Held at Ayush Ghasa Chhe, Suryavinayak, Bhaktapur (Khwopa) on December 14, 2025, Digital Newa introduced journalists to Unicode keyboards, script tools, and AI for mother-tongue reporting.',
    location: 'Suryavinayak, Bhaktapur (Khwopa)',
    kinds: ['workshop'],
    stops: [
      { label: 'Digital Newa for Newar journalists, Khwopa — 14 Dec' },
    ],
    links: [
      { href: '/tools/converter', label: 'Nepal Lipi converter' },
      { href: '/resources#app-keyboard', label: 'Nepal Lipi Keyboard' },
    ],
    chips: [
      { icon: 'laptop', label: 'Unicode & AI Tools' },
      { icon: 'mic', label: 'Newar Journalists' },
    ],
  },
  {
    id: 'cj-2026-01',
    year: 2026,
    bsYear: '2082 BS',
    monthShort: 'Jan',
    dateFormatted: 'January 24, 2026',
    nepaliDate: '10 Magh 2082 BS',
    title: 'Echoes in the Valley – Khokana (10th Collaboration)',
    summary:
      'Activity partner at Nhyobu Falcha, Khokana: live name calligraphy, children\'s floor art, and acrylic Kutakshar. The 10th collaboration with Echoes in the Valley.',
    details:
      'On Saturday, January 24, 2026 (12:00–6:00 PM) at Nhyobu Falcha, Khokana, the team split into three groups. One wrote visitors\' names in Ranjana Lipi, Kutakshar, and Nepal Lipi. Another worked with children on carpets, using ink, bamboo pens, and pastels. A third demonstrated Ranjana Kutakshar and Devanagari calligraphy with paintbrushes and acrylic color. Echoes in the Valley celebrates Nepal\'s folk, traditional, and indigenous musical heritage through heritage walks, calligraphy, storytelling, food, and community workshops.',
    location: 'Nhyobu Falcha, Khokana',
    kinds: ['calligraphy', 'workshop'],
    stops: [
      { label: 'Name calligraphy at Nhyobu Falcha' },
      { label: 'Children\'s floor art' },
      { label: 'Acrylic Kutakshar and Devanagari' },
    ],
    chips: [
      { icon: 'award', label: '10th Echoes Collab' },
      { icon: 'script', label: '3 Calligraphy Teams' },
      { icon: 'workshop', label: 'Kids Art Falcha' },
    ],
  },
  {
    id: 'cj-2026-02',
    year: 2026,
    bsYear: '2082 BS',
    monthShort: 'Feb',
    dateFormatted: 'February 6–14, 2026',
    nepaliDate: '23 Magh – 2 Falgun 2082 BS',
    title: 'Himalayan Future Forum, 2nd Transcribathon & Kalamagree',
    summary:
      'Panel on "Digital Future for Himalayan Languages" (Feb 6), Planet Nepal and the 2nd Newa Transcribathon (Feb 7), and Kalamagree Art Bazaar 3 (Feb 13–14).',
    details:
      'On February 6, Neetu Dangol, Joint Secretary, and Lalima Shrestha, Vice President — with WNO and ASR — joined the Himalayan Future Forum 2026 panel organized by Nepal Economic Forum. The conversation covered mobile tools, digital archives, AI, and the Nepalbhasa Google Translate project. On February 7 the team joined Planet Nepal Under 18 at UN Park, Lalitpur, and supported Archive Nepal\'s 2nd Newa Transcribathon at Yala: Chai, Manbhawan. Live calligraphy continued at Kalamagree Art Bazaar 3, Sinamangal, on February 13–14.',
    location: 'Kathmandu & Manbhawan, Lalitpur',
    kinds: ['talk', 'calligraphy', 'workshop'],
    stops: [
      { label: 'Himalayan Future Forum panel — 6 Feb' },
      { label: 'Planet Nepal Under 18, UN Park — 7 Feb' },
      { label: '2nd Newa Transcribathon, Manbhawan — 7 Feb' },
      { label: 'Kalamagree Art Bazaar 3 — 13–14 Feb' },
    ],
    chips: [
      { icon: 'mic', label: 'Himalayan Future Forum' },
      { icon: 'book', label: '2nd Transcribathon' },
      { icon: 'laptop', label: 'AI & Language Panel' },
    ],
  },
  {
    id: 'cj-2026-03',
    year: 2026,
    bsYear: '2082 BS',
    monthShort: 'Mar',
    dateFormatted: 'March 27, 2026',
    nepaliDate: '13 Chaitra 2082 BS',
    title: 'International Folk Festival 2026 at Basantapur',
    summary:
      'Live Ranjana and Nepal Lipi calligraphy for artists and visitors at Basantapur Durbar Square.',
    details:
      'At the International Folk Festival 2026 in Basantapur on March 27, 2026, Callijatra shared traditional script heritage alongside folk music and performance.',
    location: 'Basantapur Durbar Square, Kathmandu',
    kinds: ['calligraphy'],
    stops: [
      { label: 'International Folk Festival, Basantapur — 27 Mar' },
    ],
    chips: [
      { icon: 'globe', label: 'Intl Folk Festival' },
      { icon: 'script', label: 'Live Calligraphy' },
    ],
  },
  {
    id: 'cj-2026-04',
    year: 2026,
    bsYear: '2082–2083 BS',
    monthShort: 'Apr',
    dateFormatted: 'April 4–25, 2026',
    nepaliDate: 'Chaitra 2082 – Baisakh 2083 BS',
    title: 'Digital Nepa at Ason, Studio Nilo, Ombahal & Swoyambhu',
    summary:
      'Two-day Digital Nepa workshop at Nepal Lipi Guthi, Ason (Apr 4–5), Studio Nilo sessions (Apr 11), Baha Bahi at Ombahal and Vehicle-Free Ason (Apr 18), and Swoyambhu Mahotsav 2083 opening at Kimdol (Apr 25).',
    details:
      'April 2026 included Digital Nepa: Ranjana and Nepal Lipi creative skill workshops at Nepal Lipi Guthi, Ason (Apr 4–5); two Ranjana Lipi sessions at Studio Nilo (Apr 11); the Baha Bahi series at Ombahal Mimnani Baha with Kikipa, plus Nepal Lipi and Ranjana activities for children during KMC\'s Vehicle-Free Ason on World Heritage Day (Apr 18); and Ranjana live calligraphy at the opening of Swoyambhu Mahotsav 2083, Kimdol (Apr 25).',
    location: 'Ason, Ombahal & Swoyambhu, Kathmandu',
    kinds: ['workshop', 'calligraphy'],
    stops: [
      { label: 'Digital Nepa, Nepal Lipi Guthi, Ason — 4–5 Apr' },
      { label: 'Studio Nilo session 1 — 11 Apr' },
      { label: 'Studio Nilo session 2 — 11 Apr' },
      { label: 'Ombahal Mimnani Baha with Kikipa — 18 Apr' },
      { label: 'Vehicle-Free Ason, World Heritage Day — 18 Apr' },
      { label: 'Swoyambhu Mahotsav opening, Kimdol — 25 Apr' },
    ],
    chips: [
      { icon: 'laptop', label: 'Digital Nepa Ason' },
      { icon: 'sparkle', label: 'Swoyambhu Mahotsav 2083' },
      { icon: 'workshop', label: 'Baha Bahi Series' },
    ],
  },
  {
    id: 'cj-2026-05',
    year: 2026,
    bsYear: '2083 BS',
    monthShort: 'May',
    dateFormatted: 'May 1–16, 2026',
    nepaliDate: 'Baisakh–Jestha 2083 BS',
    title: 'Buddha Jayanti, Tistung Jatra & Lumbini Buddhist University',
    summary:
      'Buddha Jayanti at Teku (May 1), Swoyambhu closing (May 2), Bajrabarahi Jatra in Tistung (May 3), Dwarika\'s Hotel (May 8), Basantapur (May 9), a lecture for Lumbini Buddhist University (May 13), and Tebaha (May 16).',
    details:
      'May opened with a Ranjana workshop at Teku with Newa Dey Dabu for Buddha Jayanti (May 1) and live calligraphy at the closing of Swoyambhu Mahotsav 2083, Bhagwan Pau (May 2). On May 3, Callijatra joined Kalamagree\'s Art Bazaar in Tistung for the triennial Bajrabarahi Jatra. A workshop for Indian tourists followed at Dwarika\'s Hotel (May 8) and calligraphy with Khadgi Samaj at Basantapur (May 9). On May 13, Vice President Lalima Shrestha lectured for faculty of Lumbini Buddhist University on "Ranjana Script in Buddhist Traditions: Deciphering Manuscripts and Understanding Kutakshar," covering the script\'s evolution, manuscripts, conjuncts, and Kutakshar. Ward 22 Mahotsav at Tebaha followed on May 16, and a session for visitors at Studio Nilo on June 7.',
    location: 'Lumbini Buddhist University, Tistung, Teku & Tebaha',
    kinds: ['workshop', 'calligraphy', 'talk'],
    stops: [
      { label: 'Buddha Jayanti workshop, Teku — 1 May' },
      { label: 'Swoyambhu Mahotsav closing — 2 May' },
      { label: 'Bajrabarahi Jatra, Tistung — 3 May' },
      { label: 'Dwarika\'s Hotel — 8 May' },
      { label: 'Khadgi Samaj, Basantapur — 9 May' },
      { label: 'Lumbini Buddhist University lecture — 13 May' },
      { label: 'Tebaha, Ward 22 Mahotsav — 16 May' },
      { label: 'Studio Nilo for visitors — 7 Jun' },
    ],
    chips: [
      { icon: 'book', label: 'Lumbini Buddhist Univ.' },
      { icon: 'sparkle', label: 'Tistung Bajrabarahi Jatra' },
      { icon: 'script', label: 'Kutakshar & Manuscripts' },
    ],
  },
  {
    id: 'cj-2026-08',
    year: 2026,
    bsYear: '2083 BS',
    monthShort: 'Aug',
    dateFormatted: 'August 15–22, 2026',
    nepaliDate: '30 Shrawan – 6 Bhadra 2083 BS',
    title: 'Nepalbhasa, Digital Media & AI, plus Himalayan Art Festival',
    summary:
      'A talk at Nepalbhasa Academy (Aug 15), a Ranjana workshop at LRI School, Kalanki (Aug 16), and Himalayan Art Festival 2026 at Nepal Art Council (Aug 22).',
    details:
      'On August 15, 2026, Callijatra presented "नेपालभाषा व न्हुगु पुस्ता — डिजिटल मिडिया, AI, छ्यलाबुला व झीगु दायित्व" at Nepalbhasa Academy: how storytelling, short video, music, podcasts, and AI can carry Nepalbhasa to a new generation. On August 16, Ananda, Lumu, and Suyogya led a Ranjana workshop at LRI School, Kalanki, with Newa Dey Daboo, Kathmandu-14. On August 22, a Ranjana workshop ran at the Himalayan Art Festival, Nepal Art Council, Babarmahal.',
    location: 'Nepalbhasa Academy, Kalanki & Babarmahal',
    kinds: ['talk', 'workshop'],
    stops: [
      { label: 'Nepalbhasa Academy — 15 Aug' },
      { label: 'LRI School, Kalanki — 16 Aug' },
      { label: 'Himalayan Art Festival, Babarmahal — 22 Aug' },
    ],
    chips: [
      { icon: 'laptop', label: 'Nepalbhasa & AI Talk' },
      { icon: 'workshop', label: 'Himalayan Art Festival' },
    ],
  },
  {
    id: 'cj-2026-10',
    year: 2026,
    bsYear: '2083 BS',
    monthShort: 'Oct',
    dateFormatted: 'October 3–7, 2026',
    nepaliDate: '17–21 Ashwin 2083 BS',
    title: 'Nepalakshara 3, Nepal Lipi Keyboard & Callijatra App Launch',
    summary:
      'Five days of Nepalakshara 3 at Nepal Academy of Fine Arts, Naxal, launching the Nepal Lipi Keyboard with Nepalbhasa autocorrect, the Callijatra Calligraphy app, and the Ranjana Calligraphy Manual.',
    details:
      'Nepalakshara 3 — Nepal Calligraphy Festival 2026 ran October 3–7 at Nepal Academy of Fine Arts, Naxal. On October 3, with special guest Sunita Dangol, Acting Mayor of Kathmandu, the team launched the Nepal Lipi Keyboard for Android and iOS with Nepalbhasa autocorrect suggestions (Pawan Maharjan and Suyogya Ratna Tamrakar), the Callijatra Calligraphy app on Android, and the Ranjana Calligraphy Manual. Neetu Dangol presented on Nepal Lipi manuscripts at the Lipi conference. The Ranjana Kutakshar workshop followed on October 4.',
    location: 'Nepal Academy of Fine Arts (NAFA), Naxal',
    kinds: ['launch', 'workshop', 'talk', 'calligraphy'],
    stops: [
      { label: 'Nepal Lipi Keyboard for Android and iOS — 3 Oct' },
      { label: 'Callijatra Calligraphy app — 3 Oct' },
      { label: 'Ranjana Calligraphy Manual — 3 Oct' },
      { label: 'Nepal Lipi manuscripts presentation — 3 Oct' },
      { label: 'Ranjana Kutakshar workshop — 4 Oct' },
      { label: 'Nepalakshara 3 — 3–7 Oct' },
    ],
    links: [
      { href: '/resources#app-keyboard', label: 'Nepal Lipi Keyboard' },
      { href: '/resources#app-calligraphy', label: 'Callijatra Calligraphy app' },
    ],
    chips: [
      { icon: 'laptop', label: 'Autocorrect Keyboard App' },
      { icon: 'book', label: 'Ranjana Manual Booklet' },
      { icon: 'sparkle', label: 'Nepalakshara 3 @ NAFA' },
    ],
  },
];
