// Funcion para activar el hover sobre los items del menu //

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');

    });
});




// funcion para el area de mis gustos//

let misgustos = [
    {
        nombre: 'Crossfit',
        img: './img/cross.jpg'
    },
    {
        nombre: 'Bici',
        img: './img/bici.jpg'
    },
   
  {
        nombre: 'Pizza',
        img: './img/pizza.jpg'
    },
  {
        nombre: 'Cofi',
        img: './img/cachorro.jpg'
    },
    
];

function crearHTMLMisgustos(gusto) {
    
    let imagenGusto = document.createElement('img');
    imagenGusto.src = gusto.img;
    
    let listItem = document.createElement('div');
    
    listItem.appendChild(imagenGusto);
    
    return listItem;
  }

  const listaGustos = document.querySelector('#mis-gustos');

  misgustos.forEach(function(gusto) {
    let gustosListItem = crearHTMLMisgustos (gusto)

  listaGustos.appendChild(gustosListItem);
});