// Get form elements
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submit-button');

const api = 'https://us-central1-open-classrooms-js-for-the-web.cloudfunctions.net/widgets';

// Get DOM elements for showing response
const responseMessage = document.getElementById('response-message');
const responseTitle = document.getElementById('response-title');
const responseContent = document.getElementById('response-content');

submitButton.addEventListener($click) => {
  $click.preventDefault();
  const post = {
    title: titleInput.value,
    content: contentInput.value
  };
};

