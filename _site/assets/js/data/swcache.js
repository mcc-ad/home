const resource = [
  /* --- CSS --- */
  '/home/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/home/app.js',
  '/home/sw.js',

  /* --- HTML --- */
  '/home/index.html',
  '/home/404.html',

  
    '/home/team/',
  
    '/home/repo/',
  
    '/home/publications/',
  
    '/home/about/',
  
    '/home/archives/',
  
    '/home/categories/',
  
    '/home/tags/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/home/assets/img/favicons/android-chrome-192x192.png',
    '/home/assets/img/favicons/android-chrome-512x512.png',
    '/home/assets/img/favicons/apple-touch-icon.png',
    '/home/assets/img/favicons/avatar.png',
    '/home/assets/img/favicons/avatar2.png',
    '/home/assets/img/favicons/avatar3.png',
    '/home/assets/img/favicons/favicon-16x16.png',
    '/home/assets/img/favicons/favicon-32x32.png',
    '/home/assets/img/favicons/favicon.ico',
    '/home/assets/img/favicons/mstile-150x150.png',
    '/home/assets/img/favicons/wildcard_icon.jpg',
    '/home/assets/js/dist/categories.min.js',
    '/home/assets/js/dist/commons.min.js',
    '/home/assets/js/dist/home.min.js',
    '/home/assets/js/dist/misc.min.js',
    '/home/assets/js/dist/page.min.js',
    '/home/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  
    'mcc-ad.github.io',
  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

