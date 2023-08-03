 class Dish {
    constructor(name,description, price, category) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }
}

//recuperer par un fetch les données du dossier plats.json
const PLATS_URL ='./js/plats.json';
const tableauDish = [];

fetch(PLATS_URL)
.then(data => data)
.then(data => data.json())
.then(data => {
    console.log(data)
    //créer une instance de Dish pour chaque objet plats à l'aide d'une boucle for pour tous les cibler

for(let dish of data){
 const newDish = new Dish(dish.name,dish.description, dish.price, dish.category);
 tableauDish.push(newDish);
}
console.log(tableauDish);

})

//creer les elements html en javascript , Récupérer l' id "menu-list" et insérer un noeud "li" qui représente un plat 
 function Plats(plats){
let ul = document.getElementById("menu-list");


// créer une boucle for pour création et ajout d'element html en js
// for(let plat of plats){ }


//insertion de l'élément li
let productLi = document.createElement('li');
ul.appendChild(productLi);


// creation de l'element div 
const divContenair = document.createElement('div');
productLi.appendChild(divContenair)

// creation de l'element img
const image = document.createElement('img');
img.src = 'chemin/vers/image2.jpg';
img.alt = 'Image du plat 2';
divContenair.appendChild(image);


// creation de l'element div avec la class "menu-item-description"
const divMenuItem = document.createElement('div');
divMenuItem.classList.add("menu-item-description");
divContenair.appendChild(divMenuItem);

//creation du h3
const h3 = document.createElement('h3');
h3.textContent = 'Nom du plat 2';
divMenuItem.appendChild(h3)


//creation du p
const p = document.createElement('p');
p.textContent = 'Description du plat';
h3.appendChild(p);

//creation d'une div
const divmenuItemprice = document.createElement('div');
divmenuItemprice.classList.add("menu-item-price");
divmenuItemprice.textContent = 'Prix du plat 2';
divContenair.appendChild(divmenuItemprice);

//creation d'une div
const divButton = document.createElement('div');
divButton.classList.add("button_group");
productLi.appendChild(divButton);

//creation de bouton avec une class et un texte 
const buttonSuccess = document.createElement('button');
buttonSuccess.classList.add("btn btn success");
buttonSuccess.textContent = 'ajouter au panier';
divButton.appendChild(buttonSuccess);

//creation de bouton avec une class et un texte 
const buttonDanger = document.createElement('button');
buttonSuccess.classList.add("btn btn danger");
buttonDanger.textContent = 'Voir la description';
divButton.appendChild(buttonDanger);















}












