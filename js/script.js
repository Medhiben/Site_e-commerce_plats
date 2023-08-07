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

//recuperer par un fetch les données du dossier plats.json
const PLATS_URL ='./images/plats.json';
const tableauDish = [];


fetch(PLATS_URL)
.then(data => data)
.then(data => data.json())
.then(data => {
    console.log(data)
    //créer une instance de Dish pour chaque objet plats à l'aide d'une boucle for pour tous les cibler

for(let dish of data){
 const newDish = new Dish(dish.id, dish.name, dish.description, dish.price, dish.category, dish.image);
 tableauDish.push(newDish);
}
for(let dish of tableauDish){
   displayPlats(dish);
}
console.log(tableauDish);

})

//creer les elements html en javascript , Récupérer l' id "menu-list" et insérer un noeud "li" qui représente un plat 
 function displayPlats(plats){
let ul = document.getElementById("menu-list");



// créer une boucle for pour création et ajout d'element html en js
// for(let plat of plats){ }


//insertion de l'élément li
let productLi = document.createElement('li');
productLi.classList.add('menu-item');
ul.appendChild(productLi);


// creation de l'element div 
const divContenair = document.createElement('div');
productLi.appendChild(divContenair)

// creation de l'element img
const image = document.createElement('img');
image.src = plats.image;
image.alt = plats.description;
divContenair.appendChild(image);


// creation de l'element div avec la class "menu-item-description"
const divMenuItem = document.createElement('div');
divMenuItem.classList.add("menu-item-description");
divContenair.appendChild(divMenuItem);

//creation du h3
const h3 = document.createElement('h3');
h3.textContent = plats.name;
divMenuItem.appendChild(h3)


//creation du p
const p = document.createElement('p');
p.textContent = plats.description;
divMenuItem.appendChild(p);

//creation d'une div
const divmenuItemprice = document.createElement('div');
divmenuItemprice.classList.add("menu-item-price");
divmenuItemprice.textContent = plats.price + '€';
divContenair.appendChild(divmenuItemprice);

//creation d'une div
const divButton = document.createElement('div');
divButton.classList.add("button_group");
productLi.appendChild(divButton);

//creation de bouton avec une class et un texte 
const buttonSuccess = document.createElement('button');
buttonSuccess.classList.add("btn");
buttonSuccess.classList.add("btn-success");
buttonSuccess.textContent = 'ajouter au panier';
divButton.appendChild(buttonSuccess);

//creation de bouton avec une class et un texte 
const buttonDanger = document.createElement('button');
buttonDanger.classList.add("btn");
buttonDanger.classList.add("btn-danger");
buttonDanger.textContent = 'Voir la description';
divButton.appendChild(buttonDanger);

buttonDanger.addEventListener("click", (event) => {
// If your expected result is "http://foo.bar/?x=1&y=2&x=42"


    window.location.href="html/description.html?id="+ plats.id;
    

});
}












