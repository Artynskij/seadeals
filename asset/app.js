document.addEventListener('DOMContentLoaded', () => {
    const headerBlock = document.querySelector('.header')
    document.addEventListener('scroll', () => {
        if(window.scrollY > 25) {
            headerBlock.classList.add('scroll')
        } else{
            headerBlock.classList.remove('scroll')
        }
    })
})