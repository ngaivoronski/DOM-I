const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navbar
let navBarItems = document.querySelectorAll('nav a');
navBarItems[0].textContent = siteContent["nav"]["nav-item-1"];
navBarItems[1].textContent = siteContent["nav"]["nav-item-2"];
navBarItems[2].textContent = siteContent["nav"]["nav-item-3"];
navBarItems[3].textContent = siteContent["nav"]["nav-item-4"];
navBarItems[4].textContent = siteContent["nav"]["nav-item-5"];
navBarItems[5].textContent = siteContent["nav"]["nav-item-6"];

// Styling for NavBar
navBarItems.forEach(item => item.style.color = "green");

// New Nav Elements
let navBar = document.querySelector('nav');

let navHome = document.createElement("a");
navHome.textContent = "Home";
navHome.style.color = "green";

let navFAQ = document.createElement("a");
navFAQ.textContent = "FAQ";
navFAQ.style.color = "green";

navBar.prepend(navHome);
navBar.appendChild(navFAQ);

// Header
let headerTitle = document.querySelector('.cta-text h1');
headerTitle.textContent = siteContent["cta"]["h1"];

let headerButton = document.querySelector('.cta-text button');
headerButton.textContent = siteContent["cta"]["button"];

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

// Main content
let mainHeadings = document.querySelectorAll('.main-content h4');
mainHeadings[0].textContent = siteContent["main-content"]["features-h4"];
mainHeadings[1].textContent = siteContent["main-content"]["about-h4"];
mainHeadings[2].textContent = siteContent["main-content"]["services-h4"];
mainHeadings[3].textContent = siteContent["main-content"]["product-h4"];
mainHeadings[4].textContent = siteContent["main-content"]["vision-h4"];

let mainParas = document.querySelectorAll('.main-content p');
mainParas[0].textContent = siteContent["main-content"]["features-content"];
mainParas[1].textContent = siteContent["main-content"]["about-content"];
mainParas[2].textContent = siteContent["main-content"]["services-content"];
mainParas[3].textContent = siteContent["main-content"]["product-content"];
mainParas[4].textContent = siteContent["main-content"]["vision-content"];

let mainImg = document.querySelector('.main-content img');
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Contact
let contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent['contact']['contact-h4'];

let contactParas = document.querySelectorAll('.contact p');
contactParas[0].textContent = siteContent['contact']['address'];
contactParas[1].textContent = siteContent['contact']['phone'];
contactParas[2].textContent = siteContent['contact']['email'];

// Footer
let footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright'];