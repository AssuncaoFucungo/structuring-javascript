/**
 * Display detailed information about a book in an overlay.
 *
 * @param {Object} book - Book object containing book details.
 * @param {Object} authors - Object containing author information.
 */
export function displayBookDetails(book, authors) {
   
    const listActiveElement = document.querySelector('[data-list-active]');
    const listBlurElement = document.querySelector('[data-list-blur]');
    const listImageElement = document.querySelector('[data-list-image]');
    const listTitleElement = document.querySelector('[data-list-title]');
    const listSubtitleElement = document.querySelector('[data-list-subtitle]');
    const listDescriptionElement = document.querySelector('[data-list-description]');
  
    listActiveElement.open = true;
    listBlurElement.src = book.image;
    listImageElement.src = book.image;
    listTitleElement.innerText = book.title;
    listSubtitleElement.innerText = `${authors[book.author]} (${new Date(book.published).getFullYear()})`;
    listDescriptionElement.innerText = book.description;
  }
  