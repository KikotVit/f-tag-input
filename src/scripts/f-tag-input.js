export function createTagInput(container, initialTags = []) {
    const tags = new Set();
    const tagsDiv = container.querySelector('.js-tag-input__tags');
    const input = container.querySelector('.js-tag-input__input');

    const renderTag = (text) => {
        const tagDiv = document.createElement('div');
        tagDiv.className = 'f-tag-input__tag';
        tagDiv.innerHTML = `${text}<span class="f-tag-input__remove">×</span>`;
        tagDiv.dataset.value = text;
        tagsDiv.appendChild(tagDiv);
    };

    const addTag = (text) => {
        text = text.trim();
        if (!text || tags.has(text)) return;
        tags.add(text);
        renderTag(text);
    };

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag(input.value);
            input.value = '';
        }
    });

    tagsDiv.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('f-tag-input__remove')) {
            const tagDiv = target.closest('.f-tag-input__tag');
            const value = tagDiv.dataset.value;
            tags.delete(value);
            tagDiv.remove();
            return;
        }

        if (target.classList.contains('f-tag-input__tag')) {
            target.classList.toggle('f-tag-input__tag--active');
        }
    });

    initialTags.forEach(addTag);
}
