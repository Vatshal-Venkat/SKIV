// SKIV.ONLINE - Simulated CMS API & Mock Database Service
// This service acts as the data-fetcher. When the backend CMS API is active,
// only this file needs to be updated to make real fetch/axios requests.

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ==========================================
// 1. DATA STORE (Mock Database)
// ==========================================

const MATRIMONY_PROFILES = [
  {
    id: 1,
    name: "Sri V. Rahul Karanam",
    gender: "Male",
    age: 28,
    height: "5'11\"",
    education: "B.Tech in Computer Science",
    occupation: "Senior Software Engineer",
    company: "Google India",
    location: "Bangalore, Karnataka",
    gotram: "Gautama",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    bio: "Passionate about building scalable software systems. Love travelling, playing chess, and learning about history. Looking for a partner who is open-minded and family-oriented.",
    contactEmail: "rahul.karanam@example.com"
  },
  {
    id: 2,
    name: "Kumari P. Ananya Sistla",
    gender: "Female",
    age: 26,
    height: "5'4\"",
    education: "M.B.A. in Finance",
    occupation: "Investment Analyst",
    company: "Goldman Sachs",
    location: "Hyderabad, Telangana",
    gotram: "Bharadwaja",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    bio: "Financial analyst by day, amateur classical dancer by night. Believer in balancing modern career with traditional values. Seeking an understanding partner who supports my aspirations.",
    contactEmail: "ananya.sistla@example.com"
  },
  {
    id: 3,
    name: "Sri K. Sai Kiran Patnaik",
    gender: "Male",
    age: 30,
    height: "6'0\"",
    education: "M.S. in Data Analytics",
    occupation: "Lead Data Scientist",
    company: "Microsoft",
    location: "Seattle, USA (Visits Hyderabad frequently)",
    gotram: "Kashyapa",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    bio: "Based in Seattle, working in tech. I enjoy hiking, photography, and volunteering. Looking for a partner who is ready to relocate or currently in the US, with similar vibes.",
    contactEmail: "sai.patnaik@example.com"
  },
  {
    id: 4,
    name: "Kumari D. Harshitha Rao",
    gender: "Female",
    age: 25,
    height: "5'5\"",
    education: "M.B.B.S, M.D. (Pediatrics)",
    occupation: "Pediatric Resident",
    company: "Apollo Hospitals",
    location: "Visakhapatnam, Andhra Pradesh",
    gotram: "Vasishta",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    bio: "Doctor dedicated to child health. Love painting, reading fiction, and listening to classical music. Looking for a well-educated partner, preferably from a medical or technical background.",
    contactEmail: "harshitha.rao@example.com"
  },
  {
    id: 5,
    name: "Sri M. Abhinav Karanam",
    gender: "Male",
    age: 29,
    height: "5'9\"",
    education: "B.Arch (Architecture)",
    occupation: "Principal Architect",
    company: "Creative Spaces Studio",
    location: "Bhubaneswar, Odisha",
    gotram: "Atri",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    bio: "Designing homes and spaces is my passion. Outside work, I love sketching, road trips, and exploring temple architecture. Seeking a creative and independent partner.",
    contactEmail: "abhinav.k@example.com"
  },
  {
    id: 6,
    name: "Kumari S. Meghana Patnaik",
    gender: "Female",
    age: 27,
    height: "5'3\"",
    education: "M.Tech in VLSI Design",
    occupation: "Hardware Design Engineer",
    company: "Intel",
    location: "Pune, Maharashtra",
    gotram: "Haritasa",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
    bio: "Tech enthusiast. I enjoy playing badminton, baking, and playing guitar. Searching for a simple, caring partner who values family relationships and has a progressive outlook.",
    contactEmail: "meghana.p@example.com"
  }
];

