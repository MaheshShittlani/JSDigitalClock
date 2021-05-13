const clock = document.querySelector('#clock');

const tick = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const html = `
        <span>${hours < 10 ? '0'+hours : hours}</span> : 
        <span>${minutes < 10 ? '0'+minutes: minutes}</span> :
        <span>${seconds < 10 ? '0'+seconds: seconds}</span>
    `;

    clock.innerHTML = html;
}

setInterval(tick, 1000);

