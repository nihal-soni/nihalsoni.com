export interface NavItem {
  title: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: '/assets/nihallogo.png',
    alt: 'logo',
    width: 50,
    height: 50,
  },
  navItems: [
    {
      title: 'About',
      href: '/about',
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