class Dish {
    constructor(id, name, description, price, category, image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.image = image;
    }
}

/// let image = document.querySelector(".img");
//     let name = document.querySelector(".title");
//     let price = document.querySelector(".price");
//     let description = document.querySelector(".description");


const params = new URLSearchParams(document.location.search);
const id = params.get("id");
console.log(id)
const PLATS_URL ='./../images/plats.json';



// recuperer le plat à l'aide du fetch
fetch(PLATS_URL)
.then(data => data)
.then(data => data.json())
.then(data => {
    console.log(data)


//
    const platFound = data.find((plat) => plat.id == id );
    console.log(platFound);
    getPlat(platFound);

    
    //créer une instance de Dish pour chaque objet plats à l'aide d'une boucle for pour tous les cibler

// for(let dish of data){
//  const newDish = new Dish(dish.id, dish.name, dish.description, dish.price, dish.category);
//  tableauDish.push(newDish);
// }
// for(let dish of tableauDish){
//    displayPlats(dish);
// }
// console.log(tableauDish);

})



function getPlat(plat){ 
let ul = document.getElementById("menu-list");
 
//insertion de l'élément li
let productLi = document.createElement('li');
productLi.classList.add('menu-item');
ul.appendChild(productLi);


// creation de l'element div 
const divContenair = document.createElement('div');
productLi.appendChild(divContenair)

// creation de l'element img
const image = document.createElement('img');
image.src = './../'+plat.image;
image.alt = 'description';
divContenair.appendChild(image);


// creation de l'element div avec la class "menu-item-description"
const divMenuItem = document.createElement('div');
divMenuItem.classList.add("menu-item-description");
divContenair.appendChild(divMenuItem);

//creation du h3
const h3 = document.createElement('h3');
h3.textContent = plat.name;
divMenuItem.appendChild(h3)


//creation du p
const p = document.createElement('p');
p.textContent = plat.description;
divMenuItem.appendChild(p);

//creation d'une div
const divmenuItemprice = document.createElement('div');
divmenuItemprice.classList.add("menu-item-price");
divmenuItemprice.textContent = plat.price + '€';
divContenair.appendChild(divmenuItemprice);

// //creation d'une div
// const divButton = document.createElement('div');
// divButton.classList.add("button_group");
// productLi.appendChild(divButton);

// //creation de bouton avec une class et un texte 
// const buttonSuccess = document.createElement('button');
// buttonSuccess.classList.add("btn");
// buttonSuccess.classList.add("btn-success");
// buttonSuccess.textContent = 'ajouter au panier';
// divButton.appendChild(buttonSuccess);

// //creation de bouton avec une class et un texte 
// const buttonDanger = document.createElement('button');
// buttonDanger.classList.add("btn");
// buttonDanger.classList.add("btn-danger");
// buttonDanger.textContent = 'Voir la description';
// divButton.appendChild(buttonDanger);
}

