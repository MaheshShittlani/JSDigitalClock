const clock = document.querySelector('#clock');

const tick = () => {
    const now = new Date();
    // const hours = now.getHours();
    // const minutes = now.getMinutes();
    // const seconds = now.getSeconds();

    const html = `
        <span>${dateFns.format(now,'hh')}</span> : 
        <span>${dateFns.format(now,'mm')}</span> :
        <span>${dateFns.format(now,'ss')}</span>
    `;

    clock.innerHTML = html;
}

setInterval(tick, 1000);

