import { requestNewContent } from './modules/request-content.js';

const randomGeneratorButton = document.querySelector('[data-content-fetcher]');

randomGeneratorButton.addEventListener('click', () => {
  requestNewContent();
});


