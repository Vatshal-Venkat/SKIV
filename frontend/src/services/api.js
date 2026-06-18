// SKIV.ONLINE - CMS API & Database Service (Connected to FastAPI Backend)

const API_BASE_URL = "http://localhost:8000/api";

// Helper to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem("skiv_admin_token");
  return token ? { "Authorization": `Bearer ${token}` } : {};
};

// ==========================================
// MOCK DATA STORE (For pages not yet migrated to DB)
// ==========================================

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
// MAPPERS (Translates FastAPI models to frontend layout schemas)
// ==========================================

function mapBackendProfileToFrontend(p) {
  let age = 30; // default fallback
  if (p.dob) {
    try {
      const parts = p.dob.split('/');
      if (parts.length === 3) {
        const birthYear = parseInt(parts[2]);
        if (!isNaN(birthYear)) {
          age = new Date().getFullYear() - birthYear;
        }
      }
    } catch (e) {
      console.error("Age calculation error", e);
    }
  }

  const isFemale = p.gender && p.gender.toLowerCase() === 'female';
  const defaultAvatar = isFemale 
    ? "/images/bride_placeholder.png"
    : "/images/groom_placeholder.png";

  const getFullPhotoUrl = (path) => {
    if (!path) return null;
    return path.startsWith('http') ? path : `http://localhost:8000${path}`;
  };

  const primaryPhoto = getFullPhotoUrl(p.photo_url_1) || defaultAvatar;

  return {
    id: p.id,
    name: p.name + (p.surname ? ` ${p.surname}` : ''),
    gender: p.gender,
    age: age,
    height: p.height || "5'5\"",
    education: p.education || "Graduate",
    occupation: p.occupation || "Employee",
    company: p.organisation || "Private Company",
    location: p.workplace || "India",
    gotram: p.gotram || "Unknown",
    avatar: primaryPhoto,
    bio: p.preference || p.remarks || "No details provided.",
    contactEmail: p.contact || "admin@skiv.online",
    // Up to 6 photos support (Hinge/JeevanSaathi standard)
    photo_urls: [
      primaryPhoto,
      getFullPhotoUrl(p.photo_url_2),
      getFullPhotoUrl(p.photo_url_3),
      getFullPhotoUrl(p.photo_url_4),
      getFullPhotoUrl(p.photo_url_5),
      getFullPhotoUrl(p.photo_url_6),
    ].filter(Boolean)
  };
}

function mapBackendNewsToFrontend(a) {
  const dateObj = new Date(a.created_at);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return {
    id: a.id,
    title: a.title,
    category: a.category || "General",
    excerpt: a.summary || (a.body.substring(0, 150) + "..."),
    content: a.body,
    images: a.thumbnail_url 
      ? [a.thumbnail_url.startsWith('http') ? a.thumbnail_url : `http://localhost:8000${a.thumbnail_url}`] 
      : ['https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80'],
    date: formattedDate,
    author: "Administrator"
  };
}

// ==========================================
// 3. API SERVICE METHODS
// ==========================================

