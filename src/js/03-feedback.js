import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const textarea = document.querySelector('[name="message"]');
const inputEmail = document.querySelector('[name="email"]');

const formData = {};

feedbackForm.addEventListener('submit', onFormSubmit);

feedbackForm.addEventListener(
  'input',
  throttle(evt => {
    const {
      elements: { email, message },
    } = evt.currentTarget;

    formData.email = email.value;
    formData.message = message.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }),
  500
);

populateMessageOutput();

function onFormSubmit(event) {
  event.preventDefault();

  if (inputEmail.value === '' || textarea.value === '') {
    return alert('All fields must be filled. Please fil them out');
  }
  console.log(formData);
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
}

function populateMessageOutput() {
  const json = localStorage.getItem('feedback-form-state');

  const savedMessage = JSON.parse(json);
  if (savedMessage) {
    textarea.value = savedMessage.message;
    inputEmail.value = savedMessage.email;
  }
}
