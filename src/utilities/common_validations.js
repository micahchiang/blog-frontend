export let patterns = {
    'title': '^[A-Za-z0-9&! ]+$',
    'date': '^^(0[1-9]|1[0-2])\\.(0[1-9]|1\\d|2\\d|3[01])\\.(20[\\d]{2})$'
};

export let messages = {
    'fieldEmpty': 'Field cannot be blank',
    'titleInvalid': 'Invalid title due to restricted characters',
    'dateInvalid': 'The date must be mm.dd.yyyy'
};

export let validateAgainstPattern = function(pattern, val) {
    let regex = new RegExp(patterns[pattern]);
    return regex.test(val);
};

