const menu = document.querySelector('.menu')
const links = document.querySelector('.nav-links')
const link= document.querySelectorAll('.link')

menu.addEventListener('click', () => {
    links.classList.toggle('active')
})

link.forEach(element => {
    element.addEventListener('click', () => {
        links.classList.remove('active')
    })
});