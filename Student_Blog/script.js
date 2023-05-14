// Get form and articles container elements
const articleForm = document.getElementById('articleForm');
const articlesContainer = document.getElementById('articlesContainer');

// Handle form submission
articleForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values
    const title = document.getElementById('titleInput').value;
    const content = document.getElementById('contentInput').value;

    // Create a new article element
    const articleElement = document.createElement('div');
    articleElement.classList.add('article');

    // Create title and content elements
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const contentElement = document.createElement('p');
    contentElement.textContent = content;

    // Append title and content to the article element
    articleElement.appendChild(titleElement);
    articleElement.appendChild(contentElement);

    // Append the article element to the articles container
    articlesContainer.appendChild(articleElement);

    // Reset the form
    articleForm.reset();
});



