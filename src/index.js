// index.js
import './style.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { clearContent, socialHover } from './utility.js';
import { loadContact } from './contact.js';

const contentDiv = document.querySelector('#content');

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

loadHome(contentDiv);
socialHover();

homeBtn.addEventListener('click', () => {
  clearContent(contentDiv);
  loadHome(contentDiv);
});

menuBtn.addEventListener('click', () => {
  clearContent(contentDiv);
  loadMenu(contentDiv);
});

contactBtn.addEventListener('click', () => {
  clearContent(contentDiv);
  loadContact(contentDiv);
});
