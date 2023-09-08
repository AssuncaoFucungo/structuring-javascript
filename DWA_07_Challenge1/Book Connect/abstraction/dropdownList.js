/**
 * Populates a dropdown list with options.
 *
 * @param {Object} data - The data object containing dropdown list options
 * @param {HTMLElement} htmlElement - HTML element where options will be appended.
 */
export function populateDropdown(data, htmlElement) {
    /**
     * Create a document fragment to add multiple elements to the DOM.
     * @type {DocumentFragment}
     */
    const fragment = document.createDocumentFragment();

    for (const [id, name] of Object.entries(data)) {
        // Create an option element for each entry in the data object.
        const element = document.createElement('option');
        element.value = id;
        element.innerText = name;

        // Append the option element to the document fragment.
        fragment.appendChild(element);
    }

    // Append the document fragment to the specified HTML element.
    htmlElement.appendChild(fragment);
}
