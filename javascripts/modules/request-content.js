import { contentUrl } from './constants.js';
import { panelTemplate } from './panel-template.js';

const htmlToNodes = (htmlString) => document.createRange().createContextualFragment(htmlString);

const appendContent = (jsonContent) => {
  const placementNode = document.querySelector('[data-content-list]');
  const content = panelTemplate(jsonContent);
  const contentHtml = htmlToNodes(content);

  placementNode.appendChild(contentHtml);
}

const requestNewContent = () => {
  // Can we fetch a random photo each time? The IDs are between 1 and 5000
  const randomNumber = Math.random() * 5000;
  fetch(contentUrl(Math.round(randomNumber)))
    .then(response => {
      if(response.status !== 200) {
        console.error(`Status code: ${response.status}. Something has gone horribly wrong!`);
        return;
      }
      response.json()
        .then(json => appendContent(json))
    })
    .catch((err) => console.error(`Error fetching the photo: ${err}`));
};

export {
  requestNewContent
};
