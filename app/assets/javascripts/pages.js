document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#goToPage')

    if (btn){
        btn.addEventListener('click', () => {
            const name = document.querySelector('input').value
            if (name.trim() !== ""){
                window.location.href = `/${name.trim()}`
            }
        })
    }
})
