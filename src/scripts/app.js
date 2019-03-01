// Remove '?' and '%20'
const qs = window.location.search;
if (qs) {
    const qsText = qs
        .replace(/%20/gm, " ")
        .replace(/\?/i, "");
    
    document.querySelector('.text').innerHTML = qsText;
}


// Change gradient on mouseup
let height = window.innerHeight;

function updateColor(yVal) {
    const percent = yVal/height;
    const hue = percent * 360;

    const root = document.documentElement;
    
    root.style.setProperty('--hue', hue);
}

function onClick(e) {
    updateColor(e.y)
}

function onTouchEnd(e) {
    updateColor(e.changedTouches[0].pageY)
}

window.addEventListener('mouseup', onClick);
window.addEventListener('touchend', onTouchEnd);

