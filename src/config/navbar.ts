export interface NavItem {
  title: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: '/assets/nihallogo.png',
    alt: 'logo',
    width: 100,
    height: 100,
  },
  navItems: [
    {
      title: 'About',
      href: '/',
    },
    {
      title: 'Projects',
      href: '/projects',
    },
    {
      title: 'Blogs',
      href: '/blog',
    },
    {
      title: 'Contact',
      href: '/contact'
    }
  ] as NavItem[],
};