const NEWS_ARTICLES = [
  {
    id: 1,
    title: 'A Cricket Tournament to Remember',
    category: 'Community Update',
    excerpt: 'The vibrant celebration of Shivaratri overnight recreation was successfully organised by Sistakaranam Ikyavedika. The highlight of the night was the Cricket Tournament.',
    content: 'The vibrant celebration of Shivaratri overnight recreation was successfully organised by Sistakaranam Ikyavedika. The highlight of the night was the Cricket Tournament, which drew a massive crowd from all parts of the state. Over 16 teams participated in the knockout stages, exhibiting sportsmanship and community bonding.\n\nSponsors and community elders presented trophies to the winning and runner-up teams, appreciating the hard work of the youth organizers who worked tirelessly to coordinate the matches, refreshments, and logistics. The event concluded with traditional prayers and a community feast (Mahaprasadam) in the morning.',
    images: ['https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80'],
    date: 'March 15, 2025',
    author: 'Youth Coordination Team'
  },
  {
    id: 2,
    title: 'Delhi Sistakaranam Families Picnic',
    category: 'Events',
    excerpt: 'Delhi Picnic of our Sistakaranam families was organised by Sri D.S.Bharat, in what turned out to be a notable team effort.',
    content: 'The annual picnic for Sistakaranam families residing in Delhi-NCR was organized at the beautiful Lodhi Gardens. More than 120 family members attended the gathering, creating a warm, festive, and engaging atmosphere.\n\nThe event featured multiple interactive games for children and elders, traditional food potluck, and a discussion session regarding youth welfare and student mentorship. Organizer Sri D.S.Bharat thanked all attendees and contributors for making this annual picnic a resounding success, fostering a strong network of families in the national capital region.',
    images: ['https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80'],
    date: 'February 28, 2025',
    author: 'Sri D.S.Bharat'
  },
  {
    id: 3,
    title: 'Kharagpur Association Picnic',
    category: 'Events',
    excerpt: 'Visuals are from the Kharagpur Picnic organized by Sistakarana Youth, Womens Wing and Lakshmi Ganesh Temple Subcommittee.',
    content: 'The Sistakarana Association of Kharagpur organized its winter picnic at the scenic site of Lakshmi Ganesh Temple area. Coordinated jointly by the Youth Wing, Women\'s Wing, and the Temple Subcommittee, the event stood as a shining example of intergenerational cooperation.\n\nHighlights included cultural performances by community children, an open discussion forum regarding temple upkeep, and a grand lunch prepared by local volunteers. The event aimed to reconnect families and discuss welfare initiatives for senior community members in Kharagpur.',
    images: ['https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=800&auto=format&fit=crop&q=80'],
    date: 'February 10, 2025',
    author: 'Kharagpur Media Wing'
  },
  {
    id: 4,
    title: 'Get-Together Mania 2025 - Nagpur',
    category: 'Community Update',
    excerpt: 'The Nagpur Sistakaranam Association successfully organized Get-Together Mania 2025 on 14 December 2025 at the picturesque Ghogra Madav temple.',
    content: 'The Nagpur Sistakaranam Association hosted their annual "Get-Together Mania 2025" at the beautiful Ghogra Madav Temple location. The event was aimed at gathering all community members under one roof to celebrate culture, heritage, and address community challenges.\n\nThe executive committee outlined plans for establishing a local student educational fund, which was met with generous contributions from patrons. Families participated in games, cooking competitions, and musical events, creating lasting memories for everyone involved.',
    images: ['https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=80'],
    date: 'December 14, 2025',
    author: 'Nagpur Committee'
  },
  {
    id: 5,
    title: 'Sistakaranams in Republic Day Celebrations',
    category: 'National News',
    excerpt: 'Sistakaranams celebrated Republic Day on January 26 at several places across the country with great enthusiasm.',
    content: 'On the occasion of India\'s Republic Day, Sistakaranam associations across various cities (including Hyderabad, Visakhapatnam, Bhubaneswar, and Jamshedpur) organized flag hoisting ceremonies and cultural events.\n\nElders spoke about the contribution of community members to the nation-building process and encouraged youth to actively participate in public service. Outstanding students from each local chapter were also felicitated for their academic achievements in board examinations.',
    images: ['https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&auto=format&fit=crop&q=80'],
    date: 'January 26, 2025',
    author: 'National Coordination Council'
  }
];

