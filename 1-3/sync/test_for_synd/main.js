const string = 'from JS with 3 sec. deplay';

const p = `<p>${string}</p>`;

const currentScript = document.currentScript

if (currentScript) {
    currentScript.insertAdjacentHTML('beforebegin', p);
}
