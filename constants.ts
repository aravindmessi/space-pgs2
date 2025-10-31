
import { WebDevIcon, AppDevIcon, VideoIcon, ERPIcon, CRMIcon, AIIcon } from './components/Icons';

export const services = [
  { id: 'web-development', name: 'Web Development', description: 'Crafting stunning, high-performance websites tailored to your brand.', icon: WebDevIcon },
  { id: 'app-development', name: 'App Development', description: 'Building intuitive and powerful mobile applications for iOS and Android.', icon: AppDevIcon },
  { id: 'video-shooting-ads', name: 'Video Shooting & Ads', description: 'Producing cinematic video content and compelling advertisements that convert.', icon: VideoIcon },
  { id: 'erp-solutions', name: 'ERP Solutions', description: 'Streamlining your business processes with custom Enterprise Resource Planning systems.', icon: ERPIcon },
  { id: 'crm', name: 'CRM', description: 'Enhancing customer relationships with powerful and integrated CRM solutions.', icon: CRMIcon },
  { id: 'ai-integrations', name: 'AI Integrations', description: 'Leveraging Artificial Intelligence to automate tasks and unlock new potentials.', icon: AIIcon },
];

// FIX: Define a type for navigation links to ensure type safety across components when arrays are combined.
export type NavLink = {
  name: string;
  path: string;
  dropdown?: typeof services;
};

export const navLinksLeft: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services', dropdown: services },
];

export const navLinksRight: NavLink[] = [
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export const discussProjectLink = { name: 'Discuss Project', path: '/discuss-project' };