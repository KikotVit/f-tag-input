import { createTagInput } from './scripts/f-tag-input.js';


document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.js-tag-input');

  const rawData = container.dataset.tags;
  let tags = [];

  try {
    tags = JSON.parse(rawData);
  } catch (e) {
    console.warn('Invalid data-tags JSON');
  }
  // initialize the tag input with the container and parsed tags
  createTagInput(container, tags);
});