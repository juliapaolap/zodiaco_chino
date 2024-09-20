function calcularSigno() {
    const nacimiento = document.getElementById('nacimiento').value;
    const resto = nacimiento % 12;
    let signo = '';
    let imagen = '';

    if (nacimiento !== '') {
        switch (resto) {
            case 0:
                signo = 'Mono';
                imagen = './image/mono.jpeg';
                break;
            case 1:
                signo = 'Gallo';
                imagen = './image/gallo.jpeg';
                break;
            case 2:
                signo = 'Perro';
                imagen = './image/perro.jpeg';
                break;
            case 3:
                signo = 'Cerdo';
                imagen = './image/cerdo.jpeg';
                break;
            case 4:
                signo = 'Rata';
                imagen = './image/rata.jpeg';
                break;
            case 5:
                signo = 'Buey';
                imagen = './image/buey.jpeg';
                break;
            case 6:
                signo = 'Tigre';
                imagen = './image/tigre.jpeg';
                break;
            case 7:
                signo = 'Conejo';
                imagen = './image/conejo.jpeg';
                break;
            case 8:
                signo = 'Dragón';
                imagen = './image/dragon.jpeg';
                break;
            case 9:
                signo = 'Serpiente';
                imagen = './image/serpiente.jpeg';
                break;
            case 10:
                signo = 'Caballo';
                imagen = './image/caballo.jpeg';
                break;
            case 11:
                signo = 'Cabra';
                imagen = './image/cabra.jpeg';
                break;
        }

        document.getElementById('resto').textContent = `Resto: ${resto}`;
        document.getElementById('signo').textContent = `Signo: ${signo}`;
        document.getElementById('imagen').innerHTML = `<img src="${imagen}" alt="${signo}" width="200px">`;
    } else {
        alert('Por favor, ingrese un año de nacimiento válido.');
    }
}
