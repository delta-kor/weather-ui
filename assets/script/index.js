document.addEventListener('scroll', ev => {
    const scrollHeight = window.pageYOffset;
    const nav = document.getElementById('nav');
    if(scrollHeight > 0)
        nav.classList.add('float')
    else
        nav.classList.remove('float');
});