document.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const nav = document.getElementById('nav');
    if(scrollHeight > 0)
        nav.classList.add('float')
    else
        nav.classList.remove('float');
});

document.getElementById('hamburger')
    .addEventListener('click', () => {
        document.body.classList.toggle('menu-active');
    })
;