import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("[name = email]");
const messageInput = form.querySelector("[name = message]");
const feedback = {};
const formStateKey = "feedback-form-state";
const formState = localStorage.getItem(formStateKey);

form.addEventListener("input", throttle(saveFormValues, 500));
form.addEventListener("submit", onFormSubmit);

if (formState) {
  try {
    const feedbackValues = JSON.parse(formState);

    emailInput.value = feedbackValues.email;
    messageInput.value = feedbackValues.message;
  } catch {
    console.log("Невалідні дані");
  }
}

function saveFormValues() {
  feedback.email = emailInput.value;
  feedback.message = messageInput.value;

  localStorage.setItem(formStateKey, JSON.stringify(feedback));
}

function onFormSubmit(e) {
  e.preventDefault();
  form.reset();
  localStorage.clear();
  console.log(feedback);
}
