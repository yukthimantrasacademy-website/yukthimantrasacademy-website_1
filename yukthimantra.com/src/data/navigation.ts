/**
 * Navigation Data — two-group navbar structure
 */

export interface NavItem {
  label: string;
  href: string;
  group: 'left' | 'right';
}

export const navigationItems: NavItem[] = [
  // Left Group
  { label: 'Programmes', href: '/programmes', group: 'left' },
  { label: 'Career Pathways', href: '/career-pathways', group: 'left' },
  { label: 'Eligibility', href: '/eligibility', group: 'left' },
  { label: 'Admission Counselling', href: '/admission-counselling', group: 'left' },

  // Right Group
  { label: 'About', href: '/about', group: 'right' },
  { label: 'Career Support', href: '/career-support', group: 'right' },
  { label: 'FAQ', href: '/#faq', group: 'right' },
];

export const leftNavItems = navigationItems.filter((item) => item.group === 'left');
export const rightNavItems = navigationItems.filter((item) => item.group === 'right');
