const dns = require('dns');
const { MongoClient } = require('mongodb');

dns.setDefaultResultOrder('ipv4first');
try {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch (e) {
  console.warn("Could not set DNS servers:", e);
}

const MONGODB_URI = "mongodb+srv://ozcluin_db_user:j1TohysQswLhn9Yh@cluster0.ur6nwa3.mongodb.net/ozclu?retryWrites=true&w=majority&appName=Cluster0";
const DB_NAME = "ozclu";

const mockBlogPosts = [
  {
    title: 'Navigating Global Compliance in Background Screening',
    slug: 'navigating-global-compliance-background-screening',
    excerpt: 'Understanding the complex web of international regulations requires a clear, methodical approach to data verification and regulatory alignment.',
    content: '<p>International regulations are shifting rapidly. Standardizing screening parameters across borders is critical for maintaining corporate integrity. This article covers GDPR compliance, Australian Fair Work standards, and global verification guidelines.</p>',
    coverImage: '/images/news-article.png',
    author: 'Arjun Mehta',
    tags: ['Compliance', 'Screening'],
    status: 'published',
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    title: 'The ROI of Transparent Hiring Practices',
    slug: 'roi-transparent-hiring-practices',
    excerpt: 'Investing in thorough, transparent verification during the acquisition phase yields measurable returns in long-term organisational stability.',
    content: '<p>Hiring transparently reduces turnover by up to 35%. When companies verify right and verify fast, candidates appreciate the clarity. Discover how OzClu makes onboarding simple and trust-based.</p>',
    coverImage: '',
    author: 'Priya Sharma',
    tags: ['Hiring', 'ROI'],
    status: 'published',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

const mockTeamMembers = [
  {
    name: 'Arjun Mehta',
    role: 'CEO & Founder',
    image: '/images/ceo.png',
    bio: 'With over two decades of experience in risk management and corporate governance, Arjun founded OzClu to bring radical transparency to an industry historically defined by opacity. His vision is a world where verification builds trust, not barriers.',
    email: 'amehta@ozclu.com',
    order: 1,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    name: 'Priya Sharma',
    role: 'CTO & Partner',
    image: '/images/cto.png',
    bio: 'Priya leads OzClu\'s technology strategy with deep expertise in secure systems architecture, data engineering, and automation. She is responsible for building the platform infrastructure that makes transparent verification scalable.',
    email: 'psharma@ozclu.com',
    order: 2,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    name: 'Ravi Kapoor',
    role: 'CFO & Partner',
    image: '/images/cfo.png',
    bio: 'Ravi brings financial discipline and operational rigour to OzClu. With a background in corporate finance and regulatory compliance, he ensures the business itself operates with the same transparency it promises its clients.',
    email: 'rkapoor@ozclu.com',
    order: 3,
    active: true,
    createdAt: new Date().toISOString(),
  },
];

const mockServices = [
  {
    title: 'Employment Background Checks',
    description: 'Thorough pre-employment screening covering criminal records, employment history, education credentials, and professional references.',
    icon: 'users',
    features: ['For HR teams', 'Hiring managers'],
    order: 1,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'Identity Verification',
    description: 'Robust identity authentication combining document verification, biometric matching, and database cross-referencing for absolute certainty.',
    icon: 'identity',
    features: ['For onboarding', 'Compliance teams'],
    order: 2,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'Business Due Diligence',
    description: 'Comprehensive organisational screening including corporate records, beneficial ownership, financial health, and reputational analysis.',
    icon: 'business',
    features: ['For M&A', 'Partnerships & procurement'],
    order: 3,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'Compliance Screening',
    description: 'Automated screening against global sanctions lists, PEP databases, watchlists, and adverse media to meet regulatory obligations.',
    icon: 'compliance',
    features: ['For legal', 'Risk management'],
    order: 4,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'Continuous Monitoring',
    description: 'Ongoing surveillance of verified subjects to detect changes in criminal records, regulatory status, and compliance exposure over time.',
    icon: 'monitoring',
    features: ['For long-term risk management'],
    order: 5,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'Custom Verification Workflows',
    description: 'Configurable screening packages tailored to your industry, role requirements, and risk tolerance — no one-size-fits-all approach.',
    icon: 'custom',
    features: ['For enterprise', 'Specialised industries'],
    order: 6,
    active: true,
    createdAt: new Date().toISOString(),
  },
];

const mockNotices = [
  {
    title: 'Scheduled System Maintenance',
    content: 'We will be conducting scheduled maintenance on our background checks pipeline database this Sunday between 02:00 and 04:00 AEST. Real-time screening checks might experience brief delays.',
    priority: 'high',
    status: 'published',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    title: 'GDPR Compliance Standards Updated',
    content: 'Our data protection standards have been upgraded to support GDPR 2026 data residency guidelines. All European candidate check reports are now fully localized.',
    priority: 'normal',
    status: 'published',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const mockTestimonials = [
  {
    name: 'Sarah Jenkins',
    company: 'Fintech Scaleup Inc.',
    role: 'Head of Talent',
    content: 'OzClu revolutionized our screening process. We now onboard verified candidates within 48 hours instead of two weeks. Their transparency parameters are exceptional!',
    rating: 5,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    name: 'David Clarke',
    company: 'Vanguard Legal Advisors',
    role: 'Compliance Lead',
    content: 'Unmatched audit transparency. The audit log provided for every single screening check has made our board compliance reporting flawless.',
    rating: 5,
    active: true,
    createdAt: new Date().toISOString(),
  },
];

const mockSettings = {
  siteName: 'OzClu Verification Services',
  tagline: 'Trust Starts with Visibility.',
  heroBackgroundImage: '',
  contactEmail: 'info@ozclu.com',
  contactPhone: '+61 2 8294 5738',
  address: 'Level 14, 167 Macquarie Street, Sydney NSW 2000, Australia',
  trustedCompanies: ['Acme Corp', 'Fintech Scaleup Inc.', 'Vanguard Legal Advisors', 'Macquarie Group'],
  serviceCountries: ['Australia', 'New Zealand', 'Singapore', 'United Kingdom', 'United States'],
  socialLinks: {
    facebook: 'https://facebook.com/ozclu',
    twitter: 'https://twitter.com/ozclu',
    linkedin: 'https://linkedin.com/company/ozclu',
    instagram: 'https://instagram.com/ozclu',
  },
};

async function seed() {
  console.log("Seeding CMS dynamic collections on MongoDB...");
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    const db = client.db(DB_NAME);

    // 1. Seed Blog Posts
    const blogCol = db.collection('blogPosts');
    const existingBlog = await blogCol.countDocuments();
    if (existingBlog === 0) {
      console.log(`Seeding ${mockBlogPosts.length} blog posts...`);
      await blogCol.insertMany(mockBlogPosts);
    }

    // 2. Seed Team Members
    const teamCol = db.collection('teamMembers');
    const existingTeam = await teamCol.countDocuments();
    if (existingTeam === 0) {
      console.log(`Seeding ${mockTeamMembers.length} team members...`);
      await teamCol.insertMany(mockTeamMembers);
    }

    // 3. Seed Services
    const serviceCol = db.collection('services');
    const existingServices = await serviceCol.countDocuments();
    if (existingServices === 0) {
      console.log(`Seeding ${mockServices.length} services...`);
      await serviceCol.insertMany(mockServices);
    }

    // 4. Seed Notices
    const noticesCol = db.collection('notices');
    const existingNotices = await noticesCol.countDocuments();
    if (existingNotices === 0) {
      console.log(`Seeding ${mockNotices.length} notices...`);
      await noticesCol.insertMany(mockNotices);
    }

    // 5. Seed Testimonials
    const testimonialsCol = db.collection('testimonials');
    const existingTestimonials = await testimonialsCol.countDocuments();
    if (existingTestimonials === 0) {
      console.log(`Seeding ${mockTestimonials.length} testimonials...`);
      await testimonialsCol.insertMany(mockTestimonials);
    }

    // 6. Seed Site Settings
    const settingsCol = db.collection('siteSettings');
    const existingSettings = await settingsCol.countDocuments();
    if (existingSettings === 0) {
      console.log(`Seeding site settings...`);
      await settingsCol.insertOne(mockSettings);
    }

    console.log("Seeding completed successfully!");
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    await client.close();
  }
}

seed();
