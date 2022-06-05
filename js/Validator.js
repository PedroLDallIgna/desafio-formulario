export class Validator {
    constructor(id, pattern, error_message) {
        this.id = id;
        this.element = document.querySelector(`#${this.id}`);
        this.pattern = pattern;
        this.error_message = error_message;
    }

    isValid(prop) {
        if (this.element.type != 'checkbox' && this.element.type != 'tel') {
            return this.pattern.test(this.element[prop]);
        } else {
            if (this.element.type == 'tel') {
                return this.element[prop] != "" ? this.pattern.test(this.element[prop]) : true; 
            } else if (this.element.type == 'checkbox') {
                return this.element.checked;
            }
        }
    }

    updateError(element, message, color) {
        element.textContent = message;
        element.style.color = color;
    }

    validate(prop) {
        let error = document.querySelector(`#${this.id} ~ .error`) || document.querySelector('#last-error');
        if (this.isValid(prop)) {
            this.updateError(error, "-", "#FFFFFF");
            return true;
        } else {
            this.updateError(error, this.error_message, "#FF4B4B");
            return false;
        }
    }
}
