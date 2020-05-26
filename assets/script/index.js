let menuOpened = false;

document.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const nav = document.getElementById('nav');
    if(scrollHeight > 0)
        nav.classList.add('float')
    else
        nav.classList.remove('float');
});

document.getElementById('hamburger')
    .addEventListener('click', async () => {
        const menu = document.getElementById('menu');
        if(menuOpened) {
            document.body.classList.remove('menu-active');
            menu.classList.add('closing');
            await wait(200);
            menu.classList.remove('opened');
            menu.classList.remove('closing');
        } else {
            document.body.classList.add('menu-active');
            menu.classList.add('opening');
            await wait(200);
            menu.classList.add('opened');
            menu.classList.remove('opening');
        }
        menuOpened = !menuOpened;
    })
;

async function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}