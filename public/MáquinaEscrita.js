function typeWriter(element) {
    const textoArray = element.innerHTML.split('')
    element.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(function() {
            element.innerHTML += letra;
        }, 110 * i)
    });
}

typeWriter(document.querySelector('div h2'))