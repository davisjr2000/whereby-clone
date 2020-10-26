document.addEventListener('DOMContentLoaded', () => {
    buttonCopy = document.getElementById('buttonCopy');
    buttonCopy.addEventListener('click', copyToClipboard)
})

const copyToClipboard = () => {
    const textArea = document.createElement("textarea");
    const copyText = document.querySelector('.originalUrl');
    textArea.value = copyText.innerText.trim();
    document.body.appendChild(textArea);
    textArea.select();
    textArea.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.body.removeChild(textArea);
    buttonCopy.innerHTML = "Copied!"
    setTimeout(() => { 
        buttonCopy.innerHTML = "Copy"
    }, 3000);   
}