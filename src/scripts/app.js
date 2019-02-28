const qs = window.location.search;

// remove '?' and '%20'
if (qs) {
    const qsText = qs
        .replace(/%20/gm, " ")
        .replace(/\?/i, "");
    
    document.querySelector('.text').innerHTML = qsText;
}