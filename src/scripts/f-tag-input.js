export function createTagInput(container, initialTags = []) {
    const tags = new Set();
    const tagsDiv = container.querySelector('.js-tag-input__tags');
    const input = container.querySelector('.js-tag-input__input');

    const renderTag = (text) => {
        const tagDiv = document.createElement('div');
        tagDiv.className = 'f-tag-input__tag';
        tagDiv.innerHTML = `${text}<span class="f-tag-input__remove">×</span>`;
        tagsDiv.appendChild(tagDiv);

        tagDiv.addEventListener('click', () => {
            tagDiv.classList.toggle('f-tag-input__tag--active');
        });

        tagDiv.querySelector('.f-tag-input__remove').addEventListener('click', (e) => {
            e.stopPropagation();
            tags.delete(text);
            tagDiv.remove();
        });
    };

    const addTag = (text) => {
        text = text.trim();
        if (!text || tags.has(text)) return;
        tags.add(text);
        renderTag(text);
    };

    const clear = () => {
        tags.clear();
        tagsDiv.innerHTML = '';
    };

    const getTags = () => Array.from(tags);

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag(input.value);
            input.value = '';
        }
    });

    initialTags.forEach(addTag);

    return {
        addTag,
        getTags,
        clear,
    };
}