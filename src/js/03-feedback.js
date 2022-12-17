import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name = email]');
const messageInput = form.querySelector('[name = message]');
const formStateKey = 'feedback-form-state';
const feedback = {};

getValues();

form.addEventListener('input', throttle(saveFormValues, 500));
form.addEventListener('submit', onFormSubmit);

function getValues() {
  if (localStorage.getItem(formStateKey)) {
    try {
      const feedbackValues = JSON.parse(localStorage.getItem(formStateKey));

      emailInput.value = feedbackValues.email;
      messageInput.value = feedbackValues.message;

      feedback.email = feedbackValues.email;
      feedback.message = feedbackValues.message;
    } catch {
      console.log('Невалідні дані');
    }
  }
}

function saveFormValues() {
  if (emailInput.value || messageInput.value) {
    localStorage.setItem(formStateKey, JSON.stringify(feedback));
    feedback.email = emailInput.value;
    feedback.message = messageInput.value;
  } else {
    localStorage.clear();
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  if (emailInput.value || messageInput.value) {
    console.log(feedback);
    form.reset();
    localStorage.clear();
  }
}
