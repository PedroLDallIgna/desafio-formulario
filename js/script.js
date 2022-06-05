import Patterns from "./patterns.js";
import { Validator } from "./Validator.js";

const form = document.querySelector('.main-form');
const title = document.querySelector('h1');
const register = document.querySelector('.register-btn');
const success = document.querySelector('.success');
const back = document.querySelector('.back-btn');
const inputs = document.querySelectorAll('input');

const error_messages = {
    "full-name": "Fullname Invalid",
    email: "Email Invalid",
    password: "Password Invalid",
    phone: "Phone Invalid",
    checkbox: "You must accept the terms",
    birthday: "Age Invalid"
};

const inputValidators = [];
inputs.forEach((input) => {
    inputValidators.push(new Validator(input.id, Patterns.hasOwnProperty(input.id) ? Patterns[input.id] : null, error_messages[input.id]));
});

const registerClick = (event) => {
    let count = 0;
    inputValidators.forEach((element, i) => {
        element.validate('value') ? count++ : count--;
    });
    if (count >= 5) {
        form.style.display = 'none';
        success.style.display = 'flex';
        title.textContent = "Success!";
    }
};

const backClick = (event) => {
    form.style.display = 'flex';
    success.style.display = 'none';
    title.textContent = "Internal Sign Up";

    inputs.forEach(element => {
        if (element.type != 'checbox') {
            element.value = "";
            document.querySelector(`#${element.id} ~ .error`).textContent = "";
        } else {
            document.querySelector(`#last-error`) = "";
        }
    })
};

register.addEventListener('click', registerClick);
back.addEventListener('click', backClick);
