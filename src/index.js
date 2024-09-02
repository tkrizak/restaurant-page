// index.js
import './style.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';

const contentDiv = document.querySelector('#content');

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

loadHome(contentDiv);

homeBtn.addEventListener('click', () => {
  clearContent(contentDiv);
  loadHome(contentDiv);
});

menuBtn.addEventListener('click', () => {
  clearContent(contentDiv);
  loadMenu(contentDiv);
});

function clearContent(container) {
  container.innerHTML = '';
}
