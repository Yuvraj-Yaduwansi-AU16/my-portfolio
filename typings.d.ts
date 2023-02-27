interface SanityBody {
  _createdAt: string;
  _updatedAt: string;
  _id: string;
  _rev: string;
}
export interface Social {
  title: string;
  url: string;
}
interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'refeence';
  };
}
export interface PageInfo {
  address: string;
  bgInfo: string;
  email: string;
  role: string;
  heroImage: string;
  name: string;
  phoneNo: string;
  profilePic: string;
}
export interface Technology {
  image: string;
  progress: string;
  title: string;
}
export interface Skill {
  title: string;
  image: string;
  progress: number;
}
export interface Project {
  title: string;
  image: string;
  linkToBuild: string;
  summary: string;
  technologies: string[];
}
export interface Experience {
  company: string;
  companyImage: string;
  dateStarted: date;
  dateEnded?: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies?: string[];
}
