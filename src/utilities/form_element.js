import * as domutils from './domutils';
import * as validations from './common_validations';

export default class FormInput {

    constructor(name, type) {
        this.inputName = name;
        this.inputType = type;
        this.element = null;
        this.isTouched = false;
        this.isInvalid = false;
        this.isValid = false;
        this.template = ``;
    }

    buildTemplate() {
        // create document element here
        // attach validation handlers
        // return the element and store in a variable
        let el = document.createElement('input');
        el.setAttribute('id', this.inputName);
        el.setAttribute('type', this.inputType);
        el.classList.add('entry__form-input');
        this.template = el;
    }

    validationChecks() {
        // handle validation checks here using common_validations.
    }
}