// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

document.addEventListener('DOMContentLoaded', () => {
    buttonCopy = document.getElementById('buttonCopy');

    buttonCopy.addEventListener('click', () => {
        const textArea = document.createElement("textarea");
        const copyText = document.querySelector('.originalUrl');
        textArea.value = copyText.innerText.trim()
        document.body.appendChild(textArea);
        textArea.select();
        textArea.setSelectionRange(0, 99999)
        document.execCommand("copy");
        document.body.removeChild(textArea);
    })
})
