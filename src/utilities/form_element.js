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
        this.init();
    }

    init() {
        // call build
        // potentially do more things..
    }

    build(name, type) {
        // create document element here
        // attach validation handlers
        // return the element and store in a variable
    }

    validationChecks() {
        // handle validation checks here using common_validations.
    }
}