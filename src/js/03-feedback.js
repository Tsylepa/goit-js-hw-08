import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formStateKey = 'feedback-form-state';

getValues();

form.addEventListener('input', throttle(saveFormValues, 500));
form.addEventListener('submit', onFormSubmit);

function getValues() {
  const savedData = JSON.parse(localStorage.getItem(formStateKey));
  if (!savedData) return;

  const { email, message } = savedData;
  form.elements.email.value = email || '';
  form.elements.message.value = message || '';
}

function saveFormValues(e) {
  const { name, value } = e.target;
  const feedbackData = JSON.parse(localStorage.getItem(formStateKey)) || {};

  feedbackData[name] = value;
  localStorage.setItem(formStateKey, JSON.stringify(feedbackData));
}

function onFormSubmit(e) {
  e.preventDefault();

  const {
    email: { value: email },
    message: { value: message },
  } = e.target.elements;

  console.log({ email, message });
  form.reset();
  localStorage.removeItem(formStateKey);
}
