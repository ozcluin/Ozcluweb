import clientPromise from './mongodb';

// Define TS types matching our DB schemas
export interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  date: string;
  status: 'New' | 'Read' | 'Account Created' | 'Archived';
}

export interface Account {
  id: string;
  name: string;
  email: string;
  company: string;
  status: 'Pending Setup' | 'Active' | 'Suspended';
  dateCreated: string;
}

export interface Verification {
  id: string;
  candidateName: string;
  type: 'Employment' | 'Identity' | 'Due Diligence' | 'Compliance';
  clientCompany: string;
  status: 'Pending' | 'In Progress' | 'Completed' | 'Action Required';
  dateInitiated: string;
  reportUrl: string;
}

const DB_NAME = 'ozclu';

async function getCollection(name: string) {
  const client = await clientPromise;
  return client.db(DB_NAME).collection(name);
}

export async function getSubmissions(): Promise<Submission[]> {
  try {
    const col = await getCollection('submissions');
    const items = await col.find({}).sort({ date: -1 }).toArray();
    return items.map(item => ({
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone || '',
      company: item.company || '',
      message: item.message,
      date: item.date,
      status: item.status,
    })) as Submission[];
  } catch (err) {
    console.error('Error reading submissions from MongoDB:', err);
    return [];
  }
}

export async function addSubmission(submission: Submission): Promise<void> {
  const col = await getCollection('submissions');
  await col.insertOne(submission);
}

export async function updateSubmissionStatus(id: string, status: Submission['status']): Promise<void> {
  const col = await getCollection('submissions');
  await col.updateOne({ id }, { $set: { status } });
}

export async function getAccounts(): Promise<Account[]> {
  try {
    const col = await getCollection('accounts');
    const items = await col.find({}).sort({ dateCreated: -1 }).toArray();
    return items.map(item => ({
      id: item.id,
      name: item.name,
      email: item.email,
      company: item.company || '',
      status: item.status,
      dateCreated: item.dateCreated,
    })) as Account[];
  } catch (err) {
    console.error('Error reading accounts from MongoDB:', err);
    return [];
  }
}

export async function addAccount(account: Account): Promise<void> {
  const col = await getCollection('accounts');
  await col.insertOne(account);
}

export async function updateAccountStatus(id: string, status: Account['status']): Promise<void> {
  const col = await getCollection('accounts');
  await col.updateOne({ id }, { $set: { status } });
}

export async function getVerifications(): Promise<Verification[]> {
  try {
    const col = await getCollection('verifications');
    const items = await col.find({}).sort({ dateInitiated: -1 }).toArray();
    return items.map(item => ({
      id: item.id,
      candidateName: item.candidateName,
      type: item.type,
      clientCompany: item.clientCompany,
      status: item.status,
      dateInitiated: item.dateInitiated,
      reportUrl: item.reportUrl || '',
    })) as Verification[];
  } catch (err) {
    console.error('Error reading verifications from MongoDB:', err);
    return [];
  }
}

export async function addVerification(verification: Verification): Promise<void> {
  const col = await getCollection('verifications');
  await col.insertOne(verification);
}

export async function updateVerificationStatus(id: string, status: Verification['status'], reportUrl?: string): Promise<void> {
  const col = await getCollection('verifications');
  const updateDoc: any = { status };
  if (reportUrl !== undefined) {
    updateDoc.reportUrl = reportUrl;
  }
  await col.updateOne({ id }, { $set: updateDoc });
}

// ============================================================
// New CMS Content Types — Dynamic Sync
// ============================================================

export interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  tags: string[];
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const col = await getCollection('blogPosts');
    const items = await col.find({}).sort({ createdAt: -1 }).toArray();
    return items.map(item => ({ ...item, _id: item._id.toString() })) as unknown as BlogPost[];
  } catch (err) {
    console.error('Error reading blog posts:', err);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const col = await getCollection('blogPosts');
    const item = await col.findOne({ slug });
    if (!item) return null;
    return { ...item, _id: item._id.toString() } as unknown as BlogPost;
  } catch (err) {
    console.error('Error reading blog post:', err);
    return null;
  }
}

export interface Notice {
  _id?: string;
  title: string;
  content: string;
  priority: 'low' | 'normal' | 'high';
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

export async function getNotices(): Promise<Notice[]> {
  try {
    const col = await getCollection('notices');
    const items = await col.find({}).sort({ createdAt: -1 }).toArray();
    return items.map(item => ({ ...item, _id: item._id.toString() })) as unknown as Notice[];
  } catch (err) {
    console.error('Error reading notices:', err);
    return [];
  }
}

export interface TeamMember {
  _id?: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  order: number;
  active: boolean;
  createdAt: string;
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const col = await getCollection('teamMembers');
    const items = await col.find({}).sort({ order: 1 }).toArray();
    return items.map(item => ({ ...item, _id: item._id.toString() })) as unknown as TeamMember[];
  } catch (err) {
    console.error('Error reading team members:', err);
    return [];
  }
}