const FORUM_TOPICS = [
  {
    id: 1,
    title: "Tips for young Sistakaranam students pursuing higher education abroad?",
    category: "Help",
    author: "Ramesh Patnaik",
    replies: 14,
    views: 245,
    lastActive: "2 hours ago",
    content: "Hi everyone, my daughter has recently received offers for MS in CS from US universities. I would love to connect with any community members in the US who can share tips regarding housing, part-time jobs, and cultural adaptation. Thanks in advance!",
    comments: [
      { id: 1, author: "Sai Kiran Patnaik", content: "Congratulations! I am based in Seattle. Happy to help her connect with local student groups here. PM me for details.", date: "1 hour ago" },
      { id: 2, author: "G. Varalakshmi", content: "Make sure she checks out local community groups. There are many active Telugu and Odia associations that help newcomers feel at home.", date: "30 mins ago" }
    ]
  },
  {
    id: 2,
    title: "Upcoming Community Gathering in Hyderabad - Agenda & Volunteers needed",
    category: "Events",
    author: "Sistla Prasad",
    replies: 8,
    views: 189,
    lastActive: "5 hours ago",
    content: "We are planning a grand meet in Hyderabad next month. We need volunteers for food coordination, stage design, and registration desk. Please reply here or contact the organizing committee.",
    comments: [
      { id: 1, author: "K. Mohan Rao", content: "I would like to volunteer for the registration desk. I have 2 hours free on that Sunday.", date: "4 hours ago" }
    ]
  },
  {
    id: 3,
    title: "Discussion on Surnames (Inti Perlu) and their historical origins",
    category: "General",
    author: "Prof. Ramana Karanam",
    replies: 23,
    views: 450,
    lastActive: "1 day ago",
    content: "I am conducting a research study on the origin of various Sistakaranam surnames. Let's document our family history here. If you have files or references, please post them.",
    comments: []
  }
];

const HISTORICAL_MILESTONES = [
  {
    id: 1,
    year: "11th Century AD",
    title: "Royal Administrators & Scribes",
    description: "Sistakaranams emerged as vital royal administrators, financial managers, and record-keepers in the Gajapati and Eastern Ganga Dynasties of Kalinga. Known for their high literacy, knowledge of Sanskrit, and skill in governance."
  },
  {
    id: 2,
    year: "18th-19th Century",
    title: "Integration in Regional Kingdoms",
    description: "Many families held hereditary administrative posts (Karnams/Patnaiks) across Northern Andhra and Southern Odisha zamindaris, maintaining land records and facilitating local administration."
  },
  {
    id: 3,
    year: "1960s",
    title: "Social Renaissance & Modern Organizations",
    description: "Establishment of formal urban Sistakaranam welfare associations in railway hubs like Kharagpur, Visakhapatnam, and administrative cities like Bhubaneswar to support migrating youth and student education."
  },
  {
    id: 4,
    year: "2020",
    title: "Digital Integration - SKIV Foundation",
    description: "Launching of digital directories, matrimonial portals, and WhatsApp hubs to connect the worldwide diaspora, culminating in the integrated 'skiv.online' digital platform."
  }
];

