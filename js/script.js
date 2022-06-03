const form = document.querySelector('.main-form');
const title = document.querySelector('h1');
const register= document.querySelector('.register-btn');
const success = document.querySelector('.success');
const back = document.querySelector('.back');
const inputs = document.querySelectorAll('input');
// var count = 0;

const validators = {
    "full-name": {
        pattern: /^[A-Z]{1}[a-z]+( [a-zA-Z\'\"\-]+)+$/, // /(?:[A-Z]{1}[a-z'"]+\s*)+/g, // /([A-Z]{1}[a-zA-Z'"-]+(\s?))+/g, // /([A-Z]{1}[a-z'"-]{3,}\s?)+/g, 
        message: "Fullname Invalid"
    },
    email: {
        pattern: /^[^@\t\n\r ]+@[^@\t\n\r ]+\.[^@\t\n\r ]+$/, // /[^@\t\n\r]+@[^@\t\n\r]+\.[^@\t\n\r]+/,
        message: "Email Invalid"
    },
    password: {
        pattern: /^\d{6,9}$/,
        message: "Password Invalid",
    },
    phone: {
        pattern: /^\d{11}$/,
        message: "Phone Invalid"
    },
    checkbox: {
        message: "You must accept the terms"
    },
    birthday: {
        isValid: function(component) {
            return (component.value != "" ? true : false);
        },
        message: "Age Invalid"
    }
};

const registerClick = (event) => {
    let count = 0;
    inputs.forEach(i => {
        if (validate(validators[i.id], i) && i.type != 'tel') {
            count++;
        } else {
            count--;
        }
        if (count >= 4) {
            form.style.display = 'none';
            success.style.display = 'flex';
            title.textContent = "Success!";
        }
    });
    console.log(count);
};

const backClick = (event) => {
    form.style.display = 'flex';
    success.style.display = 'none';
    title.textContent = "Internal Sign Up";
};

function validate(re, input) {
    if (input.type == 'checkbox') {
        let error = document.querySelector(`.check-btn .error`);
        if (input.checked) {
            updateSpan(error, "-", "#FFFFFF");
            return true; 
        } else {
            updateSpan(error, re.message, "#FF4B4B");
            return false; 
        }
    } else if (input.type == 'date') {
        let error = document.querySelector(`#${input.id} ~ .error`);
        if (re.isValid(input)) {
            updateSpan(error, "-", "#FFFFFF");
            return true;
        } else {
            updateSpan(error, re.message, "#FF4B4B");
            return false;
        }
    } else if (input.type == 'tel') {
        let error = document.querySelector(`#${input.id} ~ .error`);
        if (input.value != "") {
            if (!re.pattern.test(input.value)) {
                updateSpan(error, re.message, "#FF4B4B");
                return false;
            } else {
                updateSpan(error, "-", "#FFFFFF");
                return true;
            }
        } else {
            updateSpan(error, "-", "#FFFFFF");
            return true;
        }
    } else {
        // if (input.type == 'tel' && input.value == "" ? true : re.pattern.test(input.value)) {
        let error = document.querySelector(`#${input.id} ~ .error`);
        if (!re.pattern.test(input.value)) {
            updateSpan(error, re.message, "#FF4B4B");
            return false;
        } else {
            updateSpan(error, "-", "#FFFFFF");
            return true;
        }
    }
}

function updateSpan(component, message, color) {
    component.textContent = message;
    component.style.color = color;
    return true;
}
