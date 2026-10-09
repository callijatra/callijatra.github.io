export type TeamMember = {
  name: string;
  role: string;
  profession: string;
  photo?: string;
  initials: string;
  socialWorks: string[];
  organizations: string[];
  hobbies: string[];
  email?: string;
  phone?: string;
  socials?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    x?: string;
    youtube?: string;
  };
};

/** Placeholder founding members — replace with real bios and photos in /images/team/ */
export const foundingMembers: TeamMember[] = [
  {
    name: 'Ananda Kumar Maharjan',
    role: 'Founder & President',
    profession: 'Creative Lead at Hamro Patro',
    initials: 'AM',
    socialWorks: ['Script revival workshops', 'Community calligraphy mentorship'],
    organizations: ['Hamro Patro', 'Nepal Lipi Guthi'],
    hobbies: ['Manuscript study', 'Ink making'],
    email: 'anandako@gmail.com',
    socials: { facebook: '#', instagram: '#', linkedin: '#' },
  },
  {
    name: 'Laalima Shrestha',
    role: 'Vice President',
    profession: 'Workshop Coordinator',
    initials: 'LS',
    socialWorks: ['', 'Open-source font tooling'],
    organizations: ['KMC'],
    hobbies: ['Typography', 'Hiking'],
    email: 'member2@example.com',
    socials: { linkedin: '#', x: '#' },
  },
  {
    name: 'Suyogya Ratna Tamrakar',
    role: 'General Secretary',
    profession: 'Software Engineer at FoneNXT',
    initials: 'ST',
    socialWorks: [],
    organizations: ['Tamrakar Samaj', 'Tamrakar Gunla Baajan Khala', 'Nepal Lipi Guthi'],
    hobbies: ['Photography', 'Music'],
    email: 'suyogya.tamrakar@gmail.com',
    socials: { instagram: 'https://instagram.com/suyogyart', facebook: 'https://fb.com/suyogya.ratna.tamrakar' },
  },
  {
    name: 'Nitu Dangol',
    role: 'Education Lead',
    profession: 'Teacher & Linguist',
    initials: 'ND',
    socialWorks: ['Nepalbhasa learning programs', 'School outreach'],
    organizations: ['Language teachers network'],
    hobbies: ['Poetry', 'Folk music'],
    email: 'member4@example.com',
    socials: { facebook: '#', youtube: '#' },
  },
  {
    name: 'Ashlesha Maharjan',
    role: 'General Member',
    profession: 'Graphic Designer',
    initials: 'AM',
    socialWorks: ['Video tutorial production', 'Festival documentation'],
    organizations: ['Cultural media collective'],
    hobbies: ['Documentary film', 'Travel'],
    socials: { instagram: '#', youtube: '#', x: '#' },
  },
  {
    name: 'Diwas Maharjan',
    role: 'General Member',
    profession: 'Graphic Designer',
    initials: 'DM',
    socialWorks: ['Calligraphy challenges', 'Public exhibitions'],
    organizations: ['Youth cultural forum'],
    hobbies: ['Community theatre', 'Reading'],
    email: 'member6@example.com',
    socials: { facebook: '#', linkedin: '#' },
  },
  {
    name: 'Bikash Man Shrestha',
    role: 'General Member',
    profession: 'Doodle Artist',
    initials: 'BS',
    socialWorks: ['Ranjana script research', 'Manuscript documentation'],
    organizations: ['Heritage research circle'],
    hobbies: ['Archival study', 'Sketching'],
    socials: { linkedin: '#' },
  },
  {
    name: 'Rajani Shrestha',
    role: 'General Member',
    profession: 'Doodle Artist',
    initials: 'RS',
    socialWorks: ['Nepal Lipi font development', 'Webfont optimization'],
    organizations: ['Open type community'],
    hobbies: ['Printmaking', 'Cycling'],
    socials: { instagram: '#', linkedin: '#' },
  },
  {
    name: 'Roshan Maharjan',
    role: 'General Member',
    profession: 'Operations & Community',
    initials: 'RM',
    socialWorks: ['School partnerships', 'Library collaborations'],
    organizations: ['Educators alliance'],
    hobbies: ['Gardening', 'Calligraphy practice'],
    email: 'member9@example.com',
    phone: '+977-98XXXXXXXX',
    socials: { facebook: '#', linkedin: '#' },
  },
  {
    name: 'Sanjiv Maharjan',
    role: 'General Member',
    profession: 'Operations & Community',
    initials: 'SM',
    socialWorks: ['Workshop facilitation', 'Artisan livelihood support'],
    organizations: ['Artists cooperative'],
    hobbies: ['Traditional crafts', 'Cooking'],
    socials: { instagram: '#', facebook: '#', youtube: '#' },
  },
];