const RESOURCES = {
  publications: [
    { id: 1, title: "Sistakaranam Charitra (History & Heritage)", author: "Dr. A.R.K. Rao", type: "Book", size: "12 MB", link: "#" },
    { id: 2, title: "Gotram Directory & Surnames Guide", author: "SKIV Cultural Council", type: "PDF Directory", size: "4.5 MB", link: "#" },
    { id: 3, title: "Kula Deepika - Special Festivities Issue", author: "Editorial Board", type: "Magazine", size: "8.2 MB", link: "#" },
    { id: 4, title: "Community Chronicles - Youth Special", author: "Youth Wing Committee", type: "Newsletter", size: "2.1 MB", link: "#" }
  ],
  gallery: [
    { id: 1, title: "Shivaratri Cricket Tournament Trophies", image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&auto=format&fit=crop&q=80", category: "Sports" },
    { id: 2, title: "Delhi Picnic Cultural Performances", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&auto=format&fit=crop&q=80", category: "Social" },
    { id: 3, title: "Nagpur Meet Prayer Hall", image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=400&auto=format&fit=crop&q=80", category: "Religious" }
  ]
};

const ASSOCIATIONS = [
  { id: 1, name: "All India Sistakarana Association", headOffice: "Visakhapatnam, AP", president: "Sri K. Bhaskar Rao", contact: "+91 94401 XXXXX", members: "1200+" },
  { id: 2, name: "Sista Karana Association, Kharagpur", headOffice: "Kharagpur, WB", president: "Sri P. Sridhar Patnaik", contact: "+91 98322 XXXXX", members: "850+" },
  { id: 3, name: "Sistakaranam Welfare Association, Hyderabad", headOffice: "Hyderabad, TS", president: "Sri D. Nageshwar Rao", contact: "+91 98490 XXXXX", members: "980+" },
  { id: 4, name: "Sistakaranam Association, Bhubaneswar", headOffice: "Bhubaneswar, Odisha", president: "Sri S.K. Patnaik", contact: "+91 99370 XXXXX", members: "540+" },
  { id: 5, name: "Sistakaranam Association of Durg-Bhilai", headOffice: "Bhilai, Chhattisgarh", president: "Sri V. Mohan Rao", contact: "+91 78822 XXXXX", members: "320+" }
];

// ==========================================
// 2. API METHODS (With simulated network latency)
// ==========================================

export const apiService = {
  // Matrimony endpoints
  async getMatrimonyProfiles(filters = {}) {
    await delay(300);
    let results = [...MATRIMONY_PROFILES];

    if (filters.gender) {
      results = results.filter(p => p.gender.toLowerCase() === filters.gender.toLowerCase());
    }
    if (filters.gotram) {
      results = results.filter(p => p.gotram.toLowerCase().includes(filters.gotram.toLowerCase()));
    }
    if (filters.location) {
      results = results.filter(p => p.location.toLowerCase().includes(filters.location.toLowerCase()));
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      results = results.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.education.toLowerCase().includes(q) ||
        p.occupation.toLowerCase().includes(q)
      );
    }
    return results;
  },

  async getMatrimonyProfileById(id) {
    await delay(150);
    return MATRIMONY_PROFILES.find(p => p.id === parseInt(id));
  },

  async submitMatrimonyRequest(requestId, viewerEmail) {
    await delay(400);
    return { success: true, message: "Contact request submitted successfully. The profile guardian will receive your details." };
  },

  // News/Articles endpoints
  async getNewsArticles() {
    await delay(200);
    return NEWS_ARTICLES;
  },

  async getNewsArticleById(id) {
    await delay(100);
    return NEWS_ARTICLES.find(a => a.id === parseInt(id));
  },

  // Forum endpoints
  async getForumTopics(category = null) {
    await delay(300);
    if (category && category !== 'All') {
      return FORUM_TOPICS.filter(t => t.category.toLowerCase() === category.toLowerCase());
    }
    return FORUM_TOPICS;
  },

  async getForumTopicById(id) {
    await delay(150);
    return FORUM_TOPICS.find(t => t.id === parseInt(id));
  },

  async addTopicComment(topicId, commentData) {
    await delay(300);
    const topic = FORUM_TOPICS.find(t => t.id === parseInt(topicId));
    if (topic) {
      const newComment = {
        id: topic.comments.length + 1,
        author: commentData.author || "Guest Member",
        content: commentData.content,
        date: "Just now"
      };
      topic.comments.push(newComment);
      topic.replies += 1;
      topic.lastActive = "Just now";
      return newComment;
    }
    throw new Error("Topic not found");
  },

  // History/Chronicles endpoints
  async getHistoryMilestones() {
    await delay(150);
    return HISTORICAL_MILESTONES;
  },

  // Resources endpoints
  async getResources() {
    await delay(150);
    return RESOURCES;
  },

  // Associations endpoints
  async getAssociations() {
    await delay(150);
    return ASSOCIATIONS;
  }
};
