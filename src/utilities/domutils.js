
export let attachListener = function(id, listener, callback) {
    let el = document.getElementById(id);
    el.addEventListener(listener, callback);
};

export let loadView = function(fileName) {
    let url = `views/${fileName}.html`;
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status !== 200) {
                return;
            }
            resolve(this.responseText);
        };
        xhr.send();
    });
};

export let displayValidationMessage = function(id, message) {
    let el = document.getElementById(id);
    el.innerText = message;
    el.classList.add('visible');
};

export let hideValidationMessage = function(id) {
    let el = document.getElementById(id);
    if(el.classList.contains('visible')) {
        el.classList.remove('visible');
    }
};
