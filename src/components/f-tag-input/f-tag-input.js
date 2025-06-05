import './f-tag-input.scss';

class FTagInput extends HTMLElement {
  constructor() {
    super();
    this.tags = new Set();
    this.placeholder = this.getAttribute('placeholder') || 'Add a tag';
  }

  connectedCallback() {
    const initialTags = this.getAttribute('tags');
    this.render();
    if (initialTags) {
      JSON.parse(initialTags).forEach(tag => this.addTag(tag));
    }
    this.addListeners();
  }

  render() {
    this.innerHTML = `
    <div class="f-tag-input">
      <div class="f-tag-input__tags js-tag-input__tags"></div>
      <input type="text" class="f-tag-input__input js-tag-input__input" placeholder="${this.placeholder}" />
    <div>
    `;
  }

  addListeners() {
    const input = this.querySelector('.js-tag-input__input');
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const val = input.value.trim();
          this.addTag(val);
          input.value = '';
      }
    });
  }

  addTag(text) {
    text = text.trim();
    if (!text || this.tags.has(text)) return;
    this.tags.add(text);
    const tagEl = document.createElement('div');
    tagEl.className = 'f-tag-input__tag';
    tagEl.innerHTML = `${text}<span class="f-tag-input__remove js-tag-input__remove">×</span>`;
    tagEl.addEventListener('click', () => {
      tagEl.classList.toggle('f-tag-input__tag--active');
    });
    tagEl.querySelector('.js-tag-input__remove').addEventListener('click', (e) => {
      e.stopPropagation();
      this.tags.delete(text);
      tagEl.remove();
    });
    this.querySelector('.js-tag-input__tags').appendChild(tagEl);
  }
}

customElements.define('f-tag-input', FTagInput);
