/* // EXAMINE LOBJET DOCUMENT //

//console.dir(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent = 'Bonjour'
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

// GETELEMENTBYID //

console.log(document.getElementById("header-title"));
var headerTitle = document.getElementById("header-title");
console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = "Aurevoir"
console.log(headerTitle.textContent);
// Inner html prend en compte le style (ici pr le display:none la console n'affiche rien)
console.log(headerTitle.innerText);
headerTitle.innerHTML = "<h3>Hello</h3>";
headerTitle.style.borderBottom = "solid 3px black";
var header = document.getElementById("main-header");
header.style.borderBottom = "solid 3px red";

// GETELEMENTSBYCLASSNAME //
/* var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for(let i = 0 ; i < items.length ; i++){
    items[i].style.backgroundColor = 'grey';
} */

// GETELEMENTSBYTAGNAME //
/* var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

for(let i = 0 ; i < li.length ; i++){
    li[i].style.backgroundColor = 'grey';
}
 */

// QUERYSELECTOR //
/*
// Permet de choisir tout ce que l'on veut (class, id, css..)
var header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4pxx yellow";

var input = document.querySelector("input");
input.value = "Attrape seulement le premier input";

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

// Ne sélectionne que le premier
var item = document.querySelector(".list-group-item");
item.style.color = "red";

// Pour sélectionner le dernier
var lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "blue";

// Pour sélectionner celui que l'on veut
var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "pink";

// QUERYSELECTORALL //
/* var titles = document.querySelectorAll(".title");
console.log(titles); */
/*
var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");
for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "lightblue";
  even[i].style.backgroundColor = "lightgray";
}

// TRAVERSING THE DOM //
var itemList = document.querySelector("#items");
// parentNode : va nous donner le parent (on peut l'utiliser comme sélecteur)
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "green";
console.log(itemList.parentNode.parentNode.parentNode);

// parentElement (pareil que parentNode)
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "green";
console.log(itemList.parentElement.parentElement.parentElement);

// childNodes (à éviter)
console.log(itemList.childNodes);

// childrens
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";

// FirstChild (useless car prend en compte les retour à la ligne)
console.log(itemList.firstChild);

// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello 1";

// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello 4";

// nextSibling (useless)
console.log(itemList.nextSibling);

// nextElementSibling
console.log(itemList.nextElementSibling);

// previousSibling (useless)
console.log(itemList.previousSibling);

// previousElementSibling
console.log(itemList.previousElementSibling);

// createElement //

// Créer un div
var newDiv = document.createElement("div");

// Ajouter une classe
newDiv.className = "nomClassDiv";

// Ajouter un id
newDiv.id = "idDiv";

// Ajouter un attr
newDiv.setAttribute("title", "hello div");

// Ajouter du texte avec text node
var newDivText = document.createTextNode("Hello bonjour");

// Ajouter au div
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1);
newDiv.style.fontSize = "40px";
console.log(newDiv);
*/

/* var button = document
  .getElementById("button")
  .addEventListener("click", buttonClick);

function buttonClick(e) {
  //console.log("Button clicked")
  /* document.getElementById("header-title").textContent='Coucou';
  document.querySelector("#main").style.backgroundColor='grey'; */
//console.log(e);
/* 
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.className);
  console.log(e.target.classList);
  var output = document.getElementById("output");
  output.innerHTML = "<h3>Salut</h3>";

  console.log(e.type);
  // Avoir la position de la souris dans le navigateur
  console.log(e.clientX);
  console.log(e.clientY);

  // Si on veut depuis l'endroit du click par exemple
  console.log(e.offsetX);
  console.log(e.offsetY);

  // Si on press une touche renvoie un bool 
  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey); */

var button = document.getElementById("button");
var box = document.getElementById("box");
//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup',runEvent);

/* box.addEventListener("mouseenter", runEvent);
box.addEventListener("mouseleave", runEvent);
box.addEventListener("mouseover", runEvent);
box.addEventListener("mouseout", runEvent); */

//box.addEventListener('mousemove',runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');


/* itemInput = addEventListener('keydown',runEvent);
itemInput = addEventListener('keyup',runEvent); */
//itemInput = addEventListener('keypress',runEvent);
//itemInput = addEventListener('focus',runEvent);
//itemInput = addEventListener('blur',runEvent);
//itemInput = addEventListener('cut',runEvent);
//itemInput = addEventListener('paste',runEvent);
//itemInput = addEventListener('input',runEvent);

//select.addEventListener('change', runEvent);
//select.addEventListener('input', runEvent);

form.addEventListener("submit",runEvent);

function runEvent(evt) {
  evt.preventDefault();
  console.log("EVENT TYPE: " + evt.type);
  // console.log(evt.target.value);
  //document.body.style.display = 'none';
  
  //document.getElementById('output').innerHTML = '<h3>'+evt.target.value+'</h3>'; 

  //output.innerHTML = '<h3>MouseX: '+evt.offsetX+'</h3><h3>MouseY: '+evt.offsetY+'</h3>'

  //document.body.style.backgroundColor = "rgb("+evt.offsetX+","+evt.offsetY+",40)";
}