export const apiService = {
  // Authentication
  async login(username, password) {
    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Authentication failed.");
    }

    const data = await response.json();
    localStorage.setItem("skiv_admin_token", data.access_token);
    localStorage.setItem("skiv_admin_user", JSON.stringify(data.user));
    return data;
  },

  logout() {
    localStorage.removeItem("skiv_admin_token");
    localStorage.removeItem("skiv_admin_user");
  },

  getCurrentUser() {
    const user = localStorage.getItem("skiv_admin_user");
    return user ? JSON.parse(user) : null;
  },

  // Matrimony endpoints (Connected to DB)
  async getMatrimonyProfiles(filters = {}) {
    const params = new URLSearchParams();
    if (filters.gender) params.append("gender", filters.gender);
    if (filters.gotram) params.append("gotram", filters.gotram);
    if (filters.location) params.append("location", filters.location);
    if (filters.search) params.append("search", filters.search);

    const response = await fetch(`${API_BASE_URL}/matrimony/profiles?${params.toString()}`);
    if (!response.ok) throw new Error("Failed to fetch matrimony profiles.");

    const data = await response.json();
    return data.map(mapBackendProfileToFrontend);
  },

  async getMatrimonyProfileById(id) {
    const response = await fetch(`${API_BASE_URL}/matrimony/profiles/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch profile with id ${id}`);
    
    const data = await response.json();
    return mapBackendProfileToFrontend(data);
  },

  async createProfile(profileData) {
    const response = await fetch(`${API_BASE_URL}/matrimony/profiles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders()
      },
      body: JSON.stringify(profileData)
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.detail || "Failed to create profile.");
    }

    const data = await response.json();
    return mapBackendProfileToFrontend(data);
  },

  async updateProfile(id, profileData) {
    const response = await fetch(`${API_BASE_URL}/matrimony/profiles/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders()
      },
      body: JSON.stringify(profileData)
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.detail || "Failed to update profile.");
    }

    const data = await response.json();
    return mapBackendProfileToFrontend(data);
  },

  async deleteProfile(id) {
    const response = await fetch(`${API_BASE_URL}/matrimony/profiles/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders()
    });

    if (!response.ok) throw new Error("Failed to delete profile.");
    return true;
  },

  async submitMatrimonyRequest(profileId, viewerEmail) {
    const response = await fetch(`${API_BASE_URL}/matrimony/request/${profileId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: viewerEmail })
    });

    if (!response.ok) throw new Error("Failed to submit contact request.");
    return await response.json();
  },

  // News/Articles endpoints (Connected to DB)
  async getNewsArticles() {
    const response = await fetch(`${API_BASE_URL}/news`);
    if (!response.ok) throw new Error("Failed to fetch news articles.");

    const data = await response.json();
    return data.map(mapBackendNewsToFrontend);
  },

  async getNewsArticleById(id) {
    const response = await fetch(`${API_BASE_URL}/news/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch article with id ${id}`);

    const data = await response.json();
    return mapBackendNewsToFrontend(data);
  },

  async createNewsArticle(newsData) {
    const response = await fetch(`${API_BASE_URL}/news`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders()
      },
      body: JSON.stringify(newsData)
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.detail || "Failed to create article.");
    }

    const data = await response.json();
    return mapBackendNewsToFrontend(data);
  },

  async updateNewsArticle(id, newsData) {
    const response = await fetch(`${API_BASE_URL}/news/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders()
      },
      body: JSON.stringify(newsData)
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.detail || "Failed to update article.");
    }

    const data = await response.json();
    return mapBackendNewsToFrontend(data);
  },

  async deleteNewsArticle(id) {
    const response = await fetch(`${API_BASE_URL}/news/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders()
    });

    if (!response.ok) {
      throw new Error("Failed to delete article.");
    }
    return true;
  },

  // Upload photo endpoint
  async uploadPhoto(file) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_BASE_URL}/media/upload`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: formData
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.detail || "Failed to upload image.");
    }

    return await response.json();
  },

  // Forum endpoints (Mocked)
  async getForumTopics(category = null) {
    if (category && category !== 'All') {
      return FORUM_TOPICS.filter(t => t.category.toLowerCase() === category.toLowerCase());
    }
    return FORUM_TOPICS;
  },

  async getForumTopicById(id) {
    return FORUM_TOPICS.find(p => p.id === parseInt(id));
  },

  async addTopicComment(topicId, commentData) {
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

  // History/Chronicles endpoints (Mocked)
  async getHistoryMilestones() {
    return HISTORICAL_MILESTONES;
  },

  // Resources endpoints (Mocked)
  async getResources() {
    return RESOURCES;
  },

  // Associations endpoints (Mocked)
  async getAssociations() {
    return ASSOCIATIONS;
  }
};