export interface Service {
  _id?: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  order: number;
  active: boolean;
  createdAt: string;
}

export async function getServices(): Promise<Service[]> {
  try {
    const col = await getCollection('services');
    const items = await col.find({}).sort({ order: 1 }).toArray();
    return items.map(item => ({ ...item, _id: item._id.toString() })) as unknown as Service[];
  } catch (err) {
    console.error('Error reading services:', err);
    return [];
  }
}

export interface GalleryImage {
  _id?: string;
  url: string;
  caption: string;
  category: string;
  createdAt: string;
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  try {
    const col = await getCollection('galleryImages');
    const items = await col.find({}).sort({ createdAt: -1 }).toArray();
    return items.map(item => ({ ...item, _id: item._id.toString() })) as unknown as GalleryImage[];
  } catch (err) {
    console.error('Error reading gallery images:', err);
    return [];
  }
}

export interface Testimonial {
  _id?: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  active: boolean;
  createdAt: string;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const col = await getCollection('testimonials');
    const items = await col.find({}).sort({ createdAt: -1 }).toArray();
    return items.map(item => ({ ...item, _id: item._id.toString() })) as unknown as Testimonial[];
  } catch (err) {
    console.error('Error reading testimonials:', err);
    return [];
  }
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  heroBackgroundImage: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  trustedCompanies: string[];
  serviceCountries: string[];
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const col = await getCollection('siteSettings');
    const item = await col.findOne({});
    if (!item) return null;
    return item as unknown as SiteSettings;
  } catch (err) {
    console.error('Error reading site settings:', err);
    return null;
  }
}

// ---- FAQs ----
export interface FAQ {
  _id?: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  active: boolean;
  createdAt: string;
}

export async function getFAQs(): Promise<FAQ[]> {
  try {
    const col = await getCollection('faqs');
    let items = await col.find({}).sort({ order: 1 }).toArray();
    if (items.length === 0) {
      // Auto-seed default FAQs
      const defaultFaqs: Omit<FAQ, '_id'>[] = [
        {
          question: 'How long do standard background verification checks take?',
          answer: 'Standard employment background and identity checks are usually completed within 3 to 5 business days. Complex international verifications or detailed business due diligence screenings may take up to 7 to 10 business days depending on responsiveness of primary sources.',
          category: 'Verification Process',
          order: 1,
          active: true,
          createdAt: new Date().toISOString()
        },
        {
          question: 'What information does a candidate need to provide?',
          answer: 'Candidates typically need to provide government ID (such as a passport or driver\'s license), previous employment history records (company name, dates, supervisor contacts), and academic certificates. All information is uploaded securely through our encrypted portal.',
          category: 'Verification Process',
          order: 2,
          active: true,
          createdAt: new Date().toISOString()
        },
        {
          question: 'How does OzClu ensure data security and privacy compliance?',
          answer: 'We secure all data in transit using TLS 1.3 and at rest with AES-256 encryption. We comply fully with relevant data protection laws, restrict access internally via role-based access, and require candidate authorization prior to executing any checks.',
          category: 'Security & Compliance',
          order: 3,
          active: true,
          createdAt: new Date().toISOString()
        },
        {
          question: 'Can candidates dispute background check findings?',
          answer: 'Yes. In alignment with transparent governance practices, candidates are immediately notified of findings and can dispute any inaccuracies directly. OzClu will re-verify the records against the primary source and update the report if discrepancies are confirmed.',
          category: 'Candidate Onboarding',
          order: 4,
          active: true,
          createdAt: new Date().toISOString()
        },
        {
          question: 'Does OzClu support international verifications?',
          answer: 'Yes, we have a global verification network covering multiple jurisdictions, allowing us to perform employment history checks, academic credentials verifications, and global database screenings internationally with local compliance awareness.',
          category: 'Verification Process',
          order: 5,
          active: true,
          createdAt: new Date().toISOString()
        },
        {
          question: 'How does the automated dashboard work for HR teams?',
          answer: 'HR teams get access to a secure, real-time tracking control panel where they can trigger checks, view progress bars of active candidate reviews, download compiled PDF reports, and audit previous verification logs instantly.',
          category: 'General',
          order: 6,
          active: true,
          createdAt: new Date().toISOString()
        }
      ];
      await col.insertMany(defaultFaqs);
      items = await col.find({}).sort({ order: 1 }).toArray();
    }
    return items.map(item => ({ ...item, _id: item._id.toString() })) as unknown as FAQ[];
  } catch (err) {
    console.error('Error reading FAQs:', err);
    return [];
  }
}

