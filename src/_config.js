export const process = {
  dev: false,
};

export const site = {
  home: process.dev ? 'http://localhost:8080/' : 'http://trololo.ololo/',
};

export const app = {
  title: 'Notes',
};

export const links = [
  {
    title: 'Home',
    alias: 'home',
    url: '/',
  },
  {
    title: 'About',
    alias: 'about',
    url: '/about',
  },
];
